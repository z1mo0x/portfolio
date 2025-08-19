export default function windowResize(e: React.MouseEvent<HTMLDivElement>, className: string) {
    e.preventDefault();
    console.log("windowResize called");

    const target = e.currentTarget;
    const windowElement: HTMLDivElement | null = target.closest(className);
    const targetType = target.getAttribute("data-type");

    if (!windowElement || !targetType) return;

    const initialHeight = windowElement.getBoundingClientRect().height;
    const initialY = e.clientY;

    function windowResizeHandler(moveEvent: MouseEvent) {
        if (windowElement && targetType === "top") {
            console.log("resizing...");
            const heightDiff = initialY - moveEvent.clientY;
            windowElement.style.height = `${initialHeight + heightDiff}px`;
        }
    }

    function windowResizeClear() {
        console.log("end resize");
        document.removeEventListener("mousemove", windowResizeHandler);
        document.removeEventListener("mouseup", windowResizeClear);
    }

    document.addEventListener("mousemove", windowResizeHandler);
    document.addEventListener("mouseup", windowResizeClear);
}
