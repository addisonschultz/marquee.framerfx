import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import styled from "styled-components";

const StyledText = styled.h1``;

export function Marquee(props) {
  return (
    <marquee>
      {/* <StyledText>{props.text}</StyledText> */}
      {props.text}
    </marquee>
  );
}

addPropertyControls(Marquee, {
  text: {
    type: ControlType.String,
    title: "Text"
  }
});

Marquee.defaultProps = {
  height: 50,
  width: 300,
  text: "Hello World"
};
