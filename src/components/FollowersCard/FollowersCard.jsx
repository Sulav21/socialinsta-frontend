import React from "react";
import "./followersCard.css";
import { Followers } from "../../Data/FollowersData";
export const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>Who is following you</h3>
      {Followers.map((followers, i) => {
        return (
          <div className="follower">
            <div>
              <img src={followers.img} alt="" className="followerImg" />
              <div className="name">
                <span>{followers.name}</span>
                <span>@{followers.username}</span>
              </div>
            </div>
            <button className="btn fc-btn">Follow</button>
          </div>
        );
      })}
    </div>
  );
};
