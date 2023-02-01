import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = items => {
  return items.map(({ id, webformatURL, largeImageURL }) => (
    <li key={id} className={styles.galleryItem}>
      <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  ));
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  items: [],
};
