"use client";
import { useEffect, useState } from "react";
import { getWatchCountInfo } from "../../../../server/http";
import CountPage from "./CountPage";

const UserPage = () => {
  const [countData, setCountData] = useState({
    totalWatchCount: 0,
    winGameCount: 0,
    loseGameCount: 0,
  });

  const getUserData = () => {
    getWatchCountInfo().then((data) => {
      console.log("kyj data:", data);
      const { loseGameCount, totalWatchCount, winGameCount } = data.response;
      setCountData({ loseGameCount, totalWatchCount, winGameCount });
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="countpage p-8 flex flex-col justify-center items-center">
      <CountPage countData={countData} />
      <div></div>
    </div>
  );
};
export default UserPage;
