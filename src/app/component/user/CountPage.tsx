import Image from "next/image";
import React from "react";

interface CountData {
  totalWatchCount: number;
  winGameCount: number;
  loseGameCount: number;
}

interface Props {
  countData: CountData;
}

const CountPage = ({ countData }: Props) => {
  const { totalWatchCount, winGameCount, loseGameCount } = countData;
  const winPercent = Math.round((winGameCount / totalWatchCount) * 100);

  // 승률에 따라 문구와 이미지를 동적으로 설정하는 함수
  const getMessageAndImage = (winPercent: number) => {
    if (winPercent < 50) {
      return {
        message: "(승요가 되고 싶은) 패배 요정",
        imageUrl: "/image/loser.png",
      };
    } else if (winPercent >= 50 && winPercent < 70) {
      return {
        message: "축하합니다 패요 탈출 !",
        imageUrl: "/image/half.png",
      };
    } else if (winPercent >= 70 && winPercent < 90) {
      return {
        message: "승리 요정이시네요!",
        imageUrl: "/image/good.png",
      };
    } else {
      return {
        message: "승리 요정을 넘었네요! 당장 폴대에 묶어",
        imageUrl: "/image/winner.png",
      };
    }
  };

  const { message, imageUrl } = getMessageAndImage(winPercent);

  return (
    <div className="text-center p-4 font-semibold">
      <h2 className="text-xl">올 시즌 직관 횟수는 {totalWatchCount}회</h2>
      <p className="text-lg">
        승리는 {winGameCount}번 승률 {winPercent}%
      </p>
      {/* 승률에 따라 문구와 이미지 표시 */}
      <div className="userWinStatus">
        <p className="text-lg text-gray-500 font-semibold my-8">{message}</p>
        <Image
          width={240}
          height={240}
          src={imageUrl}
          alt={message}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default CountPage;
