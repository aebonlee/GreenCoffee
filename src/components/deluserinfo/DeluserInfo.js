import React from "react";
import { DeluserInfoWrap } from "../styles/DeluserInfoStyle";
import Item from "../components/deluserinfo/DeluserInfo";

const DeluserInfo = () => {
  const dummyData = {
    name: "김수한무",
    point: "1,234,560",
    coupon: "1,000",
  };
  return (
    <DeluserInfoWrap>
      <div>
        <span>{dummyData.name} 님</span>
      </div>
      <div>
        <span>보유 포인트: {dummyData.point}점</span>
      </div>
      <div>
        <span>보유 스탬프: {dummyData.coupon}장</span>
      </div>
      <div>
        <span>탈퇴하시겠습니까?</span>
      </div>
      <Item />
    </DeluserInfoWrap>
  );
};

export default DeluserInfo;
