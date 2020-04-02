import React from 'react';
import Posts from '../components/Posts';

export default class Tennis extends React.Component {

    render() {
        const tennisData = [
            { header: "Полasd", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia at, corrupti ipsum dignissimos quas fuga ea quae ad iste? Distinctio, nulla rerum? Vel natus quos exercitationem! Repellat, autem quasi!" },
            { header: "Поляна дяди Славы", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis officiis sunt. Iure, aut dolore delectus doloribus reiciendis inventore ab, quam magni enim dolorum dolorem possimus cumque officiis ut similique." },
            { header: "Полюшко", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, tempora similique. Nobis praesentium eos dicta sint obcaecati ab libero maxime at minima odit, excepturi doloremque ipsum consequuntur, fugiat assumenda esse?" },
            { header: "Поле 4", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum vero magnam voluptas labore doloribus quibusdam aspernatur tenetur. Fugit, perspiciatis eum nihil deleniti maxime odio quis, consequuntur unde, commodi maiores recusandae." },
            { header: "Еще одно поле еще", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae assumenda obcaecati sunt aspernatur consectetur esse sit accusantium qui, labore reiciendis voluptatibus asperiores praesentium quis quos ipsa alias velit eveniet." },
        ];

        return (
            <article className="row center">
                <h1>Tennis posts</h1>
                <Posts items={tennisData} />
            </article>
        );
    }
}