import styled from "styled-components";
import HeaderMobile from "./Components/HeaderMobile";
import HeaderPc from "./Components/HeaderPc";
import MainVideo from "./Components/MainVideo";

const StyledHeader = styled.div`
  @media (max-width: 768px) {
    .pc-header {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .mobile-header {
      display: none;
    }
  }
`;

function App() {
  return (
    <div>
      <StyledHeader>
        <HeaderPc className="pc-header" />
        <HeaderMobile className="mobile-header" />
      </StyledHeader>

      <MainVideo />
    </div>
  );
}

export default App;
