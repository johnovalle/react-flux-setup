import dispatcher from '../dispatcher';

export function createPost(text){
    dispatcher.dispatch({
        type: 'CREATE_POST',
        text
    });
}