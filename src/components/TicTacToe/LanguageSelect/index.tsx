import React from 'react';
import "./languageSelect.css"
interface LanguageSelectProps {
  value: string;
  onChange: (language: string) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ value, onChange }) => {
  return (
    <div className='languageSelect'>
      <label>
        Language:&nbsp;
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
          {/* Add more options as needed */}
        </select>
      </label>
    </div>
  );
};

export default LanguageSelect;
