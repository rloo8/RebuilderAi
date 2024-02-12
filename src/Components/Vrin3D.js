import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: linear-gradient(rgb(0, 0, 0) 65%, rgb(0, 0, 229) 35%);
  overflow: hidden;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: 280px;
  }
  @media screen and (max-width: 768px) {
    height: 160px;
  }
`;

const Cont = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  z-index: 1;
  gap: 48px;
  padding: 0 30px;
  color: #fff;

  @media screen and (max-width: 600px) {
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const VrinBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 601px) and (max-width: 768px) {
    gap: 5px;
  }
`;
const VrinLogoBox = styled.div`
  display: flex;
  gap: 15px;
  div {
    display: flex;
    flex-direction: column;
    span {
      font-weight: 600;
      &:first-child {
        color: #5c6cfa;
        font-size: 20px;
      }
      &:last-child {
        font-size: 55px;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    svg {
      width: 65px;
      height: 65px;
    }
    div {
      span {
        &:first-child {
          font-size: 14px;
        }
        &:last-child {
          font-size: 40px;
        }
      }
    }
  }
  @media screen and (min-width: 601px) and (max-width: 768px) {
    svg {
      width: 45px;
      height: 45px;
    }
    div {
      span {
        &:first-child {
          font-size: 10px;
        }
        &:last-child {
          font-size: 27px;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    justify-content: center;
    svg {
      display: none;
    }
    div {
      span {
        &:first-child {
          display: none;
        }
        &:last-child {
          font-size: 23px;
        }
      }
    }
  }
`;
const VrinSpan = styled.div`
  font-size: 23px;
  font-weight: 500;
  line-height: 1.3;
  color: #bdc1c7;
  white-space: pre-line;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
  }
  @media screen and (min-width: 601px) and (max-width: 768px) {
    font-size: 11px;
  }
  @media screen and (max-width: 600px) {
    font-size: 10px;
    text-align: center;
  }
`;

const MoreBtn = styled.div`
  width: fit-content;
  display: flex;
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #3737cd;
  background-color: #fff;
  margin-top: 40px;
  padding: 13px;
  border-radius: 5px;
  cursor: pointer;
  svg {
    width: 24px;
    fill: #3737cd;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
    margin-top: 30px;
    padding: 10px 13px;
    svg {
      width: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-top: 15px;
    padding: 6px 8px;
    svg {
      width: 13px;
    }
  }
  @media screen and (max-width: 600px) {
    background: none;
    color: #fff;
    width: 100%;
    justify-content: center;
    svg {
      width: 11px;
      fill: #fff;
    }
  }
`;

const BackgroundImg = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background: url("https://rloo8.github.io/RebuilderAi/image/c9ebc10e9f846eafcfc76a535b9f7d4d.png")
    0% 0% / cover no-repeat;

  @media screen and (max-width: 600px) {
    background: url("https://rloo8.github.io/RebuilderAi/image/d0f7636d64424351b5ccfb5deb1a223a.png")
      0% 0% / cover no-repeat;
  }
