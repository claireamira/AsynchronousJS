function sumAsync(num1, num2, callback) {
    const result = num1 + num2;
    const delay = Math.floor(Math.random() * 5000) + 1000; 

    setTimeout(() => {
        callback(result);
    }, delay);
}

sumAsync(5, 10, (result) => {
    console.log('Result:', result);
});
