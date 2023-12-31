import React from 'react';

import {Profile} from "./profile/Profile";
import {Statistics} from "./statistics/Statistics";
import {FriendList} from "./friendList/FriendList";
import {TransactionHistory} from "./transactionHistory/TransactionHistory";

import user from "./profile/user.json";
import data from "./statistics/data.json";
import friends from "./friendList/friends.json";
import transactions from "./transactionHistory/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginTop: '50px'
      }}
    >
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
  );
};
