import React from "react";

export interface CharacterCounterProps {
  wordCount: number;
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}

function CharacterCounter({
  wordCount,
  minWords = 50,
  maxWords = 500,
  targetReadingTime = 2,
}: CharacterCounterProps) {
  
  const isTooShort = wordCount < minWords;
  const isTooLong = wordCount > maxWords;

  return (
    <div className="mt-3">

      {/* Word limits */}
      <p>
        Word Count: {wordCount} (Min: {minWords}, Max: {maxWords})
      </p>

      {/* Status messages */}
      {isTooShort && (
        <p className="text-danger">Too short, add more content</p>
      )}

      {isTooLong && (
        <p className="text-warning">Too long, reduce content</p>
      )}

      {!isTooShort && !isTooLong && (
        <p className="text-success">✅ Good length</p>
      )}

      {/* Reading target */}
      <p> Target Reading Time: {targetReadingTime} min</p>

    </div>
  );
}

export default CharacterCounter;