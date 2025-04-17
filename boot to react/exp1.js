import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaShoppingCart, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-3">
      <Container>
        <Navbar.Brand href="#" onClick={() => scrollToSection("home")}>E-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("categories")}>Categories</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("products")}>Products</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("featured")}>Featured</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")}>Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#cart" className="ms-3">
            <FaShoppingCart size={20} />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const HeroBanner = () => {
  return (
    <div id="home" className="bg-primary text-white text-center p-5">
      <h1>Welcome to E-Shop</h1>
      <p>Find the best products at unbeatable prices</p>
      <Button variant="light">Shop Now</Button>
    </div>
  );
};

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="card p-3 shadow-sm">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <Button variant="primary">Add to Cart</Button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    { id: 1, image: "img2.jpg", name: "Product 1", price: 29.99 },
    { id: 2, image: "img3.jpg", name: "Product 2", price: 39.99 },
    { id: 3, image: "img5.jpg", name: "Product 3", price: 49.99 },
  ];
  return (
    <div id="products" className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Categories = () => {
  const categories = ["Electronics", "Clothing", "Accessories", "Shoes"];
  return (
    <div id="categories" className="container mt-4">
      <h2 className="text-center mb-4">Categories</h2>
      <div className="d-flex justify-content-around">
        {categories.map((category, index) => (
          <Button variant="outline-primary" key={index}>{category}</Button>
        ))}
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const featured = [
    { id: 1, image: "img1.jpg", name: "Best Seller 1", price: 59.99 },
    { id: 2, image: "img4.jpg", name: "Best Seller 2", price: 69.99 }
  ];
  return (
    <div id="featured" className="container mt-4">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {featured.map((product) => (
          <div className="col-md-6 mb-3" key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

const NewsletterSignup = () => {
  return (
    <div className="container mt-4 p-4 bg-light text-center">
      <h3>Subscribe to our Newsletter</h3>
      <Form>
        <FormControl type="email" placeholder="Enter your email" className="w-50 mx-auto mb-3" />
        <Button variant="primary">Subscribe</Button>
      </Form>
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white text-center p-3 mt-5">
      <p>&copy; 2025 E-Shop. All rights reserved.</p>
      <p>Follow us on social media:</p>
      <div>
        <FaFacebook size={24} className="mx-2" />
        <FaTwitter size={24} className="mx-2" />
        <FaInstagram size={24} className="mx-2" />
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <NavigationBar />
      <HeroBanner />
      <Categories />
      <FeaturedProducts />
      <ProductList />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default App;



