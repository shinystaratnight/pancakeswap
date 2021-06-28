import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox="0 0 90 90" {...props}>
          <image width={100} height={110} href="/images/egg/vault.svg"/>
      </Svg>
  );
};

export default Icon;
