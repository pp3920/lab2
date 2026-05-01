Reflection Questions on Project:

How did you handle state updates when the text changed?

I used a single state variable (text) in the parent component (App) and updated it using setText from the child TextInput component.

Whenever the user types, the onChange event triggers setText, which automatically re-renders the component and updates all derived values (words, characters, reading time).

❓ How did you handle state updates when the text changed?

Answer:
I used a single state variable (text) in the parent component (App). This state was updated using the setText function, which was passed down to the child TextInput component.

Whenever the user types, the onChange event triggers setText. This updates the state and causes React to re-render the component. As a result, all derived values such as word count, character count, and reading time are updated automatically.

❓ How did you ensure the UI remained responsive during rapid text input?

Answer:
React efficiently handles rapid updates using its virtual DOM, but I also ensured good performance by keeping the logic lightweight:

Avoided heavy computations inside the render method
Used simple string operations like split() and trim()
Avoided API calls or expensive loops on every keystroke
Kept derived calculations minimal and fast

This ensured smooth typing without lag.

❓ What challenges did you face when implementing the statistics calculations?

Answer:
The main challenges were:

Ensuring accurate word count, especially handling extra spaces and empty input
Properly structuring and placing the statistics inside <div> elements
Styling the UI to clearly display the calculated values

These were resolved by using proper string handling methods and organizing the layout with clean component structure.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**Project Details**

# 📊 Text Analyzer App

A simple React + TypeScript application that analyzes user input text and displays:

* Word Count
* Character Count
* Estimated Reading Time
* Word Limit Tracking

---

## 🚀 Features

* Real-time text analysis
* Clean and responsive UI
* Configurable word limits
* Reading time estimation
* Reusable components

---

## Components

### 1. TextInput

Handles user input.

**Props:**

`onTextChange: (text: string) => void`

---

### 2. StatsDisplay

Displays text statistics.

**Props:**

 `wordCount: number`
 `charCount: number`
`readingTime: number`

---

### 3. CharacterCounter

Shows word count with limits.

**Props:**

`wordCount: number`
`minWords?: number`
`maxWords?: number`
`targetReadingTime?: number`

---

## 📐 Logic

 **Word Count:**
  Uses `split(/\s+/)` to handle multiple spaces.

 **Character Count:**
  Based on string length.

**Reading Time:**
  Calculated using average speed of 200 words/min.

---

## Installation

```bash
npm install
npm start
```

---

## Usage

1. Type text into the textarea
2. Stats update in real-time
3. Word limits displayed below

---

##  Notes

* All calculations are derived from a single `text` state
* No external libraries used for logic
* Optimized for performance with minimal computations


---
