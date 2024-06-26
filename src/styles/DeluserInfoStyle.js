import styled from "@emotion/styled";

export const DeluserInfoWrap = styled.div`
  padding-top: 30px;
  margin: 0;
  > div {
    color: #444;
    :nth-of-type(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #b99470;
      padding-bottom: 20px;
    }
    :nth-of-type(2) {
      padding: 0 0 5px 10px;
    }
    :nth-of-type(3) {
      padding: 0 0 50px 10px;
    }
  }
`;

export const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  color: #444;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(33.333% - 20px);
    height: 100px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px rgba(51, 51, 51, 0.2);
    cursor: pointer;
  }
`;
