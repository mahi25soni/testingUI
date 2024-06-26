import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa"; // Import icons from react-icons
import { GiThreeFriends } from "react-icons/gi";
import "./TalentPool.css";
import Profile from "../../../assets/IMG_2595.JPG";
import bmw from "../../../assets/bmw.png";
import person1 from "../../../assets/person1.png";
import person2 from "../../../assets/person2.png";
import person3 from "../../../assets/person3.png";

import SingleTalentPool from "./SingleTalentPool";

export default function TalentPool() {
  const [isPoolOpen, setIsPoolOpen] = useState({});
  const [detailedTalentPool, setDetailedTalentPool] = useState(null);

  const categoryData = [
    {
      _id: 1,
      category_name: "Software Development",
      user_number: 4,
      category_price: 5000,
      users: [
        {
          _id : 1,
          name: "Alice Johnson",
          city: "Francisco",
          willing_to_relocate: "true",
          full_time: "true",
        },
        {
          _id : 2,
          name: "Bob Smith",
          city: "New York",
          willing_to_relocate: "false",
          experienced_years: 3,
          full_time: "false",
        },
        {
          _id : 3,
          name: "Charlie Davis",
          experienced_years: 7,
          number_of_projects: 20,
          full_time: "true",
        },
        {
          _id : 4,
          name: "Dana Lee",
          city: "Seattle",
          willing_to_relocate: "false",
          full_time: "false",
        },
      ],
    },
    {
      _id: 2,
      category_name: "Graphic Design",
      user_number: 3,
      category_price: 3000,
      users: [
        {
          name: "Eve Thompson",
          city: "Los Angeles",
          willing_to_relocate: "true",
          experienced_years: 4,
          number_of_projects: 15,
          full_time: "true",
        },
        {
          name: "Frank White",
          city: "Chicago",
          willing_to_relocate: "false",
          experienced_years: 6,
          number_of_projects: 22,
          full_time: "true",
        },
        {
          name: "Grace Kim",
          city: "Miami",
          willing_to_relocate: "true",
          experienced_years: 3,
          number_of_projects: 10,
          full_time: "false",
        },
      ],
    },

    {
      _id: 3,
      category_name: "Data Science",
      user_number: 4,
      category_price: 7000,
      users: [
        {
          name: "Hank Miller",
          city: "Boston",
          willing_to_relocate: "false",
          experienced_years: 5,
          number_of_projects: 18,
          full_time: "true",
        },
        {
          name: "Isla Brown",
          city: "Denver",
          willing_to_relocate: "true",
          experienced_years: 4,
          number_of_projects: 14,
          full_time: "true",
        },
        {
          name: "Jack Wilson",
          city: "Portland",
          willing_to_relocate: "false",
          experienced_years: 7,
          number_of_projects: 25,
          full_time: "true",
        },
        {
          name: "Karen Adams",
          city: "Atlanta",
          willing_to_relocate: "true",
          experienced_years: 3,
          number_of_projects: 9,
          full_time: "false",
        },
      ],
    },
  ];

  const handleShowPool = (categId) => {
    setIsPoolOpen((prevState) => ({
      ...prevState,
      [categId]: !prevState[categId],
    }));

    const selectedCategory = categoryData.find((e) => e._id === categId);
    setDetailedTalentPool(selectedCategory);
  };

  const handleHidePool = (categId) => {
    setIsPoolOpen((prevState) => ({
      ...prevState,
      [categId]: !prevState[categId],
    }));

    setDetailedTalentPool(null);
  };

  return (
    <>
      {detailedTalentPool ? (
        <SingleTalentPool
          detailedTalentPool={detailedTalentPool}
          setDetailedTalentPool={setDetailedTalentPool}
          isPoolOpen={isPoolOpen}
          handleHidePool={handleHidePool}
        />
      ) : (
        <>
          <div className="userProfileTalentPool">
            {categoryData.map((data) => (
              <div key={data._id}>
                <div
                  className="singleCateogory"
                  onClick={() => handleShowPool(data._id)}
                >
                  <div className="categoryInfo">
                    <span className="categoryName">{data.category_name}</span>
                    <span className="theExtraBar">{" | "}</span>
                    <span className="categoryNumber">{data.user_number}</span>
                  </div>

                  <div className="bottomCategoryInfo">
                    <div className="categoryPrice" >{data.category_price}</div>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="userProfileTalentPoolMobile">
            {categoryData.map((data) => (
              <div key={data._id} className="singleCategoryMobile">
                <div className="categoryHeader">
                  <div className="categoryDetails">
                    <span className="categoryName">{data.category_name}</span>
                  </div>
                </div>
                <div className="profile-mob">
                  <div className="profile-name">
                    <img src={Profile} alt="Profile" className="profile-img" />
                    <p>Rahul Sharma</p>
                  </div>
                  <div className="profile-logo">
                    <img src={bmw} alt="Company Logo" className="user-icon" />
                    {/* <FaUserCircle className="user-icon"/> */}
                  </div>
                </div>
                <div>
                  <div className="userProfiles">
                    <div className="userProfiles-relative">
                      <img
                        src={person1}
                        alt="person1"
                        className="person1-logo"
                      />
                      <img
                        src={person2}
                        alt="person2"
                        className="person2-logo"
                      />
                      <img
                        src={person3}
                        alt="person3"
                        className="person3-logo"
                      />
                    </div>
                    <span>{data.user_number} profiles</span>
                  </div>
                </div>

                <div className="categoryFooter">
                  <span className="categoryPrice">₹{data.category_price}</span>
                  <button
                    className="viewTalentPoolButton"
                    onClick={() => handleShowPool(data._id)}
                  >
                    View Talent Pool
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
