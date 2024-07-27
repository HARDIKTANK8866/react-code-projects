import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`bg-cyan-500 text-white rounded-md px-2 py-1 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}