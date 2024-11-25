import locationModel from "../models/locationModel.js";
import fs from 'fs'

const listlocation = async (req, res) => {
    try {
        const locations = await locationModel.find({})
        res.json({ success: true, data: locations })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const addlocation = async (req, res) => {

    let image_filename = `${req.file.filename}`

    const location = new locationModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category:req.body.category,
        guide:req.body.guide,
        image: image_filename,
    })
    try {
        await location.save();
        res.json({ success: true, message: "Location Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const removelocation = async (req, res) => {
    try {

        const locations = await locationModel.findById(req.body.id);
        fs.unlink(`uploads/${locations.image}`, () => { })

        await locationModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Location Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listlocation, addlocation, removelocation }