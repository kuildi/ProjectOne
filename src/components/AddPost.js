import React from 'react';
import Button from './Button';

export default class AddPost extends React.Component {
	render() {
		return (
			<>
				<h2 className="main-content__header">Форма для добавления поста</h2>
				<form action="#" id="addPostForm">
					<input type="text" className="form-control" id="idUser" placeholder="New id" />
					<input type="text" className="form-control" id="postTitle" placeholder="New post" />
					<input type="text" className="form-control" id="postBody" placeholder="New post body" />
					<Button class="btn_primary">Добавить пост</Button>
				</form>
			</>
		);
	}
}