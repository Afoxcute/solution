import React, { useState, useEffect } from "react";







function EncryptionApp() {
    const [inputText, setInputText] = useState("");
    const [shiftKey, setShiftKey] = useState(0);
    const [encryptedText, setEncryptedText] = useState("");
  
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleShiftChange = (event) => {
      setShiftKey(parseInt(event.target.value));
    };
  
    const encryptText = () => {
      let encrypted = "";
      for (let char of inputText) {
        let charCode = char.charCodeAt(0);
        // Handle uppercase and lowercase characters
        const base = charCode >= 65 && charCode <= 90 ? 65 : 97;
        charCode = ((charCode - base + shiftKey) % 26) + base;
        encrypted += String.fromCharCode(charCode);
      }
      setEncryptedText(encrypted);
    };
  
    return (
      <div>
        <h1>Caesar Cipher Encryption</h1>
        <input
          type="text"
          placeholder="Enter text to encrypt"
          value={inputText}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="number"
          placeholder="Shift Key (0-25)"
          value={shiftKey}
          onChange={handleShiftChange}
        />
        <br />
        <button onClick={encryptText}>Encrypt</button>
        <br />
        <p>Encrypted Text: {encryptedText}</p>
      </div>
    );
  }
  
  export default EncryptionApp;
  