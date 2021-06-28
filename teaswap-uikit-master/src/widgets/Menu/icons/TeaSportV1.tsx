import React from "react";
import {Svg, SvgProps} from "../../../components/Svg";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 90 90" {...props}>
            <image width={70} height={90} href="/images/egg/TeaSportV1.png"/>
        </Svg>
    );
};

export default Icon;