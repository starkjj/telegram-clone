import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import { BorderColor, Create, Person, QuestionAnswer, Settings } from '@material-ui/icons'
import SidebarThread from './SidebarThread'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <div className='sidebar__search'>
                <SearchIcon className="sidebar__searchIcon"/>
                <input placeholder='Search' className='sidebar__input'></input>
            </div>
            <IconButton variant="outlined" id="sidebar__button">
                <Create/>
            </IconButton>
        </div>
        <div className='sidebar__threads'>
            <SidebarThread/>
        </div>
        <div className='sidebar__bottom'>
            <Avatar className='sidebar__bottom__avatar'/>
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