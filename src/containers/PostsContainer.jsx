import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/PostForm';

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit = () => {
    console.log(123)
  }

  render() {
    return (
      <div>
        <PostForm onSubmit={this._handleSubmit} />
      </div>
    );
  }
}

PostsContainer.propTypes = {

};

export default PostsContainer;
