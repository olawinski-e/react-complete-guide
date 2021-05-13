import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import { DemoList } from "./components/Demo/DemoList";
import { DemoOutput } from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState("My list");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((prevShowParagraph) => !prevShowParagraph);
  };

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [9, 2, 3, 7, 12, 6], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new</p>}
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={allowToggleHandler}>Allow toggling!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change list title</Button>
    </div>
  );
};

export default App;
