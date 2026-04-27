  import { useState } from "react";
  import TextInput from "./Components/TextInput/TextInput";
  import StatsDisplay from "./Components/StatsDisplay/StatsDisplay";
  import CharacterCounter from "./Components/CharacterCounter/CharacterCounter";


  function App() {
    const [text, setText] = useState("");

    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const characters = text.length;
    const readingTime = Math.ceil(words / 200);

    return (
      <div className="container mt-4">

        <TextInput onTextChange={setText} />
        <StatsDisplay
          charCount={characters}
           wordCount={words}
          readingTime={readingTime}
        />

        <CharacterCounter
          wordCount={words}
          minWords={25}
          maxWords={50}
          targetReadingTime={2}
        />
      </div>
    );
  }

  export default App;