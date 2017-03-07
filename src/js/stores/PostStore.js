import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class PostStore extends EventEmitter {
    constructor() {
        super();
        this.posts = [
            {id: 1, text: 'first post'},
            {id: 2, text: 'second post'}
        ]
    }

    createPost(text){
        let post = {
            id: new Date(),
            text
        };
        this.posts.push(post);
        this.emit('change');
    }

    getPosts(){
        return this.posts;
    }

    handleActions(action){
        if(action.type === 'CREATE_POST'){
            this.createPost(action.text);
        }
    }

}
let postStore = new PostStore;
dispatcher.register(postStore.handleActions.bind(postStore));
export default postStore;