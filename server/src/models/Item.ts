import mongoose, {Document, Schema} from 'mongoose';

export interface IItem {
    title: string;
    description: string;
    tag: Array<string>;
    images: Array<string>;
    publisher: string;
    comments: Array<string>;
    location: string;
    created: string;
}

export interface IItemModel extends IItem, Document {}

const ItemSchema: Schema = new Schema({
        title: {type: String, required: true},
        description: {type: String, required: true},
        tag: {type: [String], required: false},
        images: {type: [String], required: true},
        publisher: {type: String, required: true},
        comments: {type: [String], required: false},
        location: {type: [String], required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

export default mongoose.model<IItemModel>('Item', ItemSchema);