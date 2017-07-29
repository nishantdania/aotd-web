import React, {Component} from 'react';
import cx from 'classnames';
import styles from './photoGrid.css'; 
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

class PhotoGrid extends Component {

  render () {
    const { images } = this.props;

    if(!images) {
      return null;
    }

    return <div className={cx(styles['image-list'])}>
      <Masonry
      className={cx(styles['masonry'])}   
      >
        {images.map((image, index) => 
          <div key={index} className={cx(styles['image-item'])}>
            <img
              className={cx(styles['image'])} 
              key={index}
              src={image.url}
            />
            {image.username ?
              <Link 
                to={`@${image.username}`}
                className={cx(styles['user-details'])}>
                  {`@${image.username}`}
              </Link>
            : null}
          </div>
        )}
      </Masonry>
    </div> 
  }
}

export default PhotoGrid;
