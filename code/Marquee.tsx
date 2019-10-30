import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import styled from "styled-components";

const StyledText = styled.h1`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.fontColor};
`;

export function Marquee(props) {
  return (
    <marquee>
      <StyledText fontSize={props.fontSize} fontColor={props.fontColor}>
        {props.text}
      </StyledText>
    </marquee>
  );
}

addPropertyControls(Marquee, {
  text: {
    type: ControlType.String,
    title: "Text"
  },
  fontSize: {
    type: ControlType.Number,
    title: "Font Size",
    min: 0,
    max: 250,
    step: 1
  },
  fontColor: {
    type: ControlType.Color,
    title: "Color"
  }
});

Marquee.defaultProps = {
  height: 62,
  width: 300,
  text: "Hello World",
  fontSize: 24,
  fontColor: "#000"
};
