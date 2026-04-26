import { useState } from "react";

interface TextInputProps {
  onTextChange: (text: string) => void;  //function to send data to parent
  placeholder?: string;
  initialValue?: string;
}

function TextInput(
    
{
  onTextChange,   
  placeholder = "Start writing...",
  initialValue = "",
}: TextInputProps)

{
  const [text, setText] = useState(initialValue);  // State : to store current text area 

  function handleChange(e: any) {
    const value = e.target.value;
    setText(value);
    onTextChange(value);
  }

  return (
    <textarea
      value={text}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default TextInput;