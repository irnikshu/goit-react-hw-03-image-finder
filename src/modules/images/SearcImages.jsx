import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class SearchImages extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}
export default SearchImages;
