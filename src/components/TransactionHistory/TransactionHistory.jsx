import style from './TransactionHistory.module.css';

const TransactionHistory = props => {
  const { items } = props;

  return (
    <table className={style.table}>
      <thead>
        <tr className={style.table_list}>
          <th className={style.table_list_item}>Type</th>
          <th className={style.table_list_item}>Amount</th>
          <th className={style.table_list_item}>Currency</th>
        </tr>
      </thead>

      {items.map(item => (
        <tbody key={item.id} className={style.abc}>
          <tr>
            <td className={style.abc}>{item.type}</td>
            <td className={style.abc}>{item.amount}</td>
            <td className={style.abc}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TransactionHistory;
