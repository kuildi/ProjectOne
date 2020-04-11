import React from 'react';
import Card from '../components/Card';

export default class Gallery extends React.Component {
    
    render() {

        return (
            <article className="grid-container_masonry grid-container_space-v_m">
                <Card class='photo' />
                <Card class='event' />
                <Card class='post' />
                <Card class='photo' />
                <Card class='post' />
                <Card class='photo' />
                <Card class='post' />
                <Card class='post' />
                <Card class='photo' />
                <Card class='post' />
                <Card class='post' />
                <Card class='post' />
            </article>
        )
    }
}