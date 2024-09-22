import styles from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  let classname = clsx(styles.red);
  if (isOnline) {
    classname = clsx(styles.green);
  }
  return (
    <div className={styles.list_item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.list_item_name}>{name}</p>
      <p className={classname}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
