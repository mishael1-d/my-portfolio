import { useState, useEffect } from "react";

const usePathChecker = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const path = window.location.pathname.includes(query);
    if (path !== matches) {
      setMatches(path);
    }
  }, [matches, query]);

  return matches;
};

export default usePathChecker;
