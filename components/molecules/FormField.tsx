import React from "react";
interface FormProps {
  label: string;
  type: string;
  placeholder: string;
  errors?: { message: string } | undefined;
  [attribute: string]: any;
}

const FormField = React.forwardRef<HTMLInputElement, FormProps>(
  (props, ref) => {
    const { label, type, placeholder, ...other } = props;
    return (
      <div className={label === "Your Address" ? "md:col-span-2" : ""}>
        <div className="flex justify-between">
          <label htmlFor="name" className="mb-2 block text-xs font-bold">
            {label}
          </label>
          {props.errors ? (
            <small className="text-right text-red-500">
              {props.errors.message}
            </small>
          ) : null}
        </div>
        <input
          ref={ref}
          {...other}
          type={type}
          className="w-full rounded-md border border-gray-200 p-4 text-xs font-semibold placeholder:text-xs invalid:border-red-500 focus:border-accent focus:outline-none"
          placeholder={placeholder}
        />
      </div>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;
