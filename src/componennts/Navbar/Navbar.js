import "./Navbar.css"

function Navbar() {
  return (
    <>
      <div className="nb-container">
        <a href="/" className="nb-item">Home</a>
        <a href="/about" className="nb-item">About</a>
        <a href="/contact" className="nb-item">Contact</a>
        <a href="/services" className="nb-item">Services</a>
      </div>
    </>
  )
}

export default Navbar