import React, { useState } from "react";
import "./SingleTalentPool.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import {
  MdOutlineWavingHand,
  MdDoneAll,
  MdFormatListBulleted,
  MdGridView,
  MdWavingHand,
} from "react-icons/md";
import { GiDominoMask } from "react-icons/gi";

export default function SingleTalentPool({
  detailedTalentPool,
  setDetailedTalentPool,
  isPoolOpen,
  handleHidePool,
}) {
  const [expandedMembers, setExpandedMembers] = useState({});
  const userExtraDataArray = [
    "city",
    "willing_to_relocate",
    "experienced_years",
    "number_of_projects",
    "full_time",
  ];

  const toggleMemberInfo = (id) => {
    setExpandedMembers((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="userProfileDetailedTalentPool">
      <div key={detailedTalentPool?._id} className="singleCategory">
        <div className="categoryHeader">
          {isPoolOpen[detailedTalentPool?._id] && (
            <FaArrowLeft
              onClick={() => handleHidePool(detailedTalentPool?._id)}
              className="arrowIcon"
            />
          )}
          <span>{detailedTalentPool?.category_name}</span>
           {"  | "}
          <span>{detailedTalentPool?.user_number}</span>
        </div>
        <div className="categoryPrice">
          {detailedTalentPool?.category_price}
        </div>
      </div>

      {isPoolOpen[detailedTalentPool?._id] && (
        <div className="togglePool">
          <div className="entirePoolActivities">
            <div className="poolSelectAndSend">
              <div className="select-icon">
                <input
                  type="checkbox"
                  id={detailedTalentPool?._id}
                  name="select-all"
                  className="iconSize20"
                />
                <label htmlFor={detailedTalentPool?._id}> Select All</label>
              </div>
              <div className="wavingHand1">
                <MdOutlineWavingHand className="iconSize20" />{" "}
                <span>Check availability</span>
              </div>
            </div>
            <div className="poolSelectionInfo">
              <div className="numberOfSelection">
                <span>0/21 candidates selected</span>
              </div>
              <div className="extraFunctions">
                <MdGridView className="iconSize201" />
                <MdFormatListBulleted className="iconSize20" />
              </div>
            </div>
          </div>
          <div className="poolMemberList">
            {detailedTalentPool?.users.map((singleMember) => {
              const isExpanded = expandedMembers[singleMember._id] || false;
              return (
                <div
                  key={singleMember?._id}
                  className={`members ${isExpanded ? "expanded" : ""}`}
                >
                  <div className="newmember">
                    <div className="memberInfo">
                      <div className="memberNameInfo">
                        {singleMember?.name}{" "}
                        <IoMdArrowDropdown
                          className={`dropdownButton`}
                          onClick={() => toggleMemberInfo(singleMember?._id)}
                        />
                      </div>
                      <div className="memberProfilePreview1">
                      <GiDominoMask className="maskicon" />
                    </div>
                    </div>
                    <div className="memberOtherInfo">
                      {userExtraDataArray?.map((field_name) => {
                        return (
                          singleMember?.[field_name] && (
                            <div
                              key={field_name}
                              className="memberSingleOtherInfo"
                            >
                              {singleMember[field_name]}
                            </div>
                          )
                          
                        );
                      })}
                      
                    </div>
                  </div>
                  <div className="poolMemberFunctions">
                    <div className="memberProfilePreview">
                      <GiDominoMask className="maskicon" />
                    </div>
                    <div className="wavingHand">
                      <MdWavingHand className="iconSize20" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {isPoolOpen[detailedTalentPool?._id] && (
        <div className="paymentFooter">
          <p>
            Unlock Selected Price <strong>@ 5000/-</strong>
          </p>
          <div className="unlockButton">
            <p>Unlock</p>
            <FaArrowRight className="iconSize20" />
          </div>
        </div>
      )}
    </div>
  );
}
