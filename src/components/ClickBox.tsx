import type { FC, ChangeEvent } from 'react';

interface Props {
  onSelect: (files: File[]) => void;
}

const ClickBox: FC<Props> = ({ onSelect }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onSelect(Array.from(e.target.files));
    }
  };

  return (
    <div className="click-box">
      <input
        className="click-box__input"
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput" className="click-box__label">
        Click to select
      </label>
    </div>
  );
};

export default ClickBox;