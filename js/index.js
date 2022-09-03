"use strict"

const background = document.querySelectorAll(".wrapper_img"),
        ball = document.querySelector(".midle_ball"),
        nameTit = document.querySelector(".title_name"),
        navigation = document.querySelector(".navigation");

window.addEventListener("scroll", (e) => {
    let value = window.scrollY
    background.forEach(img => {

        ball.style.transition = 0 + "ms"
        img.style.transition = 0 + 'ms';
        ball.style.top = value * 0.65 + 202 + "px";
        navigation.style.background = 'linear-gradient(to bottom, #8fb8dbcb, transparent, transparent)'
        background[2].style.top = value * 0.70 + "px";
        background[1].style.bottom = (value * -0.60) + 80 + "px";
        background[0].style.top = value * 0.90 + "px";
        background[3].style.bottom = value * -0.50 + "px";
        background[5].style.bottom = value * -0.50 + "px";
        nameTit.style.left =  value * 1.70  +"px";
        nameTit.style.bottom =  value * -0.40 + 240 +"px";
    })
})

window.addEventListener("load", () => {
    document.querySelector(".absolute_wrapper").classList.remove("fade")
    background.forEach((img, index) => {
        setTimeout(() => {
            img.classList.remove("fade")
        }, 100 * (5-index))
        setTimeout(() => {
            ball.classList.remove("fadeB")
        }, 700)
    })
})