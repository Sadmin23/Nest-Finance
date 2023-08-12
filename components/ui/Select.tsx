import { ErrorMessage, Field, FieldProps } from 'formik';

interface SelectProps {
  label: string;
  name: string;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ label, name, children }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-black"
      >
        {label}
      </label>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <select
            id={name}
            {...field}
            className="bg-gray-6 bg-opacity-10 border outline-none border-gray-4 text-black placeholder-brand text-sm rounded-lg focus:ring-brand focus:border-brand block w-full p-2.5"
          >
            {children}
          </select>
        )}
      </Field>
      <p className="mt-2 text-sm text-red font-medium">
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};

export default Select;
