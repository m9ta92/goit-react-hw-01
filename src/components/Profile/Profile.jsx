import styles from './Profile.module.css';

const Profile = props => {
  const { name, tag, location, image, stats } = props;

  return (
    <div className={styles.user_container}>
      <div className={styles.user}>
        <img className={styles.user_photo} src={image} alt="User avatar" />
        <p className={styles.user_name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stats_item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.stats_item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.stats_item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

//  — ім'я користувача
//  — тег в соціальній мережі без @
//  — місто і країна
//  — посилання на зображення
//  — об'єкт з інформацією про активності
