export default function handleMouseDown(event: React.MouseEvent<HTMLDivElement>, window: string,
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>, isExpanded: boolean
) {

    if (isExpanded) {
        setIsExpanded(false);
    }
    else {
        const target = event.currentTarget.closest(`.${window}`) as HTMLElement;

        const offsetX = event.clientX - target.getBoundingClientRect().left;
        const offsetY = event.clientY - target.getBoundingClientRect().top;

        const handleMouseMove = (event: MouseEvent) => {
            target.style.position = 'absolute';
            target.style.left = `${event.clientX - offsetX}px`;
            target.style.top = `${event.clientY - offsetY}px`;
        };

        const handleMouseUp = () => {
            target.removeEventListener('mousemove', handleMouseMove);
            target.removeEventListener('mouseup', handleMouseUp);
        };

        target.addEventListener('mousemove', handleMouseMove);
        target.addEventListener('mouseup', handleMouseUp);
    }
}
