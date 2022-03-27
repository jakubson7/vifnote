import { useState, useEffect } from "preact/hooks";

export const getWindowSize = () => ({
	width: window.innerWidth,
	height: window.innerHeight,
});

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	const handleResize = () => setWindowSize(getWindowSize);

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return window.removeEventListener("resize", handleResize);
	});

	return windowSize;
};

export default useWindowSize;
