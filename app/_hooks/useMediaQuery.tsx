import { useEffect, useState } from "react";

export default function useMediaQuery() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only runs on client, after mount
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  return [isDesktop];
}
