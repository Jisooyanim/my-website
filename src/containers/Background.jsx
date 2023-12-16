import React from "react";

const Background = ({ bgImg, position, offset, blur, className, children }) => {
    const backgroundStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${position}`,
        width: "100vw",
        height: "100vh",
        margin: 0,
        overflow: "hidden",
        top: 0,
        left: 0,
        position: "fixed",  
    };

    // To make image full size, reset the margin and padding
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";

    const renderBlur = blur?.map((value, index) => {
        let style = {};
        const newOffset = offset ? `${offset}em` : "-25em";

        switch (value) {
            case "tr":
                style = { ...style, top: newOffset, right: newOffset };
                break;
            case "bl":
                style = { ...style, bottom: newOffset, left: newOffset };
                break;
            case "tl":
                style = { ...style, top: newOffset, left: newOffset };
                break;
            case "br":
                style = { ...style, bottom: newOffset, right: newOffset };
                break;
        }

        return (
            <React.Fragment key={index}>
                <div className="radial-blur position-absolute" style={style} />
            </React.Fragment>
        );
    });

    return (
        <div style={backgroundStyle} className={className}>
            <div
                style={{
                    position: "absolute",
                    zIndex: 100,
                    height: "100%",
                    width: "100%",
                }}
            >
                {children}
            </div>
            {renderBlur}
        </div>
    );
};

export default Background;
