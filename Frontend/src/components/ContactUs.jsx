import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar.jsx";
import { toast } from 'react-hot-toast';

function ContactUs() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        if(data){
          toast.success("Thankyou for your response!");
          setTimeout(() => {
            window.location.href = "/";  
          },3000);
        }
        console.log(data)
      }
    
  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center h-full md:h-screen md:mt-6 mt-28" >
      <section className="p-12 rounded shadow w-full md:w-2/3 mx-10 dark:border dark:border-slate-700">
      <div className="flex justify-between w-full mb-4">
            <h1 className="text-xl font-medium md:text-3xl dark:text-white">
              Contact Us
            </h1>
            <a
              className="p-2 mr-6 font-medium text-slate-600 bg-slate-500 hover:bg-slate-700 text-white rounded-md"
            >
              Back
            </a>
          </div>
        <Form onSubmit={handleSubmit(onSubmit)} className="pl-6">
          <Form.Group className="mb-6 mb0" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" className="placeholder:text-slate-400" {...register("name",{required: true})}/>
            {errors.name && <span className="text-sm text-red-500">This field is required.</span>}
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" className="placeholder:text-slate-400" {...register("email",{required: true})}/>
            {errors.email && <span className="text-sm text-red-500">This field is required.</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Type a message..." className="placeholder:text-slate-400" {...register("message",{required: true})}/>
        {errors.message && <span className="text-sm text-red-500">This field is required.</span>}
      </Form.Group>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </section>
    </div>
    </>
  );
}

export default ContactUs;
