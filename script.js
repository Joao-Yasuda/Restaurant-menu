// const btnjap = document.querySelector("#japanese")
// const btnita = document.querySelector("#italian")
// const btnmex = document.querySelector("#mexican")
// const btnall = document.querySelector("#all")
// Items
const menu = [
    {
        id: 1,
        title: "Sushi plate",
        category: "Japanese",
        price: 15.99,
        img: "./images/japanese1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
        id: 2,
        title: "Mexican plate",
        category: "Mexican",
        price: 16.99,
        img: "./images/Mexican1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
        id: 3,
        title: "Pasta plate",
        category: "Italian",
        price: 17.99,
        img: "./images/pasta1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    }
]

const main = document.querySelector("main")
const btns = document.querySelectorAll(".sections")

// Load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu)
})

// Filter items

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id
        const menuCategory = menu.filter(function (menuItem){
            // console.log(menuItem.category)
            if(category === menuItem.category){
               return menuItem 
            }
            
        })
        // console.log(menuCategory)
        if(category === "all"){
            displayMenuItems(menu)
        }else{
            displayMenuItems(menuCategory)
        }

    })
    
})


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<div class="options" class="japanese">
        <img src=${item.img} alt="">
        <div class="text-content">
            <div class="title">
                <h2>${item.title}</h2>   
                <h2 class="price">$${item.price}</h2> 
            </div>
            <hr>
            <p>${item.desc}
            </p>
        </div>
        </div>`
    
        })
        displayMenu = displayMenu.join("")
        main.innerHTML = displayMenu;
}