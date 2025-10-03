import { useEffect } from "react";

export const useScrollToTop = (
  pageRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    pageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [window.location.pathname]);
};
