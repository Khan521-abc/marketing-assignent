document.getElementById("interestForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let bike = document.getElementById("bike").value;

    if(name === "" || email === "" || bike === ""){
        alert("Please fill all required fields");
        return;
    }

    document.getElementById("message").innerHTML =
    "Thank you! Your interest has been recorded.";

    document.getElementById("interestForm").reset();

});