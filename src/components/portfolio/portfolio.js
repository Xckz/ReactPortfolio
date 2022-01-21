import React from "react";

export default function Portfolio() {
    return (
        <section id="portfolio">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Portfolio</h5>
                    <h1>Check Out Some of My Works.</h1>
                    <p className="lead">
                        Here is just some of my work with more coming down the
                        pipeline.
                    </p>
                </div>
            </div>
            {/* /section-intro*/}
            <div className="row portfolio-content">
                <div className="col-twelve">
                    {/* portfolio-wrapper */}
                    <div
                        id="folio-wrapper"
                        className="block-1-2 block-mob-full stack"
                    >
                        <div className="bgrid folio-item">
                            <div className="item-wrap">
                                <img
                                    src="images/portfolio/portfolio.jpg"
                                    alt="Mock Portfolio"
                                />
                                <a href="#modal-01" className="overlay">
                                    <div className="folio-item-table">
                                        <div className="folio-item-cell">
                                            <h3 className="folio-title">
                                                Mock Portfolio
                                            </h3>
                                            <span className="folio-types">
                                                HTML/CSS
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* /folio-item */}
                        <div className="bgrid folio-item">
                            <div className="item-wrap">
                                <img
                                    src="images/portfolio/workdaysched.jpg"
                                    alt="Work Day Scheduler"
                                />
                                <a href="#modal-02" className="overlay">
                                    <div className="folio-item-table">
                                        <div className="folio-item-cell">
                                            <h3 className="folio-title">
                                                Work Day Scheduler
                                            </h3>
                                            <span className="folio-types">
                                                HTML/CS/jQuery
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* /folio-item */}
                        <div className="bgrid folio-item">
                            <div className="item-wrap">
                                <img
                                    src="images/portfolio/sipnshow.jpg"
                                    alt="Sip N Show"
                                />
                                <a href="#modal-03" className="overlay">
                                    <div className="folio-item-table">
                                        <div className="folio-item-cell">
                                            <h3 className="folio-title">
                                                Sip N Show
                                            </h3>
                                            <span className="folio-types">
                                                HTML/CS/JavaScript
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* /folio-item */}
                        <div className="bgrid folio-item">
                            <div className="item-wrap">
                                <img
                                    src="images/portfolio/moviemania.jpg"
                                    alt="Movie Mania"
                                />
                                <a href="#modal-04" className="overlay">
                                    <div className="folio-item-table">
                                        <div className="folio-item-cell">
                                            <h3 className="folio-title">
                                                Movie Mania
                                            </h3>
                                            <span className="folio-types">
                                                Express/Node/Handlebars
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* /folio-item */}
                        <div className="bgrid folio-item">
                            <div className="item-wrap">
                                <img
                                    src="images/portfolio/fitnesstracker.jpg"
                                    alt="Fitness Tracker"
                                />
                                <a href="#modal-05" className="overlay">
                                    <div className="folio-item-table">
                                        <div className="folio-item-cell">
                                            <h3 className="folio-title">
                                                Fitness Tracker
                                            </h3>
                                            <span className="folio-types">
                                                Mongoose / NoSQL
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* /folio-item */}
                        <div className="bgrid folio-item">
                            <div className="item-wrap">
                                <img
                                    src="images/portfolio/notetaker.jpg"
                                    alt="Note Taker"
                                />
                                <a href="#modal-06" className="overlay">
                                    <div className="folio-item-table">
                                        <div className="folio-item-cell">
                                            <h3 className="folio-title">
                                                Note Taker
                                            </h3>
                                            <span className="folio-types">
                                                Express
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* /folio-item */}
                        {/* modal popups - begin
	            ============================================================= */}
                        <div
                            id="modal-01"
                            className="popup-modal slider mfp-hide"
                        >
                            <div className="media">
                                <img
                                    src="images/portfolio/modals/m-portfolio.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="description-box">
                                <h4>Mock Portfolio</h4>
                                <p>
                                    This is a mock portfolio for a potential
                                    employee, so that they can tell a bit about
                                    themselves and display their deployed
                                    projects.
                                </p>
                                <div className="categories">HTML / CSS</div>
                            </div>
                            <div className="link-box">
                                <a href="https://xckz.github.io/Portfolio/">
                                    Details
                                </a>
                                <a href="#" className="popup-modal-dismiss">
                                    Close
                                </a>
                            </div>
                        </div>
                        {/* /modal-01 */}
                        <div
                            id="modal-02"
                            className="popup-modal slider mfp-hide"
                        >
                            <div className="media">
                                <img
                                    src="images/portfolio/modals/m-workdaysched.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="description-box">
                                <h4>Work Day Scheduler</h4>
                                <p>
                                    A calendar application that allows a user to
                                    save events for each hour of the day.
                                </p>
                                <div className="categories">
                                    HTML / JS / jQuery
                                </div>
                            </div>
                            <div className="link-box">
                                <a href="https://xckz.github.io/WorkDayScheduler/">
                                    Details
                                </a>
                                <a href="#" className="popup-modal-dismiss">
                                    Close
                                </a>
                            </div>
                        </div>
                        {/* /modal-02 */}
                        <div
                            id="modal-03"
                            className="popup-modal slider mfp-hide"
                        >
                            <div className="media">
                                <img
                                    src="images/portfolio/modals/m-sipnshow.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="description-box">
                                <h4>Sip n Show</h4>
                                <p>
                                    This application is for anyone looking to
                                    grab a drink near a venue they're going to.
                                    Whether to pregame or aftergame.
                                </p>
                                <div className="categories">
                                    HTML / CSS / JS
                                </div>
                            </div>
                            <div className="link-box">
                                <a href="https://xckz.github.io/project01/">
                                    Details
                                </a>
                                <a href="#" className="popup-modal-dismiss">
                                    Close
                                </a>
                            </div>
                        </div>
                        {/* /modal-03 */}
                        <div
                            id="modal-04"
                            className="popup-modal slider mfp-hide"
                        >
                            <div className="media">
                                <img
                                    src="images/portfolio/modals/m-moviemania.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="description-box">
                                <h4>Movie Mania</h4>
                                <p>
                                    This application allows users to create an
                                    account and then choose &amp; save movies
                                    based on a genre they've selected.
                                </p>
                                <div className="categories">
                                    Express / Node / Handlebars
                                </div>
                            </div>
                            <div className="link-box">
                                <a href="https://moviemania000.herokuapp.com/">
                                    Details
                                </a>
                                <a href="#" className="popup-modal-dismiss">
                                    Close
                                </a>
                            </div>
                        </div>
                        {/* /modal-04 */}
                        <div
                            id="modal-05"
                            className="popup-modal slider mfp-hide"
                        >
                            <div className="media">
                                <img
                                    src="images/portfolio/modals/m-fitnesstracker.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="description-box">
                                <h4>Fitness Tracker</h4>
                                <p>
                                    This application will users to track their
                                    fitness goals and workouts.
                                </p>
                                <div className="categories">
                                    Mongoose / NoSQL
                                </div>
                            </div>
                            <div className="link-box">
                                <a href="https://lc-workouttracker.herokuapp.com/">
                                    Details
                                </a>
                                <a href="#" className="popup-modal-dismiss">
                                    Close
                                </a>
                            </div>
                        </div>
                        {/* /modal-05 */}
                        <div
                            id="modal-06"
                            className="popup-modal slider mfp-hide"
                        >
                            <div className="media">
                                <img
                                    src="images/portfolio/modals/m-notetaker.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="description-box">
                                <h4>Note Taker</h4>
                                <p>
                                    This application lets a user create, save,
                                    and delete notes for their use.
                                </p>
                                <div className="categories">Express</div>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/Xckz/NoteTaker">
                                    Details
                                </a>
                                <a href="#" className="popup-modal-dismiss">
                                    Close
                                </a>
                            </div>
                        </div>
                        {/* /modal-06 */}
                        {/* modal popups - end
	            ============================================================= */}
                    </div>
                    {/* /portfolio-wrapper */}
                </div>
                {/* /twelve */}
            </div>
            {/* /portfolio-content */}
        </section>
    );
}
