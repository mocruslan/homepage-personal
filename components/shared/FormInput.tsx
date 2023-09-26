import React from "react";

type FormInputProps = {
    inputLabel: string;
    labelFor: string;
    inputType: string;
    inputId: string;
    inputName: string;
    placeholderText: string;
    ariaLabelName: string;
}

export default function FormInput(props: FormInputProps): React.JSX.Element {
  return (
    <div className="mb-4">
      <label
        className="mb-1 block font-semibold text-lg text-primary-light"
        htmlFor={props.labelFor}
      >
        {props.inputLabel}
      </label>

      <input
        className="w-full bg-gray-100 rounded-md border border-black/5 p-1"
        type={props.inputType}
        id={props.inputId}
        name={props.inputName}
        placeholder={props.placeholderText}
        aria-label={props.ariaLabelName}
        required
      />
    </div>
  );
}
