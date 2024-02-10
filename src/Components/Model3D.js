import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
  }
  img {
    padding-top: 60px;
    width: 100%;
  }
  div {
    display: flex;
    gap: 2%;
    padding-top: 60px;
    video {
      width: 49%;
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
      padding-top: 0;
      video {
        margin: 0 auto;
        width: 70%;
      }
    }
  }
`;

function Model3D() {
  const [mobile, setMobile] = useState(window.innerWidth);
  const [isTop, setIsTop] = useState(false);
  const contentRef = useRef(null);

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

  return (
    <Container>
      <StickyBox>
        <StickyMenu>
          <span>3D model</span>
          <span style={{ color: isTop ? "#BDC1C7" : "#000" }}>최적화</span>
          <span style={{ color: isTop ? "#000" : "#BDC1C7" }}>사용하기</span>
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
                3D 모델 최적화
              </span>
              <span>
                3D 모델의 로딩 시간을 최소화하고 용량 제한 없이
                <br />
                다양한 플랫폼에서 사용해보세요.
              </span>
            </div>
          ) : (
            <span>
              3D 파일의 품질을 유지한 채 원하는 용량과 폴리곤으로 최적화하여
              제공합니다.
              <br />
              로딩 시간을 최소화하고 용량 제한 없이 다양한 플랫폼에 업로드
              해보세요.
            </span>
          )}

          <img src="/image/9999538286b5d557473fe73733e95acc.png" />
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
                3D 모델 사용하기
              </span>
              <span>
                3D 모델의 로딩 시간을 최소화하고 용량 제한 없이
                <br />
                다양한 플랫폼에서 사용해보세요.
              </span>
              <video loop muted autoPlay>
                <source
                  src="/image/service_video_mobile_ko.mp4"
                  type="video/mp4"
                />
              </video>
              <span>
                3D 제품에 태그를 추가하여 공유할 수 있으며
                <br />
                편집한 3D 뷰어는 웹 쇼핑몰에도 사용할 수 있습니다.
              </span>
              <video loop muted autoPlay>
                <source
                  src="/image/service_video2_mobile_ko.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          ) : (
            <>
              <span>
                리빌더AI의 3D 뷰어를 이용하여, 간편하게 색감, 그림자, 빛의
                세기를 원하는 대로 조절할 수 있습니다.
                <br />
                3D 제품에 태그를 추가하여 공유할 수 있으며 편집한 3D 뷰어는 웹
                쇼핑몰에도 사용할 수 있습니다.
              </span>
              <div>
                <video loop muted autoPlay>
                  <source
                    src="/image/service_video_pc_ko.mp4"
                    type="video/mp4"
                  />
                </video>
                <video loop muted autoPlay>
                  <source
                    src="/image/service_video2_pc_ko.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </>
          )}
        </Cont>
      </ContBox>
    </Container>
  );
}

export default Model3D;
