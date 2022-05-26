const data = [
    {
        cardImage : "./stopwatch.png",
        cardheading: "JavaScript StopWatch",
        link : './Stopwatch/stopwatch.html'
    },
    {
        cardImage : "./stopwatch.png",
        cardheading: "JavaScript StopWatch",
        link : "./Stopwatch/stopwatch.html"
    },
    {
        cardImage : "./stopwatch.png",
        cardheading: "JavaScript StopWatch",
        link : "./Stopwatch/stopwatch.html"

    },
    {
        cardImage : "./stopwatch.png",
        cardheading: "JavaScript StopWatch",
        link : "./Stopwatch/stopwatch.html"

    }
]

var cardConatiner = document.querySelector('.card-container');



for(i =0; i<data.length; i++){

    const card = document.createElement("div");
    card.classList.add("card");
    
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
    const a = document.createElement("a");
    a. classList.add("card-link");
    
    a.setAttribute("href", data[i].link);
    a.appendChild(card);
    cardConatiner.appendChild(a);

}