import React from 'react'
import {Orbitals} from 'react-spinners-css'
import PostItem from './PostItem'

export default class PostsList extends React.Component {
    render() {
        if (!this.props.posts.length) {
            return (
                <Orbitals color="#be97e8"/>
            )
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