import React from "react";
import style from "../styles/home.module.css";

function Home() {
    return (
        <div className={`${style.main}`}>
            <div className={`${style.header}`}>
                <a className={`${style.button}`} href="#about_me">About me</a>
                <a className={`${style.button}`} href="#my_skills">My skills</a>
                <a className={`${style.button}`} href="#education">Education</a>
                <a className={`${style.button}`} href="#projects">Projects</a>
                <a className={`${style.button}`} href="#work_exp">Work experience</a>
                <a className={`${style.button}`} href="#reviews">Reviews</a>
                <a className={`${style.button}`} href="#contact">Contact</a>
            </div>
            <div className={`${style.who_I_am}`}>

            </div>
            <div className={`${style.about_me}`} id="about_me">

            </div>
            <div className={`${style.my_skills}`} id="my_skills">

            </div>
            <div className={`${style.education}`} id="education">

            </div>
            <div className={`${style.project_list}`} id="projects">

            </div>
            <div className={`${style.work_exp}`} id="work_exp">

            </div>
            <div className={`${style.reviews}`} id="reviews">

            </div>
            <div className={`${style.contact_me}`} id="contact">

            </div>
        </div>
    )
}

export default Home;