/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-radio-unchecked': '&#xe900;',
		'icon-radio-button': '&#xe900;',
		'icon-circle': '&#xe900;',
		'icon-cross': '&#xe901;',
		'icon-checkmark': '&#xe902;',
		'icon-tick': '&#xe902;',
		'icon-correct': '&#xe902;',
		'icon-accept': '&#xe902;',
		'icon-ok': '&#xe902;',
		'icon-checkmark1': '&#xe903;',
		'icon-tick1': '&#xe903;',
		'icon-correct1': '&#xe903;',
		'icon-accept1': '&#xe903;',
		'icon-ok1': '&#xe903;',
		'icon-checkbox-unchecked': '&#xe904;',
		'icon-checkbox-checked': '&#xe905;',
		'icon-paypal': '&#xe906;',
		'icon-brand': '&#xe906;',
		'icon-donate': '&#xe906;',
		'icon-library': '&#xe907;',
		'icon-credit-card': '&#xe908;',
		'icon-menu': '&#xe909;',
		'icon-twitter': '&#xe90a;',
		'icon-heart': '&#xe90b;',
		'icon-facebook': '&#xe90c;',
		'icon-star-empty': '&#xe90d;',
		'icon-rate': '&#xe90d;',
		'icon-star': '&#xe90d;',
		'icon-favorite': '&#xe90d;',
		'icon-bookmark': '&#xe90d;',
		'icon-cart': '&#xe90e;',
		'icon-purchase': '&#xe90e;',
		'icon-ecommerce': '&#xe90e;',
		'icon-shopping': '&#xe90e;',
		'icon-user': '&#xe90f;',
		'icon-arrow-left': '&#xe910;',
		'icon-search': '&#xe911;',
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
