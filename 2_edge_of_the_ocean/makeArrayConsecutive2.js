function makeArrayConsecutive2(statues) {
	statues.sort(function(a, b){return a-b})
	var range = statues[statues.length - 1] - statues[0] + 1;
	return range - statues.length;
}
