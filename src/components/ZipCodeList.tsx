import React from "react";

export interface Props {
  zipCodeSuggestions: Object[];
  handleSelectedZipCode: (value: string) => void;
}

const ZipList = ({ zipCodeSuggestions, handleSelectedZipCode }: Props) => {
  const zipCodeList = zipCodeSuggestions.map((zipCode) => {
    return (
      <li
        className="zip-item"
        key={zipCode["zip_code"]}
        onClick={() => handleSelectedZipCode(zipCode["zip_code"])}
      >
        {zipCode["zip_code"]}
      </li>
    );
  });
  return <ul className="suggestion-container">{zipCodeList}</ul>;
};

export default ZipList;
