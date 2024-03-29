import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice';
import './Message.css'

const Message = ({id, data: { timestamp, displayName, email, message, photo, uid } }) => {
    const user = useSelector(selectUser);

    return (
            <div className={`message ${user.email === email && 'message__sender'}`}>

                <Avatar src={photo} className='message__photo'/>
                <div className='message__contents'>
                    <p>{message}</p>
                    <small>{timestamp?.toDate()?.toLocaleTimeString()}</small>
                </div>
            </div>
    )
}

export default Message