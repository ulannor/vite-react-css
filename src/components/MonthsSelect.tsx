import React from "react";

interface MonthsSelectProps {
  months: number;
  setMonths: (value: number) => void;
  variant: "number" | "text";
  options: number[];
}

const MonthsSelect: React.FC<MonthsSelectProps> = ({
  months,
  setMonths,
  variant,
  options,
}) => {
  const getOptionLabel = (option: number): string => {
    if (variant === "number") return option.toString();

    switch (option) {
      case 12:
        return "в год";
      case 1:
        return "в месяц";
      default:
        return `на ${option} месяцев`;
    }
  };

  return (
    <div className="months-select">
      {options.map((option) => (
        <button
          key={option}
          className={`month-btn ${months === option ? "selected" : ""}`}
          onClick={() => setMonths(option)}
          type="button"
        >
          {getOptionLabel(option)}
        </button>
      ))}
    </div>
  );
};

export default MonthsSelect;
