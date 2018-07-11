function checkPalindrome(inputString) {
	var arr4 = inputString.slice().split("").reverse().join("");
	if (inputString == arr4) {
		return true;
	} else {
		return false;
	}
}
