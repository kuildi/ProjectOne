import React from 'react';

export default class AddPost extends React.Component {
	render() {
		return (
				<div>
					<h2>Форма для добавления поста</h2>
					<form action="#" id="addPostForm">
						<div className="form-group">
							<label htmlFor="idUser">Id пользователя</label>
							<input type="text" className="form-control" id="idUser" placeholder="New id"/>
						</div>
						<div className="form-group">
							<label htmlFor="idUser">Заголовок</label>
							<input type="text" className="form-control" id="postTitle" placeholder="New post"/>
						</div>
						<div className="form-group">
							<label htmlFor="idUser">Текст</label>
							<input type="text" className="form-control" id="postBody" placeholder="New post body"/>
						</div>
						<button className="btn btn-primary">Добавить</button>
					</form>
				</div>
			);
	}
}