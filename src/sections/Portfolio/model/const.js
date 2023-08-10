export const switchFilterAnimation = {
	jumpStart: { opacity: 0, y: 100 },
	jump: (custom) => ({ opacity: 1, y: 0, transition: {delay: custom * 0.2} }),
	start: { opacity: 0, scale: 0 },
	middle: { opacity: 1, scale: 1,y: 0 },
};
