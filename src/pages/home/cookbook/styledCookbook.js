import styled from "styled-components";

export const HeaderWrap = styled.div`
  height: 0.44rem;
  background: #ee742f;
  font-size: 0.18rem;
  color: #fff;
  text-align: center;
  line-height: 0.44rem;
`;

export const SwiperWrap = styled.div`
  height: 0;
  font-size: 0;
  padding-bottom: 66.66667%;
  img {
    width: 100%;
  }
`;

export const HotCateWrap = styled.div`
  header {
    line-height: 0.5rem;
    background: #fff;
    padding-left: 0.2rem;
    border-bottom: 1px solid gray;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin-top: 0.05rem;
    }
    img {
      width: 60%;
    }
  }
`;
