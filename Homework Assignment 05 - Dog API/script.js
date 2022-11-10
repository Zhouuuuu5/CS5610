"use strict";

const URL = "https://dog.ceo/api/breeds/image/random";

console.log("about to fetch a dog photo");

dog_btn.addEventListener("click", catchDogPhoto);

function catchDogPhoto() {
  fetch(URL)
    .then(checkStatus)

    .then((response) => {
      // console.log(response);
      return response.json();
    })

    // handle the response
    .then((data) => {
      if (data.message) {
        dog_photo.innerHTML = `<img src=${data.message} alt="dog" />`;
      } else {
        // throw new Error("Wrong!");
        return err;
      }
    })

    // handle the error
    .catch(handleError);
}

function checkStatus(response) {
  if (!response.ok) {
    // console.log("Error");
    // throw Error("Error in request: " + response.statusText);
    dog_photo.innerHTML = `<p class="text">Cannot fetch the data</p>`;
  }
  return response;
}

function handleError(err) {
  // alert(`Error in sending data to server: ${err.message}`);
  dog_photo.innerHTML = `<p class="text">Error in sending data to server: ${err.message}</p>`;

  // const list = document.getElementById("dog_photo");
  // if (list.hasChildNodes()) {
  //   console.log(list.children);
  //   while (list.hasChildNodes()) {
  //     list.removeChild(list.firstChild);
  //   }
  // }
}
