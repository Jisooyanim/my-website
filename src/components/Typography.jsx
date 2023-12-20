import React from "react";
import { fonts } from "../themes/fonts";

const Typography = ({
    family,
    weight,
    size,
    spacing,
    color,
    position,
    top,
    left,
    right,
    children,
    ...rest
}) => {
    const style = {
        fontFamily: fonts[family],
        fontWeight: weight || null,
        fontSize: `${size}px`,
        letterSpacing: `${spacing}px`,
        color,
        position,
        top,
        left,
        right,
    };

    return (
        <p {...rest} style={style}>
        {children}
        </p>
    );
};

export default Typography;