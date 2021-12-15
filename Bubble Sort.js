console.log("Bubble Sort")
let numbers_1 = [5,1,4,2,8,9];

function bubbleSort(arry) {
    for (var i = 0; i < arry.length-1; i++) {
        for (var j=0; j<arry.length-i-1; j++){
            if(arry[j]>arry[j+1]) {
                const tmp = arry[j];
                arry[j] = arry[j+1];
                arry[j+1] = tmp;
            }
        }
        console.log(arry);
    }
    return arry;
};

console.log(bubbleSort(numbers_1))