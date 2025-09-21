import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { PageTransitionAnimation } from "../../Animations/PageTransitionAnimation";
import { Nav } from "@components/Nav/Nav";

import { contactPageAnimation } from "../../Animations/pageAnimation";
import {
  contactLayoutAnimation,
  contactItemAnimation,
} from "../../Animations/contactAnimation";

const Modal = ({ setIsOpen }) => {
  return (
    <div className="modal">
      <h1>Thanks for the mail!</h1>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);

  const onSubmit = (data, event) => {
    event.preventDefault();

    console.log("this runs", data);

    emailjs
      .sendForm(
        "service_bpwj9ju",
        "template_3fdu69d",
        formRef.current,
        "1J7NERshZ7oRUB9Le"
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });

    console.log(data);
    setIsOpen(true);
    event.target.reset();
  };

  return (
    <PageTransitionAnimation animation={contactPageAnimation}>
      <div className="container overflow">
        <div className="layout main-layout">
          {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
          <Nav theme="dark" />
          <motion.div
            className="page-container flex-container-column-sb contact"
            variants={contactLayoutAnimation}
          >
            <motion.h1 variants={contactItemAnimation}>Contact.</motion.h1>
            <motion.p variants={contactItemAnimation}>
              I would love to hear your thoughts on my site or let me know if
              you are interested in collaborating.
            </motion.p>
            <motion.p variants={contactItemAnimation}>
              Either way, thanks for looking through and till next time!
            </motion.p>
            <motion.form
              variants={contactItemAnimation}
              onSubmit={handleSubmit(onSubmit)}
              ref={formRef}
              className="contact-form"
            >
              <div className="contact-form-divider">
                <motion.input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="contact-form-error">
                    Please leave your name.
                  </span>
                )}
              </div>

              <div className="contact-form-divider">
                <motion.input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="contact-form-error">
                    Please leave your Email.
                  </span>
                )}
              </div>
              <div className="contact-form-divider">
                <motion.textarea
                  placeholder="Message (under 150 words)"
                  rows={window.innerWidth > 900 ? "4" : "6"}
                  maxLength={150}
                  {...register("message", {
                    required: true,
                  })}
                ></motion.textarea>
                {errors.message && (
                  <span className="contact-form-error">
                    Please leave a short message so I know why you are reaching
                    out.
                  </span>
                )}
              </div>
              <motion.button type="submit">Submit</motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </PageTransitionAnimation>
  );
};
