// API 호출 함수
export const getGameSchedule = async (teamName: string) => {
  const response = await fetch(`/api/game/schedule?teamName=${teamName}`);

  if (!response.ok) {
    throw new Error("Failed to fetch game schedule");
  }

  const data = await response.json();
  return data;
};

export const getWatchCountInfo = async () => {
  const response = await fetch("/api/watch/count");

  if (!response.ok) {
    throw new Error("Failed to fetch watch count info");
  }

  const data = await response.json();
  return data;
};
