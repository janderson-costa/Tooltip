/*
	Criado por Janderson Costa em 28/01/2025.
*/

const defaultOptions = {
	position: 'top', // 'top', 'right', 'bottom', 'left'
	text: 'Tooltip text.',
	fontSize: '0.9em', // em | px
	maxWidth: 'auto', // px
	offset: 8, // px
};

export default function Tooltip(targetElement, options) {
	options = { ...defaultOptions, ...options };

	let $tooltip;
	let $content;

	create();

	function create() {
		$tooltip = document.createElement('div');
		$tooltip.classList.add('tooltip', options.position);
		$tooltip.innerHTML = /*html*/`<div class="tooltip-content"></div>`;
		$content = $tooltip.querySelector('.tooltip-content');

		targetElement.style.position = 'relative';
		targetElement.appendChild($tooltip);
		targetElement.addEventListener('mouseover', show);
		targetElement.addEventListener('mouseout', hide);
	}

	function show() {
		$content.innerHTML = options.text;
		$tooltip.style.fontSize = options.fontSize;
		$tooltip.style.padding = typeof options.offset == 'number' ? options.offset + 'px' : 'initial';
		$content.style.maxWidth = typeof options.maxWidth == 'number' ? options.maxWidth + 'px' : 'auto';
		$tooltip.classList.add('tooltip-visible');
	}

	function hide() {
		$tooltip.classList.remove('tooltip-visible');
		$content.innerHTML = '';
		$content.style.maxWidth = 'auto';
	}
}
