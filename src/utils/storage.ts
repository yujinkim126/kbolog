export const setMyTeam = (teamName: string) => {
  return localStorage.setItem("myTeam", teamName);
};

export const getMyTeam = () => {
  const team = localStorage.getItem("myTeam");
  return team ? team : "";
};
