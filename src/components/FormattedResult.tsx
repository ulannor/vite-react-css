import { NumericFormat } from "react-number-format";
import calculateResult from "../utils/calculatePayment";

interface FormattedResultProps {
  amount: number;
  months: number;
  paymentPeriod: number;
}

const FormattedResult: React.FC<FormattedResultProps> = ({
  amount,
  months,
  paymentPeriod,
}) => {
  let result: number | null = null;

  try {
    result = calculateResult(amount, months, paymentPeriod);
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      {result !== null ? (
        <NumericFormat
          value={result}
          displayType="text"
          thousandSeparator=" "
          suffix=" рублей"
          decimalScale={2}
          className="result"
        />
      ) : (
        <p>Ошибка расчета</p>
      )}
    </div>
  );
};

export default FormattedResult;
