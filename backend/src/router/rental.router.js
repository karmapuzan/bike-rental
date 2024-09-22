import express from 'express'
import {createRental,    getAllRentals,    getRentalById,    updateRental,    deleteRental,}  from "../controllers/rental.controller"

const router = express.Router();

// router.post('/rentals', createRental);
router.route('/rentals').post(createRental)      
// router.get('/rentals', getAllRentals);  
router.route('/rentals').get(getAllRentals)         
// router.get('/rentals/:id', getRentalById);
router.route('/rentals/:id').get(getRentalById)       
// router.put('/rentals/:id', updateRental);
router.route('/rentals/:id').patch(updateRental)        
// router.delete('/rentals/:id', deleteRental);
router.route('/rentals/:id').delete(deleteRental)     

export default router