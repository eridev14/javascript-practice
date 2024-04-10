function nextPermutation(array) {
    // Encuentra el índice más grande i tal que array[i] < array[i + 1]
    let i = array.length - 2;
    while (i >= 0 && array[i] >= array[i + 1]) {
        console.log(i);
        i--;
    }
    console.log(i);

    // Si no hay tal índice, la permutación es la última posible
    if (i === -1) return false;

    // Encuentra el índice más grande j tal que array[j] > array[i]
    let j = array.length - 1;
    while (array[j] <= array[i]) {
        j--;
    }
    console.log(j);

    // Intercambia array[i] y array[j]
    [array[i], array[j]] = [array[j], array[i]];

    // Invierte la porción de array después de i
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }

    return true;
}