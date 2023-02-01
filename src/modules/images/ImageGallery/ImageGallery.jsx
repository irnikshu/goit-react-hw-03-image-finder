import ImageGalleryItem from './ImageGallery';

import styles from './ImageGallery.module.scss';

const ImageGallery = ({ items }) => {
  return (
    <ul className={styles.gallery}>
      <ImageGalleryItem items={items} />
    </ul>
  );
};
export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};
