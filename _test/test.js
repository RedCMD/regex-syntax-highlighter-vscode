

new RegExp(/[]/);
new RegExp(/re[g[G]][e\\]((x)/.source + /rege2 )/.source);
new RegExp(/r\e[g[G]]e(x)/);
new RegExp(/re[g-[G]]e(x)/);
new RegExp(/^refs\/tags\/([^ ]+) ([0-9a-f]{40}) ([0-9a-f]{40})?$/);
new RegExp(/^refs\/tags\/([^ ]+)\0\1\000\777\999 ([0-9a-f]{40}) ([0-9a-f]{40})?$/);
new RegExp(/["'](module|(text|application)\/(java|ecma)script|text\/babel)["']/);
new RegExp(/^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/);
new RegExp(/^(?:[34][0-8]|9[0-7]|10[0-7]|[0-9]|2[1-5,7-9]|[34]9|5[8,9]|1[0-9])(?:;[349][0-7]|10[0-7]|[013]|[245]|[34]9)?(?:;[012]?[0-9]?[0-9])*;?m$/);
new RegExp(/(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)/);
new RegExp(/^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/);
new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);
new RegExp(/\//);

const aa = /2/g//
const isLinkRelative = !/^\w+:\/\//.test(link) && link[0] !== '#';

const regex = new RegExp(
	[
		/(?<whitespace>[ \t\r\n]+)/,
		/(?<comment>\/\/.*$|\/\*.*?\*\/)/,
		/(?<forwardSlash>\/(?!\s))/, // for some reason, Apple ignores single forward slashes before any non-whitespace token
		/(?<curlyOpen>{)/,
		/(?<curlyClose>})/,
		/(?<parenOpen>\()/,
		/(?<parenClose>\))/,
		/(?<stringDouble>"(?:\\.|[^"\\]+)*")/,
		/(?<stringSingle>'(?:''|[^']+)*')/,
		/(?<stringUnquoted>[A-Za-z_][A-Za-z0-9_.-]*)/,
		/(?<float>[+-]?\d*\.\d+)/,
		/(?<integer>[+-]?(0x[a-fA-F\d]+|0[0-7]+|\d+))/,
		/(?<boolean>:true|:false)/,
		/(?<date>@\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} [+-]\d{4})/,
		/(?<assign>=)/,
		/(?<comma>,)/,
		/(?<semiColon>;)/,
		/(?<invalid>.)/,
	].map((regex) => regex.source).join('|'),
	'gm',
);

const a = /\\\xFF/;
const b = /[.*+\-?^${}()|[\]\\]/;
const c = /\r\n|\r|\n/;
const d = /\/\/# sourceMappingURL=[^ ]+$/;
const e = /<%=\s*([^\s]+)\s*%>/;
const f = /```suggestion(\u0020*(\r\n|\n))((?<suggestion>[\s\S]*?)(\r\n|\n))?```/;
const g =  /(?<=^|\s)(?=[a-z])([a-z])(?=.*\1$)\(([^()]*0+)(?<!password|token)\)(?!.*?(password|token))\p{L}(?:(?<=\(\d{3}\))-\1|-\1)(?!\s)/u;

