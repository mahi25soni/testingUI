import React from "react";
import "./SideBar.css";
import image_link from "../assets/IMG_2595.JPG";
import { CiChat1 } from "react-icons/ci";

export default function SideBar() {
  return (
    <div className="EntireSideBar">
      <div className="sideBarProfile">
          <img src={image_link} alt="profile_image" />
          <div className="sideBarUserInfo">
            <p>Rahul Sharma</p>
            <p>Hiring high performance</p>
          </div>
      </div>

      <div className="sideBarApplyPool">
        <button>Apply to Talent Pool</button>
        <button> 
          <CiChat1 style={{
            maxWidth : "24px",
            minHeight : "24px"
          }}></CiChat1>
        </button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
