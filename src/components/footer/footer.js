import React from "react";

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="row">
                    <div className="col-eight tab-full social">
                        <ul className="footer-social">
                            <li>
                                <a href="https://github.com/Xckz">
                                    <i className="fa fa-github" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.behance.net/lymanconnor">
                                    <i className="fa fa-behance" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/lyman-connor/">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://dribbble.com/Eckz">
                                    <i className="fa fa-dribbble" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="go-top">
                        <a
                            className="smoothscroll"
                            title="Back to Top"
                            href="#top"
                        >
                            <i className="fa fa-long-arrow-up" />
                        </a>
                    </div>
                </div>
                {/* /row */}
            </footer>
            <div id="preloader">
                <div id="loader" />
            </div>
        </div>
    );
}
