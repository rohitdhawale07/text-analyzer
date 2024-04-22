import "./App.css";
import { useState } from "react";
import ParagraphInputAnalyzer from "./components/ParagraphInputAnalyzer";
import WordInputAnalyzer from "./components/WordInputAnalyzer";

function App() {
  const [inputType, setInputType] = useState("word");

  function handleInputTypeChange(type) {
    setInputType(type);
  }
  return (
    <div className="main">
      <h1 data-text="TextAnalyzer">TextAnalyzer</h1>
      <p className="info">
        Text Analyzer is a simple free online tool for SEO web content analysis
        that helps you find most frequent phrases and words, number of
        characters, words, sentences and paragraphs, and  estimated read nad
        speak time of your content.
      </p>
      <div>
        <button
          className={inputType === "word" ? "active" : ""}
          onClick={() => handleInputTypeChange("word")}
        >
          Word Input
        </button>
        <button
          className={inputType === "paragraph" ? "active" : ""}
          onClick={() => handleInputTypeChange("paragraph")}
        >
          Paragraph
        </button>
      </div>
      {inputType === "word" ? (
        <WordInputAnalyzer />
      ) : (
        <ParagraphInputAnalyzer />
      )}
    </div>
  );
}

export default App;
