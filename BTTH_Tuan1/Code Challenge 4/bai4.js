// Ho Hoang Van Anh_20098521
// Test data
var billValues = [275, 40, 430];

// Loop through each bill value
billValues.forEach(bill => {
    // Calculate the tip using a ternary operator
    var tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

    // Calculate the total value
    var totalValue = bill + tip;

    // Print the result to the console
    console.log("The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value is ${totalValue.toFixed(2)}");
});