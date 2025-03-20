import { useState } from "react";
import { NumericFormat } from "react-number-format";

interface InputFieldProps {
  setInputValue: (value: number | null) => void;
  id: string;
  ariaLabelledby?: string;
  error: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  setInputValue,
  id,
  ariaLabelledby,
  error,
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <NumericFormat
        id={id}
        value={value}
        displayType="input"
        thousandSeparator=" "
        suffix=" ₽"
        allowNegative={false}
        allowLeadingZeros={false}
        decimalScale={0}
        valueIsNumericString={true}
        onValueChange={(values) => {
          setValue(values.value || "");
          setInputValue(values.floatValue ?? null);
        }}
        className={`input-field ${error ? "error" : ""}`}
        placeholder="Введите данные"
        aria-labelledby={ariaLabelledby}
      />
    </div>
  );
};

export default InputField;
