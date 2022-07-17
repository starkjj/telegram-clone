import React, {useEffect, useState} from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import { BorderColor, Create, Person, QuestionAnswer, Settings } from '@material-ui/icons'
import SidebarThread from './SidebarThread'
import db, { auth } from '../firebase'
import { selectUser } from '../features/counter/userSlice'
import { useSelector } from 'react-redux/es/exports'

const Sidebar = () => {
    const user = useSelector(selectUser);
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        db.collection('threads').onSnapshot((snapshot) => setThreads(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),

        }))))
    }, []);


    const addThread = () =>
    {
        const threadName = prompt('Enter a thread name');
        if(threadName)
        {
            db.collection('threads').add({threadName: threadName})
        }
    }

    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__search'>
                    <SearchIcon className="sidebar__searchIcon"/>
                    <input placeholder='Search' className='sidebar__input'></input>
                </div>
                <IconButton variant="outlined" id="sidebar__button">
                    <Create onClick={addThread}/>
                </IconButton>
            </div>
            <div className='sidebar__threads'>
                {threads.map(({id, data: { threadName } }) => (
                    <SidebarThread key={id} id={id} threadName={threadName}/>
                ))}
            </div>
            <div className='sidebar__bottom'>
                <Avatar className='sidebar__bottom__avatar' onClick={() => auth.signOut()}/>
                <IconButton>
                    <Person/>
                </IconButton>
                <IconButton>
                    <QuestionAnswer/>
                </IconButton>
                <IconButton>
                    <Settings/>
                </IconButton>
            </div>
        </div>
    )
}

export default Sidebar