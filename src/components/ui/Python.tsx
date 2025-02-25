import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism.css";

const Python = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const sections = [
    {
      id: "learning-basics",
      title: "Learning basics",
      content: (
        <>
          <div>something</div>
        </>
      ),
    }
  ];

  const [activeSection, setActiveSection] = useState(sections[0]);

  const [, setActiveTab] = useState<number | null>(null);

  const tabs = [
    {
      id: 1,
      question: "Why Learn HTML?",
      answer:
        "Mastering HTML allows you to build the foundation of web pages, making it an essential skill for developers, designers, and anyone looking to explore web technologies.",
    },
    {
      id: 2,
      question: "What is HTML?",
      answer:
        "HTML stands for HyperText Markup Language. It is used to structure content on the web, such as headings, paragraphs, links, and images.",
    },

  ];

  return (
    <div>
      <div className="">
        <div>
          <h2 className="text-blue-500 font-bold md:text-3xl my-2">Learning the basics</h2>
          
          <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div

            className=" p-10 rounded-lg"
          >
            <h3 className="text-2xl font-bold py-2 border-b-2 mb-4">
              Python Tutorial
            </h3>
            <ul className="list-disc pl-10 text-lg">
              {sections.map((section) => (
                <li
                  key={section.id}
                  className="cursor-pointer hover:text-indigo-500"
                  onClick={() => setActiveSection(section)}
                >
                  {section.title}
                </li>
              ))}
            </ul>
          </div>
          {/* Sidebar */}

          {/* Content goes here */}
          <div className="p-10 rounded-lg">
            {activeSection.content}
          </div>
          {/* Content goes here */}
        </div>
          
          
        </div>

        <div className="border p-10">
          <h2 className="text-blue-500 font-bold md:text-3xl my-2">One-Liners</h2>
          <div>
        
        {tabs.map((tab, index) => (
          <div key={tab.id} className="collapse collapse-arrow bg-base-200">
            {/* Radio Input for Each Tab */}
            <input
              type="radio"
              name="my-accordion-2"
              defaultChecked={index === 0} // First tab is checked by default
              id={`tab-${tab.id}`}
            />
            {/* Tab Title */}
            <div className="collapse-title text-xl font-medium" >
              {tab.question}
            </div>
            {/* Tab Content */}
            <div className="collapse-content">
              <p className="text-lg text-gray-500">{tab.answer}</p>
            </div>
          </div>
        ))}
      </div>

        <div className="text-center text-blue-500 font-semibold my-5">
          <a  href="#">View More</a>
        </div>
        </div>

        <div>
          <h2 className="text-blue-500 font-bold md:text-3xl my-2">Tips & Tricks</h2>
        </div>

        <div>
          <h2 className="text-blue-500 font-bold md:text-3xl my-2">Python Projects</h2>
          <ul className="flex flex-wrap justify-center">
            <li className="mx-5 my-2 p-2 bg-blue-500 rounded-xl text-white">Web Scraper</li>
          </ul>
        </div>

        
      </div>
    </div>
  )
}

export default Python