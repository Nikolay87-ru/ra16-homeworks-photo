import type { FC } from 'react';
import { useState } from 'react';
import ClickBox from './components/ClickBox';
import type { ImageType } from './types/ImageType';
import './index.css';

const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', (evt) => {
      resolve(evt.currentTarget?.result as string);
    });

    fileReader.addEventListener('error', (evt) => {
      reject(new Error('File reading error'));
    });

    fileReader.readAsDataURL(file);
  });
};

const App: FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);

  const handleSelect = async (files: File[]) => {
    try {
      const urls = await Promise.all(files.map(fileToDataUrl));
      const newImages = urls.map((url, index) => ({
        id: Date.now() + index,
        img: url,
      }));
      setImages((prev) => [...prev, ...newImages]);
    } catch (error) {
      console.error('Error loading files:', error);
    }
  };


  return (
    <div className="app">
      <div className="container">
        <ClickBox onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default App;
