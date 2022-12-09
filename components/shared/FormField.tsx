interface FormProps {
  label: string;
  type: string;
  placeholder: string;
}

export default function FormField({ label, type, placeholder }: FormProps) {
  return (
    <div className={label === "Your Address" ? "md:col-span-2" : ""}>
      <label htmlFor="name" className="mb-2 block text-xs font-bold">
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded-md border border-gray-200 p-4 text-xs font-semibold placeholder:text-xs focus:border-accent focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
