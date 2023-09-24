const data=require('./food.json')


// list all the food items
function allFoodItems(data) {
    return data.map(item => item.foodname);
}
console.log("All Food Items : ", allFoodItems(data));

// list all the food items with category vegetables
function vegetableCategory(data) {
    return data.filter(item => item.category === "Vegetable")
}
console.log("Food items with category vegetables : ", vegetableCategory(data));


// list all the food items with category fruit
function fruitCategory(data) {
    return data.filter(item => item.category === "Fruit")
}
console.log("Food items with category fruit : ", fruitCategory(data));

// list all the food items with category protien
function protienCategory(data) {
    return data.filter(item => item.category === "Protien")
}
console.log("Food items with category protien : ", protienCategory(data));

// list all the food items with category nuts
function nutsCategory(data) {
    return data.filter(item => item.category === "Nuts")
}
console.log("Food items with category nuts : ", nutsCategory(data));

// list all the food items with category grains
function grainsCategory(data) {
    return data.filter(item => item.category === "Grains")
}
console.log("Food items with category grains : ", grainsCategory(data));

// list all the food items with category dairy
function dairyCategory(data) {
    return data.filter(item => item.category === "Dairy")
}
console.log("Food items with category dairy : ", dairyCategory(data));

// list all the food items with calorie above 100
function calorieAbove100(data) {
    return data.filter(item => item.calorie > 100)
}
console.log("Food items with calorie above 100 : ", calorieAbove100(data));

// list all the food items with calorie below 100
function calorieBelow100(data) {
    return data.filter(item => item.calorie < 100)
}
console.log("Food items with calorie below 100 : ", calorieBelow100(data));


// list all the food items with highest protien content to lowest
function proteinHighToLow(data) {
    return data.sort((a, b) => {
        return b.protiens - a.protiens;
    });
}
console.log("Protein - High to Low : ", proteinHighToLow(data));

// list all the food items with lowest cab content to highest

function proteinHighToLow(data) {
    return data.sort((a, b) => {
        return b.cab - a.cab;
    });
}
console.log("Protein - High to Low : ", proteinHighToLow(data));
