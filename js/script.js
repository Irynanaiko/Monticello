"use strict";
window.addEventListener("DOMContentLoaded", () => {
    // Initialize and add the map

    function initMap() {
        const uluru = {
            lat: 41.834438,
            lng: -71.423424,
        };

        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: uluru,
            styles: [{
                    elementType: "geometry",
                    stylers: [{
                        color: "#f5f5f5",
                    }, ],
                },
                {
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off",
                    }, ],
                },
                {
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#616161",
                    }, ],
                },
                {
                    elementType: "labels.text.stroke",
                    stylers: [{
                        color: "#f5f5f5",
                    }, ],
                },
                {
                    featureType: "administrative.land_parcel",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#bdbdbd",
                    }, ],
                },
                {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{
                        color: "#eeeeee",
                    }, ],
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#757575",
                    }, ],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{
                        color: "#e5e5e5",
                    }, ],
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#9e9e9e",
                    }, ],
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ffffff",
                    }, ],
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#757575",
                    }, ],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{
                        color: "#dadada",
                    }, ],
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#616161",
                    }, ],
                },
                {
                    featureType: "road.local",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#9e9e9e",
                    }, ],
                },
                {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [{
                        color: "#e5e5e5",
                    }, ],
                },
                {
                    featureType: "transit.station",
                    elementType: "geometry",
                    stylers: [{
                        color: "#eeeeee",
                    }, ],
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#c9c9c9",
                    }, ],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#9e9e9e",
                    }, ],
                },
            ],
        });

        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
            icon: "../img/maps.png",
        });
        const infowindow = new google.maps.InfoWindow({
            content: "91 Nolan Extensions Suite 670",
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }
    initMap();

    // Menu

    const burger = document.querySelector(".burger"),
        menu = document.querySelector(".burger-menu"),
        close = document.querySelector(".burger-close");

    menu.style.display = "none";
    burger.addEventListener("click", () => {
        if (menu.style.display == "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
    close.addEventListener("click", () => {
        menu.style.display = "none";
    });

    // Slider
    const slides = document.querySelectorAll(".news__item"),
        slider = document.querySelector(".news__wrapper"),
        left = document.querySelector(".left"),
        right = document.querySelector(".right");

    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => (item.style.display = "none"));

        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex * 1].style.display = "block";
        slides[slideIndex + 1].style.display = "block";

        // setInterval(function () {
        //     plusSlides(1);
        //     slides[slideIndex - 1].classList.remove('slideInRight');
        //     slides[slideIndex - 1].classList.remove('slideInLeft');
        // }, 4000);
    }

    slider.style.position = "relative";

    const indicators = document.createElement("ol"),
        dots = [];
    indicators.classList.add("carousel-indicators");
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 50px;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 10px;
            height: 10px;
            margin-right: 7px;
            margin-left: 7px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-radius: 50px;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    left.addEventListener("click", () => {
        plusSlides(-1);
        dots.forEach((dot) => (dot.style.opacity = ".5"));
        dots[slideIndex - 1].style.opacity = "1";
    });

    right.addEventListener("click", () => {
        plusSlides(1);
        dots.forEach((dot) => (dot.style.opacity = ".5"));
        dots[slideIndex - 1].style.opacity = "1";
    });

    // Scrolling

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener("click", function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute("href");

            document.querySelector(id).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }

    // Form

    const form = document.querySelector(".modal__form");

    const message = {
        loading: "Loading...",
        success: "Thanks! We will contact you soon!",
        failure: "Something is wrong...",
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const statusMessage = document.createElement("div");
        statusMessage.classList.add("status");
        statusMessage.textContent = message.loading;
        form.append(statusMessage);

        const request = new XMLHttpRequest();
        request.open("POST", "server.php");

        request.setRequestHeader("Content-type", "application/json");
        const formData = new FormData(form);

        const object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });

        const json = JSON.stringify(object);

        request.send(json);

        request.addEventListener("load", () => {
            if (request.status === 200) {
                console.log(request.response);
                statusMessage.textContent = message.success;
                form.reset();
                setTimeout(() => {
                    statusMessage.remove();
                }, 2000);
            } else {
                statusMessage.textContent = message.failure;
                form.reset();
                setTimeout(() => {
                    statusMessage.remove();
                }, 2000);
            }
        });
    });
});