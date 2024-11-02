import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/locationController.js';
import multer from 'multer';
const locationRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

locationRouter.get("/list",listFood);
locationRouter.post("/add",upload.single('image'),addFood);
locationRouter.post("/remove",removeFood);

export default locationRouter;