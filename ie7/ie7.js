/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'smedia\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-facebook': '&#xe600;',
		'icon-link': '&#xe601;',
		'icon-googleplus': '&#xe002;',
		'icon-tumblr': '&#xe003;',
		'icon-pintrest': '&#xe004;',
		'icon-linkedin': '&#xe005;',
		'icon-dribbler': '&#xe006;',
		'icon-behance': '&#xe007;',
		'icon-twitter': '&#xe008;',
		'icon-github': '&#xe009;',
		'icon-paperplane': '&#xe00a;',
		'icon-xing': '&#xf168;',
		'icon-codepen': '&#xe000;',
		'icon-mobile': '&#xe602;',
		'icon-tablet': '&#xe603;',
		'icon-screen': '&#xe604;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
