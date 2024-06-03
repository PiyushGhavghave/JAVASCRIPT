// console.log(`Hello`);
// console.log(`Piyush`);

// window.alert("This is an alert");
// window.alert(`I like pizza`);

// Add text using js

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myp").textContent = "I like pizza";

const mynums = [1,2,3]

const total = mynums.reduce(function (acc,curr){
    console.log(`acc: ${acc} and currval: ${curr}`);
    return acc + curr;
},0);
console.log(total);

const mytotal =mynums.reduce( (acc,curr) => acc+curr,0)
console.log(mytotal);


const mycart = [
    {
        itemname : "js course",
        price : 999
    },
    {
        itemname : "py course",
        price : 1000
    },
    {
        itemname : "cpp course",
        price : 3000
    }
]

const cartTotal = mycart.reduce((acc,curr) => acc+curr.price,0);
console.log(cartTotal);



