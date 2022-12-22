import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import css from './Transactions.module.css';

export const TransactionsHistory = ({ transactions }) => {
  return (
    <table classNameName={css.transaction_history}>
      <thead>
        <tr key={1}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionsHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
};
