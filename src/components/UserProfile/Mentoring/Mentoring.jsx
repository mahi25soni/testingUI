import React, { useState, useEffect } from "react";
import "./Mentoring.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SingleSession from "./SingleSession/SingleSession";

export default function Mentoring() {
  const mentInfo = [
    {
      _id: 1,
      call_type: "video call",
      session_name: "Mock interview",
      description:
        "Prepare for your job interview with a simulated interview session. Receive feedback and tips to ace your next interview.",
      session_duration: 60,
      price: 30,
      reviews: [
        {
          user_name: "JohnDoe",
          review:
            "Great experience! The interviewer provided valuable insights that helped me improve my interview skills.",
        },
        {
          user_name: "JaneSmith",
          review:
            "Highly recommended! The session was well-structured and informative.",
        },
      ],
    },
    {
      _id: 2,
      call_type: "audio call",
      session_name: "Career Guidance",
      description:
        "Get personalized career advice tailored to your goals and aspirations. Explore different career paths and strategies for success.",
      session_duration: 45,
      price: 25,
      reviews: [
        {
          user_name: "AliceJohnson",
          review:
            "The career guidance session was incredibly helpful. I gained clarity on my career goals and steps to achieve them.",
        },
        {
          user_name: "BobAnderson",
          review:
            "Excellent service! The career advisor was knowledgeable and provided actionable advice.",
        },
      ],
    },
    {
      _id: 3,
      call_type: "audio call",
      session_name: "Career Guidance",
      description:
        "Get personalized career advice tailored to your goals and aspirations. Explore different career paths and strategies for success.",
      session_duration: 45,
      price: 25,
      reviews: [
        {
          user_name: "AliceJohnson",
          review:
            "The career guidance session was incredibly helpful. I gained clarity on my career goals and steps to achieve them.",
        },
        {
          user_name: "BobAnderson",
          review:
            "Excellent service! The career advisor was knowledgeable and provided actionable advice.",
        },
      ],
    },
    {
      _id: 4,
      call_type: "audio call",
      session_name: "Career Guidance",
      description:
        "Get personalized career advice tailored to your goals and aspirations. Explore different career paths and strategies for success.",
      session_duration: 45,
      price: 25,
      reviews: [
        {
          user_name: "AliceJohnson",
          review:
            "The career guidance session was incredibly helpful. I gained clarity on my career goals and steps to achieve them.",
        },
        {
          user_name: "BobAnderson",
          review:
            "Excellent service! The career advisor was knowledgeable and provided actionable advice.",
        },
      ],
    },
  ];

  const [isSessionOpen, setIsSessionOpen] = useState({});
  const [sessionDetails, setSessionDetails] = useState(null);

  const handleShowSession = (session_id) => {
    console.log("open the category id is ", session_id);
    setIsSessionOpen((prevState) => ({
      [session_id]: !prevState[session_id],
    }));

    const something = mentInfo
      ?.filter((e) => e._id === session_id)
      .map((element) => {
        if (element._id === session_id) {
          return element;
        }
      });

    console.log("the something is ", something[0]);
    setSessionDetails(something[0]);
  };

  const handleHideSession = (session_id) => {
    console.log("close the pool is ", session_id);
    setIsSessionOpen((prevState) => ({
      [session_id]: !prevState[session_id],
    }));

    setSessionDetails(null);
  };

  console.log("the details are ", sessionDetails)

  return (
    <div>
      {sessionDetails ? (
        <SingleSession> </SingleSession>
      ) : (
        <div className="userProfileMentoring">
          {mentInfo?.map((info) => {
            return (
              <div key={info?._id} className="singleSession">
                <div className="session_type">{info?.call_type}</div>
                <div className="session_name">{info?.session_name}</div>
                <div className="session_desc">{info?.description}</div>
                <div className="goIntoSessionDetail">
                  <p>{info?.session_duration} Minutes</p>
                  <div
                    className="unlockButton"
                    onClick={() => handleShowSession(info?._id)}
                  >
                    <p>{info?.price} $</p>
                    <FaArrowRight className="iconSize20"></FaArrowRight>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
