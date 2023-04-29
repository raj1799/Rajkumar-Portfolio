export const AnchorScroll = () => {
    setTimeout(() => {
        let currentLocation = window.location.href;
        const hasAnchor = currentLocation.includes("/#");
        if (hasAnchor) {
            const anchorId = `${currentLocation.substring(currentLocation.indexOf("#") + 1)}`;
            const anchorElement = document.getElementById(anchorId);
            if (anchorElement) {
                setTimeout(() => {
                    anchorElement.scrollIntoView({ behavior: "smooth" });
                }, 200);
            }
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
    }, 200);
}