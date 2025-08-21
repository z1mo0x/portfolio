import { useEffect } from "react";


export default function useHoverFile(iconRef: React.RefObject<HTMLDivElement | null>) {
    useEffect(() => {
        const el = iconRef.current;
        if (!el) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const gradient = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.25) 0%, transparent 80%)`;

            // фон для самого ли
            el.style.background = gradient;

            // градиент рамки в ::before
            el.style.setProperty('--borderGradient', gradient);
        };

        const handleMouseLeave = () => {
            el.style.background = '';
            el.style.setProperty('--borderGradient', 'transparent');
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
}