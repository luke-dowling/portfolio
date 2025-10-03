import "./_contact.scss";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import emailjs from "emailjs-com";

import { PageTransitionAnimation } from "../../Animations/PageTransitionAnimation";
import { layoutAnimation, itemAnimation } from "@/Animations/layoutAnimation";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import {
  useContactForm,
  type ContactFormData,
} from "@/hooks/useFormValidation";
import { Nav } from "@components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const Contact = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollToTop(pageRef);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useContactForm();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const formValues = watch();

  const onSubmit = handleSubmit(async (data: ContactFormData) => {
    try {
      setSubmitError("");

      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID!,
        import.meta.env.VITE_TEMPLATE_ID!,
        formRef.current!,
        import.meta.env.VITE_USER_ID!
      );

      // open modal
      setIsOpen(true);
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("Failed to send message. Please try again.");
    }
  });

  const getFieldStatus = (fieldName: keyof ContactFormData) => {
    const hasError = !!errors[fieldName];
    const hasValue = formValues[fieldName]?.length > 0;
    const isValid = hasValue && !hasError;

    return {
      hasError,
      hasValue,
      isValid,
      className: hasError ? "error" : isValid ? "valid" : "",
    };
  };

  return (
    <PageTransitionAnimation ref={pageRef} classList="container contact">
      <Nav />
      {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}

      <motion.div variants={layoutAnimation}>
        <motion.h1 variants={itemAnimation}>
          Hello<span>.</span>
        </motion.h1>

        <motion.p variants={itemAnimation}>
          I would love to hear your thoughts on my site or let me know if you
          are interested in collaborating.
        </motion.p>

        <motion.p variants={itemAnimation}>
          Either way, thanks for looking through and till next time 👋
        </motion.p>

        <motion.form
          variants={itemAnimation}
          onSubmit={onSubmit}
          ref={formRef}
          className="contact-form"
          noValidate
        >
          {/* Name */}
          <div className="form-field">
            <motion.input
              type="text"
              placeholder="Name"
              {...register("name")}
              className={`form-input ${getFieldStatus("name").className}`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className="contact-form-error" role="alert">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-field">
            <motion.input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={`form-input ${getFieldStatus("email").className}`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span
                id="email-error"
                className="contact-form-error"
                role="alert"
              >
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="form-field">
            <motion.textarea
              placeholder="Message"
              {...register("message")}
              className={`form-textarea ${getFieldStatus("message").className}`}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              rows={2}
            />
            {errors.message && (
              <span
                id="message-error"
                className="contact-form-error"
                role="alert"
              >
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Error */}
          {submitError && (
            <div className="submit-error" role="alert">
              <span className="contact-form-error">{submitError}</span>
            </div>
          )}

          <div className="contact-submit-container">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={isSubmitting ? "submitting" : ""}
              aria-describedby="submit-status"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  Submit <FaArrowRight style={{ verticalAlign: "middle" }} />
                </>
              )}
            </motion.button>
          </div>
        </motion.form>

        <motion.div
          variants={itemAnimation}
          className="button-group last-item-on-page"
        >
          <Link to="/projects">
            <button>
              {" "}
              <FiArrowLeft style={{ verticalAlign: "middle" }} /> projects
            </button>
          </Link>
          <Link to="/contact">
            <button>
              contact <FiArrowRight style={{ verticalAlign: "middle" }} />
            </button>
          </Link>
        </motion.div>
      </motion.div>
      <Footer />
    </PageTransitionAnimation>
  );
};

// Modal
interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setIsOpen }: ModalProps) {
  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className="modal-content">
        <h1>Thanks for the mail!</h1>
        <p>I'll get back to you as soon as possible.</p>
        <button onClick={() => setIsOpen(false)} className="modal-close-btn">
          Close
        </button>
      </div>
    </motion.div>
  );
}
