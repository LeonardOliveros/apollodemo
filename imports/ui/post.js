import React, { Component, PropTypes } from 'react';

export default class Post extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return {
			<div>{this.props.post.content}</div>
		}
	}
}

Post.propTypes = {
	post: PropTypes.shape({
		content: PropTypes.string
	}).isRequired
};
