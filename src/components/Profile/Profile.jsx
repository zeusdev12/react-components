import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = props => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={props.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{props.username}</p>
        <p className={css.tag}>@{props.tag}</p>
        <p className={css.location}>{props.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_item}>
          <span className={css.label}>Followers </span>
          <span className={css.quantity}>{props.followers}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Views </span>
          <span className={css.quantity}>{props.views}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Likes </span>
          <span className={css.quantity}>{props.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
