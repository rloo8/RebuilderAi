import { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderBox = styled.header`
  z-index: 999;
  background: ${(props) => (props.scrolled === "black" ? "#000" : "#fff")};
  width: 100%;
  position: fixed;
  top: 0;
  display: ${(props) => (props.scrolled === "none" ? "none" : "flex")};
  transition: all 0.2s ease-in-out 0s;
`;

const HeaderCont = styled.div`
  width: 100%;
  position: fixed;
  top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  transition: all 0.2s ease-in-out 0s;
  path {
    fill: ${(props) => (props.scrolled === "black" ? "#fff" : "#000")};
  }
  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;
const HeaderListBox = styled.ul`
  color: ${(props) => (props.scrolled === "black" ? "#fff" : "#000")};
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  padding-top: 100px;
`;
const HeaderList = styled.li`
  font-weight: 500;
  font-size: 16px;
  transition: all 0.2s ease-in-out 0s;
  padding: 0 60px;
  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

function HeaderMobile({ className }) {
  const [scrolled, setScrolled] = useState("black");
  const [OpenedMenu, setOpenedMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setScrolled("white");
      } else {
        setScrolled("black");
      }
      if (scrollPosition > 900) {
        setScrolled("none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onBtnClick = () => {
    setOpenedMenu(!OpenedMenu);
  };
  return (
    <HeaderBox
      scrolled={scrolled}
      className={className}
      style={OpenedMenu ? { height: "350px" } : { height: "64px" }}
    >
      <HeaderCont scrolled={scrolled}>
        <svg
          width="125"
          height="100%"
          viewBox="0 0 147 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6.41609L13.043 0L19.5657 3.20682V5.62111L9.13134 10.7555V27.5845L6.52274 28.8687L0 25.6619L3.91414 16.9367L0 15.0116V6.41609ZM10.4336 11.5474L23.4791 5.13126L29.9993 8.33808V15.7815L26.0877 17.7042L29.9993 19.6292V27.5839L16.9563 34L10.4336 30.7932V11.5474Z"
            fill="white"
          ></path>
          <path
            d="M41.82 9.34H46.8C47.7067 9.34 48.4533 9.46667 49.04 9.72C49.6267 9.96 50.0867 10.2733 50.42 10.66C50.7667 11.0333 51.0067 11.46 51.14 11.94C51.2733 12.4067 51.34 12.86 51.34 13.3C51.34 13.7533 51.26 14.1933 51.1 14.62C50.94 15.0333 50.7067 15.4133 50.4 15.76C50.1067 16.0933 49.74 16.38 49.3 16.62C48.8733 16.8467 48.3933 16.9867 47.86 17.04L51.88 23.5H49.48L45.88 17.26H43.74V23.5H41.82V9.34ZM43.74 15.58H46.26C46.6333 15.58 47 15.5533 47.36 15.5C47.7333 15.4333 48.06 15.32 48.34 15.16C48.6333 15 48.8667 14.7733 49.04 14.48C49.2133 14.1733 49.3 13.78 49.3 13.3C49.3 12.82 49.2133 12.4333 49.04 12.14C48.8667 11.8333 48.6333 11.6 48.34 11.44C48.06 11.28 47.7333 11.1733 47.36 11.12C47 11.0533 46.6333 11.02 46.26 11.02H43.74V15.58ZM54.9466 19.42C54.9466 19.8333 55.0332 20.2133 55.2066 20.56C55.3932 20.8933 55.6332 21.18 55.9266 21.42C56.2199 21.66 56.5599 21.8467 56.9466 21.98C57.3332 22.1133 57.7332 22.18 58.1466 22.18C58.7066 22.18 59.1932 22.0533 59.6066 21.8C60.0199 21.5333 60.3999 21.1867 60.7466 20.76L62.1066 21.8C61.1066 23.0933 59.7066 23.74 57.9066 23.74C57.1599 23.74 56.4799 23.6133 55.8666 23.36C55.2666 23.1067 54.7532 22.76 54.3266 22.32C53.9132 21.8667 53.5932 21.34 53.3666 20.74C53.1399 20.1267 53.0266 19.4667 53.0266 18.76C53.0266 18.0533 53.1466 17.4 53.3866 16.8C53.6399 16.1867 53.9799 15.66 54.4066 15.22C54.8466 14.7667 55.3666 14.4133 55.9666 14.16C56.5666 13.9067 57.2199 13.78 57.9266 13.78C58.7666 13.78 59.4732 13.9267 60.0466 14.22C60.6332 14.5133 61.1132 14.9 61.4866 15.38C61.8599 15.8467 62.1266 16.38 62.2866 16.98C62.4599 17.5667 62.5466 18.1667 62.5466 18.78V19.42H54.9466ZM60.6266 17.98C60.6132 17.58 60.5466 17.2133 60.4266 16.88C60.3199 16.5467 60.1532 16.26 59.9266 16.02C59.6999 15.7667 59.4132 15.5733 59.0666 15.44C58.7332 15.2933 58.3399 15.22 57.8866 15.22C57.4466 15.22 57.0399 15.3067 56.6666 15.48C56.3066 15.64 55.9999 15.8533 55.7466 16.12C55.4932 16.3867 55.2932 16.6867 55.1466 17.02C55.0132 17.34 54.9466 17.66 54.9466 17.98H60.6266ZM64.6998 8.38H66.4998V15.38H66.5398C66.8598 14.8867 67.3198 14.5 67.9198 14.22C68.5198 13.9267 69.1598 13.78 69.8398 13.78C70.5732 13.78 71.2332 13.9067 71.8198 14.16C72.4198 14.4133 72.9265 14.7667 73.3398 15.22C73.7665 15.66 74.0932 16.1867 74.3198 16.8C74.5465 17.4 74.6598 18.0533 74.6598 18.76C74.6598 19.4667 74.5465 20.12 74.3198 20.72C74.0932 21.32 73.7665 21.8467 73.3398 22.3C72.9265 22.7533 72.4198 23.1067 71.8198 23.36C71.2332 23.6133 70.5732 23.74 69.8398 23.74C69.1998 23.74 68.5732 23.6 67.9598 23.32C67.3598 23.04 66.8865 22.6467 66.5398 22.14H66.4998V23.5H64.6998V8.38ZM69.6198 22.06C70.0998 22.06 70.5332 21.98 70.9198 21.82C71.3065 21.6467 71.6332 21.42 71.8998 21.14C72.1665 20.8467 72.3732 20.5 72.5198 20.1C72.6665 19.6867 72.7398 19.24 72.7398 18.76C72.7398 18.28 72.6665 17.84 72.5198 17.44C72.3732 17.0267 72.1665 16.68 71.8998 16.4C71.6332 16.1067 71.3065 15.88 70.9198 15.72C70.5332 15.5467 70.0998 15.46 69.6198 15.46C69.1398 15.46 68.7065 15.5467 68.3198 15.72C67.9332 15.88 67.6065 16.1067 67.3398 16.4C67.0732 16.68 66.8665 17.0267 66.7198 17.44C66.5732 17.84 66.4998 18.28 66.4998 18.76C66.4998 19.24 66.5732 19.6867 66.7198 20.1C66.8665 20.5 67.0732 20.8467 67.3398 21.14C67.6065 21.42 67.9332 21.6467 68.3198 21.82C68.7065 21.98 69.1398 22.06 69.6198 22.06ZM85.3264 23.5H83.5264V22.04H83.4864C83.2597 22.5467 82.8664 22.96 82.3064 23.28C81.7464 23.5867 81.0997 23.74 80.3664 23.74C79.8997 23.74 79.4597 23.6667 79.0464 23.52C78.6331 23.3867 78.2664 23.1733 77.9464 22.88C77.6397 22.5867 77.3931 22.2133 77.2064 21.76C77.0197 21.2933 76.9264 20.7467 76.9264 20.12V14.02H78.7264V19.62C78.7264 20.06 78.7864 20.44 78.9064 20.76C79.0264 21.0667 79.1864 21.32 79.3864 21.52C79.5864 21.7067 79.8131 21.8467 80.0664 21.94C80.3331 22.02 80.6064 22.06 80.8864 22.06C81.2597 22.06 81.6064 22 81.9264 21.88C82.2464 21.76 82.5264 21.5733 82.7664 21.32C83.0064 21.0533 83.1931 20.72 83.3264 20.32C83.4597 19.92 83.5264 19.4467 83.5264 18.9V14.02H85.3264V23.5ZM88.1797 14.02H89.9797V23.5H88.1797V14.02ZM87.7597 10.62C87.7597 10.26 87.8864 9.95333 88.1397 9.7C88.4064 9.43333 88.7197 9.3 89.0797 9.3C89.4397 9.3 89.7464 9.43333 89.9997 9.7C90.2664 9.95333 90.3997 10.26 90.3997 10.62C90.3997 10.98 90.2664 11.2933 89.9997 11.56C89.7464 11.8133 89.4397 11.94 89.0797 11.94C88.7197 11.94 88.4064 11.8133 88.1397 11.56C87.8864 11.2933 87.7597 10.98 87.7597 10.62ZM92.9844 8.38H94.7844V23.5H92.9844V8.38ZM107.149 23.5H105.349V22.14H105.309C104.962 22.6467 104.482 23.04 103.869 23.32C103.269 23.6 102.649 23.74 102.009 23.74C101.276 23.74 100.609 23.6133 100.009 23.36C99.4224 23.1067 98.9157 22.7533 98.4891 22.3C98.0757 21.8467 97.7557 21.32 97.5291 20.72C97.3024 20.12 97.1891 19.4667 97.1891 18.76C97.1891 18.0533 97.3024 17.4 97.5291 16.8C97.7557 16.1867 98.0757 15.66 98.4891 15.22C98.9157 14.7667 99.4224 14.4133 100.009 14.16C100.609 13.9067 101.276 13.78 102.009 13.78C102.689 13.78 103.329 13.9267 103.929 14.22C104.529 14.5 104.989 14.8867 105.309 15.38H105.349V8.38H107.149V23.5ZM102.229 22.06C102.709 22.06 103.142 21.98 103.529 21.82C103.916 21.6467 104.242 21.42 104.509 21.14C104.776 20.8467 104.982 20.5 105.129 20.1C105.276 19.6867 105.349 19.24 105.349 18.76C105.349 18.28 105.276 17.84 105.129 17.44C104.982 17.0267 104.776 16.68 104.509 16.4C104.242 16.1067 103.916 15.88 103.529 15.72C103.142 15.5467 102.709 15.46 102.229 15.46C101.749 15.46 101.316 15.5467 100.929 15.72C100.542 15.88 100.216 16.1067 99.9491 16.4C99.6824 16.68 99.4757 17.0267 99.3291 17.44C99.1824 17.84 99.1091 18.28 99.1091 18.76C99.1091 19.24 99.1824 19.6867 99.3291 20.1C99.4757 20.5 99.6824 20.8467 99.9491 21.14C100.216 21.42 100.542 21.6467 100.929 21.82C101.316 21.98 101.749 22.06 102.229 22.06ZM111.236 19.42C111.236 19.8333 111.322 20.2133 111.496 20.56C111.682 20.8933 111.922 21.18 112.216 21.42C112.509 21.66 112.849 21.8467 113.236 21.98C113.622 22.1133 114.022 22.18 114.436 22.18C114.996 22.18 115.482 22.0533 115.896 21.8C116.309 21.5333 116.689 21.1867 117.036 20.76L118.396 21.8C117.396 23.0933 115.996 23.74 114.196 23.74C113.449 23.74 112.769 23.6133 112.156 23.36C111.556 23.1067 111.042 22.76 110.616 22.32C110.202 21.8667 109.882 21.34 109.656 20.74C109.429 20.1267 109.316 19.4667 109.316 18.76C109.316 18.0533 109.436 17.4 109.676 16.8C109.929 16.1867 110.269 15.66 110.696 15.22C111.136 14.7667 111.656 14.4133 112.256 14.16C112.856 13.9067 113.509 13.78 114.216 13.78C115.056 13.78 115.762 13.9267 116.336 14.22C116.922 14.5133 117.402 14.9 117.776 15.38C118.149 15.8467 118.416 16.38 118.576 16.98C118.749 17.5667 118.836 18.1667 118.836 18.78V19.42H111.236ZM116.916 17.98C116.902 17.58 116.836 17.2133 116.716 16.88C116.609 16.5467 116.442 16.26 116.216 16.02C115.989 15.7667 115.702 15.5733 115.356 15.44C115.022 15.2933 114.629 15.22 114.176 15.22C113.736 15.22 113.329 15.3067 112.956 15.48C112.596 15.64 112.289 15.8533 112.036 16.12C111.782 16.3867 111.582 16.6867 111.436 17.02C111.302 17.34 111.236 17.66 111.236 17.98H116.916ZM120.989 14.02H122.789V15.48H122.829C122.949 15.2267 123.109 15 123.309 14.8C123.509 14.5867 123.729 14.4067 123.969 14.26C124.222 14.1133 124.496 14 124.789 13.92C125.082 13.8267 125.376 13.78 125.669 13.78C125.962 13.78 126.229 13.82 126.469 13.9L126.389 15.84C126.242 15.8 126.096 15.7667 125.949 15.74C125.802 15.7133 125.656 15.7 125.509 15.7C124.629 15.7 123.956 15.9467 123.489 16.44C123.022 16.9333 122.789 17.7 122.789 18.74V23.5H120.989V14.02ZM133.291 9.34H135.031L141.091 23.5H138.851L137.431 20H130.691L129.291 23.5H127.051L133.291 9.34ZM136.731 18.32L134.091 11.82H134.051L131.371 18.32H136.731ZM142.933 9.34H144.853V23.5H142.933V9.34Z"
            fill="white"
          ></path>
        </svg>

        <div style={{ cursor: "pointer" }} onClick={onBtnClick}>
          {OpenedMenu ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2786_9881)">
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2786_9881">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                fill="white"
              ></path>
            </svg>
          )}
        </div>
      </HeaderCont>

      {OpenedMenu ? (
        <HeaderListBox scrolled={scrolled}>
          <HeaderList>Service</HeaderList>
          <HeaderList>Technology</HeaderList>
          <HeaderList>About</HeaderList>
          <HeaderList>Contact</HeaderList>
          <HeaderList>KOR</HeaderList>
        </HeaderListBox>
      ) : null}
    </HeaderBox>
  );
}

export default HeaderMobile;