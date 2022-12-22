import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export const FriendsListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li key={id} className={css.item}>
      {isOnline ? (
        <span className={css.status_online}></span>
      ) : (
        <span className={css.status_offline}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
