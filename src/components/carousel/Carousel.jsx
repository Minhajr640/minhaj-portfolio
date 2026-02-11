import { FiArrowRightCircle } from "react-icons/fi";
import { MdOutlineSocialDistance } from "react-icons/md";
import { FiArrowLeftCircle } from "react-icons/fi";

import githubIcon from "../../assets/github-icon.png";

import { useState } from "react";

function Carousel() {

const [slideNumber, setSlideNumber] = useState(1);

const handleClickRight = () => {
    if(slideNumber == 3) {
        setSlideNumber(1);
    } else {
        setSlideNumber(slideNumber + 1)
    }
}
const handleClickLeft = () => {
    if(slideNumber == 1) {
        setSlideNumber(3);
    } else {
        setSlideNumber(slideNumber - 1)
    }
}

    return (
        <div className="carousel">
        <FiArrowLeftCircle className="arrow" id="left" onClick={handleClickLeft}/>
            {slideNumber== 1 && (
            <div className="project">
                <div className="project-header">
                    <h2>Projects</h2>
                    <div className="project-symbol">
                        <a data-tooltip="Video Demo">
                        <iframe
                            width="100%"
                            height="200"
                            src="https://www.youtube.com/embed/Z0Stru_2S0E"
                            title="Project Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        </a>
                    </div>
                    <div>
                    <div>
                        <h4 className="project-title">Full-Stack Banking Application</h4>
                    </div>
                    <div>
                        <p>Architected an online banking platform that allows users to open bank accounts, view accounts, and perform secure transactions in real-time. 
                            Built with React and Java Spring boot, the application includes advanced backend concepts such as asynchronous processing, scheduled tasks, and secure transaction handling with logs. 
                        </p>
                    </div>
                    <div>
                    <a href="https://github.com/Minhajr640/iron-bank-app" target="_blank" rel="noopener noreferrer">
                        <img className="github-icon" src={githubIcon} alt="GitHub Repository" />
                    </a>
                    </div >
                    </div>
                </div>
                <div className="project-highlights">
                    <ul className="description-list">
                        <h4>Project Highlights</h4>
                        <li>
                            <p>
                                <b>Asynchronous Transaction Processing:</b> Implemented multi-threaded operations using Spring's @Async to handle fund transfers in the background.
                            </p>
                        </li>
                        <li>
                            <p> 
                                <b>Automated Interest Accrual:</b> Used Spring Scheduler with cron expressions to automatically calculate and apply interest to accounts at scheduled intervals.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Secure Authentication & Authorization:</b> Built user registration and login system with JSON Web Tokens.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>RESTful API architecture:</b> Designed REST endpoints in Spring Boot controllers for account management, transaction processing, and user profile operations.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Transaction Management:</b> Used Spring's @Transactional annotatios to ensure ACID compliance for monetary transactions.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Database Design & Integration:</b> Architected the relational database schema using Spring Data JPA.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Real-time State Management:</b> Developed React frontend with state management to show live account balances, transaction history, and profile updates.
                            </p>
                        </li>
                    </ul>
                    <ul className="description-outcome">
                        <h4>Outcome</h4>
                        <li>
                        <p>
                        Motivated by my experience as a Bank Teller, I successfully built a banking application to handles financial operations with respect to data integrity and security.
                        The project allowed me to use advanced Spring concepts to meet my business requirements. 
                        The biggest achievements gained through this experience was architecting a complex database and neatly engineering technical solutions to complex logic.
                        </p>
                        </li>
                    </ul>
                </div>
            </div>
            )}
            {slideNumber== 2 && (
            <div className="project">
                <div className="project-header">
                    <h2>Projects</h2>
                    <div className="project-symbol">
                        <a data-tooltip="Video Demo">
                        <iframe
                            width="100%"
                            height="200"
                            src="https://www.youtube.com/embed/Zc1TwaIQY3I"
                            title="Project Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        </a>
                    </div>
                    <div>
                    <div>
                        <h4 className="project-title">E-commerce Fullstack App with Stripe</h4>
                    </div>
                    <div>
                        <p>Created a full-stack e-commerce application that consists of a Java backend and React frontend. The application
                            allows customers to create accounts, browse products, manage their shopping carts, and make secure purchases.
                            This project showcases my fullstack development skills, such as database management, RESTful API design, and UI development.
                        </p>
                    </div>
                    <div>
                    <a href="https://github.com/Minhajr640/E-commerce" target="_blank" rel="noopener noreferrer">
                        <img className="github-icon" src={githubIcon} alt="GitHub Repository" />
                    </a>
                    </div>
                    </div>
                </div>
                <div className="project-highlights">
                    <ul>
                        <h4>Project Highlights</h4>
                        <li>
                            <p><b>RESTful API Development:</b> Designed REST endpoints in Spring Boot controllers to handle CRUD operations for 
                                products, users, and orders.
                            </p>
                        </li>
                        <li>
                            <p><b>Secure Authentication System:</b> Built user registration and login functionality with JSON Web Token.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Database Integration:</b> Used Spring Data JPA with PostgresSQL to manage data persistence.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Payment Processing:</b> Integrated Stripe Test API for secure payment handling and transaction processing.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Responsive Frontend:</b> Developed UI components in React.js with React hooks.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Data Persistence:</b> Implemented repository pattern with Spring Data for database queries and data access layer abstraction.
                            </p>
                        </li>
                    </ul>
                    <ul className="description-outcome">
                    <h4>Outcome</h4>
                    <li>
                    <p>
                        Pushed a working e-commerce application to GitHub that shows mastery of front-end and back-end development. 
                        The project helped me understand the entire software development lifecycle from database design and API development to frontend integration.
                        Lastly, the project allowed me to build foundational skills in developing an application with Spring and React which allowed me to tackle 
                        more advanced concepts in future projects.
                    </p>
                    </li>
                    </ul>
                </div>
            </div>
            )}
            {slideNumber== 3 && (
            <div className="project">
                <div className="project-header">
                    <h2>Projects</h2>
                    <div className="project-symbol">
                        <a href="https://github.com/Minhajr640/Minhajr640-pep-spring-project" target="_blank" rel="noopener noreferrer" data-tooltip="Github Repo">
                        <MdOutlineSocialDistance className="project-logo"/>
                        </a>
                    </div>
                    <div>
                    <div>
                        <h4 className="project-title">Social Media Blog Api</h4>
                    </div>
                    <div>
                        <p>Developed a RESTful API for a social media blog platform using Java Spring Boot. This project focused on backend development by using 
                            layered architecture, decoupling components, and following inversion of control principles.
                        </p>
                    </div>
                    <div>
                        <a href="https://github.com/Minhajr640/Minhajr640-pep-spring-project" target="_blank" rel="noopener noreferrer">
                            <img className="github-icon" src={githubIcon} alt="GitHub Repository" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="project-highlights">
                    <ul>
                        <h4>Project Highlights</h4>
                        <li>
                            <p>
                                <b>Layered Architecture Design:</b> Implemented three-tier architecture with controller, service, and repository layers for seperation of concerns.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>RESTful API Development:</b> Built controller layer with custom endpoints to handle HTTP requests and return appropriate status codes and responses.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Spring Data JPA Integration:</b> Utilized JPARepository interface for database access, reducing boilerplate code.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Business Logic:</b> Developed service classes to process requests, validate data, and enforce business rules before pushing to database.
                            </p>
                        </li>
                    </ul>
                    <ul className="description-outcome">
                    <h4>Outcome</h4>
                    <li>
                    <p>
                        This case-study project helped me gain the skills to code technical solutions with Java objects
                        and learn core spring concepts such as inversion of control,
                        dependency injection, Spring configuration, and Spring beans. The project was packaged using Maven
                        and pushed to Github. Overall, completion of the project allowed me to learn the full process in getting
                        technical solutions to business problems ready for deployment from setting up the coding enviornment, writing your soultions, to pushing code to a 
                        version control system. 
                    </p>
                    </li>
                    </ul>
                </div>
            </div>
            )}
        <FiArrowRightCircle className="arrow" id="right" onClick={handleClickRight}/>
        </div>

    )
}

export default Carousel