import React from 'react'
import { LogoSearch } from '../LogoSearch/LogoSearch'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import './profileSide.css'
export const ProfileSide = () => {
  return (
    <div className='profileSide'>
        <LogoSearch />
        <ProfileCard />
    </div>
  )
}
