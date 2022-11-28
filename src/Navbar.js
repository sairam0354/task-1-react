const Navbar = () => {
  let logo =
    "https://technext.github.io/LaslesVPN/v1.0.0/assets/img/icons/logo.png";
  return (
    <div>
      <header>
        <nav class="container">
          <div class="logo">
            <img src={logo} />
            LaslesVPN
          </div>

          <ul>
            <a href="/">
              <li>About</li>
            </a>
            <a href="/features">
              <li>Features</li>
            </a>
            <a href="/pricing">
              <li>Pricing</li>
            </a>
            <a href="/test">
              <li>Testimonials</li>
            </a>
            <a href="/help">
              <li>Help</li>
            </a>
          </ul>
          <div class="sign">
            <a href="/sign">sign in</a>
            <button>sign up</button>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
