import React, { useState } from "react";

const links = [
  {
    title: "Title 1",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint
        minima itaque sequi, distinctio quasi quia, harum veniam quidem nam
        voluptas sapiente ad facere perspiciatis eveniet dicta enim, mollitia
        eaque.
      </p>
    ),
    element: <div style={{ backgroundColor: "lightblue" }}>Example Div</div>,
  },
  {
    title: "Title 2",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        voluptates facere temporibus, itaque officiis accusantium laboriosam
        repellendus, autem doloremque in.
      </p>
    ),
    element: <img src="example-image2.jpg" alt="Example Image" />,
  },
  // Add more links as needed
];

function Main() {
  const [activeLink, setActiveLink] = useState(0); // Set the initial active link index

  return (
    <div>
      <div className="flex justify-center place-items-center p-5 gap-10">
        <div className="md:w-1/2">
          {/* Left side content example: code snippet or image */}
          {links[activeLink].element}
        </div>
        <div className="md:w-1/2">
          <h2>{links[activeLink].title}</h2>
          {links[activeLink].content}
          <a href="#">Read more.</a>
        </div>
      </div>
      <div className="flex p-5">
        {links.map((link, index) => (
          <div
            key={index}
            onClick={() => setActiveLink(index)}
            style={{ cursor: "pointer" }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
