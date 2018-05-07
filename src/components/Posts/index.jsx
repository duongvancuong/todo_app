import React, { Component } from 'react';
import "./Post.css";
import Post from "../Post";

export class Posts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

	render({ loading, error, data }) {
    if (loading) return <p>Loaidng Post...</p>;
    if (error) return <p>Error loading Post</p>;
    let posts = data.posts;

		return (
			<div className="Posts">
        {
        	posts.map(post => <Post nickname={post.user.nickname} avatar={post.user.avatar} image={post.image} caption={post.caption} key={post.id}/>)
        }
    </div>
		);
	}
}

export default Posts;
