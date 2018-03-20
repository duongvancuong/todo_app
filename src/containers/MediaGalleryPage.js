import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMediaAction } from '../actions/mediaActions';
// import { flickrImages, shutterStockVideos } from '../api/api';

// MediaGalleryPage Component
class MediaGalleryPage extends Component {

 // We want to get images and videos from the API right after our component renders.
 componentDidMount() {
    // flickrImages('rain').then(images => console.log(images, 'Images'));
    // shutterStockVideos('rain').then(videos => console.log(videos,'Videos'));
    this.props.dispatch(searchMediaAction('rain'));
  }

  render() {
  // TODO: Render videos and images here
    console.log(this.props.images, 'Images');
    console.log(this.props.videos, 'Videos');
    console.log(this.props.selecteImage, 'SelectedImage');
    console.log(this.props.selectedVideo, 'SelectedVideo');
    return (<div> </div>)
  }
}

MediaGalleryPage.propTypes = {

};

const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
});

export default connect(mapStateToProps)(MediaGalleryPage);
