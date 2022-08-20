// import { Nav } from "../Nav/Nav";

import { PageTransitionAnimation } from "../Animations/PageTransitionAnimation";
import { Nav } from "../Nav/Nav";

import { contactPageAnimation } from "../Animations/pageAnimation";

export const Contact = () => {
  return (
    <PageTransitionAnimation animation={contactPageAnimation}>
      <div className="container contact">
        <Nav theme="light" />
        <div className="contact__container-text">
          <h1>Lets talk</h1>
          <p>
            If you are interested in working together or have ay feedback, I
            would love to hear it!
          </p>
        </div>
        <div className="contact__container-form">
          {" "}
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="textarea" placeholder="Message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </PageTransitionAnimation>
  );
};
