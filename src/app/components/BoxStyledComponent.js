"use client";

import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 300px;
  padding: 16px;
  background-color: #e2e2e2;
  border-radius: 8px;
  margin-top: 16px;
`;

const Page = () => {
  return (
    <div>
      <StyledDiv>Styled Components</StyledDiv>
    </div>
  );
};

export default Page;
