import styles from "./TransactionsHistory.module.css";

const TransactionsHistory = ({ items }) => {
  return (
    <table className={styles.transaction__history}>
      <thead className={styles.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.body}>
        {items.map((item) => (
          <tr className={styles.row}>
            <td key={item.id}>{item.type}</td>
            <td key={item.id}>{item.amount}</td>
            <td key={item.id}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsHistory;
