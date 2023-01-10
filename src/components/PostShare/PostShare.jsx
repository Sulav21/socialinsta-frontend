import React from "react";
import "./PostShare.css";
import profileImg from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";

export const PostShare = () => {
  return (
    <div className="PostShare">
      <img src={profileImg} alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div className="option"
          style={{color:"var(--photo)"}}>
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{color:"var(--video)"}}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{color:"var(--location)"}}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{color:"var(--shedule)"}}>
            <UilSchedule />
            Schedule
          </div>
          <button className="btn ps-button">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};
