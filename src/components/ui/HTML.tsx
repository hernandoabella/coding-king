import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-cshtml";
import "prismjs/themes/prism-okaidia.css";
import { motion } from "framer-motion";

function Html() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const sections = [
    {
      id: "structure-web-pages",
      title: "Structure Web Pages",
      content: (
        <>
          <h3 className="text-2xl font-bold py-2">Structure Web Pages</h3>
          <ul className="list-disc pl-10">
            <li className="py-2">
              Define headings, paragraphs, and text using elements like
              <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                {" "}
                &lt;h1&gt;
              </span>
              ,{" "}
              <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                &lt;p&gt;
              </span>
              , and{" "}
              <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                &lt;span&gt;
              </span>
              .
            </li>
            <li className="py-2">
              Create sections of a webpage with{" "}
              <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                &lt;div&gt;
              </span>
              ,
              <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                {" "}
                &lt;section&gt;
              </span>
              , and{" "}
              <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                &lt;article&gt;
              </span>
              .
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "embed-media",
      title: "Embed Media",
      content: (
        <>
          <h3 className="text-2xl font-bold py-2">Embed Media</h3>
          <p className="pl-10">
            Use HTML elements like{" "}
            <span className="rounded code bg-base-300 text-[#f92672] ml-1">
              &lt;img&gt;
            </span>{" "}
            to embed images,{" "}
            <span className="rounded code bg-base-300 text-[#f92672] ml-1">
              &lt;audio&gt;
            </span>{" "}
            for audio, and{" "}
            <span className="rounded code bg-base-300 text-[#f92672] ml-1">
              &lt;video&gt;
            </span>{" "}
            to include videos in your web pages.
          </p>
        </>
      ),
    },
    {
      id: "create-hyperlinks",
      title: "Create Hyperlinks",
      content: (
        <>
          <h3 className="text-2xl font-bold py-2">Create Hyperlinks</h3>
          <p className="pl-10">
            Use the{" "}
            <span className="rounded code bg-base-300 text-[#f92672] ml-1">
              &lt;a&gt;
            </span>{" "}
            element to create links that navigate to other web pages or
            resources.
          </p>
        </>
      ),
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component mounts
      exit={{ opacity: 0, y: -50 }} // Animation when component unmounts
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div className="flex flex-col md:flex-row md:m-auto">
        <div>
          <div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:max-w-4xl md:mx-auto">
              {/* Image Section */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <img
                  src="/icons/html5-original.svg"
                  width={150}
                  height={100}
                  alt="HTML Icon"
                  className="w-24 h-24 md:w-36 md:h-36"
                />
              </div>

              {/* Text Section */}
              <div>
                <h1 className="text-3xl md:text-5xl lg:text-4xl font-extrabold mb-4 text-center md:text-left">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-400">
                    HTML:
                  </span>{" "}
                  HyperText Markup Language
                </h1>
                <motion.p
                  initial={{ opacity: 0 }} // Initial animation state
                  animate={{ opacity: 1 }} // Animation when component mounts
                  transition={{ delay: 0.3 }} // Delay before animation starts
                  className="text-xl text-gray-700 md:text-left text-center"
                >
                  HTML (Hypertext Markup Language) forms the backbone of web development,
                  enabling you to structure and display content effectively on the web.
                </motion.p>
              </div>
            </div>

            {/* Additional Info Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 p-6 bg-gray-50 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-3 text-orange-600">
                Why Learn HTML?
              </h2>
              <p className="text-gray-700 text-lg">
                Mastering HTML allows you to build the foundation of web pages, making it
                an essential skill for developers, designers, and anyone looking to
                explore web technologies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="p-8 bg-white rounded-lg shadow-lg"
            >
              <h3 className="font-extrabold text-3xl text-orange-600 mb-6 text-center">
                Main Features
              </h3>
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Structuring Content",
                    description:
                      "Effortlessly organize content with tags like <h1>, <p>, <div>, <img>, and more.",
                  },
                  {
                    title: "Creating Links",
                    description:
                      "Enable seamless navigation between pages using the versatile <a> tag.",
                  },
                  {
                    title: "Displaying Images",
                    description:
                      "Add stunning visuals to your pages with the simple <img> tag.",
                  },
                  {
                    title: "Organizing Data",
                    description:
                      "Present information clearly in tables using the <table> tag.",
                  },
                  {
                    title: "Embedding Multimedia",
                    description:
                      "Integrate video and audio content effortlessly into your site.",
                  },
                  {
                    title: "SEO Optimization",
                    description:
                      "Boost your site's visibility using semantic tags like <article>, <nav>, and <section>.",
                  },
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>

          <div className="mt-10 flex flex-col md:flex-row">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="md:w-1/4"
            >
              <h3 className="text-2xl font-bold py-2 text-orange-600">
                HTML Topics
              </h3>
              <ol className="list-decimal pl-10 text-lg font-medium space-y-2">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    className={`hover:underline cursor-pointer ${activeSection.id === section.id
                        ? "text-orange-600 font-bold"
                        : ""
                      }`}
                    onClick={() => setActiveSection(section)}
                  >
                    {section.title}
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="md:w-3/4 px-5"
            >
              {activeSection.content}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Html;
