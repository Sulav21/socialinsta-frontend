import React from 'react'
import {LogoSearch} from '../LogoSearch/LogoSearch'
import {FollowersCard} from '../FollowersCard/FollowersCard'
import { InfoCard } from '../InfoCard/InfoCard'
 
export const ProfileLeft = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}
