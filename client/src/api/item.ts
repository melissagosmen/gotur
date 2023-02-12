import {Item} from "../utils/types";

export const getItems = async () => {
    return [
        {
            title: 'string',
            description: 'string',
            tag: ['tag1', 'tag2'],
            images: ['img1'],
            location: 'string',
            created: 'string'
        },
        {
            title: 'string',
            description: 'string',
            tag: ['tag1', 'tag2'],
            images: ['img1'],
            location: 'string',
            created: 'string'
        },
        {
            title: 'string',
            description: 'string',
            tag: ['tag1', 'tag2'],
            images: ['img1'],
            location: 'string',
            created: 'string'
        }
    ] as Array<Item>
}