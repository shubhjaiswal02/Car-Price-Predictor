// Assuming that car_models is a global variable defined in your HTML template

function load_car_models(company_id, car_model_id) {
    var company = document.getElementById(company_id);
    var car_model = document.getElementById(car_model_id);
    var selectedCompany = company.value;

    var models = car_models[selectedCompany]; // Access car_models variable defined in your HTML

    car_model.value = "";
    car_model.innerHTML = "";

    models.forEach(function(model) {
        var newOption = document.createElement("option");
        newOption.value = model;
        newOption.innerHTML = model;
        car_model.appendChild(newOption);
    });
}

function form_handler(event) {
    event.preventDefault(); // Don't submit the form normally
}

function send_data() {
    document.querySelector('form').addEventListener("submit", form_handler);

    var fd = new FormData(document.querySelector('form'));

    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/predict', true);
    document.getElementById('prediction').innerHTML = "Wait! Predicting Price.....";
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById('prediction').innerHTML = "Prediction: ₹" + xhr.responseText;
        }
    };

    xhr.onload = function () {};

    xhr.send(fd);
}
