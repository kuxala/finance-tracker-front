import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";

export default function Orb() {
  const { width, height } = useWindowSize();
  
  const moveOrb = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: translate(${width/1.2}px, ${height/2}px);
        }
        100%{
            transform: translate(0,0);
        }
    
    `;

  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-top: -37vh;
    margin-left: 37vh;
    background: linear-gradient(180deg, #00c6ff 0%, #0072ff 100%);

    filter: blur(300px);
    animation: ${moveOrb} 10s alternate linear infinite;
  `;

  return (
    <>
      <OrbStyled></OrbStyled>
    </>
  );
}
