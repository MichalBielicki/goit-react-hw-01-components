import style from "./FriendListItem.module.css";
const FriendListItem = ({ id, avatar, name, isOnLine }) => {
  return (
    <li className={style.item} key={id}>
      <span className={isOnLine ? style.status : style.status__off}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;
