import express from "express";
import { AsyncHandler } from '../utils/AsyncHandler.js';
import {addBike, getBikes} from "../collection/bike.collection.js"
import { upload } from '../middleware/multer.middleware.js'

const router = express.Router()

// router.post('/addbike', upload.single('bikeImage'),addBike);
router.route('/addbike').post(upload.single('image'), addBike);

router.route('/getbike').get(getBikes)


export default router