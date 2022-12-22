import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from './FriendsList/friends.json';
import { FriendsList } from './FriendsList/FriendsList';
import transactions from './Transactions/transactions.json';
import { TransactionsHistory } from './Transactions/TransactionsHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" data={data} />

      <FriendsList friends={friends} />

      <TransactionsHistory transactions={transactions} />
    </div>
  );
};
