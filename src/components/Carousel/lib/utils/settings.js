export const variants = {
	enter: direction => {
		return {
			x: direction > 0 ? 700 : -700
		};
	},
	center: {
		zIndex: 1,
		x: 0
	},
	exit: direction => {
		return {
			zIndex: 0,
			x: direction < 0 ? 700 : -700
		};
	}
};

export const swipeConfidenceThreshold = 10000;

export const swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity;
};
