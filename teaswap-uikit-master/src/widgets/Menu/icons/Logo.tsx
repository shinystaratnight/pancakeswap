import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
     <image width="205" height="26" href="/images/egg/LogoTextNewWhite.png"/>
    </Svg>
  );
};

export default Logo;
