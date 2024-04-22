import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function WordInputAnalyzer() {
  const [text, setText] = useState("");
  const [characters, setCharacters] = useState(0);
  const [words, setWords] = useState(0);

  useEffect(() => {
    const storedText = localStorage.getItem("wordText");
    if (storedText) {
      setText(storedText);
      analyzeText(storedText);
    }
  }, []);

  function handleChange(e) {
    const inputText = e.target.value;
    setText(inputText);
    localStorage.setItem("wordText", inputText);
    analyzeText(inputText);
  }

  function analyzeText(inputText) {
    const charactersCount = inputText.length;
    const wordsCount = inputText.trim().split(/\s+/).filter(Boolean).length;
    setCharacters(charactersCount);
    setWords(wordsCount);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <input
          type="text"
          placeholder="Type a Note..."
          value={text}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Characters</th>
              <th>Words</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{characters}</td>
              <td>{words}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default WordInputAnalyzer;
