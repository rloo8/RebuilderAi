import styled from "styled-components";
import VideoComponent from "./VideoComponent";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  padding: 200px 30px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 150px;
  @media screen and (min-width: 1280px) {
    max-width: 1200px;
    padding: 300px 30px;
  }
  @media screen and (max-width: 768px) {
    gap: 80px;
    padding: 120px 30px;
  }
  @media screen and (max-width: 600px) {
    padding: 80px 0;
  }
`;

function VideoCont() {
  const { t } = useTranslation();

  return (
    <Container>
      <VideoComponent
        key={t("explore_video_ko")}
        title={t("실측 크기 측정 솔루션")}
        description={t(
          "AI가 생성한 3D를 설계도와 비교해 오차율을 측정할 수 있습니다.\n실제 테스트 결과: 오차율 0.2mm(20~50cm크기 기준)"
        )}
        videoSource={`/image/${t("explore_video_ko")}.mp4`}
      />
      <VideoComponent
        title={t("데미지 분석 솔루션")}
        description={t(
          "차 사고 현장, 자연재해로 인한 피해 현장을 \n3D 기반으로 피해 데이터를 분석합니다. \n차량의 어떤 부위가 얼마나 파손됐는지를 알 수 있습니다."
        )}
        videoSource="/image/explore_video2.mp4"
      />
      <VideoComponent
        title={t("3D 오토라벨링")}
        description={t(
          "다양한 환경에서 다시점 이미지를 합성해 시뮬레이션 데이터를 \n구축하고 인공지능 학습용 데이터로 활용할 수 있습니다. \nAI의 성능을 높이기 위한 데이터를 3D 기반으로 보다 쉽게 구축해보세요."
        )}
        videoSource="/image/explore_video3.mp4"
      />
    </Container>
  );
}

export default VideoCont;
