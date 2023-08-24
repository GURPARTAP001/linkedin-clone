import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {

    // we create a simple function that will return us the jsx so that we can reuse it
    const recentItem =(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://wallpaperaccess.com/full/2024139.jpg" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Gurpartap Singh</h2>
                <h4>gurpartap6125@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">5,456</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">3,856</p>
                </div>
            </div>

            <div className="sidebar__button">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programing')}
                {recentItem('web-development')}
                {recentItem('nodejs')}
                {recentItem('coding')}
            </div>

        </div>
    )
}

export default Sidebar
