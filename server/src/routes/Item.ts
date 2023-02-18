import express from 'express';
import controller from '../controllers/Item';
import {Schemas, ValidateSchema} from "../middleware/VaidateSchema";

const router = express.Router();

router.post('/create', ValidateSchema(Schemas.item.create), controller.createItem);
router.get('/get', controller.getAllItems);
router.get('/get/:itemId', controller.getItem);

export = router;
