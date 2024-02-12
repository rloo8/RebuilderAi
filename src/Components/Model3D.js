import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "../i18n/i18n";
import styled from "styled-components";
import i18n from "../i18n/i18n";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 0 30px;
  padding-bottom: 100px;
  @media screen and (min-width: 601px) and (max-width: 768px) {
    padding: 0 60px;
    padding-bottom: 100px;
  }
`;
const StickyBox = styled.div`
  position: sticky;
  top: 0px;
  height: fit-content;
  padding: 120px 0px 190px;
  margin-right: 40px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const StickyMenu = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  span {
    &:first-child {
      font-size: 25px;
    }
    font-size: 50px;
    font-weight: 600;
    &.english {
      font-size: 35px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    span {
      font-size: 38px;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 768px) {
    width: 80px;
    gap: 10px;
    span {
      &:first-child {
        font-size: 17px;
      }
      font-size: 22px;
      &.english {
        font-size: 15px;
      }
    }
  }
`;
const ContBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Cont = styled.div`
  padding: 120px 0;
  span {
    font-size: 25px;
    font-weight: 500;
    line-height: 1.7em;
    white-space: pre-line;
  }
  img {
    padding-top: 40px;
    width: 100%;
  }
  div {
    display: flex;
    gap: 3%;
    padding-top: 20px;
    position: relative;
    svg {
      width: 30px;
      z-index: 100;
      cursor: pointer;
    }
    video {
      width: 100%;
    }
    img {
      width: 100%;
      position: absolute;
      padding-top: 0;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      @media screen and (min-width: 601px) {
        &:hover {
          opacity: 1;
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    padding: 120px 0 0 0;
    span {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 768px) {
    padding: 120px 0 0 0;
    span {
      font-size: 14px;
    }
    img {
      padding-top: 25px;
    }
    div {
      padding-top: 25px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 80px 0 0 0;
    span {
      font-size: 14px;
    }
    img {
      padding-top: 15px;
    }
    div {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 0;
    }
  }
`;

function Model3D() {
  const [mobile, setMobile] = useState(window.innerWidth);
  const [isTop, setIsTop] = useState(false);
  const [visibleImgIndex, setVisibleImgIndex] = useState(null);
  const contentRef = useRef(null);

  const { t } = useTranslation();
  const isEnglish = i18n.language === "en";

  useEffect(() => {
    const handleWidth = () => {
      setMobile(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const contentPosition = contentRef.current.offsetTop;

      if (scrollPosition >= contentPosition) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClick = (index) => {
    setVisibleImgIndex(index === visibleImgIndex ? null : index);
  };

  return (
    <Container>
      <StickyBox>
        <StickyMenu>
          <span>3D model</span>
          <span
            className={(isEnglish && "english").toString()}
            style={{ color: isTop ? "#BDC1C7" : "#000" }}
          >
            {t("최적화")}
          </span>
          <span
            className={(isEnglish && "english").toString()}
            style={{ color: isTop ? "#000" : "#BDC1C7" }}
          >
            {t("사용하기")}
          </span>
        </StickyMenu>
      </StickyBox>
      <ContBox>
        <Cont>
          {mobile <= 600 ? (
            <div
              style={{
                flexDirection: "column",
                textAlign: "center",
                gap: "20px",
              }}
            >
              <span style={{ fontSize: "16px", fontWeight: 600 }}>
                {t("3D 모델 최적화")}
              </span>
              <span>
                {t(
                  "3D 모델의 로딩 시간을 최소화하고 용량 제한 없이\n다양한 플랫폼에서 사용해보세요."
                )}
              </span>
            </div>
          ) : (
            <span>
              {t(
                "3D 파일의 품질을 유지한 채 원하는 용량과 폴리곤으로 최적화하여 제공합니다."
              )}
              <br />
              {t(
                "로딩 시간을 최소화하고 용량 제한 없이 다양한 플랫폼에 업로드 해보세요."
              )}
            </span>
          )}

          <img src="https://rloo8.github.io/RebuilderAi/image/9999538286b5d557473fe73733e95acc.png" />
        </Cont>

        <Cont ref={contentRef}>
          {mobile <= 600 ? (
            <div
              style={{
                textAlign: "center",
                gap: "20px",
              }}
            >
              <span style={{ fontSize: "16px", fontWeight: 600 }}>
                {t("3D 모델 사용하기")}
              </span>
              <span>
                {t(
                  "리빌더AI의 3D 뷰어를 이용하여, 간편하게\n색감, 그림자, 빛의 세기를 원하는 대로 조절할 수 있습니다."
                )}
              </span>

              <div>
                <div
                  onClick={() => onClick(0)}
                  style={{ position: "absolute", bottom: 15, right: 15 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#777"
                    style={{
                      display: visibleImgIndex === 0 ? "none" : "block",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    style={{
                      display: visibleImgIndex === 0 ? "block" : "none",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>

                <video loop muted autoPlay>
                  <source
                    src={`https://rloo8.github.io/RebuilderAi/image/${t(
                      "service_video_mobile_ko"
                    )}.mp4`}
                    type="video/mp4"
                  />
                </video>

                <img
                  src={`https://rloo8.github.io/RebuilderAi/image/${t(
                    "service_img_mobile_ko"
                  )}.png`}
                  style={{ opacity: visibleImgIndex === 0 ? 1 : 0 }}
                />
              </div>

              <span>
                {t(
                  "3D 제품에 태그를 추가하여 공유할 수 있으며\n편집한 3D 뷰어는 웹 쇼핑몰에도 사용할 수 있습니다."
                )}
              </span>

              <div>
                <div
                  onClick={() => onClick(1)}
                  style={{ position: "absolute", bottom: 15, right: 15 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#777"
                    style={{
                      display: visibleImgIndex === 1 ? "none" : "block",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    style={{
                      display: visibleImgIndex === 1 ? "block" : "none",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>

                <video loop muted autoPlay>
                  <source
                    src={`https://rloo8.github.io/RebuilderAi/image/${t(
                      "service_video2_mobile_ko"
                    )}.mp4`}
                    type="video/mp4"
                  />
                </video>

                <img
                  src={`https://rloo8.github.io/RebuilderAi/image/${t(
                    "service_img2_mobile_ko"
                  )}.png`}
                  style={{ opacity: visibleImgIndex === 1 ? 1 : 0 }}
                />
              </div>
            </div>
          ) : (
            <>
              <span>
                {t(
                  "리빌더AI의 3D 뷰어를 이용하여, 간편하게 색감, 그림자, 빛의 세기를 원하는 대로 조절할 수 있습니다."
                )}
                <br />
                {t(
                  "3D 제품에 태그를 추가하여 공유할 수 있으며 편집한 3D 뷰어는 웹 쇼핑몰에도 사용할 수 있습니다."
                )}
              </span>

              <div>
                <div key={t("service_video_pc_ko")}>
                  <video loop muted autoPlay>
                    <source
                      src={`https://rloo8.github.io/RebuilderAi/image/${t(
                        "service_video_pc_ko"
                      )}.mp4`}
                      type="video/mp4"
                    />
                  </video>
                  <img
                    src={`https://rloo8.github.io/RebuilderAi/image/${t(
                      "service_img_pc_ko"
                    )}.png`}
                  />
                </div>

                <div key={t("service_video2_pc_ko")}>
                  <video loop muted autoPlay>
                    <source
                      src={`https://rloo8.github.io/RebuilderAi/image/${t(
                        "service_video2_pc_ko"
                      )}.mp4`}
                      type="video/mp4"
                    />
                  </video>
                  <img
                    src={`https://rloo8.github.io/RebuilderAi/image/${t(
                      "service_img2_pc_ko"
                    )}.png`}
                  />
                </div>
              </div>
            </>
          )}
        </Cont>
      </ContBox>
    </Container>
  );
}

export default Model3D;
