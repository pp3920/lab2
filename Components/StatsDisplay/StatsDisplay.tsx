
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
        <div className="stats-container">
            
            <p>
                Characters <br />
                {charCount}
            </p>
            <p>
                Words <br />
                {wordCount}
            </p>
            <p> Reading Time <br />
                {readingTime} :00 min</p>
        </div>
    );
};

export default StatsDisplay;