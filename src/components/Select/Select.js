import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  min-width: 100px;
  width: max-content;
  height: 43px;
`;

const InnerSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const VisualSelect = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  background-color: ${COLORS.transparentGray15};
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: ${19 / 16}rem;
  color: ${COLORS.gray700};
  border-radius: 8px;

  ${InnerSelect}:focus + & {
    outline: auto;
  }

  ${InnerSelect}:hover + & {
    color: ${COLORS.black};
  }
  /* prevent this element to receive mouse events, this element is only visual
  events are forwarded tp inner select where they should be process  */
  pointer-events: none;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  height: 24px;
  margin: auto 0;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      <InnerSelect>{children}</InnerSelect>
      <VisualSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
      </VisualSelect>
    </Wrapper>
  );
};

export default Select;
