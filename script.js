const data = [
    {
        cardImage : "./stopwatch.png",
        cardheading: "JavaScript StopWatch"
    },
    {
        cardImage : "./stopwatch.png",
        cardheading: "JavaScript StopWatch"
    },
    {
        cardImage : "./stopwatch.png",
        cardheading: "JavaScript StopWatch"
    },
    {
        cardImage : "./stopwatch.png",
        cardheading: "JavaScript StopWatch"
    }
]

var cardConatiner = document.querySelector('.card-container');



for(i =0; i<data.length; i++){

    const card = document.createElement("div");
    card.classList.add("card");
    cardConatiner.appendChild(card);
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");

    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    cardImg.appendChild(img);
    cardTitle.appendChild(h3);

    img.setAttribute("src", data[i].cardImage);
    h3.innerHTML = data[i].cardheading;
}