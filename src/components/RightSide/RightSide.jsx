import React, { useState } from "react";
import "./RightSide.css";
import home from "../../img/home.png";
import noti from "../../img/noti.png";
import comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { TrendCard } from "../Trendcard/TrendCard";
import { ShareModal } from "../../components/ShareModal/ShareModal";

export const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="rightSide">
      <div className="navIcon">
        <img src={home} alt="" />
        <UilSetting />
        <img src={noti} alt="" />
        <img src={comment} alt="" />
      </div>

      <TrendCard />

      <button className="btn rs-btn" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};
