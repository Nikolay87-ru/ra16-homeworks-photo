import type { FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import type { ImageType } from '../types/ImageType';

interface Props {
  images: ImageType[];
  onRemove: (id: number) => void;
}

const ImagePreview: FC<Props> = ({ images, onRemove }) => {
  return (
    <div className="image-preview">
      {images.map((image) => (
        <div key={image.id} className="image-preview__item">
          <img src={image.img} alt={`Preview ${image.id}`} className="image-preview__img" />
          <button 
            className="image-preview__remove" 
            onClick={() => onRemove(image.id)}
          >
            <FaTimes />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImagePreview;