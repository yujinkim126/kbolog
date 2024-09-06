"use client";
import Image from "next/image";
import mockData from "../../../../public/mockData.json";
import { setMyTeam } from "@/utils/storage";
import { useState } from "react";

export interface Team {
  teamId: number;
  teamName: string;
  teamEngName: string;
  teamImg: string;
}

const SettingPage = () => {
  const teamListInfo: Team[] = mockData.teamListInfo;
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null); // 선택된 팀 상태

  const handleTeamClick = (teamEngName: string) => {
    setSelectedTeam(teamEngName); // 선택된 팀을 상태로 설정
  };

  const handleSetTeam = () => {
    if (selectedTeam) {
      setMyTeam(selectedTeam); // 선택된 팀을 로컬 스토리지에 저장
    }
  };

  return (
    <div className="bg-white p-16 flex flex-col">
      <h2 className="text-xl text-center my-8">응원하는 팀을 선택해주세요!</h2>
      <div className="teamList flex flex-wrap justify-center my-8">
        {teamListInfo.map(({ teamId, teamImg, teamName, teamEngName }) => (
          <div
            key={teamId}
            className={`teamItem flex flex-col items-center p-2 cursor-pointer ${
              selectedTeam === teamEngName ? "bg-slate-200" : ""
            }`}
            onClick={() => {
              handleTeamClick(teamEngName);
            }}
          >
            <Image src={teamImg} alt={teamName} width={60} height={60} />
            <span className="font-medium">{teamName}</span>
          </div>
        ))}
      </div>
      <button className="btn btn-neutral mt-8" onClick={handleSetTeam}>
        설정
      </button>
    </div>
  );
};
export default SettingPage;

// feat: 앱 진입 시 응원팀 여부 판단, 응원팀 선택 화면 구현
