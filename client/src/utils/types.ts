export type Item = {
    _id: string;
    title: string;
    description: string;
    tag: Array<string> | undefined;
    images: Array<string>;
    publisher: string;
    comments: Array<string> | undefined;
    location: string;
    createdAt: string;
    updatedAt: string;
}