function getAverage(scores) {
    let sum = 0;
    let amount = scores.length;  // Corrected initialization
    for (let i = 0; i < amount; i++) {
        sum += scores[i];
    }
   return sum / amount;
}

// Test the function with sample data
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
