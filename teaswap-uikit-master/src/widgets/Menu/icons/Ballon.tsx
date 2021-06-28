import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 90 90" {...props}>
            <image width={90} height={110} href="/images/egg/ballon.png"/>
        </Svg>
    );
};

export default Icon;