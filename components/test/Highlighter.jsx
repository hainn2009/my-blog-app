import React, { useState, useRef } from "react";

const Highlighter = () => {
  const [sourceText, setSourceText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [result, setResult] = useState();
  const resultRef = useRef();

  const handleSearch = (e) => {
    (e) => setSearchTerm(e.target.value);

    //     setResult(sourceText.replaceAll(`/${e.target.value}/g`, `<mark>${e.target.value}</mark>`))
    if (sourceText && sourceText.length > 0) {
      setResult(sourceText.replaceAll(new RegExp(e.target.value, "g" + (!caseSensitive ? "i" : "")), `<mark>${e.target.value}</mark>`));
    }
    console.log(resultRef.current);
    //     setResult(sourceText.replaceAll(new RegExp(e.target.value,'g' + 'i'), `<mark>${e.target.value}</mark>`))
  };

  return (
    <>
      <textarea
        data-testid="source-text"
        value={sourceText}
        onChange={(e) => {
          setSourceText(e.target.value);
          setResult(e.target.value);
        }}
      />
      <br />
      <input data-testid="search-term" value={searchTerm} onChange={handleSearch} />
      <br />
      <input
        type="checkbox"
        data-testid="case-sensitive"
        value={caseSensitive}
        onChange={(e) => {
          setCaseSensitive(!caseSensitive);
        }}
        checked={caseSensitive}
      />
      <br />
      <div data-testid="result" ref={resultRef} dangerouslySetInnerHTML={{ __html: result }}></div>
    </>
  );
};

export default Highlighter;
