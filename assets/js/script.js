const cakeLocation = "/assets/images/cakes/jpg"; //src stien
const cakeList = ['cake-one.jpg','cake-two.jpg','cake-three.jpg','cake-four.jpg','cake-five.jpg','cake-six.jpg','cake-seven.jpg','cake-eight.jpg','cake-nine.jpg','cake-ten.jpg']; //arrayet af billeder
let cake = 10;

//laver div til at pakke alle billeder ind i  med class: cakeContainer
let cakeContainer = document.createElement('div');
cakeContainer.setAttribute('class', 'cakeContainer');

for (i = 0; i < cakeList.length; i++){
    console.log(cakeList[i]);
}

function showCake(cake){
    for(i = 0; i< cake; i++){
        let cakeImg = document.createElement('img');
        cakeImg.setAttribute('src', cakeLocation + cakeList);
        cakeContainer.appendChild(cakeImg);       
    }
}
showCake(cake);