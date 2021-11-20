import FriendListItem from "../friend-lidt-item/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnLine={friend.isOnline}
        />
      ))}
    </ul>
  );
};
export default FriendList;
