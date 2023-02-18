// @ts-ignore
import Joi, {ObjectSchema} from "joi";
import {NextFunction, Request, Response} from "express";
import Logger from "../utils/Logger";
import {IItem} from "../models/Item";

export const ValidateSchema = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            Logger.error(error);
            return res.status(422).json({error});
        }
    }
}

export const Schemas = {
    item: {
        create: Joi.object<IItem>({
            title: Joi.string().required(),
            description: Joi.string().required(),
            images: Joi.array().items(Joi.string()).required(),
            publisher: Joi.string().required(),
            location: Joi.string().required()
        })
    }
}