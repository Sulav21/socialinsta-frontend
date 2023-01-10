import React from 'react'
import { PostSide } from '../../components/PostSide/PostSide'
import { ProfileSide } from '../../components/ProfileSide/ProfileSide'
import './home.css'
export const Home = () => {
  return (
    <div className='home'>
     <ProfileSide />
     <PostSide />
        <div className="rightSide">Right</div>
    </div>
  )
}
