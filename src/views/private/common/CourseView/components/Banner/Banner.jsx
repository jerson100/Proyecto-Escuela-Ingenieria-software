import React, { memo } from "react";
import { BannerContainer, BannerContent, Bg } from "./banner.style";

const Banner = ({ children }) => {
  return (
    <BannerContainer path="https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg">
      <Bg />
      <BannerContent>{children}</BannerContent>
    </BannerContainer>
  );
};

export default memo(Banner);
