import React from 'react'
import PostStore from '../stores/postStore'
import { addPost, getPosts } from '../actions/postActions'
import Button from '../components/Button'
import PostsList from '../components/PostsList'

export default class Posts extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            headerValue: '',
            bodyValue: ''
        }

        this.onPostChange = this.onPostChange.bind(this);
        this.newPost = this.newPost.bind(this);
        this.handleHeaderChange = this.handleHeaderChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
    }

    handleHeaderChange(event) {
        this.setState({ headerValue: event.target.value });
    }
    handleBodyChange(event) {
        this.setState({ bodyValue: event.target.value });
    }

    onPostChange() {
        this.setState({ posts: PostStore.posts });
    }

    newPost() {
        addPost(this.state.headerValue, this.state.bodyValue, 1)
    }

    componentDidMount() {
        getPosts();
        PostStore.on('change', this.onPostChange);
    }

    componentWillUnmount() {
        PostStore.removeListener('change', this.onPostChange);
    }

    render() {
        return (
            <>
                <Button class="btn_primary" text="Add post" onClick={this.newPost} />
                <input type="text" value={this.state.headerValue} onChange={this.handleHeaderChange} />
                <input type="text" value={this.state.bodyValue} onChange={this.handleBodyChange} />
                <PostsList posts={this.state.posts} />
            </>
        );
    }
}