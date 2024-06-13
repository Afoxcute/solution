import React, { useState, useEffect } from "react";

function EncryptionDecryptionApp() {
    const [inputText, setInputText] = useState("");
    const [secretKey, setSecretKey] = useState("");
    const [outputText, setOutputText] = useState("");
    const [isEncrypting, setIsEncrypting] = useState(true);
    const [isDecrypting, setIsDecrypting] = useState(true);
  
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleSecretKeyChange = (event) => {
      setSecretKey(event.target.value);
    };
  
    const handleModeChange = (event) => {
      setIsEncrypting(event.target.checked);
    };

      
    const handleModeChangever = (event) => {
        setIsDecrypting(event.target.checked);
      };
  
    const processText = () => {
      let result = "";
      const key = secretKey.repeat(inputText.length);
      for (let i = 0; i < inputText.length; i++) {
        const charCode = inputText.charCodeAt(i) ^ key.charCodeAt(i);
        result += String.fromCharCode(charCode);
      }
      setOutputText(result);
    };
  
    return (
      <div>
        <h1>Simple XOR Encryption/Decryption</h1>
        <input
          type="text"
          placeholder="Enter text"
          value={inputText}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Secret Key"
          value={secretKey}
          onChange={handleSecretKeyChange}
        />
        <br />
        <label>
          <input
            type="radio"
            checked={isEncrypting}
            onChange={handleModeChange}
          />
          Encrypt/Decrypt
        </label>
        {/* <label>
          <input type="radio" checked={!isDecrypting} onChange={handleModeChangever} />
          Decrypt
        </label> */}
        <br />
        <button onClick={processText}>Process</button>
        <br />
        <p>{isEncrypting ? "Encrypted Text:" : "Decrypted Text:"} {outputText}</p>
        {/* <p>{isDecrypting ? "Decrypted Text:" : "Decrypted Text:"} {outputText}</p> */}
      </div>
    );
  }
  
  export default EncryptionDecryptionApp;
  