`;

function Vrin3D() {
  const containerRef = useRef(null);
  const [backgroundPositionY, setBackgroundPositionY] = useState("0%");

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      setBackgroundPositionY(`${(window.innerHeight - containerTop) / 15}%`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <Cont>
        <VrinBox>
          <VrinLogoBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 104 104"
              fill="none"
            >
              <rect
                x="1.44444"
                y="1.44444"
                width="101.111"
                height="101.111"
                rx="22.2222"
                fill="url(#paint0_linear_509_3745)"
              ></rect>
              <rect
                x="1.44444"
                y="1.44444"
                width="101.111"
                height="101.111"
                rx="22.2222"
                stroke="#282D32"
                strokeWidth="1.11111"
              ></rect>
              <path
                d="M90.3675 72.6545C91.3741 74.1471 90.3047 76.1582 88.5044 76.1582L77.0715 76.1582C76.3244 76.1582 75.6261 75.7869 75.2084 75.1675L45.6552 31.3473C44.6486 29.8547 45.718 27.8436 47.5183 27.8436L58.9513 27.8436C59.6984 27.8436 60.3966 28.2149 60.8143 28.8343L90.3675 72.6545Z"
                fill="white"
              ></path>
              <g filter="url(#filter0_d_509_3745)">
                <path
                  d="M60.707 53.6971C60.707 54.9382 59.7009 55.9443 58.4598 55.9443L57.3362 55.9443C56.0952 55.9443 55.0891 54.9382 55.0891 53.6971L55.0891 30.6522C55.0891 29.4111 56.0952 28.405 57.3362 28.405L58.4598 28.405C59.7009 28.405 60.707 29.4111 60.707 30.6522L60.707 53.6971Z"
                  fill="white"
                ></path>
              </g>
              <path
                d="M60.707 73.911C60.707 75.1521 59.7009 76.1582 58.4598 76.1582L47.2239 76.1582C45.9828 76.1582 44.9767 75.1521 44.9767 73.911L44.9767 30.0908C44.9767 28.8497 45.9828 27.8436 47.2239 27.8436L59.5834 27.8436C60.204 27.8436 60.707 28.3466 60.707 28.9672L60.707 73.911Z"
                fill="white"
              ></path>
              <g filter="url(#filter1_d_509_3745)">
                <path
                  d="M58.3286 72.65C59.3402 74.1421 58.2713 76.1582 56.4686 76.1582L53.0885 76.1582C52.3433 76.1582 51.6466 75.7888 51.2284 75.172L37.2427 54.5428C36.2311 53.0507 37.3 51.0346 39.1028 51.0346L42.4829 51.0346C43.2281 51.0346 43.9248 51.404 44.3429 52.0208L58.3286 72.65Z"
                  fill="white"
                ></path>
              </g>
              <path
                d="M59.8049 74.4064C60.3082 75.1526 59.7734 76.1582 58.8733 76.1582L45.3273 76.1582C44.5802 76.1582 43.882 75.7869 43.4643 75.1675L13.9111 31.3473C12.9045 29.8547 13.9739 27.8436 15.7742 27.8436L27.2071 27.8436C27.9542 27.8436 28.6525 28.2149 29.0702 28.8343L59.8049 74.4064Z"
                fill="white"
              ></path>
              <defs>
                <filter
                  id="filter0_d_509_3745"
                  x="50.5955"
                  y="22.7873"
                  width="16.8531"
                  height="38.775"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dx="1.1236"></feOffset>
                  <feGaussianBlur stdDeviation="2.80899"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0838542 0 0 0 0 0.0838542 0 0 0 0 0.670833 0 0 0 0.5 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_509_3745"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_509_3745"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter1_d_509_3745"
                  x="31.7954"
                  y="45.4162"
                  width="33.1031"
                  height="36.36"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dx="0.561798"></feOffset>
                  <feGaussianBlur stdDeviation="2.80899"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0 0.670588 0 0 0 0.7 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_509_3745"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_509_3745"
                    result="shape"
                  ></feBlend>
                </filter>
                <linearGradient
                  id="paint0_linear_509_3745"
                  x1="42.8333"
                  y1="44.5"
                  x2="26.1667"
                  y2="102"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#05070E"></stop>
                  <stop offset="1" stopColor="#000096"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{t("AI로 만드는 3D 모델")}</span>
              <span>VRIN 3D</span>
            </div>
          </VrinLogoBox>
          <VrinSpan>
            {t(
              "인공지능으로 자동 생성되는 3D 모델과\n손쉬운 편집을 경험해보세요."
            )}
          </VrinSpan>
        </VrinBox>
        <MoreBtn>
          {t("더 알아보기")}
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            datatestid="ArrowForwardIosIcon"
          >
            <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
          </svg>
        </MoreBtn>
      </Cont>

      <BackgroundImg style={{ backgroundPositionY }} />
    </Container>
  );
}

export default Vrin3D;
