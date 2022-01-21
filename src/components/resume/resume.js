import React from "react";

export default function Resume() {
    return (
        <section id="resume" className="grey-section">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Resume</h5>
                    <h1>More of my credentials.</h1>
                </div>
            </div>
            {/* /section-intro*/}
            <div className="row resume-timeline">
                <div className="col-twelve resume-header">
                    <h2>Work Experience</h2>
                </div>
                {/* /resume-header */}
                <div className="col-twelve">
                    <div className="timeline-wrap">
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-briefcase" />
                            </div>
                            <div className="timeline-header">
                                <h3>Bartender</h3>
                                <p>March 2021 - Present</p>
                            </div>
                            <div className="timeline-content">
                                <h4>
                                    Great American Restaurants: Jackson's Mighty
                                    Fine Food &amp; Lucky Lounge
                                </h4>
                                <p>
                                    I was taught here how to master hospitality.
                                    Exemplified timeliness and dedication to my
                                    craft.
                                </p>
                            </div>
                        </div>
                        {/* /timeline-block */}
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-briefcase" />
                            </div>
                            <div className="timeline-header">
                                <h3>Bartender/Server</h3>
                                <p>July 2014 - March 2020</p>
                            </div>
                            <div className="timeline-content">
                                <h4>Great American Restaurants: Silverado</h4>
                                <p>
                                    Devoted to prompt service and customer
                                    satisfaction. Consistently provided
                                    excellent customer relations. Memorized
                                    dozens of cocktails and entrees down to the
                                    bare bones.
                                </p>
                            </div>
                        </div>
                        {/* /timeline-block */}
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-briefcase" />
                            </div>
                            <div className="timeline-header">
                                <h3>Server</h3>
                                <p>December 2013 - June 2014</p>
                            </div>
                            <div className="timeline-content">
                                <h4>TGI Fridays</h4>
                                <p>
                                    Learned how to serve in a fast paced
                                    environment. I moved to NoVA in 2014 and
                                    unfortunately had to leave this job.
                                </p>
                            </div>
                        </div>
                        {/* /timeline-block */}
                    </div>
                    {/* /timeline-wrap */}
                </div>
                {/* /col-twelve */}
            </div>
            {/* /resume-timeline */}
            <div className="row resume-timeline">
                <div className="col-twelve resume-header">
                    <h2>Education</h2>
                </div>
                {/* /resume-header */}
                <div className="col-twelve">
                    <div className="timeline-wrap">
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap" />
                            </div>
                            <div className="timeline-header">
                                <h3>Certification</h3>
                                <p>July 2021 - January 2022</p>
                            </div>
                            <div className="timeline-content">
                                <h4>
                                    University of North Carolina: Chapel Hill
                                </h4>
                                <p>
                                    Rigorous six month bootcamp where I learned
                                    Full Stack Web Development. I was
                                    specifically taught how to use the MERN
                                    stack, but am continuing to broaden my scope
                                    of languages.
                                </p>
                            </div>
                        </div>
                        {/* /timeline-block */}
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap" />
                            </div>
                            <div className="timeline-header">
                                <h3>Bachelor Degree</h3>
                                <p>September 2010 - June 2013</p>
                            </div>
                            <div className="timeline-content">
                                <h4>Virginia Western Community College</h4>
                                <p>
                                    Studied Electrical Engineering. I had
                                    aspirations to be an Astronautical Engineer.
                                    I later dropped to pursue an artist's dream
                                    in California.
                                </p>
                            </div>
                        </div>
                        {/* /timeline-block */}
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap" />
                            </div>
                            <div className="timeline-header">
                                <h3>High School Diploma</h3>
                                <p>August 2006 - June 2010</p>
                            </div>
                            <div className="timeline-content">
                                <h4>Hidden Valley High School</h4>
                                <p />
                            </div>
                        </div>
                        {/* /timeline-block */}
                    </div>
                    {/* /timeline-wrap */}
                </div>
                {/* /col-twelve */}
            </div>
            {/* /resume-timeline */}
        </section>
    );
}
