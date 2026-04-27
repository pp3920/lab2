

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
