import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar.jsx";
import { toast } from "react-hot-toast";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      toast.success("Thank you for your response!");
      setTimeout(() => {
        window.location.href = "/";
      }, 2500);
    }
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <section className="p-6 md:p-12 mt-28 md:mt-16 mx-3 w-full md:w-2/3 lg:w-1/2 xl:w-1/2 rounded shadow dark:border dark:border-slate-700">
          <div className="flex justify-between w-full mb-4">
            <h1 className="text-xl md:text-3xl font-medium dark:text-white">
              Contact Us
            </h1>
            <a
              href="/"
              className="p-2 text-white bg-slate-500 hover:bg-slate-700 rounded-md"
            >
              Back
            </a>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Input */}
            <Form.Group controlId="formBasicName">
              <Form.Label className="dark:text-white">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="placeholder:text-slate-400"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required.
                </span>
              )}
            </Form.Group>

            {/* Email Input */}
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="dark:text-white">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="placeholder:text-slate-400"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </Form.Group>

            {/* Message Input */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="dark:text-white">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Type a message..."
                className="placeholder:text-slate-400"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required.
                </span>
              )}
            </Form.Group>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                variant="primary"
                type="submit"
                className="w-full md:w-auto"
              >
                Submit
              </Button>
            </div>
          </Form>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
