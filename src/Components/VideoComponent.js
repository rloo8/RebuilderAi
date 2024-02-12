import { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 30px;
  @media screen and (min-width: 1280px) {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  span {
    font-weight: 500;
    text-align: center;
    &:first-child {
      font-weight: 600;
      font-size: 45px;
    }
    &:last-child {
      font-size: 22px;
      white-space: pre-line;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    span {
      text-align: left;
    }
  }
  @media screen and (max-width: 768px) {
    span {
      &:first-child {
        font-size: 22px;
      }
      &:last-child {
        font-size: 14px;
      }
    }
  }
`;

const VideoBox = styled.div`
  position: relative;
  margin-top: 70px;
  @media screen and (min-width: 1280px) {
    margin-top: 0;
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;
const Video = styled.video`
  width: 100%;
`;
const PlayButton = styled.div`
  position: absolute;
  bottom: 25px;
  right: 25px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    svg {
      width: 25px;
    }
  }
`;

function VideoComponent({ title, description, videoSource }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <Container>
      <TextBox>
        <span>{title}</span>
        <span>{description}</span>
      </TextBox>

      <VideoBox>
        <Video loop muted autoPlay playsInline ref={videoRef}>
          <source src={videoSource} type="video/mp4" />
        </Video>
        <PlayButton onClick={togglePlay}>
          {isPlaying ? (
            <svg
              width="38"
              height="100%"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1731 26.4999H16.4423V11.5H14.1731V26.4999ZM21.5577 26.4999H23.8268V11.5H21.5577V26.4999ZM19.0033 37.9999C16.3959 37.9999 13.9393 37.5012 11.6335 36.5039C9.32758 35.5066 7.3111 34.1447 5.584 32.4184C3.85687 30.692 2.49442 28.6764 1.49665 26.3716C0.498884 24.0667 0 21.6106 0 19.0033C0 16.3754 0.498667 13.9054 1.496 11.5931C2.49333 9.2808 3.85517 7.26943 5.5815 5.559C7.30787 3.84853 9.32347 2.49442 11.6283 1.49665C13.9332 0.498883 16.3893 0 18.9966 0C21.6245 0 24.0945 0.498667 26.4068 1.496C28.7191 2.49333 30.7305 3.84683 32.4409 5.5565C34.1514 7.2662 35.5055 9.27668 36.5033 11.588C37.501 13.8992 37.9999 16.3687 37.9999 18.9966C37.9999 21.604 37.5012 24.0606 36.5039 26.3665C35.5066 28.6723 34.1531 30.6888 32.4434 32.4159C30.7337 34.143 28.7232 35.5055 26.412 36.5033C24.1007 37.501 21.6312 37.9999 19.0033 37.9999ZM19 35.7307C23.6564 35.7307 27.6089 34.1012 30.8577 30.8423C34.1064 27.5833 35.7307 23.6359 35.7307 19C35.7307 14.3436 34.1064 10.391 30.8577 7.14225C27.6089 3.89355 23.6564 2.2692 19 2.2692C14.3641 2.2692 10.4166 3.89355 7.15765 7.14225C3.89868 10.391 2.2692 14.3436 2.2692 19C2.2692 23.6359 3.89868 27.5833 7.15765 30.8423C10.4166 34.1012 14.3641 35.7307 19 35.7307Z"
                fill="#6F757B"
              ></path>
            </svg>
          ) : (
            <svg
              width="38"
              height="100%"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6115 26.7115L26.7115 19L14.6115 11.2885V26.7115ZM19.0033 37.9999C16.3959 37.9999 13.9393 37.5012 11.6335 36.5039C9.32758 35.5066 7.3111 34.1447 5.584 32.4184C3.85687 30.692 2.49442 28.6764 1.49665 26.3716C0.498884 24.0667 0 21.6106 0 19.0033C0 16.3754 0.498667 13.9054 1.496 11.5931C2.49333 9.2808 3.85517 7.26943 5.5815 5.559C7.30787 3.84853 9.32347 2.49442 11.6283 1.49665C13.9332 0.498883 16.3893 0 18.9966 0C21.6245 0 24.0945 0.498667 26.4068 1.496C28.7191 2.49333 30.7305 3.84683 32.4409 5.5565C34.1514 7.2662 35.5055 9.27668 36.5033 11.588C37.501 13.8992 37.9999 16.3687 37.9999 18.9966C37.9999 21.604 37.5012 24.0606 36.5039 26.3665C35.5066 28.6723 34.1531 30.6888 32.4434 32.4159C30.7337 34.143 28.7232 35.5055 26.412 36.5033C24.1007 37.501 21.6312 37.9999 19.0033 37.9999ZM19 35.7307C23.6564 35.7307 27.6089 34.1012 30.8577 30.8423C34.1064 27.5833 35.7307 23.6359 35.7307 19C35.7307 14.3436 34.1064 10.391 30.8577 7.14225C27.6089 3.89355 23.6564 2.2692 19 2.2692C14.3641 2.2692 10.4166 3.89355 7.15765 7.14225C3.89868 10.391 2.2692 14.3436 2.2692 19C2.2692 23.6359 3.89868 27.5833 7.15765 30.8423C10.4166 34.1012 14.3641 35.7307 19 35.7307Z"
                fill="#6F757B"
              ></path>
            </svg>
          )}
        </PlayButton>
      </VideoBox>
    </Container>
  );
}
export default VideoComponent;
