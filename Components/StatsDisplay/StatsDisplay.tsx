
import React from "react";

export interface StatsDisplayProps {
  wordCount: number;
  charCount: number;
  readingTime: number;
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({
  wordCount,
  charCount,
  readingTime,
}) => {
  return (
    <div className="mt-3">
      <p>Words: {wordCount}</p>
      <p>Characters: {charCount}</p>
      <p>Reading Time: {readingTime} min</p>
    </div>
  );
};

export default StatsDisplay;