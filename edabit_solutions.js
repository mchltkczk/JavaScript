function getAbsSum(arr){
    let result = 0;
    
    for(i = 0; i < arr.length; i++) {
      result += Math.abs(arr[i]);
    }
      return result;
  }