import React from 'react';
import * as PostActions from '../../actions/PostActions';
import Post from './Post';
import PostStore from '../../stores/PostStore';

export default class PostPage extends React.Component {
    constructor(){
        super();
        this.posts = PostStore.getPosts();
        this.getPosts = this.getPosts.bind(this);
    }

    componentWillMount(){
        PostStore.on('change', this.getPosts);
    }

    componentWillUnmount(){
        PostStore.removeEventListener('change', this.getPosts);
    }


    getPosts(){
        this.setState({posts: PostStore.getPosts()});
    }

    createPost(){
        let text = Date.now();
        PostActions.createPost(text);
    }

    processPosts(){
        return this.posts.map((post) => {
            return <Post key={post.id} text={post.text} />
        });
    }
    render(){
        return (
            <div>
                <button onClick={this.createPost.bind(this)}>Create</button>
                {this.processPosts()}
            </div>
        );
    }
}