// Shop button

const shopButton = document.getElementById("shopButton");

shopButton.addEventListener("click", function () {
    document.getElementById("products").scrollIntoView();
});


// Add to cart buttons

const buttons = document.querySelectorAll(".addButton");
const message = document.getElementById("message");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {
        message.textContent = "Product added to cart!";
    });

});

