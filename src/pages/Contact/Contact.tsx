import "./_contact.scss";

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
import { Footer } from "@/components/Footer/Footer";
import { FaArrowRight } from "react-icons/fa";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setIsOpen }: ModalProps) => {
  return (
    <div className="modal">
      <h1>Thanks for the mail!</h1>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
};

export const Contact = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollToTop(pageRef);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const formRef = useRef(null);

  const onSubmit = (
    data: { name: string; email: string; message: string },
    event: Event
  ) => {
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
    event!.target.reset();
  };

  return (
    <PageTransitionAnimation ref={pageRef} classList="container contact">
      <Nav theme="dark" />
      {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
      <motion.div variants={contactLayoutAnimation}>
        <motion.h1 variants={contactItemAnimation}>
          Hello<span>.</span>
        </motion.h1>
        <motion.p variants={contactItemAnimation}>
          I would love to hear your thoughts on my site or let me know if you
          are interested in collaborating.
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
          <motion.input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="contact-form-error">Please leave your name.</span>
          )}

          <motion.input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="contact-form-error">Please leave your Email.</span>
          )}

          <motion.textarea
            placeholder="Message (under 150 words)"
            {...register("message", {
              required: true,
            })}
          ></motion.textarea>
          {errors.message && (
            <span className="contact-form-error">
              Please leave a short message so I know why you are reaching out.
            </span>
          )}

          <div className="contact-submit-container">
            <motion.button>
              Submit <FaArrowRight />
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
      <Footer />
    </PageTransitionAnimation>
  );
};
