function adjacentElementsProduct(inputArray) {
    var lastProduct = -1001;
    function createProduct(element, index, array) {
		if (array[index + 1] != array.length) {
			var prod = array[index] * array[index+1];
			if (prod > lastProduct) {
				lastProduct = prod;
			}
		}
    }
    inputArray.forEach(createProduct);
    return lastProduct;
};
