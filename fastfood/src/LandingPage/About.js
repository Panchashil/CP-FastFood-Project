import React from 'react';
import '../Css/About.css';

const alertmsg = (event) =>{
  if(window.confirm("Are you sure logout")){
      sessionStorage.clear();
      
  }
}


const About = () => {
  return (




    <div className='about'>
       <nav className="navbar navbar-expand-md bg-light p-3 shadow-sm">
      <div className="container-fluid">
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto gap-3">
         <b > Welcome  {sessionStorage.getItem("user")} </b>
            <a href="landingpage" className="nav-link text-dark text-decoration-none">Home</a>
            <a href="about" className="nav-link text-dark text-decoration-none">About Us</a>
            <a href="MenuContainer" className="nav-link text-dark text-decoration-none">Menu</a>
            <a href="contact" className="nav-link text-dark text-decoration-none">Contact</a>

            {!!sessionStorage.getItem("user") 
        ?
            <a onClick={alertmsg} href="logincomp" className="btn btn-danger" >Signout</a>:
            <a href="logincomp" className="btn btn-warning text-white">Signin</a>
}
          </div>
        </div>
      </div>
    </nav>
      <div className="container-fluid bg-custom text-custom">
        <div className="row justify-content-center align-items-center p-4">
          <div className="col-md-4">
            <img
              src="https://burst.shopifycdn.com/photos/breakfast-from-above.jpg?width=1200&format=pjpg&exif=0&iptc=0"
              alt="Restaurant Interior"
              className="img-fluid rounded-lg shadow-lg"
            />
          </div>

           <br />


          <div className="col-md-4">
            <div className="card card-custom p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-weight-bold">About Us</h2>
              <p className="mt-2">Enjoy an unforgettable dining experience with us.</p>
              <p className="mt-2">
                Dive into a world of culinary art, where gastronomy is crafted from fresh ingredients with love. Be it a
                date night, family meal, or a business meet, enjoy wonderful food in a cozy, welcoming atmosphere.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://t3.ftcdn.net/jpg/02/95/05/32/360_F_295053226_tcSVKoUAavQb9uKqGiGsgpeoSieeTcuD.jpg"
              alt="Delicious Food"
              className="img-fluid rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      

      <div className="container-fluid bg-custom text-custom py-4">
        <h2 className="text-center text-2xl font-weight-bold">Meet Our Professional Chef</h2>
        <div className="row justify-content-center mt-4">
          {[
            { name: 'Franklin Kiehn', position: 'Head Chef', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QvcnOLrcM8SM7RBP2a0GjqFKN_lvxKlf_A&s'},
            { name: 'Nathan Ortiz', position: 'Executive Chef', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtGjrNikBNMAMNu3owg8s00UxaOnMwJjQ4w&s' },
            { name: 'Glen Kovacek', position: 'Kitchen Porter', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMP2J-W-NSACWL1ZFWE5WB160C1fgZ_G8b4g&s' },
            { name: 'Kendra Dibbert', position: 'Kitchen Porter', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5FmpJ_rLOJgUU0R6XwvQMUvY0XcoxKV4n5gngs_QIjkBzVV_abPsJtBcOwad0sLt7B8&usqp=CAU' }
          ].map((chef, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card accent-custom text-custom p-4 rounded-lg shadow-lg">
                <img src={chef.img} alt={`Chef ${chef.name}`} className="rounded-circle mx-auto d-block" />
                <h3 className="text-center mt-2">{chef.name}</h3>
                <p className="text-center">{chef.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    

      <div className="container-fluid bg-secondary text-secondary py-4">
        <div className="row justify-content-center align-items-center p-4">
          <div className="col-md-4">
            <img
              src="https://t3.ftcdn.net/jpg/02/61/98/24/360_F_261982444_jDzDlgClqQDc5DX47Qy4PSayvcn89vQi.jpg"
              alt="Featured Dish"
              className="img-fluid rounded-lg shadow-lg"
            />
            
          </div>
          <div className="col-md-4">
            <div className="text-center text-md-left">
              <h2 className="text-2xl font-weight-bold">Come Experience the Wonder of Our Everyday Bites</h2>
              <p className="mt-2 font-weight-bold">Monday - Wednesday: 10am - 9pm</p>
              <p className='font-weight-bold'>Thursday: Closed</p>
              <p className='font-weight-bold'>Friday - Sunday: 10am - 7pm</p>
            </div>
          </div>
        </div>
      </div>

      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    

      <div className="container-fluid bg-popover text-popover py-4">
        <h2 className="text-center text-2xl font-weight-bold">What Our Customer Says</h2>
        <div className="row justify-content-center mt-4">
          {[
            {
              name: 'Alex Vinner',
              text:
                'Every meal at this restaurant is delicious! The ambiance is wonderful and the service is top-notch. Highly recommend!',
              rating: '★★★★★'
            },
            {
              name: 'Johnny Cash',
              text: "The food here is amazing! The chefs really know what they're doing. Will definitely come back!",
              rating: '★★★★★'
            },
            {
              name: 'Linda Doe',
              text: 'A wonderful dining experience from start to finish. The food, service, and atmosphere were all perfect.',
              rating: '★★★★★'
            }
          ].map((review, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card card-custom text-custom p-4 rounded-lg shadow-lg">
                <div className="d-flex align-items-center">
                  <span className="text-yellow">{review.rating}</span>
                  <p className="ml-2">{review.text}</p>
                </div>
                <p className="mt-2 text-right">- {review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     

      <div className="container-fluid bg-custom text-custom py-4">
        <div className="row justify-content-center align-items-center p-4">
          <div className="col-md-6">
            <div className="row">
              {[
                'https://t3.ftcdn.net/jpg/01/76/35/56/360_F_176355615_oL02Ce8HUwZYQtU1POGuHAaiT0gQ8iJm.jpg',
                'https://t3.ftcdn.net/jpg/02/87/22/48/360_F_287224897_eozEoX7dYFUziOz8nTglrMG9x84y0p2U.webp',
                'https://img.freepik.com/premium-photo/thanksgiving-overhead-friends-sitting-around-table-food-meal-celebration-event-family-roast-nutrition-with-man-woman-group-living-room-social-gathering_590464-181354.jpg',
                'https://t3.ftcdn.net/jpg/01/76/35/56/360_F_176355615_oL02Ce8HUwZYQtU1POGuHAaiT0gQ8iJm.jpg',
              ].map((src, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <img src={src} alt={`Gallery Image ${index + 1}`} className="img-fluid rounded-lg shadow-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     

      {/* <section className="bg-danger text-white py-5 px-6">
        <div className="container text-center">
          <h3 className="display-5 fw-bold">Come Experience the Wonder of Our Everyday Bites</h3>
          <p className="mt-4">Monday - Wednesday: 8am - 10pm</p>
          <p>Friday - Saturday: 8am - 11pm</p>
          <p>Sunday: 8am - 9pm</p>
          
        </div>
      </section> */}

      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="bg-primary text-white py-5 px-6">
        <div className="container text-center">
          <h3 className="display-5 fw-bold">What Our Customer Says</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
            {[
              {
                text: 'The food was absolutely wonderful, from preparation to presentation, very pleasing.',
                rating: '★★★★★'
              },
              {
                text: 'The food was fresh, properly prepared, and a great value for the price. We highly recommend it.',
                rating: '★★★★★'
              },
              {
                text: 'Delicious dishes, beautiful presentation, and very good service. Highly recommended.',
                rating: '★★★★★'
              }
            ].map((review, index) => (
              <div className="col" key={index}>
                <div className="card h-100 shadow-lg">
                  <div className="card-body">
                    <p className="card-text text-dark">"{review.text}"</p>
                    <div className="mt-3 d-flex justify-content-center">
                      <span className="text-warning">{review.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      



      <div className="container footer-section mt-5">
        <div className="row">
          <div className="col-md-4 contact-info">
            <p className="section-title">22 VKA Nagar<br />1st Floor Ammapettai<br />Chidambaram, Tamil Nadu 608401</p>
            <p className="mt-4"><img src="" alt="phone" /> +91 75909 45909</p>
            <p><img src="https://openui.fly.dev/openui/24x24.svg?text=📧" alt="email" /> sales@zaaroz.com</p>
            <div className="mt-4 social-icons">
              <img src="https://openui.fly.dev/openui/24x24.svg?text=🐦" alt="twitter" />
              <img src="https://openui.fly.dev/openui/24x24.svg?text=📘" alt="facebook" />
              <img src="https://openui.fly.dev/openui/24x24.svg?text=📸" alt="instagram" />
            </div>
            
          </div>
          <div className="col-md-4">
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
          <div className="col-md-4 merchant-partner">
            <img src="https://www.fusion6.com.au/wp-content/uploads/2019/10/indian-cuisine-edited-f96813e1d7.gif" alt="Merchant Partner Image" className="merchant-image" />
          </div>
        </div>
        <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
        <div className="row mt-4">
          <div className="col-12">
            <p className="section-title">Cities We Deliver To</p>
            <p className="cities-list">
              Chidambaram / Attur / Thiruvarur / Vailoor / Paramakudi / Madurantakam / Tiruchandalam / Villupuram / Udamalaipettai / Kaveripattinam / Yercaud / Pudukottai / Pattukottai / Neyveli / Panruti / Jayamkondam / Karaikal / Kumbakonam / Kallakurichi / Kovilpatti / Lalpettai / Mannargudi / Nellikuppam / Perambalur / Ponnamaravathi / Kalpakam / Sankarapuram / Sirkali / Thirukovilur / Tindivanam / Thiruvannamalai / Ulundurpet / Thuckalay / Nagapattinam / Mayiladuthurai / Bhuvanagiri / Acharapakkam / Andipatti / Cheyyar / Cuddalore / Polur / Shollinghur / Thanjavur / Vadalur / Chinnamanur / Karaikudi
            </p>
          </div>
    </div>
    </div>
    </div>
    

    
  );
};

export default About;
