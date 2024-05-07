document.addEventListener("DOMContentLoaded", function () {
    //Here Dom we are accessing the html elements  
    const buttons = document.getElementsByClassName("btn");

    // Iterate through the collection of buttons
    for (const button of buttons) {
        // Attach event listener to each button
        button.addEventListener("click", () => {
            const selectedBreed = document.getElementsByClassName("breeds")[0].value;

            //dog Api
            fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok")
                    }
                    return response.json();
                })
                .then((data) => {
                    const dogImage = document.querySelector('.dogImage');
                    // Check if data.message is an array, if so, take the first image
                    const imageUrl = Array.isArray(data.message) ? data.message[0] : data.message;
                    // const imageUrl1 = Array.isArray(data.message) ? data.message[1] : data.message;
                    dogImage.innerHTML = `<img src="${imageUrl}" alt="Dog Image">`;
                })
                .catch((err) => {
                    alert("There was a problem with the fetch operation:", err)
                })
            myFunction()
        });
    }

});

function myFunction() {
    const dogSection = document.querySelector('.section');
    dogSection.style.display = "block";

}
