/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const SIZES = {
  small: { "--height": "8px", "--radius": "4px" },
  medium: { "--height": "12px", "--radius": "4px" },
  large: {
    "--height": "24px",
    "--radius": "6px",
    "--padding": "4px",
  },
};

const Wrapper = styled.div`
  height: var(--height);
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: var(--radius);
  padding: var(--padding);
`;

const Bar = styled.div`
  height: 100%;
  width: ${(p) => p.value}%;
  background-color: ${COLORS.primary};
`;

const Trimmer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  /*
    Trim off corners when progress is almost full
  */
  overflow: hidden;
`;

const ProgressBar = ({ value, size, className, ...otherProps }) => {
  const variables = SIZES[size];

  return (
    <Wrapper
      className={className}
      style={{ ...variables }}
      role="progressbar"
      aria-valuenow={value}
      {...otherProps}
    >
      <Trimmer>
        <Bar value={value} />
      </Trimmer>
    </Wrapper>
  );
};

export default ProgressBar;
