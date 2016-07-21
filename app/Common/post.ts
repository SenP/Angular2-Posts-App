
import {Comment} from './comment.model'

export class Post {
    id: number;
    userId: number;
    title: string;
    body: string;
    comments: Comment[];

    constructor() {
        this.comments = [];
    }
}