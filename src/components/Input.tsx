import { useState } from "react";
import { CheckCircleIcon, CircleAlert } from "lucide-react";

interface InputProps {
    placeholder: string;
    type: "text" | "password" | "email";
    initialValue?: string;
    onChange: (value: string) => void;
    label: string;
    isDisabled?: boolean;
    status?: "normal" | "hover" | "valid" | "error";
    errorMessage?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

function Input({ placeholder, initialValue = "", type, onChange, label, isDisabled = false, status = "normal", errorMessage = "", onMouseEnter, onMouseLeave }: InputProps) {
    const [value, setValue] = useState(initialValue);

    let borderColor = "border-black";
    let icon = null;

    if (status === "valid") {
        borderColor = "border-teal-400";
        icon = <CheckCircleIcon className="text-teal-400 w-5 h-5" />;
    }
    if (status === "error") {
        borderColor = "border-red-500";
        icon = <CircleAlert className="text-red-500 w-5 h-5" />;
    }

    return (
        <div className="flex flex-col">
            <label className="text-primary font-header text-md font-medium mb-1">{label}</label>
            <div
                className={`flex items-center border-2 rounded-md p-2 ${borderColor} bg-blanco`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                        onChange(event.target.value);
                    }}
                    disabled={isDisabled}
                    className="w-full font-body text-negro text-md font-medium focus:outline-none"
                />
                {icon && <div className="ml-2">{icon}</div>}
            </div>
            {status === "error" && <span className="text-red-500 mt-1">{errorMessage}</span>}
        </div>
    );
}

export default Input;
