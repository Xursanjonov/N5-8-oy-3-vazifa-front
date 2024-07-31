import React, { memo } from 'react'

const UserCart = ({ user }) => {

    return (
        <div className='user__cart'>
            <img className="user__img" src={user?.url} alt="" />
            <div className="user__info">
                <li> <span>Full name:</span> <p>{user?.fname}{user?.lname}</p></li>
                <li> <span>Age:</span> <p>{user?.age}</p></li>
                <li> <span>Gander:</span> <p>{user?.gander}</p></li>
                <li> <span>Username:</span> <p>{user?.username}</p></li>
                <li> <span>Budget:</span> <p>{user?.budget}$</p></li>
                <li> <span>Email:</span> <p>{user?.email}</p></li>
                <li> <span>Address:</span> <p>{'user?.address'}</p></li>
            </div>
            <div className="cart__btns">
                <button className="edit__btn" >Edit</button>
                <button className="delete__btn" >Delete</button>
            </div>
        </div>
    )
}

export default memo(UserCart)