function quicksort(array) {
    let endpoint = array.length - 1;
    
    let stack = [];
    stack.push(0);
    stack.push(endpoint);
    
    while (stack.length > 0) {
        let end = stack.pop();
        let start = stack.pop();

        let pivot = partition(array,start,end);

        if (pivot - 1 > start) {
            stack.push(start);
            stack.push(pivot - 1);
        }

        if (pivot + 1 < end) {
            stack.push(pivot + 1);
            stack.push(end);
        }

    }

    return array;
}


function partition(array,start,end) {
    let pivot = array[end];
    let i = start - 1;
    let temp = 0;
    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            i++;
            temp = array[i];
            array[i] = array [j];
            array[j] = temp;
        }
    }
    i++;
    temp = array[i];
    array [i] = pivot;
    array[end] = temp;
    return i;
}
