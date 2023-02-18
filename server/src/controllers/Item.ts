import {NextFunction, Request, Response} from "express";
import mongoose from 'mongoose';
import Item from '../models/Item';

const createItem = (req: Request, res: Response, next: NextFunction) => {
    const {title, description, tag, images, publisher, comments, location} = req.body;

    const item = new Item({
        _id: new mongoose.Types.ObjectId(),
        title,
        description,
        tag,
        images,
        publisher,
        comments,
        location
    })

    return item
        .save()
        .then(item => res.status(201).json({item}))
        .catch(error => res.status(500).json({error}))
}

const getItem = (req: Request, res: Response, next: NextFunction) => {
    const itemId = req.params.itemId;

    return Item.findById(itemId)
        .then((item) => (item ? res.status(200).json({item}) : res.status(404).json({message: "Not Found"})))
        .catch((error) => res.status(500).json({error}))
}

const getAllItems = (req: Request, res: Response, next: NextFunction) => {

    return Item.find()
        .then(items => res.status(200).json({items}))
        .catch(error => res.status(500).json({error}))
}

export default {createItem, getAllItems, getItem};