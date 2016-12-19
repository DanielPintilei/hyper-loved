'use strict';
const foregroundColor = '#c0c5cf';
const backgroundColor = '#172030';
const red = '#eb7599';
const green = '#97a38f';
const yellow = '#ebbf9b';
const blue = '#6e94b9';
const magenta = '#b18bb1';
const cyan = '#7eaaaa';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#0e131d',
	cursorColor: '#ff5c8d',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#dcdfe4',
		lightBlack: '#64727d',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	css: `
		${config.css || ''}
		.tab_tab.tab_active {
			color: #ff5c8d;
		}
	`
});
