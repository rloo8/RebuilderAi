import { useEffect, useState } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: ${(props) => (props.scrolled >= 400 ? "relative" : "fixed")};
  height: ${(props) => (props.scrolled >= 400 ? "150vh" : "100vh")};
  width: 100%;
  object-fit: cover;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 100;
  overflow: hidden;
  background: #000;
`;
const Video = styled.video`
  width: ${(props) => 640 + props.scrolled * 10}px;
  filter: blur(${(props) => props.scrolled / 5}px);
`;

const MainText = styled.div`
  color: #fff;
  text-align: center;
  position: absolute;
  font-weight: 800;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 100px;

  h2 {
    font-size: 95px;
  }
  h3 {
    font-size: 70px;
  }
  h4 {
    font-size: 50px;
  }
`;

function MainVideo() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <VideoContainer scrolled={scrolled}>
        <Video loop muted autoPlay scrolled={scrolled}>
          <source src="/image/main_video.mp4" type="video/mp4" />
        </Video>
        <MainText>
          {scrolled >= 300 ? (
            <>
              <h4>3D Digital Transformation</h4>
              <h2>
                The Next Generation of
                <br />
                Digital Transformation
              </h2>
            </>
          ) : (
            <h3>3D Digital Transformation</h3>
          )}
        </MainText>
      </VideoContainer>
      <img src="/image/2ea9351f3272618ef89279bf26b522be.png" />
      <img src="/image/2ea9351f3272618ef89279bf26b522be.png" />
      <img src="/image/2ea9351f3272618ef89279bf26b522be.png" />
      <img src="/image/2ea9351f3272618ef89279bf26b522be.png" />
      <img src="/image/2ea9351f3272618ef89279bf26b522be.png" />
      <img src="/image/2ea9351f3272618ef89279bf26b522be.png" />
      <img src="/image/2ea9351f3272618ef89279bf26b522be.png" />
      <img src="/image/2ea9351f3272618ef89279bf26b522be.png" />
      <img src="/image/2ea9351f3272618ef89279bf26b522be.png" />
      <img src="/image/2ea9351f3272618ef89279bf26b522be.png" />
    </div>
  );
}

export default MainVideo;
