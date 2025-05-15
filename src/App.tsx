import type { FC } from 'react';
import { useState } from 'react';
import ClickBox from './components/ClickBox';
import ImagePreview from './components/ImagePreview';
import type { ImageType } from './types/ImageType';
import './index.css';

const App: FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);

  const fileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
  };

  const handleSelect = async (files: File[]) => {
    try {
      const urls = await Promise.all(files.map(fileToDataUrl));
      setImages(prev => [
        ...prev,
        ...urls.map((img, i) => ({ id: Date.now() + i, img }))
      ]);
    } catch (error) {
      console.error('Error loading images:', error);
    }
  };

  const handleRemove = (id: number) => {
    setImages(prev => prev.filter(image => image.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <ClickBox onSelect={handleSelect} />
        <ImagePreview images={images} onRemove={handleRemove} />
      </div>
    </div>
  );
};

export default App;
