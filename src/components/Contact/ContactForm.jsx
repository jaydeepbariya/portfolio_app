import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const form = useRef();

  const onSubmit = (data) => {

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_ADMIN_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID,
        {
          to_name: process.env.REACT_APP_TO_NAME,
          from_name: process.env.REACT_APP_FROM_NAME,
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_USER_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID,
        {
          to_name: data.email,
          from_name: process.env.REACT_APP_FROM_NAME,
          name: data.name,
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("We'll be in touch soon.Thanks.");
        },
        (error) => {
          console.log(error.text);
          toast.error("Please,Try Again.Thanks. ");
        }
      );

      setValue("email", "");
      setValue("name", "");
      setValue("subject", "");
      setValue("message", "");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-3/4 mx-auto outline outline-[1px] outline-blue-500 max-w-lg p-4 rounded-md"
      ref={form}
    >
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          type="text"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.email && errors.email.type === "required" && (
          <p className="text-red-500">Email is required</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className="text-red-500">Invalid email format</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          {...register("name", { required: true })}
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.name && <p className="text-red-500">Name is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
          Subject
        </label>
        <input
          {...register("subject", { required: true })}
          type="text"
          id="subject"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.subject && <p className="text-red-500">Subject is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          rows={4}
          {...register("message", { required: true })}
          id="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
        {errors.message && <p className="text-red-500">Message is required</p>}
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
