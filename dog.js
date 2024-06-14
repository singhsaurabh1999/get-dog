const dogUrl = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target");

// function addNewDoggo() {
//     const promise = fetch(dogUrl);
//     promise
//         .then(function(response) {
//             const processingPromise = response.text();
//             return processingPromise;
//         })
//         .then(function (processedResponse) {
//             const dogObject = JSON.parse(processedResponse);
//             const img = document.createElement("img");
//             img.src = dogObject.message;
//             img.alt = "Cute doggo";
//             doggos.appendChild(img);
//         });
// }

// document.getElementById("dog-btn").addEventListener("click", addNewDoggo);

// Another way is to await for the response and then process it 

async function addNewDoggo() {
    const promise = await fetch(dogUrl); // await waits for the promise, once it is finished it resumes the code
    const processedResponse = await promise.json();
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
}

document.getElementById("dog-btn").addEventListener("click", addNewDoggo);

// Making a post call

// async function addNewDoggo() {
//     const promise = await fetch(dogUrl, {
//         method: "POST",
//         body: JSON.stringify({"word": "intent"})
//     });
// }

// Async Function Example

async function getName(name) {
    return name;
}

async function getLotsOfNames () {
    const names = await Promise.all([
        getName("Brian"),
        getName("Cassandra"),
        getName("Reid"),
        getName("Niki"),
    ])

    console.log(names);
}

getLotsOfNames();

