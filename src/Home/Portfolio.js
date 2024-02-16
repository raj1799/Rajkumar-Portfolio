import React, { Fragment, useState } from "react";
import { Row, Col, Button, Container, Card, CardBody, Progress, CardFooter } from "reactstrap"
import { AiOutlineTrophy, AiFillPhone, AiOutlineMail, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai"
import { BsFileCodeFill } from 'react-icons/bs'
import { GiSandsOfTime } from "react-icons/gi"
import { BiCurrentLocation } from 'react-icons/bi'
import { CgProfile } from "react-icons/cg"
import Typed from 'react-typed';
import Profile from "../Assest/image/img/profile1.jpg"
import Logo from "../Assest/image/img/logo.jpg"
import Computer from "../Assest/image/computer.gif"
import Ecrubit from "../Assest/image/img/ecrubit.jpg"
import Resume from "../Assest/resume/resume.pdf"
import { saveAs } from "file-saver"

const Projects = [
    {
        id: 1, title: "Store My Goods", desc: "Store My Goods is an Platform offering warehouse          facilities to store your goods.There are Three Panels like OrderIntake, Customer Panel and Admin Panel", role: " Role: Frontend Developer ", size: " Team Size: 1", frameworks: "  Frame work used: React JS, Laravel", website: ""
    }, { id: 2, title: "Super Psyched Collective", desc: "This is an Landing Page to buy unique NFT using Etherium Crypto currency or credit card.", role: " Role: Frontend Developer ", size: " Team Size: 1", frameworks: "Technologies Used: React JS, Web3-integration,Solidity", website: "https://superpsychedcollective.com/" }, { id: 3, title: " Causevest", desc: "Causevest is a digital giving platform used to raise funds for people who need money for their Education,Health and inventions", role: " Role: Frontend Developer ", size: " Team Size: 2", frameworks: "Technologies Used: React JS, Laravel", website: "https://www.causevest.io/" }, { id: 3, title: " Ticketshala", desc: "Ticketshala is a online flight Ticket booking platform.", role: " Role: Frontend Developer ", size: " Team Size: 2", frameworks: "Technologies Used:  React Js, TypeScript, Laravel for Backend", website: "https://www.ticketshala.com/" }, {
        id: 4, title: " Moonclub", desc: "Moonclub is an independent platform offering access to tools for the creation of new virtual currencies on supported Blockchain networks.Users can create their own crypto currency using this platform.", role: " Role: Frontend Developer ", size: " Team Size: 2", frameworks: "Technologies Used:  React Js, Web3, Hardhat", website: "https://moonclub.com/"
    },
]
const Portfolio = () => {
    const [resume, setResume] = useState(Resume)
    return (
        <Fragment>
            <section className="home-section">
                <Container>
                    <Row>
                        <Col lg="6" md="6" className="my-5 py-5" >
                            <div data-aos="zoom-in">
                                <p className="nor-text ">Hi, I am</p>
                                <h1 className="int-name ">
                                    <strong>Rajkumar</strong>
                                </h1>
                                <p className="third-text">And I'm <span className="yellow">
                                    <Typed
                                        className='typed-word'
                                        strings={[
                                            'Front-end Developer',
                                            'React js Developer',
                                            'Web Designer']}
                                        typeSpeed={50}
                                        backSpeed={50}
                                        smartBackspace
                                        shuffle={false}
                                        backDelay={1}
                                        fadeOut={false}
                                        fadeOutDelay={100}
                                        loopCount={0}
                                        showCursor
                                        cursorChar="|"
                                        loop >
                                    </Typed>
                                </span></p>
                                <p className="text-white reg-text">I like to code things from scratch, and enjoy bringing ideas to life in the browser and I love what I do.</p>
                            </div>
                            <div className="d-flex justify-content-around mt-5" data-aos="zoom-in">
                                <div className="download-cv text-white" onClick={() => saveAs(resume)}>Download CV</div>
                                <a href="#contact"><div className="yellow contact" >Contact Me</div></a>
                            </div>
                        </Col>
                        <Col lg="6" md="6" className="my-5 py-5">
                            <div data-aos="zoom-in-up">
                                <img src={Computer} alt="Developer" className="img-fluid" />
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ size: 10, offset: 1 }} className="my-5 py-5">
                            <Row className="short-box d-flex justify-content-around">

                                <Col lg="4" className="d-flex justify-content-center ">

                                    <div>
                                        <div className="icon-circle mx-2" data-aos="zoom-in"><AiOutlineTrophy color="white" size={50} /></div>
                                    </div>
                                    <div>
                                        <p className="text-white">Front-end</p>
                                        <p className="yellow">Developer</p>
                                    </div>
                                </Col>
                                <div className="line d-lg-none"></div>
                                <Col lg="4" className="d-flex justify-content-center ">
                                    <div >
                                        <div className="icon-circle mx-2 " data-aos="zoom-in"><BsFileCodeFill color="white" size={50} /></div>
                                    </div>
                                    <div>
                                        <p className="text-white">15+ Projects</p>
                                        <p className="yellow">Completed</p>
                                    </div>
                                </Col>
                                <div className="line d-lg-none"></div>
                                <Col lg="4" className="d-flex justify-content-center  ">
                                    <div>
                                        <div className="icon-circle mx-2" data-aos="zoom-in"><GiSandsOfTime color="white" size={50} /></div>
                                    </div>
                                    <div>
                                        <p className="text-white">1 year</p>
                                        <p className="yellow">Experience</p>
                                    </div>

                                </Col>

                            </Row>
                        </Col>
                    </Row>
                    <div id="about">
                        <Row>
                            <Col md="4" className="d-flex justify-content-center my-5 py-5">
                                <div data-aos="zoom-in-up">
                                    <img src={Profile} alt="Profile" className="img-fluid profile" />
                                </div>
                            </Col>
                            <Col md="8" className="my-5 py-5">
                                <div data-aos="zoom-in">
                                    <p className="nor-text text-start">My Intro</p>
                                    <h1 className="int-name  text-start">
                                        <strong>About Me</strong>
                                    </h1>
                                    <p className="text-white text-start reg-text">Since beginning my journey as a Web Developer nearly 1 years ago, I've learnt many kind of technologies and did many collaborated projects with talented developers. I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time.</p>
                                </div>
                                <div className="mt-5" data-aos="zoom-in">
                                    <div className="text-start mt-3"><CgProfile color="white" size={30} className="mx-2 profile-icon" /><pan className="text-white mx-2 reg-text">Name :</pan><span className="text-white mx-2 reg-text">Rajkumar Selvakumar</span></div>
                                    <div className="text-start mt-3"><AiFillPhone color="white" size={30} className="mx-2 profile-icon" /><pan className="text-white mx-2 reg-text">Phone :</pan><span className="text-white mx-2 reg-text">+917708461341</span></div>
                                    <div className="text-start mt-3"><AiOutlineMail size={30} color="white" className="mx-2 profile-icon" /><pan className="text-white mx-2 reg-text">Email :</pan><span className="text-white mx-2 reg-text">raj1711dell@gmail.com</span></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div id="skills">
                        <Row>
                            <Col lg="6" className="py-5 my-5">
                                <h1 className="int-name ">
                                    <strong>Skills</strong>
                                </h1>
                                <div data-aos="zoom-in-up">
                                    <div className="d-flex justify-content-between">
                                        <p className="reg-text">HTML5</p>
                                        <p className="reg-text">85%</p>
                                    </div>
                                    <Progress
                                        value={85}
                                        color="warning"
                                    />
                                </div>
                                <div data-aos="zoom-in-up">
                                    <div className="d-flex justify-content-between">
                                        <p className="reg-text" >CSS3</p>
                                        <p className="reg-text">85%</p>
                                    </div>
                                    <Progress
                                        value={85}
                                        color="warning"
                                    />
                                </div >
                                <div data-aos="zoom-in-up">
                                    <div className="d-flex justify-content-between">
                                        <p className="reg-text">BootStrap, ReactStrap</p>
                                        <p className="reg-text">90%</p>
                                    </div>
                                    <Progress
                                        value={90}
                                        color="warning"
                                    />
                                </div>
                                <div data-aos="zoom-in-up">
                                    <div className="d-flex justify-content-between">
                                        <p className="reg-text">JavaScript</p>
                                        <p className="reg-text">85%</p>
                                    </div>
                                    <Progress
                                        value={85}
                                        color="warning"
                                    />
                                </div>
                                <div data-aos="zoom-in-up">
                                    <div className="d-flex justify-content-between">
                                        <p className="reg-text">React JS, Redux</p>
                                        <p className="reg-text">90%</p>
                                    </div>
                                    <Progress
                                        value={90}
                                        color="warning"
                                    />
                                </div>
                                <div data-aos="zoom-in-up">
                                    <div className="d-flex justify-content-between">
                                        <p className="reg-text">Next JS</p>
                                        <p className="reg-text">80%</p>
                                    </div>
                                    <Progress
                                        value={80}
                                        color="warning"
                                    />
                                </div>
                                <div data-aos="zoom-in-up">
                                    <div className="d-flex justify-content-between">
                                        <p className="reg-text">Typescript</p>
                                        <p className="reg-text">60%</p>
                                    </div>
                                    <Progress
                                        value={60}
                                        color="warning"
                                    />
                                </div>
                                <div data-aos="zoom-in-up">
                                    <div className="d-flex justify-content-between">
                                        <p className="reg-text">Solidity</p>
                                        <p className="reg-text">50%</p>
                                    </div>
                                    <Progress

                                        value={50}
                                        color="warning"
                                    />
                                </div>
                            </Col>
                            <Col lg='6' className="py-5 my-5">
                                <h1 className="int-name ">
                                    <strong>What I Do</strong>
                                </h1>
                                <div data-aos="zoom-in-up">
                                    <div className="d-flex justify-content-between">
                                        <p className="reg-text">Front-end Developement</p>
                                        <p className="reg-text">90%</p>
                                    </div>
                                    <Progress

                                        value={90}
                                        color="warning"
                                    />
                                </div>
                                <div data-aos="zoom-in-up">
                                    <div className="d-flex justify-content-between">
                                        <p className="reg-text">Web Design</p>
                                        <p className="reg-text">90%</p>
                                    </div>
                                    <Progress

                                        value={90}
                                        color="warning"
                                    />
                                </div>
                                <div id="" data-aos="zoom-in-up">
                                    <div className="d-flex justify-content-between">
                                        <p className="reg-text">Web3 Integration</p>
                                        <p className="reg-text">90%</p>
                                    </div>
                                    <Progress

                                        value={90}
                                        color="warning"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div id="work">
                        <Row>
                            <Col lg='12' className="py-5 my-5 ">
                                <h1 className="int-name ">
                                    <strong>Experience</strong>
                                </h1>
                            </Col>
                            <Col md={{ size: 4, offset: 2 }} lg={{ size: 6, offset: 3 }} sm="12" xs="12" className="py-5">
                                <div className="work-sec px-3 py-3" data-aos="zoom-in">
                                    <p className="text-white reg-text "><span className="px-3"><img src={Ecrubit} alt="Ecrubit" className="company-logo" width={40} /></span><h3><strong>Ecrubit Software Solution</strong></h3></p>
                                    <p className="text-white reg-text">I had the opportunity to work at Ecrubit Counsultancy Services Pvt Ltd, as a Front-End Developer for 1 years.</p>
                                    <p className="text-white reg-text"> I was responsible for creating responsive Landing Pages using HTML, CSS, JavaScript, React.js, Bootstrap and ReactStrap.</p>
                                    <p className="text-white reg-text"> And am handled some B2C Projects Front-end development work by using React.js frame work.</p>
                                    <div className="d-flex justify-content-center">
                                        <a href="https://www.ecrubit.com/" target="_blank"><div className="download-cv text-white  text-center">Visit Company</div></a>
                                    </div>
                                </div>

                            </Col>
                            <Col md={{ size: 4, offset: 2 }} lg={{ size: 6, offset: 3 }} sm="12" xs="12" className="py-5">
                                <div className="work-sec px-3 py-3" data-aos="zoom-in">
                                    <p className="text-white reg-text "><span className="px-3"><img src={Ecrubit} alt="Ecrubit" className="company-logo" width={40} /></span><h3><strong>Seminal</strong></h3></p>
                                    <p className="text-white reg-text">Contributed to the development and enhancement of innovative products as a dedicated Frontend Developer at Australian industry, ensuring seamless user experiences and incorporating cutting-edge technologies to drive the company's success in the competitive market.</p>
                                </div>

                            </Col>
                        </Row>
                    </div>

                    <div className="py-5 my-5" id="projects">
                        <Container>
                            <Row>
                                <Col lg='12'>
                                    <h1 className="int-name ">
                                        <strong>Real Time Projects</strong>
                                    </h1>
                                </Col>
                                {/* <Carousel> */}
                                {Projects && Projects.length > 0 && Projects.map((item) => (

                                    <Col lg='4' className="px-3 py-3">
                                        <Card className="project-card" data-aos="zoom-in">
                                            <CardBody className="" >
                                                <h4 className="yellow"><strong>{item.title}</strong></h4>
                                                <div>
                                                    <p className="text-white reg-text">
                                                        {item.desc}
                                                    </p>
                                                    <div>
                                                        <p className="text-white reg-text">
                                                            {item.role}
                                                        </p>
                                                        <p className="text-white reg-text">
                                                            {item.size}
                                                        </p>
                                                        <p className="text-white reg-text">
                                                            {item.frameworks}
                                                        </p>

                                                    </div>

                                                </div>
                                                <div className="d-flex justify-content-center align-items-end  py-2">
                                                    {item.website && <a href={item.website} target="_blank"> <div className="contact yellow">Visit Website</div></a>}
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                ))}
                                {/* </Carousel> */}
                            </Row>
                        </Container>
                    </div>
                    <div className="py-5 my-5 contact-details" id="contact" >

                        <Row>
                            <Col>
                                <h1 className="int-name ">
                                    <strong>Contact</strong>
                                </h1>
                            </Col>
                        </Row>
                        <Row className="d-flex">
                            <Col md="4" className='d-flex justify-content-center py-5 my-5'>
                                {/* <div className="d-flex"> */}
                                <div className="icon-circle" data-aos="zoom-in-up">
                                    <AiFillPhone size={50} className="" color="white" />
                                </div>
                                <div className="px-2">
                                    <p className="contact-header"><strong>Call Me</strong></p>
                                    <p className="reg-text">+91 7708461341</p>
                                </div>

                                {/* </div> */}
                            </Col>
                            {/* <div className="d-flex"> */}
                            <Col lg="4" className='d-flex justify-content-center py-5 my-5'>
                                <div className="icon-circle" data-aos="zoom-in-up">
                                    <AiOutlineMail size={50} className="" color="white" />
                                </div>
                                <div className="px-2">
                                    <p className="contact-header"><strong>E-mail</strong></p>
                                    <p className="reg-text">raj1711dell@gmail.com</p>
                                </div>
                            </Col>
                            {/* </div> */}
                            {/* <div className="d-flex"> */}
                            <Col lg="4" className='d-flex justify-content-center py-5 my-5'>
                                <div className="icon-circle" data-aos="zoom-in-up">
                                    <BiCurrentLocation size={50} className="" color="white" />
                                </div>
                                <div className="px-2">
                                    <p className="contact-header"><strong>Location</strong></p>
                                    <p className="reg-text">Chennai</p>
                                </div>
                            </Col>
                            {/* </div> */}
                            {/* </Col> */}
                        </Row>

                    </div>
                    <div className="footer">
                        <Row>
                            <Col className="pt-5 mt-5">
                                <div>
                                    <img src={Logo} alt="Logo" width={100} height={100} />
                                </div>
                                <div className="mt-5">
                                    <p className="reg-text">Living, learning, & leveling up one day at a time.</p>
                                </div>
                                <div className="d-flex justify-content-center my-5">
                                    <div className="social-lco mx-3">
                                        <a href='https://instagram.com/rajkumarrkrajkumar?igshid=ZDdkNTZiNTM=' target="_blank"><AiOutlineInstagram size={40} className="p-1 ico" /></a>
                                    </div>
                                    <div className="social-lco mx-3">
                                        <a href='https://www.linkedin.com/in/rajkumar-s-a76179213/' target="_blank"><AiFillLinkedin size={40} className="p-1 ico" /></a>
                                    </div>
                                    <div className="social-lco mx-3">
                                        <a href='mailto: raj1711dell@gmail.com' target="_blank"><AiOutlineMail size={40} className="p-1 ico" /></a>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section >

        </Fragment >
    )
}
export default Portfolio;