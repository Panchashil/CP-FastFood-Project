import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/LandingComp.css';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const alertmsg = () => {
  if (window.confirm("Are you sure you want to logout?")) {
    sessionStorage.clear();
  }
};

function LandingComp() {
  const user = sessionStorage.getItem("user");

  const testimonials = [
    { text: "The food was absolutely wonderful, from preparation to presentation, very pleasing.", rating: 5 },
    { text: "The food was fresh, properly prepared, and a great value for the price. We highly recommend it.", rating: 5 },
    { text: "Delicious dishes, beautiful presentation, and very good service. Highly recommended.", rating: 5 },
  ];

  const carouselItems = [
    "https://images.jdmagicbox.com/quickquotes/listicle/listicle_1694439009752_p1bt2_1173x665.jpg",
    "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/recipes-1657874104_0bf6e33f49922c4dff87.webp",
    "https://sc0.blr1.cdn.digitaloceanspaces.com/article/146900-dtpubvyxcr-1599047894.jpg",
    "https://t3.ftcdn.net/jpg/04/41/20/18/360_F_441201852_XQqp1wbAQj9udOC3iT7D0ahKgaf71bns.jpg",
    "https://th.bing.com/th/id/OIP.6-VNM1oL5sE5lM6n31baagHaEF?w=317&h=180&c=7&r=0&o=5&pid=1.7",
  ];

  return (
    <div className="App">
      <header className="bg-white shadow">
        <Container className="d-flex justify-content-between align-items-center py-4 px-6">
          <div className="d-flex align-items-center p-3 bg-light">
            <img
              src="https://th.bing.com/th/id/OIP.d9f6EUnufbq2iiA8hoKi_gHaE8?w=305&h=203&c=7&r=0&o=5&pid=1.7"
              alt="Logo"
              className="logo me-3"
            />
            <div className="text-2xl font-bold text-warning">VIBI'S FAST FOOD</div>
          </div>
          <nav className="navbar navbar-expand-md bg-light p-3 shadow-sm">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav ms-auto gap-3">
                  <b>Welcome {user}</b>
                  <Link to="/landingpage" className="nav-link text-dark text-decoration-none">Home</Link>
                  <Link to="/about" className="nav-link text-dark text-decoration-none">About Us</Link>
                  <Link to="/MenuContainer" className="nav-link text-dark text-decoration-none">Menu</Link>
                  <Link to="/contact" className="nav-link text-dark text-decoration-none">Contact</Link>
                  {!!sessionStorage.getItem("user") 
        ?
            <a onClick={alertmsg} href="logincomp" className="btn btn-danger" >Signout</a>:
            <a href="logincomp" className="btn btn-warning text-white">Signin</a>
}
                </div>
              </div>
            </div>
          </nav>
        </Container>
      </header>

      <section className="container d-flex flex-column flex-md-row align-items-center py-5 px-6 bg-grey">
        <div className="col-md-6 text-center text-md-start">
          <h2 className="display-4 fw-bold text-dark">Come for the Taste, Stay for the Experience</h2>
          <p className="mt-4 text-dark">
            Take a walk through our menu, and let it become a tale of taste. We invite you to experience an unforgettable dining experience with us.
          </p>
        </div>
        <div className="col-md-6 mt-4 mt-md-0 text-center">
          <img
            src="https://pongalexpress.com/wp-content/uploads/2021/11/Banner-new.gif"
            alt="Chef presenting a dish"
            className="img-fluid hero-image"
          />
        </div>
      </section>

      <section className="container py-5 px-6">
        <Carousel>
          {carouselItems.map((src, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={src}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      
      <section className="promo-section bg-danger text-white py-5 px-4">
        <Container className="text-center">
          <h3 className="display-5 fw-bold">Come Experience the Wonder of Our Everyday Bites</h3>
          <p className="mt-4">Monday - Wednesday: 8am - 10pm</p>
          <p>Friday - Saturday: 8am - 11pm</p>
          <p>Sunday: 8am - 9pm</p>
        </Container>
      </section>

      <section className="bg-primary text-white py-5 px-6">
        <Container>
          <h3 className="display-5 fw-bold text-center mb-5">What Our Customers Say</h3>
          <Row className="row-cols-1 row-cols-md-3 g-4 justify-content-center">
            {testimonials.map((testimonial, index) => (
              <Col key={index}>
                <Card className="h-100 shadow-lg">
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Text className="text-dark text-center">"{testimonial.text}"</Card.Text>
                    <div className="mt-3 d-flex justify-content-center">
                      <span className="text-warning">{'★'.repeat(testimonial.rating)}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer className="footer-section">
  
     
<div>

  <div>
  <p className="section-title">22 VKA Nagar<br />1st Floor Ammapettai<br />Chidambaram, Tamil Nadu 608401</p>
          <p className="mt-4"><img src="https://openui.fly.dev/openui/24x24.svg?text=📞" alt="phone" /> +91 75909 45909</p>
          <p><img src="https://openui.fly.dev/openui/24x24.svg?text=📧" alt="email" /> mailto:sales@zaaroz.com</p>
          <div className="mt-4 social-icons">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=🐦" alt="twitter" />
            <img src="https://openui.fly.dev/openui/24x24.svg?text=📘" alt="facebook" />
            <img src="https://openui.fly.dev/openui/24x24.svg?text=📸" alt="instagram" />
          </div>


  </div>

  <div>

  <p className="section-title">Popular Menu</p>
          <ul className="mt-4 list-unstyled">
            <li>About Us</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>

          <p className="section-title mt-4">Become a Merchant Partner</p>
          <ul className="mt-4 list-unstyled">
            <li>Become a Driver</li>
            <li>Become a Franchisee</li>
          </ul>
          
  </div>

<div>
<img src="https://www.fusion6.com.au/wp-content/uploads/2019/10/indian-cuisine-edited-f96813e1d7.gif" alt="Merchant Partner Image" className="merchant-image img-fluid mt-4" />

</div>

</div>
<Row className="mt-4">
            <Col>
              <p className="section-title">Cities We Deliver To</p>
              <p className="cities-list">
                Chidambaram / Attur / Thiruvarur / Vailoor / Paramakudi / Madurantakam / Tiruchandalam / Villupuram / Udamalaipettai / Kaveripattinam / Yercaud / Pudukottai / Pattukottai / Neyveli / Panruti / Jayamkondam / Karaikal / Kumbakonam / Kallakurichi / Kovilpatti / Lalpettai / Mannargudi / Nellikuppam / Perambalur / Ponnamaravathi / Kalpakam / Sankarapuram / Sirkali / Thirukovilur / Tindivanam / Thiruvannamalai / Ulundurpet / Thuckalay / Nagapattinam / Mayiladuthurai / Bhuvanagiri / Acharapakkam / Andipatti / Cheyyar / Cuddalore / Polur / Shollinghur / Thanjavur / Vadalur / Chinnamanur / Karaikudi
              </p>
            </Col>
          </Row>
          </footer>
    </div>
  );
}

export default LandingComp;