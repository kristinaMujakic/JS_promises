let BASE_URL = 'http://numbersapi.com';


// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API

let favouriteNumber = 3;

$.getJSON(`${BASE_URL}/${favouriteNumber}?json`).then(result => { console.log(result.text); });

// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page

let favNums = [3, 23, 28];

$.getJSON(`${BASE_URL}/${favNums}?json`).then(result => {
    console.log(result);
});


// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

let fourFacts = [];

for (let i = 0; i < 4; i++) {
    fourFacts.push($.getJSON(`${BASE_URL}/${favouriteNumber}?json`));
}

Promise.all(fourFacts).then(arr => { for (res of arr) { $('body').append(`<p>${res.text}</p>`); } });


