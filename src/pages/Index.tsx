import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "NBA Stats Tracker — Verge Edition";
  }, []);
  return (
    <iframe
      src="/nba.html"
      title="NBA Stats Tracker"
      style={{ width: "100vw", height: "100vh", border: "none", display: "block" }}
    />
  );
};

export default Index;
