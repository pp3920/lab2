import { useState } from "react";

interface TextInputProps {
  onTextChange: (text: string) => void;  //function to send data to parent
  placeholder?: string;
  initialValue?: string;
}

function TextInput(
    
{
  onTextChange,   
  placeholder = "Start typing your content here...",
  initialValue = "",
}: TextInputProps)

{
  const [text, setText] = useState(initialValue);  // State : to store current text area 

  function handleChange(e: any) {
    const value = e.target.value;
    setText(value);
    onTextChange(value);  //value passed to parent
  }

  return (
    <textarea 
     className="custom-textarea"
     value={text}  placeholder={placeholder} onChange={handleChange}
    />
  );
}
/*
<textarea class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[200px] resize-y bg-white" placeholder="Start typing your content here..."></textarea>*/


export default TextInput;