import React from 'react';
import { addPost, getPosts, deletePost } from '../actions/postActions';
import PostsList from '../components/PostsList';
import { connect } from 'react-redux';

import AddPost from '../components/AddPost';
import {Orbitals} from 'react-spinners-css';
import $ from 'jquery';

class Posts extends React.Component {

    componentWillUnmount() {
        $('body').off('submit');
        $('body').off('click');
    }

    componentDidMount() {
        this.props.dispatch(getPosts());

        $('body').on('submit', (event) => {
            event.preventDefault();

            const $userId = $('#idUser');
            const $postTitle = $('#postTitle');
            const $postBody = $('#postBody');

            const posts = addPost($postTitle.val(), $userId.val(), $postBody.val());
            this.props.dispatch(posts);

            $userId.val('');
            $postTitle.val('');
            $postBody.val('');
        });

        $('body').on('click', 'a.post_del', (event) => {
            event.preventDefault();
            let idPost = $(event.currentTarget).attr('data-id');
            this.props.dispatch(deletePost(idPost));
        });
    }

    render() {

        if (this.props.is_loading) {
            return <Orbitals color="#be97e8"/>
        }

        return (
            <div>
                <AddPost />
                <PostsList posts={this.props.posts} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        is_loading: state.posts.is_loading
    }
}

export default connect(mapStateToProps)(Posts); 
