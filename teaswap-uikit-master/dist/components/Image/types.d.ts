import { HTMLAttributes, ImgHTMLAttributes } from "react";
import { SpaceProps } from "styled-system";
import { BoxProps } from "../Box";
export interface WrapperProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
    width: number;
    height: number;
}
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement>, SpaceProps {
    width: number;
    height: number;
    wrapperProps?: WrapperProps;
    responsive?: boolean;
}
export declare const variants: {
    readonly DEFAULT: "default";
    readonly INVERTED: "inverted";
};
export declare type Variant = typeof variants[keyof typeof variants];
export interface TokenPairImageProps extends BoxProps {
    primarySrc: string;
    secondarySrc: string;
    variant?: Variant;
    height: number;
    width: number;
    primaryImageProps?: Omit<ImageProps, "width" | "height">;
    secondaryImageProps?: Omit<ImageProps, "width" | "height">;
}
