import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import PostForm from '../components/PostForm';
import { getCategoriesAction } from '../actions/postAction';

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getCategoriesAction());
  }

  _handleSubmit = () => {
    console.log(123)
  }


  render() {
    const { categories } =  this.props;
    return (
      <div>
        { isEmpty(categories) ? 'loading ....' : <PostForm onSubmit={this._handleSubmit} categories={categories} />}
      </div>
    );
  }
}

PostsContainer.propTypes = {
  categories: PropTypes.array.isRequired,
};

PostsContainer.defaultProps = {
  categories: [],
};

const mapStateToProps = (state, ownProps) => {
  const { categories } = state.postReducer;
  return {
    categories,
  }
}

export default connect(mapStateToProps)(PostsContainer);
