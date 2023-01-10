import React from "react";
import "./TrendCard.css";
import { TrendData } from "../../Data/TrendData";
export const TrendCard = () => {
  return (
    <div className="trendCard">
      <h3>Trends for you</h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span> {trend.shares}k</span>
          </div>
        );
      })}
    </div>
  );
};
