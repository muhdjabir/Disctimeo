const fixedInputClass =
    "rounded-md  relative block w-1/5 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

export default function Input({
    handleChange,
    labelText,
    labelFor,
    id,
    name,
    type,
    placeholder,
}: {
    handleChange: any;
    labelText: string;
    labelFor: string;
    id: string;
    name: string;
    type: string;
    placeholder: string;
}) {
    return (
        <div className="my-5">
            <label htmlFor={labelFor} className="sr-only">
                {labelText}
            </label>
            <input
                onChange={handleChange}
                id={id}
                name={name}
                type={type}
                className={fixedInputClass}
                placeholder={placeholder}
            />
        </div>
    );
}
