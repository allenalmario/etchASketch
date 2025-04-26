console.log("Hello World!")

let container = document.querySelector(".container");

// for (let i = 0; i <= 15; i++) {
//     console.log(i);
//     let row = document.createElement("div");
//     row.setAttribute("class", "row");
//     container.appendChild(row);
//     for (let j = 0; j <= 15; j++) {
//         console.log(j);
//         let square = document.createElement("div");
//         square.setAttribute("class", "square");
//         row.appendChild(square);
//     }
// }

// const squares = document.querySelectorAll(".square");

// squares.forEach(square => {
//     square.addEventListener("mouseover", (event) => {
//         square.style.backgroundColor = "red";
//     })
// })

const button = document.querySelector(".button");

button.addEventListener("click", () => {
    let numSqaures = prompt("How many squares do you want");
    
    if (numSqaures >= 100) {
        alert("Sorry cannot do numbers greater than 99!!!")
    }
    else {
        for (let i = 0; i <= numSqaures - 1; i++) {
            console.log(i);
            let row = document.createElement("div");
            row.setAttribute("class", "row");
            container.appendChild(row);
            for (let j = 0; j <= numSqaures - 1; j++) {
                console.log(j);
                let square = document.createElement("div");
                square.setAttribute("class", "square");
                row.appendChild(square);
            }
        }
        const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseover", (event) => {
        square.style.backgroundColor = "red";
    })
});
    }
});