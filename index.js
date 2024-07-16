
//ordine decrescente

let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
array.sort(function(left, right) {
    return right - left;
    
});

console.log(array);

// ordine crescente 

let array1 = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
array1.sort(function(left, right) {
    return left - right;
    
});

console.log(array1);