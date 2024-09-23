import express from "express";
import { AsyncHandler } from '../utils/AsyncHandler.js';
import {addBike, getBikes,deleteBike,updateBike, getSingleItem} from "../collection/bike.collection.js"
import { upload } from '../middleware/multer.middleware.js'
import { adminjwt } from "../middleware/authadmin.middleware.js";

const router = express.Router()

// router.post('/addbike', upload.single('bikeImage'),addBike);
router.route('/addbike').post(upload.single('image'), addBike);

router.route('/getbike').get(getBikes)
router.route('/detail/:id').get( getSingleItem)
router.route('/deletebike/:id').delete( deleteBike)
router.route('/updatebike/:id').patch(adminjwt, updateBike)

export default router