import React from 'react'
import PostItem from './PostItem'

export default class PostsList extends React.Component {
    render() {
        if (!this.props.posts.length) {
            return null;
        }

        let posts = this.props.posts.map((post, index) => {
            return <PostItem key={index} {...post} /> 
        });

        return (
            <>
                <h1 className="text-center grid__item_width_full main-content__header">Posts</h1>
                <section className="grid-main">
                    {posts}
                </section>
            </>
        );
    }
}