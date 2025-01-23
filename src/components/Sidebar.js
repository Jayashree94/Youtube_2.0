import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if (!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-44 px-5'>
        <div>
        <ul>
            <li className='p-2 font-bold cursor-pointer'><Link to="/">Home</Link></li>
            <li className='p-2 font-bold'>Shorts</li>
            <li className='p-2 font-bold'>Subscriptions</li>
        </ul>
        </div>
        <div>

        <h1 className='font-bold p-2'> You </h1>
        <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos </li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        </ul> </div>
        <div>
            <h1 className='font-bold p-2' >Explore </h1>
        <ul>
        <li>Trending    </li>
        <li>Shopping</li>
        <li>Music </li>
        <li>Movies</li>
        <li>Games</li>
        <li>News</li>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar