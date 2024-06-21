import React, { useState } from "react";
import "./TalentPool.css";

import SingleTalentPool from "./SingleTalentPool";

export default function TalentPool() {
  const [isPoolOpen, setIsPoolOpen] = useState({});
  const [talentPool, setTalentPool] = useState([]);
  const [detailedTalentPool, setDetailedTalentPool] = useState(null);

  const categoryData = [
    {
      _id: 1,
      category_name: "Software Development",
      user_number: 4,
      category_price: 5000,
      users: [
        {
          name: "Alice Johnson",
          city: "Francisco",
          willing_to_relocate: "true",
          full_time: "true",
        },
        {
          name: "Bob Smith",
          city: "New York",
          willing_to_relocate: "false",
          experienced_years: 3,
          full_time: "false",
        },
        {
          name: "Charlie Davis",
          experienced_years: 7,
          number_of_projects: 20,
          full_time: "true",
        },
        {
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

  const userExtraDataArray = [
    "city",
    "willing_to_relocate",
    "experienced_years",
    "number_of_projects",
    "full_time",
  ];

  const handleShowPool = (categId) => {
    console.log("open the category id is ", categId);
    setIsPoolOpen((prevState) => ({
      [categId]: !prevState[categId],
    }));

    const something = categoryData
      ?.filter((e) => e._id === categId)
      .map((element) => {
        if (element._id === categId) {
          return element;
        }
      });

    console.log("the something is ", something[0]);
    setDetailedTalentPool(something[0]);
  };

  const handleHidePool = (categId) => {
    console.log("close the pool is ", categId);
    setIsPoolOpen((prevState) => ({
      [categId]: !prevState[categId],
    }));

    setDetailedTalentPool(null);
  };

  console.log("the detailedTalentPool is ", detailedTalentPool);
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
        <div className="userProfileTalentPool">
          {categoryData?.map((data) => {
            return (
              <div>
                <div
                  key={data?._id}
                  className="singleCateogory"
                  onClick={() => handleShowPool(data?._id)}
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #E0E0E0",
                  }}
                >
                  <div className="categoryInfo">
                    <span className="categoryName">{data?.category_name}</span>
                    <span className="theExtraBar">{" | "}</span>
                    <span className="categoryNumber">{data?.user_number}</span>
                  </div>

                  <div className="bottomCategoryInfo">
                    <div className="categoryPrice">{data?.category_price}</div>
                    <button
                      className="viewProfileButton"
                      onClick={() => handleShowPool(data?._id)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
