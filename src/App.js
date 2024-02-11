import styled from "styled-components";
import HeaderMobile from "./Components/HeaderMobile";
import HeaderPc from "./Components/HeaderPc";
import MainVideo from "./Components/MainVideo";
import Model3D from "./Components/Model3D";
import Vrin3D from "./Components/Vrin3D";
import SlideCont from "./Components/Commerce3D";

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
    <div style={{ height: "200vh" }}>
      <StyledHeader>
        <HeaderPc className="pc-header" />
        <HeaderMobile className="mobile-header" />
      </StyledHeader>

      <MainVideo />
      <Model3D />
      <Vrin3D />
      <SlideCont />
    </div>
  );
}

export default App;
