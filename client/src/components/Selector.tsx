import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

type SelectorTypes = {
    options: string[];
    comp: string;
    updateState: (id: string) => void;
};

const Selector = ({ options, comp, updateState }: SelectorTypes) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [entries, setEntries] = useState(options);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <div className="w-72 font-medium ">
            <div
                onClick={() => setOpen(!open)}
                className={`bg-white w-full p-2 flex items-center justify-between rounded text-xs ${
                    !selected && "text-gray-700"
                }`}
            >
                {selected
                    ? selected?.length > 25
                        ? selected?.substring(0, 25) + "..."
                        : selected
                    : `Select ${comp}`}
                <BiChevronDown
                    size={20}
                    className={`${open && "rotate-180"}`}
                />
            </div>
            <ul
                className={`bg-white mt-2 overflow-y-auto ${
                    open ? "max-h-60" : "max-h-0"
                } `}
            >
                {entries.map((entry) => (
                    <li
                        key={entry}
                        className={`p-2 text-sm hover:bg-sky-600 hover:text-orange block
                ${
                    entry.toLowerCase() === selected?.toLowerCase() &&
                    "bg-sky-600 text-orange"
                }
                ${
                    entry.toLowerCase().startsWith(inputValue)
                        ? "block"
                        : "hidden"
                }`}
                        onClick={() => {
                            if (
                                entry.toLowerCase() !== selected.toLowerCase()
                            ) {
                                updateState(entry);
                                setSelected(entry);
                                setOpen(false);
                                setInputValue("");
                            }
                        }}
                    >
                        {entry}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Selector;
