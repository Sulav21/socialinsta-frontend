import React from 'react'
import { ProfileSide } from '../../components/ProfileSide/ProfileSide'
import './home.css'
export const Home = () => {
  return (
    <div className='home'>
     <ProfileSide />
        <div className="postSide">
Post
        </div>
        <div className="rightSide">Right</div>
    </div>
  )
}
