const Footer = () => {
  let logo1 =
    "https://technext.github.io/LaslesVPN/v1.0.0/assets/img/icons/logo.png";
  return (
    <div>
      <footer>
        <div class="one">
          <h4>
            {" "}
            <img src={logo1} />
            LaslesVPN
          </h4>
          <br />
          <p>
            LaslesVPN is a private virtual network that
            <br />
            has unique features and has high security{" "}
          </p>
        </div>
        <div class="two">
          <h4>product</h4>
          <br />
          <p>Download</p>
          <p>Pricing</p>
          <p>Locations</p>
          <p>Server</p>
          <p>Countries</p>
          <p>Blog</p>
        </div>
        <div class="three">
          <h4>Engage</h4>
          <br />
          <p>LarsesVPN ?</p>
          <p>FAQ</p>
          <p>Tutorials</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
        </div>
        <div class="four">
          <h4>Earn Money</h4>
          <br />
          <p>Affiliate</p>
          <p>Become Partner</p>
        </div>
      </footer>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <div class="footer2">
        <p>This template is made with by ThemeWagon</p>
      </div>
      <br />
      <hr />
    </div>
  );
};
export default Footer;
