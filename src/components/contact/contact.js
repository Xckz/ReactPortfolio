import React from "react";

export default function Contact() {
    return (
        <section id="contact">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Contact</h5>
                    <h1>I'd Love To Hear From You.</h1>
                    <p className="lead">
                        Fill out this form with your inquiry and I'll get back
                        to you as soon as possible. Thank you!
                    </p>
                </div>
            </div>
            {/* /section-intro */}
            <div className="row contact-form">
                <div className="col-twelve">
                    {/* form */}
                    <form
                        name="contactForm"
                        id="contactForm"
                        method="post"
                        action
                    >
                        <fieldset>
                            <div className="form-field">
                                <input
                                    name="contactName"
                                    type="text"
                                    id="contactName"
                                    placeholder="Name"
                                    defaultValue
                                    minLength={2}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    name="contactEmail"
                                    type="email"
                                    id="contactEmail"
                                    placeholder="Email"
                                    defaultValue
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    name="contactSubject"
                                    type="text"
                                    id="contactSubject"
                                    placeholder="Subject"
                                    defaultValue
                                />
                            </div>
                            <div className="form-field">
                                <textarea
                                    name="contactMessage"
                                    id="contactMessage"
                                    placeholder="message"
                                    rows={10}
                                    cols={50}
                                    required
                                    defaultValue={""}
                                />
                            </div>
                            <div className="form-field">
                                <button className="submitform">Submit</button>
                                <div id="submit-loader">
                                    <div className="text-loader">
                                        Sending...
                                    </div>
                                    <div className="s-loader">
                                        <div className="bounce1" />
                                        <div className="bounce2" />
                                        <div className="bounce3" />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                    {/* Form End */}
                    {/* contact-warning */}
                    <div id="message-warning" />
                    {/* contact-success */}
                    <div id="message-success">
                        <i className="fa fa-check" />
                        Your message was sent, thank you!
                        <br />
                    </div>
                </div>
                {/* /col-twelve */}
            </div>
            {/* /contact-form */}
            <div className="row contact-info">
                <div className="col-six tab-full collapse">
                    <div className="icon">
                        <i className="icon-mail" />
                    </div>
                    <h5>Email Me At</h5>
                    <p>
                        eckzly@gmail.com
                        <br />
                    </p>
                </div>
                <div className="col-six tab-full">
                    <div className="icon">
                        <i className="icon-phone" />
                    </div>
                    <h5>Call Me At</h5>
                    <p>
                        Phone: (562) 506 3951
                        <br />
                    </p>
                </div>
            </div>
            {/* /contact-info */}
        </section>
    );
}
