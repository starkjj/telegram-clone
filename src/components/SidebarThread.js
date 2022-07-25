import { Avatar } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import './SidebarThread.css'
import { useState } from 'react'
import threadName from './SidebarThread.js'
import { useEffect } from 'react'
import db from '../firebase'
import { setThread } from '../features/threadSlice'

const SidebarThread = ({id, threadName}) => {
    const dispatch = useDispatch();
    const [threadInfo, setThreadInfo] = useState([]);

    useEffect(() => {
        db.collection('threads')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => 
                setThreadInfo(snapshot.docs.map((doc) => doc.data()))
            );
    }, [id]);

    return (
        <div className='sidebarThread'
            onClick={() => dispatch(
                setThread({
                        threadId: id, 
                        threadName: threadName
                    })
                )
            }
        >

            <Avatar src={threadInfo[0]?.photo}/>
            <div className='sidebarThread__details'>
                <h3>{threadName}</h3>
                <p>{threadInfo[0]?.message}</p>
                <small className='sidebarThread__timestamp'>
                    {threadInfo[0]?.timestamp?.toDate()?.toLocaleDateString()}
                </small>
            </div>
        </div>
    )
}

export default SidebarThread