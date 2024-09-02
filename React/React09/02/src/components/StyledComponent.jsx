import React from "react";
import styled from "styled-components";

// const StyledComponent = () => {
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;


// const Wrapper = styled.div`
//   padding: 4em;
//   background: papayawhip;
// `;


//   return (
//     <Wrapper>
//       <Title>안녕하세요</Title>
//     </Wrapper>
//   );
// };

const StyledComponent = () => {
    const Button = styled.button`
      background: ${(props) => (props.primary ? "palevioletred" : "white")};
      color: ${(props) => (props.primary ? "white" : "palevioletred")};
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    `;
  
    return (
      <div>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </div>
    );
  };

export default StyledComponent;