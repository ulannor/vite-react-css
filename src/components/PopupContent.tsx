import { useState } from "react";
import InputField from "./InputField";
import MonthsSelect from "./MonthsSelect";
import FormattedResult from "./FormattedResult";
import Button from "./Button";

type PopupContentProps = {
  onClose: () => void;
};

const PopupContent: React.FC<PopupContentProps> = ({ onClose }) => {
  const [inputValue, setInputValue] = useState<number | null>(null);
  const [inputError, setInputError] = useState<boolean>(false);
  const [months, setMonths] = useState<number>(12);
  const [paymentPeriod, setPaymentPeriod] = useState<number>(1);

  const handleInputChange = (value: number | null) => {
    setInputValue(value);

    if (value !== null) {
      setInputError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue === null) {
      setInputError(true);
      return;
    }

    setInputError(false);
    console.log("Submitted Value:", inputValue);
    console.log("Months:", months);
  };

  return (
    <div className="popup-content">
      <div className="popup-header">
        <h3>Платежи по кредиту</h3>
        <p className="muted">
          Введите сумму кредита и выберите срок, на который вы хотите его
          оформить. Мы автоматически рассчитаем для вас ежемесячный платеж,
          чтобы вы могли лучше спланировать свои финансы.
        </p>
      </div>

      <div className="input-months-wrapper">
        <form className="input-form" onSubmit={handleSubmit}>
          <h4 id="input-label">Ваша сумма кредита</h4>
          <div>
            <div className="input-wrapper">
              <InputField
                setInputValue={handleInputChange}
                id="input"
                aria-labelledby="input-label"
                error={inputError}
              />
              <span className={`input-error ${inputError ? "visible" : ""}`}>
                Поле обязательно для заполнения
              </span>
            </div>
            <Button type="submit" variant="text">
              Рассчитать
            </Button>
          </div>
        </form>
        <div className="months-select-wrapper">
          <h4>Количество месяцев?</h4>
          <MonthsSelect
            setMonths={setMonths}
            months={months}
            variant="number"
            options={[12, 24, 36, 48]}
          />
        </div>
      </div>

      {inputValue !== null && (
        <div className="total-payment-wrapper">
          <h4>Итого ваш платеж по кредиту:</h4>
          <MonthsSelect
            setMonths={setPaymentPeriod}
            months={paymentPeriod}
            variant="text"
            options={[12, 1]}
          />
          <div className="payment-result">
            <FormattedResult
              amount={inputValue}
              months={months}
              paymentPeriod={paymentPeriod}
            />
          </div>
        </div>
      )}

      <div className="end-button">
        <Button
          onClick={onClose}
          fullWidth
          variant="shadow"
          disabled={inputValue === null}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default PopupContent;
