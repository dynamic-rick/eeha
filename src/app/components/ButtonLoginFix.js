import React, { useEffect, useRef } from "react";
import { useButton } from "react-aria";
import { useAnimation } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonWrapper = styled(motion.div)`
  background-color: #6b92a4;
  color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  display: flex; // Change to flex to align items
  align-items: center; // Center items vertically
  justify-content: center; // Center items horizontally
  margin: 15px auto;
  padding: 15px 45px;
  width: 140px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  background-color: #6b92a4; // Corrected background color syntax

  -webkit-tap-highlight-color: transparent; // Disable touch highlight on iOS enlargement issue
  -webkit-touch-callout: none; // Prevent text selection on iOS
  -webkit-user-select: none; // Prevent text selection on iOS
  user-select: none; // Prevent text selection on iOS

  @media (max-width: 350px) {
    width: 80px;
    padding: 15px 30px;
  }
`;

const ButtonLoginFix = ({ onClick }) => {
  let controls = useAnimation();
  let ref = useRef();

  useEffect(() => {
    controls.start({ backgroundColor: "#6b92a4" }); // Ensure initial background color matches the corrected styled component
  }, [controls]);

  let { buttonProps } = useButton(
    {
      onPressStart: () => {
        controls.stop();
        controls.set({ backgroundColor: "#91b5b7" });
      },
      onPressEnd: () => {
        controls.start({
          backgroundColor: "#6b92a4",
          transition: { duration: 0.65 },
        });
      },
      onPress: onClick,
    },
    ref
  );

  return (
    <ButtonWrapper animate={controls} {...buttonProps}>
      <GalleryIcon />
      {/* Add the icon with some margin */}
      Login
    </ButtonWrapper>
  );
};

export default ButtonLoginFix;

//SVG ICON
export const GalleryIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      height="10em"
      width="10em"
      {...props}
    >
      <path d="M4.502 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      <path d="M14.002 13a2 2 0 01-2 2h-10a2 2 0 01-2-2V5A2 2 0 012 3a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-1.998 2zM14 2H4a1 1 0 00-1 1h9.002a2 2 0 012 2v7A1 1 0 0015 11V3a1 1 0 00-1-1zM2.002 4a1 1 0 00-1 1v8l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094l1.777 1.947V5a1 1 0 00-1-1h-10z" />
    </svg>
  );
};
