import { useState } from 'react';

const FormGroup = ({
    id,
    type,
    label,
    placeholder,
    value,
    status,
    errorText,
  }: {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    value: (string | React.Dispatch<React.SetStateAction<string>>)[];
    status: boolean;
    errorText: string;
  }) => {
  const [touched, setTouched] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        className="py-2 px-4 border-2"
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value[0] as string}
        onChange={(e) => {
          (value[1] as React.Dispatch<React.SetStateAction<string>>)(e.currentTarget.value);
        }}
        onBlur={() => setTouched(true)}
      />
      {touched && !status && <p className="text-red">{errorText}</p>}
    </div>
  );
};

export default FormGroup;
