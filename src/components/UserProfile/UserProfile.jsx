import React, { useState } from "react";
import "./UserProfile.css";
import About from "./About/About";
import TalentPool from "./TalentPool/TalentPool";
import Mentoring from "./Mentoring/Mentoring";

export default function UserProfile() {
  const [activeBtn, setActiveBtn] = useState("about");
  const btns = [
    {
      id: "mentoring",
      name: "Mentoring",
    },

    {
      id: "talentPool",
      name: "Talent Pools",
    },
    {
      id: "about",
      name: "About",
    },
  ];

  return (
    <div className="userProfileSection">
      <div className="buttons">
        {btns?.map((element) => {
          return (
            <button
              onClick={() => setActiveBtn(element?.id)}
              className={activeBtn === element.id ? "active" : ""}
            >
              {element?.name}
            </button>
          );
        })}
      </div>

      <div>
        {activeBtn === "about" ? (
          <About></About>
        ) : activeBtn === "talentPool" ? (
          <TalentPool></TalentPool>
        ) : activeBtn === "mentoring" ? (
          <Mentoring></Mentoring>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
