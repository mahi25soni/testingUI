import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import UserProfile from "./components/UserProfile/UserProfile";
export default function App() {
  return (
    

      <div className="EntireBox">
        <SideBar></SideBar>
        <UserProfile></UserProfile>
      </div>
    
  );
}
