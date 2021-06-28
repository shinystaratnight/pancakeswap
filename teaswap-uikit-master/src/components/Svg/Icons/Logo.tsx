import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Logo: React.FC<SvgProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (
    <Svg viewBox="0 0 160 26" {...props}>
     <image width="205" height="26" href="/images/egg/LogoTextNewWhite.png"/>
    </Svg>
  );
};

export default Logo;
