// console.log("Hello");

// setTimeout(function ()  {
//     console.log("this will execute later");
// }, 3000);

// console.log("world");
// console.log("three");

function getCheese() {
    setTimeout(() => {
        const cheese = "🧀"
        console.log("here is cheese");
        Callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback){
    setTimeout(() => {
        const dough = cheese + 'dough';
        console.log("here is the dough", dough);
        Callback(dough);
    }, 2000);
}

function bakePizza(dough, callback){
    setTimeout(() =>{
        const pizza = cheese + '🍕';
        console.log("here is the pizza", pizza);
        Callback(pizza);
    }, 2000);
}
getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
    console.log("got my pizza", pizza);
    });
});
});
// pizza -> dough -> cheese
