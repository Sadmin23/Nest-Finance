import { Icon } from '@iconify/react';
import { ErrorMessage, useField } from 'formik';
import React, { useState, ChangeEvent } from 'react';

interface FileInputProps {
  label: string;
  name: string;
  accept: string;
  fileInfo: string;
}

const FileInput: React.FC<FileInputProps> = ({
  label,
  name,
  accept,
  fileInfo,
}) => {
  const [field, meta, helpers] = useField<File | null>({ name });
  const [res, setRes] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setRes(file?.name || null);
    helpers.setValue(file || null);
  };

  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-black"
      >
        {label}
      </label>
      <div className="flex flex-col w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-4 border-dashed rounded-lg cursor-pointer bg-gray-6 bg-opacity-10 hover:bg-brand hover:bg-opacity-10"
        >
          {res ? (
            <div className="flex items-center flex-col">
              <Icon icon="mdi:file-check" className="text-[44px] text-green" />
              <p className="text-xs text-gray-3 mt-2">{res}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Icon
                icon="ion:cloud-upload-outline"
                className="text-[44px] mb-4 text-brand"
              />
              <p className="mb-2 text-sm text-gray-2">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-3">{fileInfo}</p>
            </div>
          )}
          <input
            id="dropzone-file"
            name={name}
            onChange={handleChange}
            accept={accept}
            type="file"
            className="hidden"
          />
        </label>
        <p className="mt-2 text-sm text-red font-medium">
          <ErrorMessage name={name} />
        </p>
      </div>
    </div>
  );
};

export default FileInput;
