import React from "react";
import { MyParagraph } from "./MyParagraph";

export const DemoOutput = (props) => {
  return <MyParagraph>{props.show ? "This is new bis" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
