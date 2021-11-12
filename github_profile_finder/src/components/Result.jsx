import React from "react";
import Card from "./Card";
import Loading from "./Loading";

const Result = ({ userData, setUserData }) => {
  switch (userData.status) {
    case "pending":
      return <Loading />;
    case "resolved":
      return <Card userData={userData} setUserData={setUserData} />;
    case "rejected":
      return <div>User Not Found</div>;
    case "idle":
    default:
      return <></>;
  }
};

export default Result;
