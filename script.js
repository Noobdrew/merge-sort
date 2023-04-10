function mergeSort(arr) {

    if (arr.length != 1) {
        const firstHalf = arr.slice(0, arr.length / 2);
        const secondHalf = arr.slice((arr.length / 2));
        let num1 = mergeSort(firstHalf)          
        let num2 = mergeSort(secondHalf)        
        console.log('num1 ' + num1)
        console.log('num2 ' + num2)
        let i = 0
        let j = 0
        let k = 0
        let sortedArr = []
        while (i < num1.length && j < num2.length) {
            if (num1[i] < num2[j]) {
                sortedArr[k] = num1[i]
                i++
                k++
            } else {
                sortedArr[k] = num2[j]
                j++
                k++
            }
        }
        for (; i < num1.length; i++) {
            sortedArr[k] = num1[i]
            k++
        }
        for (; j < num2.length; j++) {
            sortedArr[k] = num2[j]
            k++
        }
        console.log(sortedArr)
        return sortedArr
    }
    else {
        return arr
    }
}
mergeSort([5,2,7,9,6])
