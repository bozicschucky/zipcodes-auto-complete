import React, { useState, useCallback } from "react";
import ZipCodeList from "./components/ZipCodeList";
import ZIP_CODES from "./constants/ZipCodes";
import "./App.css";

function App() {
  const [filteredZipCodes, setFoundZipCodes] = useState<object[]>([]);
  const [selectedZip, setSelectedZipCode] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // if the inputValue is empty, then we don't want to show the suggestions
    if (inputValue === "") {
      setShowSuggestions(false);
      setFoundZipCodes([]);
      setSelectedZipCode("");
      return;
    }

    setSelectedZipCode(inputValue);
    let zipCodesFound = ZIP_CODES.filter((zipCode) => {
      return zipCode.zip_code.toString().includes(inputValue);
    });
    setShowSuggestions(true);
    setFoundZipCodes(zipCodesFound);
  };

  const handleSelectedZipCode = useCallback((zipCode: string) => {
    setSelectedZipCode(zipCode);
    setShowSuggestions(false);
    setFoundZipCodes([]);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h2 className="header">Enter Zip Code</h2>
        <input
          placeholder="Enter Zip Code"
          type="number"
          autoComplete="on"
          className="zip-code-search"
          onChange={handleInputChange}
          value={selectedZip as string}
        />

        <div className="suggestion-list">
          <ZipCodeList
            zipCodeSuggestions={filteredZipCodes}
            handleSelectedZipCode={handleSelectedZipCode}
          />

          {showSuggestions && filteredZipCodes.length === 0 && (
            <div className="no-suggestions">
              <em>No suggestions, you're on your own!</em>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
