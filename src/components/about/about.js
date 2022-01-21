import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>
                    <div className="intro-info">
                        <img
                            src="images/profile-pic.jpg"
                            alt="Profile Picture"
                        />
                        <p className="lead">
                            I'm an artist living outside of DC who recently had
                            the opportunity to go back to school. I'm soon going
                            to graduate from UNC Chapel Hill's Coding Bootcamp.
                            Although I'd been out of school for 10 years, I had
                            gained new skills and aspirations that I applied
                            throughout the course. Oldest of five. Haver of one.
                            I make electronic music during the day and make
                            drinks at night. Looking to combine code and sound
                            to make musical applications in the future.
                        </p>
                    </div>
                </div>
            </div>
            {/* /section-intro */}
            <div className="row about-content">
                <div className="col-six tab-full">
                    <h3>Profile</h3>
                    <p>
                        Been all over the US, but lived most of my time in
                        Virginia. Been bartending for the last seven years at
                        one of NoVA's top places to work.
                    </p>
                    <ul className="info-list">
                        <li>
                            <strong>Fullname:</strong>
                            <span>Lyman Alexander Connor III</span>
                        </li>
                        <li>
                            <strong>Birth Date:</strong>
                            <span>July 19, 1992</span>
                        </li>
                        <li>
                            <strong>Jobs:</strong>
                            <span>Freelancer, Frontend Developer</span>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <span>eckzly@gmail.com</span>
                        </li>
                    </ul>
                    {/* /info-list */}
                </div>
                <div className="col-six tab-full">
                    <h3>Skills</h3>
                    <p>Knowledgeable with MERN Stack applications.</p>
                    <ul className="skill-bars">
                        <li>
                            <div className="progress percent90">
                                <span>90%</span>
                            </div>
                            <strong>HTML</strong>
                        </li>
                        <li>
                            <div className="progress percent85">
                                <span>85%</span>
                            </div>
                            <strong>CSS</strong>
                        </li>
                        <li>
                            <div className="progress percent80">
                                <span>80%</span>
                            </div>
                            <strong>JavaScript</strong>
                        </li>
                        <li>
                            <div className="progress percent75">
                                <span>75%</span>
                            </div>
                            <strong>Node</strong>
                        </li>
                        <li>
                            <div className="progress percent70">
                                <span>70%</span>
                            </div>
                            <strong>React</strong>
                        </li>
                    </ul>
                    {/* /skill-bars */}
                </div>
            </div>
            <div className="row button-section">
                <div className="col-twelve">
                    <a
                        href="#contact"
                        title="Hire Me"
                        className="button stroke smoothscroll"
                    >
                        Hire Me
                    </a>
                    <a
                        href="#"
                        title="Download CV"
                        className="button button-primary"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}
