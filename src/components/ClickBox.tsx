import type { FC } from 'react';
import { useRef } from 'react';

interface Props {
  onSelect: (files: File[]) => void;
}

const ClickBox: FC<Props> = ({ onSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onSelect(Array.from(e.target.files));
      e.target.value = '';
    }
  };

  return (
    <>
      <div className="click-box" onClick={handleClick}>
        <div className="click-box__label">Click to select</div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default ClickBox;
