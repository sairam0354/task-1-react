const Main2 = () => {
  let img1 =
    "https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/map.png";
  let img2 =
    "https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/netflix.png";
  let img3 =
    "https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/reddit.png";
  let img4 =
    "https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/amazon.png";
  let img5 =
    "https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/discord.png";
  let img6 =
    "https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/spotify.png";
  let gift =
    "https://technext.github.io/LaslesVPN/v1.0.0/assets/img/icons/pricing.png";
  return (
    <div>
      <div class="fourth-box">
        <br />
        <br />
        <br /> <h1>Choose Your Plan</h1>
        <br />
        <p>
          Let's choose the package that is best for you and explore it
          <br /> happily and cheerfully.
        </p>
        <br />
        <br /> <br />
        <div class="boxes">
          <div class="box1">
            <img src={gift} />
            <br />
            <h4>Free Plan</h4>
            <br />
            <p>Unlimited Bandwidth</p>
            <br />
            <p>Encrypted Connection</p>
            <br />
            <p>No Traffic Logs</p>
            <br />
            <p>Works on All Devices</p>
            <br />
            <br />
            <h2>Free</h2>
            <br />
            <button>sign Up</button>
          </div>
          <div class="box2">
            <img src={gift} />
            <br />
            <br />
            <h4>standard plan</h4>
            <br />
            <p>Unlimited Bandwidth</p>
            <br />
            <p>No Traffic Logs</p>
            <br />
            <p>Works on All Devices</p>
            <br />
            <br />
            <h2>$9/mo</h2>
            <br />
            <button>sign Up</button>
          </div>
          <div class="box3">
            <img src={gift} />
            <br />
            <br />
            <h4>Premium Plan</h4>
            <br />
            <p>Unlimited Bandwidth</p>
            <br />
            <p>Encrypted Connection</p>
            <br />
            <p>No Traffic Logs</p>
            <br />
            <p>Works on All Devices</p>
            <br />
            <br />
            <h2>$12/mo</h2>
            <br />
            <button>sign Up</button>
          </div>
        </div>
      </div>

      <div class="fifth-box">
        <h1>
          <br />
          <br />
          <br />
          Huge Global Network
          <br /> of Fast VPN
        </h1>
        <br />
        <p>
          See LaslesVPN everywhere to make it easier for you when
          <br /> you move locations.{" "}
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="img">
          <img src={img1} />
        </div>
        <div class="img2">
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default Main2;
