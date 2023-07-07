import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ friend }) => {
    return (
      <li className={css.item}>
        {friend.isOnline === true ? (
          <span className={css.status_online}></span>
        ) : (
          <span className={css.status_offline}></span>
        )}
        <img
          className={css.avatar}
          src={friend.avatar}
          alt={friend.name}
        />
        <p className={css.name}>{friend.name}</p>
      </li>
    );
  };

  export const FriendList = ({ friends }) => {
    return (
      <ul className={css.friend_item}>
        {friends.map(friend => {
          return <FriendListItem key={friend.id} friend={friend} />;
        })}
      </ul>
    );
  };

    FriendList.propTypes = {
        friends: PropTypes.array,
        friend: PropTypes.array,
      };