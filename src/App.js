import React, { useState } from "react";
import Header from "./components/Header";
import styled from "styled-components";

const StyleMainWrapper = styled.div`
  position: relative;
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <StyleMainWrapper>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </StyleMainWrapper>
    </>
  );
}

export default App;
