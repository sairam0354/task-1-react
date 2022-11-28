const Main1 = () => {
  let img1 =
    "https://technext.github.io/LaslesVPN/v1.0.0/assets/img/illustrations/1.png";
  let img2 =
    "https://technext.github.io/LaslesVPN/v1.0.0/assets/img/illustrations/2.png";

  return (
    <div>
      <div class="first-box">
        <div class="text">
          <h1>Wan anythingt to be easy with LaslesVPN.</h1>
          <br />
          <p>
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.Most people make the
            mistake of forcing themselves to network.Or they pretend to be
            outgoing to make new connections.
          </p>
          <br />
          <br />
          <button>Get Started</button>
        </div>
        <div class="img">
          <img src={img1} />
        </div>
      </div>

      <div class="icon-box"></div>

      <div class="third-box">
        <div class="img">
          <img src={img2} />
        </div>
        <div class="text">
          <h1>
            We Provide Many
            <br /> Features You Can Use
          </h1>
          <br />
          <p>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <p> Powerfull online protection.</p>
          <p> Internet without borders.</p>
          <p> Supercharged VPN.</p>
          <p>Internet without borders. </p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
export default Main1;
