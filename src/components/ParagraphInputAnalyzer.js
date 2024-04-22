import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ParagraphInputAnalyzer() {
  const initialText = localStorage.getItem("paragraphText") || "";
  const [text, setText] = useState(initialText);

  const [characters, setCharacters] = useState(0);
  const [words, setWords] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);
  const [spaces, setSpaces] = useState(0);
  const [punctuations, setPunctuations] = useState(0);

  function handleInputChange(e) {
    const inputText = e.target.value;
    setText(inputText);
    localStorage.setItem("paragraphText", inputText);
    analyzeText(inputText);
  }

  function analyzeText(inputText) {
    const charCount = inputText.length;
    const wordCount = inputText.trim().split(/\s+/).filter(Boolean).length;
    const sentenceCount = inputText.split(/[.!?]+/).filter(Boolean).length;
    const paragraphCount = inputText.split("\n").filter(Boolean).length;
    const spaceCount = inputText.split(" ").length - 1;
    const punctuationCount = inputText
      .split("")
      .filter((char) => /[^\w\s]/.test(char)).length;

    setCharacters(charCount);
    setWords(wordCount);
    setSentences(sentenceCount);
    setParagraphs(paragraphCount);
    setSpaces(spaceCount);
    setPunctuations(punctuationCount);
  }

  useEffect(() => {
    const storedText = localStorage.getItem("paragraphText");
    if (storedText) {
      setText(storedText);
      analyzeText(storedText);
    }
  }, []);

  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.4 }}
    >
      <textarea
        placeholder="Type or copy/paste your content here..."
        value={text}
        onChange={handleInputChange}
        style={{ width: "700px", minHeight: "150px" }}
      />
      <div>
        <table>
          <thead>
            <tr>
              <th>Characters</th>
              <th>Words</th>
              <th>Sentences</th>
              <th>Paragraphs</th>
              <th>Spaces</th>
              <th>Punctuations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{characters}</td>
              <td>{words}</td>
              <td>{sentences}</td>
              <td>{paragraphs}</td>
              <td>{spaces}</td>
              <td>{punctuations}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default ParagraphInputAnalyzer;
