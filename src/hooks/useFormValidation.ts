import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const useFormValidation = () => {
  const schemas = useMemo(
    () => ({
      contactForm: z.object({
        name: z
          .string()
          .min(2, "Name must be at least 2 characters long")
          .max(50, "Name must be less than 50 characters")
          .regex(/^[a-zA-Z]+$/, "Name can only contain valid letters")
          .refine(
            (name) => !/<script|javascript:|on\w+=/i.test(name),
            "Invalid characters detected in name"
          ),

        email: z
          .email("Please enter a valid email address")
          .min(1, "Email is required")
          .max(100, "Email must be less than 100 characters")
          .refine(
            (email) => !/<script|javascript:|on\w+=/i.test(email),
            "Invalid characters detected in email"
          ),

        message: z
          .string()
          .max(150, "Message must be less than 150 characters")
          .refine(
            (msg) => !/<script|javascript:|on\w+=/i.test(msg),
            "Invalid characters detected in message"
          ),
      }),
    }),
    []
  );

  return schemas;
};

export type ContactFormData = z.infer<
  ReturnType<typeof useFormValidation>["contactForm"]
>;

export const useContactForm = () => {
  const { contactForm } = useFormValidation();

  return useForm<ContactFormData>({
    resolver: zodResolver(contactForm),
    mode: "onChange",
  });
};
