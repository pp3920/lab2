import React from "react";

export interface CharacterCounterProps {
  wordCount: number;
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}

function CharacterCounter({
  wordCount,
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 0,
}: CharacterCounterProps) {
  

  return (
    <div className="mt-3">
      {/* Word limits */}
      <p>
        Word Count: {wordCount} (Min: {minWords}, Max: {maxWords})
      </p>
    </div>
  );
}

export default CharacterCounter;