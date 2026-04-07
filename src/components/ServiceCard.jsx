import { useEffect, useState } from "react";
import Badge from "./Badge";
import "./ServiceCard.css";

export default function ServiceCard({ iconpath, headline, desp, points }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === points.length - 1 ? 0 : prevIndex + 1,
        );
        setFade(true);
      }, 600); // slightly slower fade
    }, 2500); // 👈 was 2500, now 4 seconds

    return () => clearInterval(interval);
  }, [points.length]);
  return (
    <div className="servicecard">
      <div className="badge-icon d-none d-md-block">
        <Badge iconpath={iconpath} color="service" />
      </div>

      <div className="servicecard-content">
        <span className="servicecard-head">{headline}</span>
        <p className="servicecard-desp">{desp}</p>

        <ul className="ps-3 animated-list">
          <li className={`animated-point ${fade ? "fade-in" : "fade-out"}`}>
            {points[currentIndex]}
          </li>
        </ul>
      </div>
    </div>
  );
}
