
const btn = document.querySelector('#myBtn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

btn.onclick = function () {
    modal.style.display = "flex";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const burgerMenu = document.querySelector('.burger');

// let btn_modal_contact_on = document.querySelector('.btn_modal_contact_on')
let btn_navOff = document.querySelector('.btn_navOff')
const nav = document.querySelector('nav');
const navOnOff = () => {
    const nav = document.querySelector('nav');
    if (nav.matches('.nav_on')) {
        nav.classList.remove('nav_on')
        nav.classList.add('nav_off')

    } else {
        nav.classList.remove('nav_off')
        nav.classList.add('nav_on')
    }
}
burgerMenu.addEventListener('click', () => navOnOff())
nav.addEventListener('click', () => navOnOff())

// burgerMenu.addEventListener('click', function() {
//     this.classList.toggle("close");
//     overlay.classList.toggle("overlay");
//     overlay.style.display = overlay.style.display === "none" ? "block" : "none";
// });


// Close the dropdown menu if the user clicks outside of it
if (!event.target.matches('.menu-icon')) {
    var dropdowns = document.getElementsByClassName("menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

function sendMail() {
    const params = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value,
    };

    const serviceID = "service_3i5tpq4";
    const templateID = "template_4t7a3vb";

    if (params.name == "" || params.email == "" || params.message == "") {
        alert("Please fill in all the fields.");
    } else {
        emailjs.send(serviceID, templateID, params)
            .then(
                res => {
                    document.querySelector('#name').value = "";
                    document.querySelector('#email').value = "";
                    document.querySelector('#message').value = "";
                    console.log(res);
                    alert("Your message sent successfully.");
                })
            .catch((err) => console.log(err));
    }
}
