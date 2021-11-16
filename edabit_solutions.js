function findSmallestNum(arr) {
	if (arr){
		return Math.min(...arr);
	} else{
		return null;
	}
}