import React, {Component} from 'react';
import cx from 'classnames';
import styles from './photoGrid.css'; 

class PhotoGrid extends Component {

  render () {
    const { images } = this.props;

    if(!images) {
      return null;
    }

    return <div className={cx(styles['image-list'])}>
      {images.map((image, index) => 
        <img
          className={cx(styles['image'])} 
          key={index}
          src={image}
        />
      )}
    </div> 
  }
}

export default PhotoGrid;
