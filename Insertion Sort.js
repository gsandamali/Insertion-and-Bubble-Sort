console.log("Insert Sort")
let numbers = [7,8,5,2,4,6,3];
/*
1.Set a marker for the sorted section after the first element
2. repeat the following untill unsorted section is empty:
    select the first unsorted element
    swap other elements to the right to create the correct position and shift the unsorted element

    Advance the marker to the right one element
*/ 
function insertionSort(arry) {
    var key,i,j;
    for (i = 1; i < arry.length; i++) {
        key = arry[i];
        j=i-1;
        while (j>=0 && arry[j]>key){
            arry[j+1] = arry[j];
            j=j-1;
        }
        arry[j+1] = key;
        console.log(arry);
    }
    return arry;
};

console.log(insertionSort(numbers))