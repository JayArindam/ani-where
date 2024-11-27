import queryModel from "../models/queryModel.js";

const sendQuery = async (req, res) => {
   
    const query = new queryModel({
        name: req.body.name,
        mail: req.body.mail,
    })
    try {
        await query.save();
        res.json({ success: true, message: "Query Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
};

export { sendQuery };
