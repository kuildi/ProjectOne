import React from 'react';
import axios from 'axios';
import {Orbitals} from 'react-spinners-css';
import Photo from '../components/Photo';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }

        axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1').
        then((response) => {
            this.setState({photos: response.data})
        })
    }

    render() {
        if (!this.state.photos.length) {
            return (
                <Orbitals color="#be97e8"/>
            )
        }

        let photos = this.state.photos.map((photo, index) => {
            return <Photo key={index} {...photo} />
        })

        return (
            <article className="grid-container_masonry grid-container_space-v_m">
                {photos}
            </article>
        )
    }
}