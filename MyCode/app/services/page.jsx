"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "As a seasoned web developer, I bring a comprehensive skill set and a passion for creating engaging, user-friendly web experiences. With a solid foundation in both frontend and backend technologies, I am equipped to handle the full spectrum of web development tasks.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I have a strong foundation in UI/UX design, which plays a crucial role in my web development process. My approach to design is centered on creating intuitive, user-friendly interfaces that enhance the overall user experience.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Creating a memorable and impactful logo is essential for establishing a strong brand identity. My approach to logo design involves a combination of creativity, strategic thinking, and attention to detail. I focus on crafting logos that are not only visually appealing but also effectively communicate the essence of the brand.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I have a strong foundation in Search Engine Optimization (SEO), ensuring that the websites I develop not only look great but also perform well in search engine rankings. My goal is to create websites that are not only user-friendly and visually appealing but also easily discoverable by search engines, driving more organic traffic and ensuring long-term success.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
