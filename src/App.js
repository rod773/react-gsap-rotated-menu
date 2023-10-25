import Header from "./components/Header";
import styled from "styled-components";

const StyleMainWrapper = styled.div`
  position: relative;
`;

function App() {
  return (
    <>
      <StyleMainWrapper>
        <Header />
      </StyleMainWrapper>
    </>
  );
}

export default App;
