import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

import {
  searchMediaAction,
  selectImageAction,
  selectVideoAction
} from '../../actions/mediaActions';
import PhotoPage from './components/PhotoPage';
import VideoPage from './components/VideoPage';

import {
  makeGetImagesSelector,
  makeGetVideosSelector,
  makeSelectImageSelector,
  makeSelectVideoSelector,
} from '../../selector/LibrarySelector';

// MediaGalleryPage Component
class MediaGalleryPage extends Component {
  constructor () {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
  }

 // We want to get images and videos from the API right after our component renders.
  componentDidMount() {
    this.props.dispatch(searchMediaAction('hacker'));
  }

  // Dispatches *selectImageAction* when any image is clicked
  handleSelectImage(selectedImage) {
    this.props.dispatch(selectImageAction(selectedImage));
  }

  // Dispatches *selectvideoAction* when any video is clicked
  handleSelectVideo(selectedVideo) {
    this.props.dispatch(selectVideoAction(selectedVideo));
  }

  // Dispatches *searchMediaAction* with query param.
  // We ensure action is dispatched to the store only if query param is provided.
  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = '';
    }
  }

  render() {
    const { images, selectedImage, videos, selectedVideo } = this.props;
    const renderMediaData = () => (
      <div>
        <input
          type="text"
          ref={ref => (this.query = ref)}
        />
        <input
          type="submit"
          className="btn btn-primary"
          value="Search Library"
          onClick={this.handleSearch}
        />
        <div className="row">
          <PhotoPage
            images={images}
            selectedImage={selectedImage}
            onHandleSelectImage={this.handleSelectImage}
          />
          <VideoPage
            videos={videos}
            selectedVideo={selectedVideo}
            onHandleSelectVideo={this.handleSelectVideo}
          />
        </div>
      </div>
    );
    return (
      <div className="container-fluid">
        { images && selectedImage && videos && selectedVideo ? renderMediaData() : 'loading ....'}
      </div>
    );
  }
}
// Define PropTypes
MediaGalleryPage.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

const makeMapStateToProp = () => {
  const mapStateToProps = (state) => {
    return {
      images: makeGetImagesSelector(state)(state),
      videos: makeGetVideosSelector(state)(state),
      selectedImage: makeSelectImageSelector(state)(state),
      selectedVideo: makeSelectVideoSelector(state)(state),
    }
  }
  return mapStateToProps;
}
export default connect(makeMapStateToProp)(MediaGalleryPage);
