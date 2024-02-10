import { useEffect, useState } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: ${(props) => (props.scrolled >= 400 ? "relative" : "fixed")};
  height: ${(props) => (props.scrolled >= 400 ? "150vh" : "100vh")};
  width: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
  overflow: hidden;
  background: #000;
`;
const Video = styled.video`
  width: ${(props) => 640 + props.scrolled * 10}px;
  @media screen and (max-width: 600px) {
    width: ${(props) => 320 + props.scrolled * 10}px;
  }
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

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    gap: 60px;
    h2 {
      font-size: 60px;
    }
    h3 {
      font-size: 57px;
    }
    h4 {
      font-size: 30px;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 768px) {
    gap: 45px;
    h2 {
      font-size: 50px;
    }
    h3 {
      font-size: 45px;
    }
    h4 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 600px) {
    gap: 20px;
    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 23px;
    }
    h4 {
      font-size: 18px;
    }
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
    </div>
  );
}

export default MainVideo;
