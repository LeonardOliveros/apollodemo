import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Post from './post';

class Posts extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let posts = <div></div>;
		if (this.props.data.posts && this.props.data.posts instanceof Array) {
			posts = {
				<div>
					{this.props.data.posts.map(function(post) {
						return <Post key={post.id} post={post} />;
					})}
				</div>
		}
		return posts;
	}
}

Posts.propTypes = {
	data: PropTypes.shape({
		posts: PropTypes.array
	}).isRequired
};

const allPosts = gql`
	query PostsForDisplay {
		posts {
			id,
			content,
			views
		}
	}
`;

export default PostsContainer = graphql(allPosts, {
	options: { pollInterval: 5000 }
})(Posts);
