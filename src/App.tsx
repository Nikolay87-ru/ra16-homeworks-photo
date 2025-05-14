import type { FC } from 'react';
import { useState } from 'react';
import ClickBox from './components/ClickBox';
import type { ImageType } from './types/ImageType';
import './index.css';

const fileToDataUrl = file => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
  
    fileReader.addEventListener('load', evt => {
      resolve(evt.currentTarget.result);
    });
    
    fileReader.addEventListener('error', evt => {
      reject(new Error(evt.currentTarget.error));
    });
    
    fileReader.readAsDataURL(file);
  });
}

const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
}

const App: FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);

  return (
    <div className="app">
      <div className="container">
      <ClickBox images={images} />
      </div>
    </div>
  );
};

export default App;
