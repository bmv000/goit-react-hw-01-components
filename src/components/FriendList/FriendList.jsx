import PropTypes from 'prop-types';
import css from "./FriendList.module.css";
import FriendItem from "../FriendItem/FriendItem"

export default function FriendList({ friends}) {
    return (
        <ul className={css.friend__list}>
            {friends.map(({ id, avatar, name, isOnline}) => (
                <FriendItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} 
                />
            ))}


            
</ul>
    )
    
}

FriendList.propTypes = {
     friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    )
   
}