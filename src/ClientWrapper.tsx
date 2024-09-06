"use client";

import { useEffect, useState } from "react";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMswInitialized, setIsMswInitialized] = useState(false);

  useEffect(() => {
    const initializeMsw = async () => {
      // MSW 초기화 로직
      if (
        typeof window !== "undefined" &&
        process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
      ) {
        const { worker } = await import("../server/browser");
        await worker.start({
          onUnhandledRequest: "bypass",
        });
        console.log("[MSW] Mocking enabled.");
      }
      setIsMswInitialized(true); // 초기화 완료 시 상태 변경
    };

    initializeMsw();
  }, []);

  return !isMswInitialized ? null : <>{children}</>;
};

export default ClientWrapper;
