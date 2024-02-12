import styled from "styled-components";
import SlideComponent from "./SlideComponent";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: hidden;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    padding-top: 250px;
    max-width: 1200px;
  }

  @media screen and (min-width: 601px) and (max-width: 768px) {
    padding: 100px 120px 0px;
    gap: 0px;
  }
  @media screen and (max-width: 600px) {
    padding: 80px 20px 0px;
    gap: 0px;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
  white-space: pre-line;
  h2 {
    font-size: 45px;
  }
  h3 {
    font-size: 25px;
  }
  h4 {
    font-size: 23px;
    font-weight: 500;
  }
  @media screen and (min-width: 1280px) {
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    gap: 5px;
    h2 {
      font-size: 21px;
    }
    h3 {
      font-size: 16px;
      color: #555;
    }
    h4 {
      font-size: 13px;
    }
  }
`;
const SlideBox = styled.div`
  overflow: hidden;
  @media screen and (min-width: 1280px) {
    width: 50%;
    position: absolute;
    right: 0;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const MobileImgBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 16px;
  margin-top: 40px;
  img {
    width: 100%;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

function Commerce3D() {
  const { t } = useTranslation();

  return (
    <Container>
      <TextBox>
        <h3>{t("이커머스 마케팅")}</h3>
        <h2>{t("커머스 3D 아이템 제작")}</h2>
        <h4>
          {t(
            "다양한 플랫폼과 서비스에서\n사진 기반의 3D 스캔 솔루션을 이용해보세요."
          )}
        </h4>
      </TextBox>

      <SlideBox>
        <SlideComponent />
      </SlideBox>

      <MobileImgBox>
        <img src="image/slide1.png" />
        <img src="image/slide2.png" />
        <img src="image/slide3.png" />
        <img src="image/slide4.png" />
      </MobileImgBox>
    </Container>
  );
}

export default Commerce3D;
