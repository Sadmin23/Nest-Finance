import { ErrorMessage, Field, FieldProps } from 'formik';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, name, type, placeholder }) => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-black"
        >
          {label}
        </label>
        <Field name={name}>
          {({ field }: FieldProps) => (
            <input
              type={type ? type : 'text'}
              id={name}
              {...field}
              className="bg-gray-6 bg-opacity-10 border border-gray-4 text-black placeholder-brand text-sm rounded-lg outline-none focus:ring-brand focus:border-brand block w-full p-2.5"
              placeholder={placeholder ? placeholder : ''}
            />
          )}
        </Field>
        <div className="mt-2 text-sm text-red font-medium">
          <ErrorMessage name={name} />
        </div>
      </div>
    </div>
  );
};

export default Input;
