document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;

    if(name && service && date) {
        document.getElementById("message").innerText =
            "Thank you " + name + "! Your " + service + " service is booked for " + date + ".";
    } else {
        document.getElementById("message").innerText =
            "Please fill all fields.";
    }
});