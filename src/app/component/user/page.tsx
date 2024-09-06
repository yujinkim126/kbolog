"use client";
import { useEffect } from "react";
import { getWatchCountInfo } from "../../../../server/http";

const UserPage = () => {
  const getUserData = () => {
    getWatchCountInfo().then((data) => {
      console.log("kyj data:", data);
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h1>직관 횟수</h1>
      <button onClick={getUserData}>테스트</button>
    </div>
  );
};
export default UserPage;
