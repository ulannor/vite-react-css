import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "text" | "filled" | "shadow";
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
  onClick,
  fullWidth = false,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      className={`btn ${variant} ${fullWidth ? "full-width" : ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
