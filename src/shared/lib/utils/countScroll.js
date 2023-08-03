export let scrollCount = 0;

export const countScroll = () => {
	const div = document.createElement('div');
	div.style.overflowY = 'scroll';
	document.body.appendChild(div);
	scrollCount = div.offsetWidth - div.clientWidth;
	div.remove();
};
