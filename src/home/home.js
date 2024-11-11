import React, { useState, useEffect } from "react";
import style from "../styles/home.module.css";
import Modal from "react-modal";

Modal.setAppElement('#root');

function Home() {
    const [modal, setModal] = useState({ isOpen: false, title: null, content: null, href: null });
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const openModal = (title, content, href) => {
        setModal({ isOpen: true, title, content, href });
    };

    const closeModal = () => {
        setModal({ isOpen: false, title: null, content: null, href: null });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!email || !message) {
            setStatus("Please fill in both fields.");
            return;
        }
        if (!email.includes("@")) {
            setStatus("Please enter a valid email address.");
            return;
        }
        const response = await fetch('http://your-laravel-backend-url/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, message }),
        });

        if (response.ok) {
            setStatus("Email sent successfully!");
        } else {
            setStatus("Failed to send email.");
        }
    };

    return (
        <div className={`${style.main}`}>
            <div className={style.headerMenu}>
                {isMobile ? (
                    <>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={style.burger}>
                            ☰
                        </button>
                        {isMenuOpen && (
                            <div className={style.header}>
                                <a className={style.button} href="#about_me">About me</a>
                                <a className={style.button} href="#my_skills">My skills</a>
                                <a className={style.button} href="#education">Education</a>
                                <a className={style.button} href="#projects">Projects</a>
                                <a className={style.button} href="#work_exp">Work experience</a>
                                <a className={style.button} href="#reviews">Reviews</a>
                                <a className={style.button} href="#contact">Contact</a>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <a className={style.button} href="#about_me">About me</a>
                        <a className={style.button} href="#my_skills">My skills</a>
                        <a className={style.button} href="#education">Education</a>
                        <a className={style.button} href="#projects">Projects</a>
                        <a className={style.button} href="#work_exp">Work experience</a>
                        <a className={style.button} href="#reviews">Reviews</a>
                        <a className={style.button} href="#contact">Contact</a>
                    </>
                )}
            </div>
            <div className={`${style.who_I_am}`}>
                <div className={`${style.name}`}>
                    <h1 className={`${style.h1}`}>
                        Hello I'm,
                    </h1>
                    <h1 className={`${style.h1Name}`}>
                        Edmunds Bērzons.
                    </h1>
                    <h1 className={`${style.h1}`}>
                        Full-stack developer.
                    </h1>
                </div>
                <div className={`${style.imgBox}`}>

                </div>
            </div>
            <div className={`${style.about_me}`} id="about_me">
                <div className={`${style.title}`}>
                    <h1 className={`${style.h1Title}`}>
                        About me
                    </h1>
                </div>
                <div className={`${style.desc}`}>
                    <h1 className={`${style.desc_txt}`}>
                        I'm new to programming and still require some learning,
                        but I have quite a lot of experience in my studies.
                        I have made several webpages and video game.
                        I'm good when it comes to teamwork and communication with teammates,
                        but lack mostly in solo work as there is nothing to drive me to work more.
                    </h1>
                </div>
            </div>
            <div className={`${style.my_skills}`} id="my_skills">
                <div className={`${style.skillsTitle}`}>
                    <h1 className={`${style.h1Skills}`}>
                        My skills
                    </h1>
                </div>
                <div className={`${style.skills}`}>
                    <div className={`${style.languages}`}>
                        <h2 className={`${style.skill}`}>
                            PHP
                        </h2>
                        <h2 className={`${style.skill}`}>
                            JavaScript
                        </h2>
                        <h2 className={`${style.skill}`}>
                            SQL
                        </h2>
                    </div>
                    <div className={`${style.languages}`}>
                        <h2 className={`${style.skill}`}>
                            HTML
                        </h2>
                        <h2 className={`${style.skill}`}>
                            CSS
                        </h2>
                    </div>
                    <div className={`${style.frameworks}`}>
                        <h2 className={`${style.skill}`}>
                            React.js
                        </h2>
                        <h2 className={`${style.skill}`}>
                            Svelte
                        </h2>
                        <h2 className={`${style.skill}`}>
                            Laravel
                        </h2>
                        <h2 className={`${style.skill}`}>
                            Next.js
                        </h2>
                    </div>
                </div>
            </div>
            <div className={`${style.education}`} id="education">
                <div className={`${style.education_title}`}>
                    <h1 className={`${style.h1Education}`}>
                        My education
                    </h1>
                </div>
                <div className={`${style.desc_edu}`}>
                    <div className={`${style.desc_edu_box}`}>
                        <h1 className={`${style.h1Edu}`}>
                            I have finished 3rd year in Vidzeme technology and design vocational school. In which I had the chance to learn PHP, HTML, CSS, JS and SQL.
                        </h1>
                    </div>
                    <div className={`${style.desc_edu_box}`}>
                        <h1 className={`${style.h1Edu}`}>
                            In my free time I have tryed to learn C++, C# and Python. Currently I am not that good in C# and Python but I am somewhat capable in programming in C++.
                        </h1>
                    </div>
                </div>
            </div>
            <div className={`${style.project_list}`} id="projects">
                <div className={`${style.projectTitle}`}>
                    <h1 className={`${style.h1Projects}`}>
                        Projects
                    </h1>
                </div>
                <div className={`${style.manageBox}`}>
                    <div className={`${style.projectBox}`}>
                        <div className={`${style.project_title}`}>
                            <h1 className={`${style.projectH1}`}>
                                Solo projects
                            </h1>
                        </div>
                        <div className={`${style.projectNames}`}>
                            <button className={`${style.buttonProject}`}
                                onClick={() =>
                                    openModal(
                                        'Memory game',
                                        'This website contains memory game. Currently it is playable until level 6, then it breaks because of how stages are made and I can not find how to fix this issue. Skins work for the page and leaderboard kind of works as intended.',
                                        'https://github.com/Dragonbestgg1/Memory-game'
                                    )}
                            >
                                Memory Game
                            </button>
                            <button className={`${style.buttonProject}`}
                                onClick={() =>
                                    openModal(
                                        'Website for coffee shop',
                                        'This is website made for coffee shop fully from provided design. In this design everything is as requested by client.',
                                        'https://github.com/Dragonbestgg1/css'
                                    )}
                            >
                                Website for coffee shop
                            </button>
                            <button className={`${style.buttonProject}`}
                                onClick={() =>
                                    openModal(
                                        'Ticket shop',
                                        'This is website is ticket shop. In here the is option to buy tickets and choose a seat in which you wanna sit. Also it shows which films are airing and when.',
                                        'https://github.com/Dragonbestgg1/pedejais'
                                    )}
                            >
                                Ticket shop
                            </button>
                            <button className={`${style.buttonProject}`}
                                onClick={() =>
                                    openModal(
                                        'Exam',
                                        'This is one of my exam works. This was one of the simples ones which we were given and it was completed in about an hour.',
                                        'https://github.com/Dragonbestgg1/ex'
                                    )}
                            >
                                Exam
                            </button>
                            <button className={`${style.buttonProject}`}
                                onClick={() =>
                                    openModal(
                                        'Jira type webpage',
                                        'This is Jira wanna be website. It has many flaws big one being bad style. And that is mostly because I was experimenting with linear gradients.',
                                        'https://github.com/Dragonbestgg1/lapsins'
                                    )}
                            >
                                Jira type webpage
                            </button>
                        </div>
                    </div>
                    <div className={`${style.projectBox}`}>
                        <div className={`${style.project_title}`}>
                            <h1 className={`${style.projectH1}`}>
                                Group Projects
                            </h1>
                        </div>
                        <button className={`${style.buttonProject}`}
                            onClick={() =>
                                openModal(
                                    'User management',
                                    'This is website focuses on user management and what privilages it has. Also it each user had only their respective visibility in this website.',
                                    'https://github.com/Dragonbestgg1/lietotajulomas'
                                )}
                        >
                            User management
                        </button>
                        <button className={`${style.buttonProject}`}
                            onClick={() =>
                                openModal(
                                    'Random project',
                                    'This is random small group project we were tasked to do in 10 minute time. So it is nothing that big or exciting but still it was done in about 5 min instead of 10 because of our communication with teammembers.',
                                    'https://github.com/Dragonbestgg1/Schol'
                                )}
                        >
                            Random project
                        </button>
                        <button className={`${style.buttonProject}`}
                            onClick={() =>
                                openModal(
                                    'Compmath',
                                    'This is math game inside webpage. We had about 2 months to make it and we work hard as a team on it. Also this work is my first experience with Next.js, so I lack a little bit behind when it came to good teamwork, but our team leader had a lot of experience in Next.js and he taught me the basics and why it was good framework.',
                                    'https://github.com/catsonluna/compmath'
                                )}
                        >
                            Compmath
                        </button>
                        <button className={`${style.buttonProject}`}
                            onClick={() =>
                                openModal(
                                    'Task management',
                                    'This is Jira based website but this time it focuses more one tasks rather than user specific privilage on visibility.',
                                    'https://github.com/catsonluna/task-managment'
                                )}
                        >
                            Task management
                        </button>
                        <button className={`${style.buttonProject}`}
                            onClick={() =>
                                openModal(
                                    'Monster Run',
                                    'This is a game made in Unity. It also is was my first time making actual game outsite of webpage and first time writing something in C#.',
                                    'https://github.com/catsonluna/UnityMonsterRun'
                                )}
                        >
                            Monster Run
                        </button>
                        <button className={`${style.buttonProject}`}
                            onClick={() =>
                                openModal(
                                    'Wheater App',
                                    'Wheater App project, which was made by me and one other person (Ginca1 on Github). I was making API requests and providing output data, while my partner was making front-end.',
                                    'https://github.com/KrievinsT/forecast_app'
                                )}
                        >
                            Wheater App
                        </button>
                    </div>
                </div>
                <Modal
                    isOpen={modal.isOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className={`${style.modal}`}
                >
                    <h2 className={`${style.modalH1}`}>{modal.title}</h2>
                    <p className={`${style.modalP}`}>{modal.content}</p>
                    <a href={modal.href} className={`${style.modalHref}`}>link to Github: {modal.title}</a>
                </Modal>
            </div>
            <div className={`${style.work_exp}`} id="work_exp">
                <div className={`${style.workTitle}`}>
                    <h1 className={`${style.workH1}`}>
                        Work experience
                    </h1>
                </div>
                <div className={`${style.descWork}`}>
                    <h1 className={`${style.descH1}`}>
                        Currently I have no work experience in programming as I haven't been in real work enviornment practice assosiated with programming.
                    </h1>
                </div>
            </div>
            <div className={`${style.reviews}`} id="reviews">
                <div className={`${style.reviewTitle}`}>
                    <h1 className={`${style.reviewH1}`}>
                        Reviews
                    </h1>
                </div>
                <div className={`${style.reviewManage}`}>
                    <div className={`${style.reviewBox}`}>
                        <h1 className={`${style.reviewName}`}>
                            Daniils
                        </h1>
                        <h1 className={`${style.reviewDesc}`}>
                            Has made some good projects
                        </h1>
                    </div>
                    <div className={`${style.reviewBox}`}>
                        <h1 className={`${style.reviewName}`}>
                            Gustavs
                        </h1>
                        <h1 className={`${style.reviewDesc}`}>
                            Does something all the time so it's good unlike my teammates who doesn't do anything.
                        </h1>
                    </div>
                </div>
            </div>
            <div className={`${style.contact_me}`} id="contact">
                <div className={`${style.contactTitle}`}>
                    <h1 className={`${style.contactH1}`}>
                        Contact Me
                    </h1>
                </div>
                <div className={`${style.contactManage}`}>
                    <div className={`${style.personal}`}>
                        <div>
                            <h1 className={`${style.descPersT}`}>
                                Personal:
                            </h1>
                            <h1 className={`${style.descPers}`}>
                                Email: ipb21.e.berzons@vtdt.edu.lv
                            </h1>
                            <h1 className={`${style.descPers}`}>
                                Phone: 26328855
                            </h1>
                        </div>
                        <div>
                            <h1 className={`${style.descPersT}`}>
                                Socials:
                            </h1>
                            <h1 className={`${style.descPers}`}>
                                IG: Dragonbestgg1
                            </h1>
                            <h1 className={`${style.descPers}`}>
                                FB: Edmunds Berzons
                            </h1>
                            <h1 className={`${style.descPers}`}>
                                DC: dragonbestgg1
                            </h1>
                        </div>
                    </div>
                    {/* <div className={`${style.directEmail}`}>
                        <h1 className={`${style.directTitle}`}>
                            Send me E-mail directly
                        </h1>
                        <form className={`${style.contactFrom}`} onSubmit={handleSubmit}>
                            <input className={`${style.formInput}`} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your Email" />
                            <textarea className={`${style.formInput}`} value={message} onChange={e => setMessage(e.target.value)} placeholder="Your Message" />
                            <button className={`${style.formBut}`} type="submit">Send</button>
                        </form>
                        <p>{status}</p>
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default Home;
