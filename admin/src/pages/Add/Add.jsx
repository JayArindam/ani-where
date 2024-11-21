import React, { useState } from 'react';
import './Add.css';
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Shrines", // Default selected option
        url: ""
    });

    const [image, setImage] = useState(false);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        const response = await axios.post(`${url}/api/location/add`, formData);
        if (response.data.success) {
            toast.success(response.data.message);
            setData({
                name: "",
                description: "",
                price: "",
                category: "Shrines", // Reset to default
                url: ""
            });
            setImage(false);
        } else {
            toast.error(response.data.message);
        }
    };

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };

    return (
        <div className="add">
            <form className="flex-col" onSubmit={onSubmitHandler}>
                {/* Image Upload */}
                <div className="add-img-upload flex-col">
                    <p>Upload image</p>
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="Preview" />
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        id="image"
                        hidden
                        required
                    />
                </div>

                {/* Product Name */}
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input
                        name="name"
                        onChange={onChangeHandler}
                        value={data.name || ""}
                        type="text"
                        placeholder="Type here"
                        required
                    />
                </div>

                {/* Product Description */}
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea
                        name="description"
                        onChange={onChangeHandler}
                        value={data.description || ""}
                        rows={6}
                        placeholder="Write content here"
                        required
                    />
                </div>

                {/* Additional URL */}
                <div className="add-product-name flex-col">
                    <p>More Information</p>
                    <input
                        name="url"
                        onChange={onChangeHandler}
                        value={data.url || ""}
                        type="text"
                        placeholder="Add relevant URLs"
                        required
                    />
                </div>

                {/* Category and Price */}
                <div className="add-category-price">
                    {/* Category */}
                    <div className="add-category flex-col">
                        <p>Package category</p>
                        <select
                            name="category"
                            onChange={onChangeHandler}
                            value={data.category} // Controlled value
                        >
                            <option value="Shrines">Shrines</option>
                            <option value="Mountains">Mountains</option>
                            <option value="Cities">Cities</option>
                            <option value="Beaches">Beaches</option>
                            <option value="Wildlife">Wildlife</option>
                            <option value="Hot Springs">Hot Springs</option>
                            <option value="Islands">Islands</option>
                            <option value="Educational">Educational</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input
                            type="number"
                            name="price"
                            onChange={onChangeHandler}
                            value={data.price || ""}
                            placeholder="RS.25"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="add-btn">
                    ADD
                </button>
            </form>
        </div>
    );
};

export default Add;
