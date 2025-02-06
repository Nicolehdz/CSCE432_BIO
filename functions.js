var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet() {
    var styleElement = document.getElementById("mainStyleSheet");

    var currentStyleSheet = styleElement.getAttribute("href");
    var newStyleSheet = currentStyleSheet === "style2.css" ? "style.css" : "style2.css";

    if (newStyleSheet !== null) {
        styleElement.setAttribute("href", newStyleSheet);

        // Save new stylesheet name to localStorage for persistence
        localStorage.setItem("currentStyleSheet", newStyleSheet);

    }
    
}



window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)

    // 2 (b) get html style element by ID

    // 2 (c) replace href attribute of html element.
        // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var storedStyleSheet = localStorage.getItem("currentStyleSheet");

    // 2 (b) get html style element by ID
    var styleElement = document.getElementById("mainStyleSheet");

    // 2 (c) replace href attribute of html element if storedStyleSheet is not null or undefined
    if (storedStyleSheet !== null && storedStyleSheet !== undefined) {
        styleElement.setAttribute("href", storedStyleSheet);
    }
};


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Stop default form submission

        let form = event.target;
        let formData = new FormData(form);

        fetch("https://formspree.io/f/meoezegr", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                document.getElementById("thank-you-message").style.display = "block"; // Show thank you message
                form.reset(); // Clear form fields
            } else {
                alert("There was a problem submitting the form. Please try again.");
            }
        }).catch(error => {
            alert("There was an error. Please try again later.");
        });
    });
});

