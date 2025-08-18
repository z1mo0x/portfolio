export default function handleMouseDown(event: React.MouseEvent<HTMLDivElement>, window: string,
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>, isExpanded: boolean
) {

    if (isExpanded) {
        console.log(123);

        setIsExpanded(false)

        const target = event.currentTarget.closest(`.${window}`) as HTMLElement;

        const offsetX = event.clientX - target.getBoundingClientRect().left;
        const offsetY = event.clientY - target.getBoundingClientRect().top;

        const handleMouseMove = (event: MouseEvent) => {
            target.style.position = 'absolute';
            target.style.zIndex = '21';
            target.style.left = `${event.clientX}px`;
            target.style.top = `${event.clientY}px`;
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            target.style.zIndex = '20';
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }

    else {
        const target = event.currentTarget.closest(`.${window}`) as HTMLElement;

        const offsetX = event.clientX - target.getBoundingClientRect().left;
        const offsetY = event.clientY - target.getBoundingClientRect().top;

        const handleMouseMove = (event: MouseEvent) => {
            target.style.position = 'absolute';
            target.style.zIndex = '21';
            target.style.left = `${event.clientX - offsetX}px`;
            target.style.top = `${event.clientY - offsetY}px`;
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            target.style.zIndex = '20';
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }
}
