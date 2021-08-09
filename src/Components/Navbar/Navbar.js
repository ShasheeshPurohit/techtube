import "./Navbar.css"

export default function Navbar(){
    return (
        <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand brand-icons" href="#">
    {/* <i className="fas fa-bars nav-button"></i> */}
     <i className="fab fa-youtube logo"></i>TechTube
    </a>
    <ul className="nav-list-mobile">
      <li>Login</li>
      <li>Sign up</li>
    </ul>
  </div>
</nav>
    );
}