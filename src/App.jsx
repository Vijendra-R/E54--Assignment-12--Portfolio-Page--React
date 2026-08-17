import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Navbar,
  ProgressBar,
  Row,
  Alert
} from "react-bootstrap";

const projects = [
  {
    title: "Smart Attendance Management System",
    category: "Python",
    description:
      "A desktop application for managing student attendance, records, reports and basic authentication.",
    tech: ["Python", "SQLite", "Tkinter"]
  },
  {
    title: "Interactive Logic Circuit Simulator",
    category: "Computer Science",
    description:
      "An interactive learning application that demonstrates logic gates and digital circuit concepts.",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "Country Information Finder",
    category: "JavaScript",
    description:
      "A web application that demonstrates asynchronous JavaScript, Fetch API and dynamic DOM updates.",
    tech: ["JavaScript", "Fetch API", "REST API"]
  },
  {
    title: "Network Routing Visualizer",
    category: "Networking",
    description:
      "A visual learning tool that demonstrates routing concepts and packet movement between nodes.",
    tech: ["Python", "Algorithms", "Networking"]
  },
  {
    title: "Graphical Matrix Calculator",
    category: "Mathematics",
    description:
      "A calculator for matrix operations designed to make mathematical concepts more interactive.",
    tech: ["Python", "GUI", "Matrices"]
  },
  {
    title: "EduAI Teacher Assistant",
    category: "Education",
    description:
      "A concept for an AI-powered teaching assistant that helps organize lessons, questions and classroom resources.",
    tech: ["React", "AI", "Education"]
  }
];

const skills = [
  ["Python", 90],
  ["JavaScript", 85],
  ["React", 80],
  ["HTML & CSS", 90],
  ["SQL / MySQL", 82],
  ["Networking", 85]
];

function App() {
  const [showContact, setShowContact] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" className="portfolio-nav">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            My<span className="brand-dot">.</span>Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="portfolio-navbar" />
          <Navbar.Collapse id="portfolio-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <section id="home" className="hero-section">
          <Container>
            <Row className="align-items-center g-5">
              <Col lg={7}>
                <Badge bg="light" text="dark" className="px-3 py-2 mb-3">
                  React + Bootstrap Portfolio
                </Badge>
                <h1 className="display-3 fw-bold">
                  Hello, I'm <span className="highlight">Your Name</span>
                </h1>
                <p className="lead mt-3">
                  A passionate developer and educator who enjoys building
                  useful applications, interactive learning tools and modern
                  web experiences.
                </p>
                <div className="d-flex gap-3 flex-wrap mt-4">
                  <Button href="#projects" size="lg" variant="light">
                    View My Projects
                  </Button>
                  <Button
                    size="lg"
                    variant="outline-light"
                    onClick={() => setShowContact(true)}
                  >
                    Contact Me
                  </Button>
                </div>
              </Col>

              <Col lg={5}>
                <div className="profile-card">
                  <div className="profile-circle">YN</div>
                  <h3 className="mt-3 mb-1">Your Name</h3>
                  <p className="mb-3">Developer • Educator • Tech Enthusiast</p>
                  <div className="d-flex justify-content-center gap-2 flex-wrap">
                    <Badge bg="primary">React</Badge>
                    <Badge bg="success">Python</Badge>
                    <Badge bg="warning" text="dark">JavaScript</Badge>
                    <Badge bg="info" text="dark">SQL</Badge>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="about" className="section-padding">
          <Container>
            <Row className="align-items-center g-5">
              <Col md={7}>
                <h2 className="section-title">About Me</h2>
                <p className="text-secondary">
                  I enjoy combining programming, problem solving and
                  education to create practical digital solutions. My focus is
                  on writing clean code and turning technical concepts into
                  simple, engaging experiences.
                </p>
                <p className="text-secondary">
                  I am continuously learning new technologies and building
                  projects that strengthen my skills in web development,
                  programming, databases and computer science.
                </p>
                <Button variant="dark" href="#contact">
                  Let's Connect
                </Button>
              </Col>
              <Col md={5}>
                <Card className="info-card border-0 shadow-sm">
                  <Card.Body>
                    <h5>Quick Facts</h5>
                    <hr />
                    <p><strong>Focus:</strong> Web & Application Development</p>
                    <p><strong>Interests:</strong> AI, Education & Technology</p>
                    <p><strong>Learning:</strong> Modern React Development</p>
                    <p className="mb-0"><strong>Goal:</strong> Build useful digital products</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="skills" className="section-padding bg-light">
          <Container>
            <div className="text-center mb-5">
              <h2 className="section-title">My Skills</h2>
              <p className="text-secondary">
                Technologies and concepts I work with.
              </p>
            </div>

            <Row className="g-4">
              {skills.map(([skill, value]) => (
                <Col md={6} key={skill}>
                  <div className="skill-box">
                    <div className="d-flex justify-content-between mb-2">
                      <strong>{skill}</strong>
                      <span>{value}%</span>
                    </div>
                    <ProgressBar now={value} animated />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="projects" className="section-padding">
          <Container>
            <div className="text-center mb-5">
              <h2 className="section-title">Featured Projects</h2>
              <p className="text-secondary">
                A selection of projects demonstrating my technical skills.
              </p>
            </div>

            <Row className="g-4">
              {projects.map((project) => (
                <Col md={6} lg={4} key={project.title}>
                  <Card className="project-card h-100 border-0 shadow-sm">
                    <div className="project-image">
                      {project.title.charAt(0)}
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Badge bg="secondary" className="align-self-start mb-2">
                        {project.category}
                      </Badge>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text className="text-secondary">
                        {project.description}
                      </Card.Text>
                      <div className="mt-auto">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            bg="light"
                            text="dark"
                            className="me-1 mb-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="stats-section">
          <Container>
            <Row className="text-center g-4">
              <Col md={4}>
                <div className="stat-number">10+</div>
                <div>Projects</div>
              </Col>
              <Col md={4}>
                <div className="stat-number">6+</div>
                <div>Core Skills</div>
              </Col>
              <Col md={4}>
                <div className="stat-number">100%</div>
                <div>Passion for Learning</div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="contact" className="section-padding bg-light">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center mb-4">
                  <h2 className="section-title">Get In Touch</h2>
                  <p className="text-secondary">
                    Have a project idea or want to connect? Send a message.
                  </p>
                </div>

                {sent && (
                  <Alert variant="success">
                    Thank you! Your message has been submitted for this demo.
                  </Alert>
                )}

                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <Form onSubmit={handleSubmit}>
                      <Row className="g-3">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control required placeholder="Your name" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              required
                              type="email"
                              placeholder="you@example.com"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                              required
                              as="textarea"
                              rows={5}
                              placeholder="Write your message..."
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Button type="submit" variant="dark">
                            Send Message
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer className="footer">
        <Container className="text-center">
          <p className="mb-1 fw-bold">Your Name</p>
          <p className="mb-0 small">
            Built with React + React-Bootstrap • E54 Assignment 12
          </p>
        </Container>
      </footer>

      <Modal show={showContact} onHide={() => setShowContact(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-2"><strong>Email:</strong> your.email@example.com</p>
          <p className="mb-0"><strong>GitHub:</strong> github.com/yourusername</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => setShowContact(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;