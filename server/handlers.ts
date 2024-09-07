// src/mocks/handlers.ts

import { http, HttpResponse } from "msw";
import mockData from "../public/mockData.json";

// 게임 스케줄 조회 API 핸들러
const getGameScheduleHandler = http.get("/api/game/schedule", ({ request }) => {
  const parsedUrl = new URL(request.url);
  const teamName = parsedUrl.searchParams.get("teamName");

  if (!teamName) {
    return HttpResponse.json({
      code: "BAD_REQUEST",
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
      response: { message: "팀 이름이 필요합니다." },
    });
  }

  // `getGameSchedule` 배열에서 각 팀별 데이터를 탐색합니다.
  const teamData =
    mockData.getGameSchedule[0][
      teamName as keyof (typeof mockData.getGameSchedule)[0]
    ];

  if (!teamData) {
    return HttpResponse.json({
      code: "NOT_FOUND",
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
      response: { message: "팀 데이터를 찾을 수 없습니다." },
    });
  }

  // 팀 데이터를 정상적으로 반환합니다.
  return HttpResponse.json({
    code: "OK",
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    response: teamData,
  });
});

const getWatchCountInfoHandler = http.get("/api/watch/count", ({ request }) => {
  return HttpResponse.json({
    code: "OK",
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    response: mockData.getWatchCountInfo[0].count,
  });
});

// 핸들러를 배열로 내보냅니다
export const handlers = [getGameScheduleHandler, getWatchCountInfoHandler];
