/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */


//Change the body tag 's style so it has a font-family of "Arial, sans-serif".
document.body.style = "font-family: fantasy;"

//Replace each of the spans(nickname, fav - food, hometown) with your own information.
let nickName = document.getElementById("nickname");
nickName.innerText = "Traveler"

let favFood = document.getElementById("fav-food");
favFood.innerText = "Pizza"

let hometown = document.getElementById("hometown");
hometown.innerText = "Bursa"

//Iterate through each li and change the class to "list-item".
let listItems = document.querySelectorAll("li");
for(let i = 0; i < listItems.length; i++) {
    listItems[i].setAttribute("class", "list-item");
}

//Create a new img element and set its src attribute to a picture of you.Append that element to the page.
let myImage = document.createElement("img");
myImage.setAttribute("src", "https://pbs.twimg.com/profile_images/572681919307100160/SMpSybw1_400x400.jpeg");
document.body.appendChild(myImage);

