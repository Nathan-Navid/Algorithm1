function indexOfMin(num){
    //check if the array is empty
    if (num.length === 0){
        console.log("-1")
        return -1
    }
    //initialize the smallest and value in the array
    let minIndex = 0

    //go through to the array
    for (let i=1; i<num.length; i++){
        if(num[i]<num[minIndex]){
            minIndex = i;
        }
    }
    console.log(minIndex)
    return minIndex
}
const num1 = [5, 2, 3]
const expected1 = 1

const num2 = [5, 7, 2, 3]
const expected2 = 2

const num3 = []
const expected3 = -1

indexOfMin(num1)
indexOfMin(num2)
indexOfMin(num3)
