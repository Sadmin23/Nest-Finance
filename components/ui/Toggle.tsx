import { useField, FieldProps } from 'formik';
import React, { useState } from 'react';

interface ToggleProps {
  label: string;
  name: string;
}

const Toggle: React.FC<ToggleProps> = ({ label, name }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [field, meta, helpers] = useField<boolean>(name);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    helpers.setValue(!isChecked);
  };

  return (
    <div className="my-3">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          name={name}
          className="sr-only peer"
          checked={isChecked}
          onChange={handleToggle}
        ></input>
        <div className="w-11 h-6 bg-gray-6 bg-opacity-10 border border-gray-4 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-brand after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
        <span className="ml-3 text-sm font-medium text-black">{label}</span>
      </label>
    </div>
  );
};

export default Toggle;
