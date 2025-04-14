import { useState } from 'react';

export const useGradientCursor = ({
	ref,
	containerTopMargin = 0,
}: {
	ref?: React.RefObject<HTMLDivElement | null>;
	containerTopMargin?: number;
}) => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [hideCursor, setHideCursor] = useState(false);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref || !ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const relativeY = e.clientY - rect.top;

		// Only update mouse position if cursor is within containerTopMargin from the top
		if (relativeY >= containerTopMargin) {
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;

			setMousePos({ x, y });
			setHideCursor(false);
		} else {
			setHideCursor(true);
		}
	};

	const handleMouseEnter = () => {
		setHideCursor(false);
	};

	const handleMouseLeave = () => {
		setHideCursor(true);
	};

	return {
		hideCursor,
		mousePos,
		handleMouseMove,
		handleMouseEnter,
		handleMouseLeave,
	};
};
