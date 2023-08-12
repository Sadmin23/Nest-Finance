import { useField, FieldProps } from 'formik';
import React from 'react';

interface CheckboxOptionProps {
  value: string;
  title: string;
  caption: string;
  name: string;
  field: FieldProps<any>['field'];
  helpers: {
    setValue: (value: any) => void;
  };
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({
  value,
  title,
  caption,
  name,
  field,
  helpers,
}) => {
  const handleChange = () => {
    const valueIndex = field.value?.indexOf(value);
    if (valueIndex !== undefined && valueIndex > -1) {
      const array = [...(field.value || [])];
      array.splice(valueIndex, 1);
      helpers.setValue(array);
    } else {
      helpers.setValue([...(field.value || []), value]);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        id={value}
        name={name}
        value={value}
        className="hidden peer"
        checked={field.value?.includes(value)}
        onChange={handleChange}
      />
      <label
        htmlFor={value}
        className="peer-checked:border-brand peer-checked:text-brand inline-flex items-center justify-between w-full p-5 text-black bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-brand peer-checked:text-brand hover:text-black hover:bg-brand hover:bg-opacity-10"
      >
        <div className="block">
          <h1 className="font-medium text-[16px]">{title}</h1>
          <h5 className="font-regular text-[12px]">{caption}</h5>
        </div>
        <svg
          aria-hidden="true"
          className="w-6 h-6 ml-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </li>
  );
};

interface AdvanceCheckboxProps {
  label: string;
  name: string;
  checkboxOptions: Array<{
    title: string;
    value: string;
    caption: string;
  }>;
}

const AdvanceCheckbox: React.FC<AdvanceCheckboxProps> = ({
  label,
  name,
  checkboxOptions,
}) => {
  const [field, meta, helpers] = useField<Array<string>>({ name });

  return (
    <div className="mb-2">
      <h3 className="mb-2 text-[15px] font-medium text-dark">{label}</h3>
      <ul className="grid w-full gap-2 grid-cols-1 md:grid-cols-3">
        {checkboxOptions.map((item) => (
          <CheckboxOption
            key={item.value}
            field={field}
            helpers={helpers}
            name={name}
            title={item.title}
            value={item.value}
            caption={item.caption}
          />
        ))}
      </ul>
    </div>
  );
};

export { AdvanceCheckbox, CheckboxOption };
