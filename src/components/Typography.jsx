import { React, useState, useEffect } from "react";
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
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

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
        opacity: fadeIn ? 1 : 0, 
        transition: "opacity 1s ease-in-out", 
    };

    return (
        <p {...rest} style={style}>
        {children}
        </p>
    );
};

export default Typography;