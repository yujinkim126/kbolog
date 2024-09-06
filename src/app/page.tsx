"use client";

import { useEffect } from "react";
import { getMyTeam } from "@/utils/storage";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const userTeam = getMyTeam(); // 로컬 스토리지에서 팀 정보를 가져옴
  const router = useRouter();

  useEffect(() => {
    if (userTeam) {
      router.push("/component/user");
    } else {
      router.push("/component/setting");
    }
  }, [userTeam, router]); // 의존성 배열에 userTeam과 router를 추가

  return null; // 페이지 이동 전에는 아무것도 렌더링하지 않음
};

export default HomePage;
