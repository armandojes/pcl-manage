function normalize (string) {
	var chars={
		"á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
		"à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
		"Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
		"À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"}
	var expr =/[áàéèíìóòúùñ]/ig;
	var res = string.replace(expr,function(e){return chars[e]});
	return res.toLowerCase();
}

export default normalize;
