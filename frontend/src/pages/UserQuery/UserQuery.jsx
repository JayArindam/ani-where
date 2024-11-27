import React, { useState } from "react";
import axios from "axios";
import "./UserQuery.css";
import { toast } from "react-toastify";

const url = "http://localhost:4000";

const UserQuery = () => {
    const [data, setData] = useState({
        name: "",
        mail: "",
        query: ""
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${url}/api/location/query/squery`, data); // Send JSON object directly
            if (response.data.success) {
                toast.success(response.data.message);
                setData({
                    name: "",
                    mail: "",
                    query: ""
                });
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.error(error);
        }
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="query">
            <form className="flex-col" onSubmit={onSubmitHandler}>
                <div className="query-product-name flex-col">
                    <p>User Name</p>
                    <input
                        name="name"
                        onChange={onChangeHandler}
                        value={data.name}
                        type="text"
                        placeholder="Enter your name here"
                        required
                    />
                </div>

                <div className="query-product-name flex-col">
                    <p>User Mail</p>
                    <input
                        name="mail" // Correct field name
                        onChange={onChangeHandler}
                        value={data.mail}
                        type="email"
                        placeholder="Enter your mail address here"
                        required
                    />
                </div>

                <div className="query-product-description flex-col">
                    <p>Query Description</p>
                    <textarea
                        name="query" // Correct field name
                        onChange={onChangeHandler}
                        value={data.query}
                        rows={6}
                        placeholder="Write your query here"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="query-btn">
                    SUBMIT QUERY
                </button>
            </form>
        </div>
    );
};

export default UserQuery;
