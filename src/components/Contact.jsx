import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import StationCanvas from "./canvas/Station";

// p8_Ed82x5hx2FCGnf
// template_r8entax
// service_rkkw474

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_rkkw474",
        "template_r8entax",
        {
          form_name: form.name,
          to_name: "Satyam Kumar",
          form_email: form.email,
          to_email: "satyam21092@gmail.com",
          message: form.message,
        },
        "p8_Ed82x5hx2FCGnf"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you for contacting me. I will get back to you soon.");
        setForm({
          name: "",
          email: "",
          message: "",
        }),
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Oops, some error has occurred. Please try again later");
          };
      });
  };

  return (
    <section className="h-100vh snap-center">
      <div
        className="xl:mt-12 xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden"
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-gradient-to-r from-pink-500 to-purple-500 to-yellow-500 to-red-500 to-green-500 to-blue-500 opacity-50 transform rotate-90 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch with me</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            // ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 " 
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="what is your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-white text-white
          rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="what is your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-white text-white
          rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Leave your message...."
                className="bg-tertiary py-4 px-6 placeholder:text-white text-white
          rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-black p-3 rounded-lg hover:bg-primary "
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <StationCanvas />
        </motion.div>
      </div>
    </section>
  );
};

// <StationCanvas />

export default SectionWrapper(Contact, "");
