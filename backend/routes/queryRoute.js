import express from 'express'
import { sendQuery } from '../controllers/queryController.js';

const queryRouter = express.Router();

queryRouter.get("/squery",sendQuery);

export default queryRouter;