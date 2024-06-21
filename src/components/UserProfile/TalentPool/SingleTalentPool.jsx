import React, { useState } from "react";
import "./SingleTalentPool.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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

  console.log("is open wala object ", isPoolOpen);
  console.log("details are ", detailedTalentPool);

  return (
    <div className="userProfileDetailedTalentPool">
      <div
        key={detailedTalentPool?._id}
        className="singleCateogory"
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottom: "0", // Remove lower border when condition is true
          backgroundColor: "#F7F7F7",
        }}
      >
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "400",
          }}
        >
          {isPoolOpen[detailedTalentPool?._id] && (
            <FaArrowLeft
              onClick={() => handleHidePool(detailedTalentPool?._id)}
              style={{
                width: "16px",
                height: "16px",
                marginRight: "15px",
                color: "black",
              }}
            ></FaArrowLeft>
          )}

          <span>{detailedTalentPool?.category_name}</span>
          {" | "}
          <span>{detailedTalentPool?.user_number}</span>
        </div>

        <div
          style={{
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          {detailedTalentPool?.category_price}
        </div>
      </div>

      {isPoolOpen[detailedTalentPool?._id] && (
        <div className="togglePool">
          <div className="entirePoolActivies">
            <div className="poolSelectAndSend">
              <div>
                <input
                  type="checkbox"
                  id={detailedTalentPool?._id}
                  name="select-all"
                  className="iconSize20"
                  // onChange={handleSelectMessageCategory}
                  // checked={
                  //   !!selectAllUsers[
                  //     data?._id
                  //   ]
                  // }
                />
                <label htmlFor={detailedTalentPool?._id}> Select All</label>
              </div>
              <div
                className="wavingHand"
                // onClick={() =>
                //   setWavehandFunction(
                //     () => sendMultipleMessagesToUsers
                //   )
                // }
              >
                <MdOutlineWavingHand className="iconSize20" />{" "}
                <span>Check availability</span>
              </div>
            </div>

            <div className="poolSelectionInfo">
              <div className="numberOfSelection">
                <span>0/21 candidates selected</span>
              </div>
              <div className="extraFunctions">
                <MdGridView className="iconSize20"></MdGridView>
                <MdFormatListBulleted className="iconSize20"></MdFormatListBulleted>
              </div>
            </div>
          </div>

          <div className="poolMemberList">
            {detailedTalentPool?.users.map((singleMember) => {
              return (
                <div key={singleMember?._id} className="members">
                  <div className="memberInfo">
                    <div className="memberNameInfo">{singleMember?.name}</div>
                    <div className="memberOtherInfo">
                      {userExtraDataArray?.map((field_name) => {
                        return (
                          singleMember?.[field_name] && (
                            <div
                              key={field_name}
                              className="memberSingleOtherInfo"
                            >
                              {singleMember[field_name] }
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>

                  <div className="poolMemberFunctions">
                    <div className="memberProfilePreview">
                      <GiDominoMask className="iconSize20"></GiDominoMask>
                    </div>

                    <div className="wavingHand">
                      <MdWavingHand className="iconSize20"></MdWavingHand>
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
            <FaArrowRight className="iconSize20"></FaArrowRight>
          </div>
        </div>
      )}
    </div>
  );
}
