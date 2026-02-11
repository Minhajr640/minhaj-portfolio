
import './App.css'
import './index.css'
import profilePicture from "./assets/IMG_7443-modified.png";
import Carousel from './components/carousel/Carousel';
import baruchLogo from "./assets/baruchLogo.png";
import springIcon from "./assets/spring-icon-no-bg.png";
import javaIcon from "./assets/java-icon-no-bg.png";
import postgresIcon from "./assets/postgres-icon-no-bg.png";
import reactIcon from "./assets/react-icon-no-bg.png";
import jsIcon from "./assets/js-icon-no-bg.png";
import githubIcon from "./assets/github-icon.png";
import linkedinIcon from "./assets/linkedin-icon-no-bg.png";
import gmailIcon from "./assets/gmail-icon-no-bg.png";
import citizensIcon from "./assets/citizens-icon.jpg";
import revatureIcon from "./assets/revature-icon.jpeg";
import taxIcon from "./assets/tax-icon.png";
import awsBadge from "./assets/aws-badge.png";
import courseraBadge from "./assets/coursera-badge.png";
import forageBadge from "./assets/forage-badge.png";


function App() {


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if(element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <>
    <nav className="nav-banner">
      <div className="nav-content">
        <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
        <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
        <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
        <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
        <button onClick={() => scrollToSection('socials')} className="nav-link">Socials</button>
      </div>
    </nav>

    <div>
      <div id="home" className="landing-view">
        <div className="profile-img">
          <img src={profilePicture} alt="Profile Picture"/>
        </div>
        <div className="Name-Header">
              <h1>Minhajur Rahman</h1>
              <h3>Jr. Full-Stack Java Developer</h3>
              <p><b>HI!</b> I have completed 4 years of education centered in Finance and another 4 centered in Programming. I
              have worked in financial services for 3+ years and now excited to transition into the FinTech industry as a developer.</p>
        </div>
      </div>
      <div id="education" className="education-certification">
          <div className="ed-cert-card">
            <h2 className="card-title">Education</h2>
            <div className="school-details">
              <div className="school-Logo"><img src={baruchLogo} alt="school-logo"/></div>
              <div className="school-description">
                  <h4>Zicklin School of Business</h4>
                  <h4>BBA in Computer Information Systems</h4>
                  <p>College courses focused on business 
                      management and finance for my first two years. In my final two years,
                      I shifted to technical courses such as programming with Java, ethics in programming, developement life cycles, and 
                      database design methodologies. Grateful to have had an education that was a mix of finance, business mgmt., and information systems.
                  </p>
              </div>
              </div>
          </div>
          <div className="ed-cert-card">
            <h2 className="card-title">Certifications</h2>
            <ul>
              <li>
                <div className="cert-header">
                <h4>AWS Certified Cloud Practitioner</h4>
                <a href="https://www.credly.com/badges/2e09662f-2862-47ec-97f3-864918f3c946" target="_blank" rel="noopener noreferrer">
                <img className="badge-icon" src={awsBadge} alt="AWS Certified Cloud Practitioner Badge"/>
                </a>
                </div>
                <p> Gained better understanding of IT infrastructures and the hardware needed for 
                  computing programs to run, application data to be hosted, and secure network connections to be made.
                  Learned about the AWS cloud enviornment, the services AWS offers and their benefits. The most important takeaway was 
                  learning about benefits of cloud and who it's meant for.
                </p>
              </li>
              <li>
                <div className="cert-header">
                <h4>Google Data Analytics Professional</h4>
                <a href="https://coursera.org/share/a3563dcc5dcd4c632f92c4b6a680d7fa" target="_blank" rel="noopener noreferrer">
                <img className="badge-icon" src={courseraBadge} alt="Google Data Analytics Badge"/>
                </a>
                </div>
                <p> Completed training on data analysis process 
                  from start to finish. Developed skills in data cleaning, 
                  visualization, and analysis using tools like Excel, SQL, 
                  and Tableau. Used these skills to make data-driven recommendations for case studies at end of training. 
                  </p>
              </li>
              <li>
                <div className="cert-header">
                <h4>HPE - Software Engineering Simulation</h4>
                <a href="https://www.theforage.com/completion-certificates/fgHAi6dLhpRsGKyyN/da2T3WZCbMAJD7bNB_fgHAi6dLhpRsGKyyN_o2zNyLDoaw2WsLgxf_1741838598208_completion_certificate.pdf" target="_blank" rel="noopener noreferrer">
                <img className="cert-icon" src={forageBadge} alt="Forage Logo"/>
                </a>
                </div>
                <p>
                  </p>
              </li>
              <li>
                <div className="cert-header">
                  <h4>Quantium - Data Analytics Simulation</h4>
                <a href="https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_o2zNyLDoaw2WsLgxf_1744223475147_completion_certificate.pdf" target="_blank" rel="noopener noreferrer">
                  <img className="cert-icon" src={forageBadge} alt="Forage Logo"/>
                </a>
                </div>
                  <p>
                  </p>
              </li>
            </ul>
          </div>
      </div>
      <div id="skills" className="projects">
          <div className="projects-components">
            <div className="projects-icons">
              <img className="spring-icon" src={springIcon}/>
              <img className="java-icon" src={javaIcon}/>
              <img className="post-icon" src={postgresIcon}/>
              <img className="react-icon" src={reactIcon}/>
              <img className="js-icon" src={jsIcon}/>
              </div>
            <div className="carousel-container"><Carousel/></div>
          </div>
      </div>

      <div id="experience" className="experience-section">
          <div className='experience-header'><h2>Experience</h2></div>

          <div className='experience-summary'>
          <h3 className='summary-header'>Summary</h3>
          <p className="summary-p"> My past experiences consist of work in financial services and a technical internship.
              From my tech internship, I gained the skills to develop full-stack applications with Spring Boot, React, and PostgreSQL. 
              From my experiences in the fnancial industry, I gained a deep understanding of financial products, 
              regulatory compliance, and customer needs through client-facing roles.
              I am experienced in analyzing financial data, ensuring accuracy in transactions, 
              and translating complex requirements. My responsibilites to securely handle sensitive information in my
              past roles have made me very detail-oriented.
          </p>
          </div>
          
          <div className="experience-cards">

              <div className='experience-card'>
                <div className="experience-heading">
                  <h3>Full-Stack Developer Intern</h3>
                  <img className="revature-icon" src={revatureIcon} alt="Revature Logo"/>
                  <h4>Revature</h4>
                  <p>09/2025 - 11/2025</p>
                </div>
                <div className='experience-summary'>
                  <h5>Summary</h5>
                  <p> Gained direct training on full-stack development 
                    using Spring Boot and React. Developed a full-stack e-commerce application
                    that queries data from a PostgreSQL database. Gained exposure to cloud platforms such as
                    AWS and GCP, micro-services, containerization, CI/CD pipelines, and event-driven architecture.
                  </p>
                </div>
              </div>
            
              <div className='experience-card'>
                <div className="experience-heading">
                  <h3>Bank Teller</h3>
                  <img className="citizens-icon" src={citizensIcon} alt="Citizens Bank Logo"/>
                  <h4>Citizens Bank</h4>
                  <p>04/2022 - 09/2025</p>
                </div>
                <div className='experience-summary'>
                  <h5>Summary</h5>
                  <p>
                    Processed transactions with attention to detail, 
                    maintaining accuracy standards. 
                    Analyzed customer financial needs and transaction patterns to recommend  
                    banking products and services. Developed deep understanding 
                    of business and personal banking products to effectively cross-sell and 
                    support customers in making informed financial decisions.
                  </p>
                </div>
              </div> 

              <div className='experience-card'>
                  <div className="experience-heading">
                  <h3>Tax Associate</h3>
                  <img className="tax-icon" src={taxIcon} alt="Express Tax Services Icon"/>
                  <h4>Express Tax Services</h4>
                  <p>01/2022 - 03/2022</p>
                </div>
                <div className='experience-summary'>
                  <h5>Summary</h5>
                  <p>
                    Prepared 100% accurate tax return reports by analyzing customers' income statements and expense reports.
                    Effectively communicated with customers to gather data that can be used to identify eligible credits,
                    deductions, and opportunities to save money while staying compliant with IRS regulations. 
                    Applied detail-oriented approach to manually validate all inputs to ensure accuracy.
                  </p>
                </div>
              </div> 

          </div>
      </div>
      <div id="socials" className='socials'>
            <div className="invite"><b>You can reach out to me on:</b></div>
            <div className='socials-icons'>
              <a href="www.linkedin.com/in/minhajr640/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon}/>
              </a>
              <a href="https://github.com/Minhajr640" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon}/>
              </a>
              <a href="mailto:minhajr640@gmail.com">
              <img src={gmailIcon}/>
              </a>
            </div>
      </div>
    </div>
    </>
  )
}

export default App
