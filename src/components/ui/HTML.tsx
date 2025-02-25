import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-cshtml";
import "prismjs/themes/prism.css";
import { motion } from "framer-motion";

function Html() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started with Web Pages",
      content: (
        <>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              HTML (HyperText Markup Language) is the backbone of web pages. It
              provides the structure for content displayed on the internet.
            </p>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-3">What is HTML?</h3>
            <p className="text-gray-700 mb-4">
              HTML is a markup language used to define the elements of a webpage,
              such as headings, paragraphs, images, links, and more. It works
              alongside CSS (for styling) and JavaScript (for interactivity) to
              create engaging web experiences.
            </p>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Basic HTML Structure</h3>
            <p className="text-gray-700 mb-2">Every HTML document follows a basic structure:</p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<!DOCTYPE html>
    <html>
      <head>
        <title>My First Web Page</title>
      </head>
      <body>
        <h1>Welcome to My Website</h1>
        <p>This is a simple paragraph.</p>
      </body>
    </html>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Understanding the Elements</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong className="text-gray-900">&lt;!DOCTYPE html&gt;</strong> - Declares the document type as HTML5.
              </li>
              <li>
                <strong className="text-gray-900">&lt;html&gt;</strong> - The root element of the HTML page.
              </li>
              <li>
                <strong className="text-gray-900">&lt;head&gt;</strong> - Contains metadata, such as the page title and linked stylesheets.
              </li>
              <li>
                <strong className="text-gray-900">&lt;body&gt;</strong> - Contains the main content displayed on the page.
              </li>
            </ul>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Creating Your First Web Page</h3>
            <p className="text-gray-700 mb-3">To create an HTML file, follow these steps:</p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Open a text editor (like Notepad, VS Code, or Sublime Text).</li>
              <li>Type the basic HTML structure shown above.</li>
              <li>Save the file with a <code className="bg-gray-200 px-1 rounded">.html</code> extension (e.g., <code className="bg-gray-200 px-1 rounded">index.html</code>).</li>
              <li>Open the file in a web browser to see your first webpage.</li>
            </ol>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Next Steps</h3>
            <p className="text-gray-700">
              Now that you understand the basic structure of an HTML page, you can
              start adding elements like images, links, and lists to enhance your
              webpage. In the next sections, we'll explore HTML tags in more
              detail.
            </p>
          </div>
        </>
      ),
    }
    ,

    {
      id: "structure-web-pages",
      title: "Structure Web Pages",
      content: (
        <>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Understanding Web Page Structure</h2>
            <p className="text-gray-700 mb-4">
              Structuring a web page properly is essential for readability,
              maintainability, and accessibility. HTML provides a set of elements
              that help organize content in a meaningful way.
            </p>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential HTML Structure</h3>
            <p className="text-gray-700 mb-2">A well-structured HTML page includes the following sections:</p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<!DOCTYPE html>
    <html>
      <head>
        <title>Structured Web Page</title>
      </head>
      <body>
        <header>
          <h1>Website Title</h1>
        </header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <main>
          <section>
            <h2>Main Content</h2>
            <p>This is the main content of the page.</p>
          </section>
          <aside>
            <h3>Sidebar</h3>
            <p>Additional information or links.</p>
          </aside>
        </main>
        <footer>
          <p>&copy; 2025 My Website</p>
        </footer>
      </body>
    </html>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Structural Elements</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong className="text-gray-900">&lt;header&gt;</strong> - Contains the website's title or branding.
              </li>
              <li>
                <strong className="text-gray-900">&lt;nav&gt;</strong> - Holds navigation links for easy site navigation.
              </li>
              <li>
                <strong className="text-gray-900">&lt;main&gt;</strong> - The main content section of the webpage.
              </li>
              <li>
                <strong className="text-gray-900">&lt;section&gt;</strong> - Defines sections within the main content.
              </li>
              <li>
                <strong className="text-gray-900">&lt;aside&gt;</strong> - Represents additional or sidebar content.
              </li>
              <li>
                <strong className="text-gray-900">&lt;footer&gt;</strong> - Contains footer information, such as copyright.
              </li>
            </ul>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why Structure Matters</h3>
            <p className="text-gray-700 mb-4">
              A well-structured page improves accessibility, SEO, and user experience.
              It helps search engines and screen readers understand content better.
            </p>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Next Steps</h3>
            <p className="text-gray-700">
              Now that you understand how to structure a webpage, you can start styling
              it using CSS and adding interactivity with JavaScript.
            </p>
          </div>
        </>
      ),
    },    


    {
      id: "embed-media",
      title: "Embed Media",
      content: (
        <>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Embedding Media in HTML</h2>
            <p className="text-gray-700 mb-4">
              Adding media elements such as images, videos, and audio enhances the user experience on a webpage. HTML provides specific tags to embed different types of media.
            </p>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Adding Images</h3>
            <p className="text-gray-700 mb-2">
              The <code className="bg-gray-200 px-1 rounded">&lt;img&gt;</code> tag is used to display images on a webpage.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<img src="image.jpg" alt="A beautiful scenery" width="600">`}
              </code>
            </pre>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>src</strong> - Specifies the image URL or file path.</li>
              <li><strong>alt</strong> - Provides alternative text for accessibility.</li>
              <li><strong>width</strong> - Defines the image width in pixels.</li>
            </ul>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Embedding Videos</h3>
            <p className="text-gray-700 mb-2">
              The <code className="bg-gray-200 px-1 rounded">&lt;video&gt;</code> tag is used to embed video content.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<video width="600" controls>
      <source src="video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>`}
              </code>
            </pre>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>controls</strong> - Adds play, pause, and volume controls.</li>
              <li><strong>source</strong> - Specifies the video file and format.</li>
              <li><strong>Fallback Text</strong> - Displays text if the browser doesn't support videos.</li>
            </ul>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Embedding Audio</h3>
            <p className="text-gray-700 mb-2">
              The <code className="bg-gray-200 px-1 rounded">&lt;audio&gt;</code> tag is used to embed audio files.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<audio controls>
      <source src="audio.mp3" type="audio/mp3">
      Your browser does not support the audio element.
    </audio>`}
              </code>
            </pre>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>controls</strong> - Enables playback controls.</li>
              <li><strong>source</strong> - Defines the audio file and format.</li>
              <li><strong>Fallback Text</strong> - Shown if the browser doesn’t support audio.</li>
            </ul>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Embedding YouTube Videos</h3>
            <p className="text-gray-700 mb-2">
              You can embed a YouTube video using the <code className="bg-gray-200 px-1 rounded">&lt;iframe&gt;</code> tag.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<iframe width="600" height="315" src="https://www.youtube.com/embed/video_id" frameborder="0" allowfullscreen></iframe>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Next Steps</h3>
            <p className="text-gray-700">
              Now that you know how to embed images, videos, and audio, you can experiment with different media formats and attributes to enhance your web pages.
            </p>
          </div>
        </>
      ),
    },    
    
    {
      id: "create-hyperlinks",
      title: "Create Hyperlinks",
      content: (
        <>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Creating Hyperlinks in HTML</h2>
            <p className="text-gray-700 mb-4">
              Hyperlinks allow users to navigate between pages or sections within a webpage. In HTML, links are created using the 
              <code className="bg-gray-200 px-1 rounded"> &lt;a&gt; </code> tag.
            </p>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Basic Hyperlink</h3>
            <p className="text-gray-700 mb-2">
              To create a hyperlink, use the <code className="bg-gray-200 px-1 rounded">href</code> attribute to define the destination URL.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<a href="https://www.example.com">Visit Example</a>`}
              </code>
            </pre>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>href</strong> - Specifies the URL of the page to link to.</li>
              <li>The anchor text (between <code>&lt;a&gt;</code> and <code>&lt;/a&gt;</code>) is what users click.</li>
            </ul>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Opening Links in a New Tab</h3>
            <p className="text-gray-700 mb-2">
              Use the <code className="bg-gray-200 px-1 rounded">target="_blank"</code> attribute to open links in a new tab.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<a href="https://www.example.com" target="_blank">Open in New Tab</a>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Linking to an Email</h3>
            <p className="text-gray-700 mb-2">
              You can create an email link using the <code className="bg-gray-200 px-1 rounded">mailto:</code> scheme.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<a href="mailto:someone@example.com">Send an Email</a>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Creating Internal Links</h3>
            <p className="text-gray-700 mb-2">
              Internal links help users navigate within the same webpage using IDs.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<a href="#section1">Go to Section 1</a>
    ...
    <section id="section1">
      <h2>Section 1</h2>
      <p>This is Section 1 content.</p>
    </section>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Creating Download Links</h3>
            <p className="text-gray-700 mb-2">
              Use the <code className="bg-gray-200 px-1 rounded">download</code> attribute to let users download a file.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<a href="file.pdf" download>Download PDF</a>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Next Steps</h3>
            <p className="text-gray-700">
              Now that you understand how to create hyperlinks, you can start styling them using CSS and improving user navigation.
            </p>
          </div>
        </>
      ),
    }
    ,
    {
      id: "create-lists",
      title: "Create Lists",
      content: (
        <>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Creating Lists in HTML</h2>
            <p className="text-gray-700 mb-4">
              Lists help organize content in a structured way. HTML provides three types of lists: ordered, unordered, and definition lists.
            </p>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Unordered Lists</h3>
            <p className="text-gray-700 mb-2">
              Unordered lists use bullet points and are created with the 
              <code className="bg-gray-200 px-1 rounded"> &lt;ul&gt; </code> tag.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Ordered Lists</h3>
            <p className="text-gray-700 mb-2">
              Ordered lists use numbers and are created with the 
              <code className="bg-gray-200 px-1 rounded"> &lt;ol&gt; </code> tag.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<ol>
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
    </ol>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Definition Lists</h3>
            <p className="text-gray-700 mb-2">
              Definition lists consist of terms and their definitions, created with the 
              <code className="bg-gray-200 px-1 rounded"> &lt;dl&gt; </code> tag.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<dl>
      <dt>HTML</dt>
      <dd>HyperText Markup Language</dd>
      <dt>CSS</dt>
      <dd>Cascading Style Sheets</dd>
    </dl>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Styling Lists with CSS</h3>
            <p className="text-gray-700 mb-2">
              You can customize lists using CSS. Example:
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`ul {
      list-style-type: square;
    }
    
    ol {
      list-style-type: upper-roman;
    }`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Next Steps</h3>
            <p className="text-gray-700">
              Now that you understand how to create lists, you can experiment with styling them using CSS to enhance their appearance.
            </p>
          </div>
        </>
      ),
    }
    ,
    {
      id: "tables",
      title: "Tables",
      content: (
        <>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Creating Tables in HTML</h2>
            <p className="text-gray-700 mb-4">
              Tables in HTML are used to display structured data in rows and columns. The 
              <code className="bg-gray-200 px-1 rounded"> &lt;table&gt; </code> tag is used to create tables.
            </p>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Basic Table Structure</h3>
            <p className="text-gray-700 mb-2">
              A basic table consists of rows (<code className="bg-gray-200 px-1 rounded">&lt;tr&gt;</code>), 
              headers (<code className="bg-gray-200 px-1 rounded">&lt;th&gt;</code>), and cells (<code className="bg-gray-200 px-1 rounded">&lt;td&gt;</code>).
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<table border="1">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
      <tr>
        <td>Alice</td>
        <td>25</td>
        <td>New York</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>30</td>
        <td>Los Angeles</td>
      </tr>
    </table>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Adding Table Borders</h3>
            <p className="text-gray-700 mb-2">
              Use the <code className="bg-gray-200 px-1 rounded">border</code> attribute to add borders around a table.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<table border="1">
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
      </tr>
    </table>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Using Table Headers</h3>
            <p className="text-gray-700 mb-2">
              Use the <code className="bg-gray-200 px-1 rounded">&lt;th&gt;</code> tag to define table headers, making them bold and centered by default.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<table border="1">
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>Laptop</td>
        <td>$1000</td>
      </tr>
    </table>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Merging Cells (colspan & rowspan)</h3>
            <p className="text-gray-700 mb-2">
              Use <code className="bg-gray-200 px-1 rounded">colspan</code> to merge columns and 
              <code className="bg-gray-200 px-1 rounded">rowspan</code> to merge rows.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<table border="1">
      <tr>
        <th colspan="2">Header</th>
      </tr>
      <tr>
        <td rowspan="2">Merged Cell</td>
        <td>Cell 2</td>
      </tr>
      <tr>
        <td>Cell 3</td>
      </tr>
    </table>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Styling Tables with CSS</h3>
            <p className="text-gray-700 mb-2">
              You can improve table appearance using CSS.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th, td {
      padding: 10px;
      border: 1px solid #ddd;
      text-align: left;
    }
    
    th {
      background-color: #f4f4f4;
    }`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Next Steps</h3>
            <p className="text-gray-700">
              Now that you understand how to create and style tables, try adding advanced features like table captions and responsive designs.
            </p>
          </div>
        </>
      ),
    }
    ,
    {
      id: "forms-for-user-input",
      title: "Forms for User Input",
      content: (
        <>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Creating Forms in HTML</h2>
            <p className="text-gray-700 mb-4">
              Forms in HTML allow users to enter and submit data. The 
              <code className="bg-gray-200 px-1 rounded"> &lt;form&gt; </code> element is used to create a form.
            </p>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Basic Form Structure</h3>
            <p className="text-gray-700 mb-2">
              A simple form includes input fields and a submit button.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<form action="/submit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      
      <button type="submit">Submit</button>
    </form>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Common Form Elements</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Text Input:</strong> <code>&lt;input type="text"&gt;</code></li>
              <li><strong>Email Input:</strong> <code>&lt;input type="email"&gt;</code></li>
              <li><strong>Password Input:</strong> <code>&lt;input type="password"&gt;</code></li>
              <li><strong>Radio Buttons:</strong> <code>&lt;input type="radio"&gt;</code></li>
              <li><strong>Checkboxes:</strong> <code>&lt;input type="checkbox"&gt;</code></li>
              <li><strong>Dropdown Menu:</strong> <code>&lt;select&gt;</code></li>
              <li><strong>Submit Button:</strong> <code>&lt;button type="submit"&gt;</code></li>
            </ul>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Example: Form with Different Inputs</h3>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`<form action="/submit" method="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
    
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
    
      <label>Gender:</label>
      <input type="radio" name="gender" value="male"> Male
      <input type="radio" name="gender" value="female"> Female
    
      <label for="interests">Interests:</label>
      <input type="checkbox" name="interests" value="coding"> Coding
      <input type="checkbox" name="interests" value="gaming"> Gaming
    
      <label for="country">Country:</label>
      <select id="country" name="country">
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
      </select>
    
      <button type="submit">Register</button>
    </form>`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Styling Forms with CSS</h3>
            <p className="text-gray-700 mb-2">
              You can enhance the appearance of forms using CSS.
            </p>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
              <code>
                {`input, select, button {
      width: 100%;
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
    }
    
    button {
      background-color: #4CAF50;
      color: white;
      border: none;
    }`}
              </code>
            </pre>
    
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Next Steps</h3>
            <p className="text-gray-700">
              Now that you know how to create forms, try adding validation and styling to improve user experience.
            </p>
          </div>
        </>
      ),
    }
    ,
    {
      id: "embed-scripts-and-styles",
      title: "Embed Scripts and Styles",
      content: (
        <>
          <div></div>
        </>
      ),
    },
    {
      id: "semantic-elements",
      title: "Semantic Elements",
      content: (
        <>
          <div></div>
        </>
      ),
    },
    {
      id: "metadata-and-seo",
      title: "Metadata and SEO",
      content: (
        <>
          <div></div>
        </>
      ),
    },
    {
      id: "accessibility-features",
      title: "Accessibility Features",
      content: (
        <>
          <div></div>
        </>
      ),
    },
    {
      id: "responsive-design",
      title: "Responsive Design",
      content: (
        <>
          <div></div>
        </>
      ),
    },
    {
      id: "canvas-and-svg",
      title: "Canvas and SVG",
      content: (
        <>
          <div></div>
        </>
      ),
    },
    {
      id: "drag-and-drop",
      title: "Drag and Drop",
      content: (
        <>
          <div></div>
        </>
      ),
    },
    {
      id: "geolocation-and-other-apis",
      title: "Geolocation and other APIs",
      content: (
        <>
          <div></div>
        </>
      ),
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0]);

  const [activeTab, setActiveTab] = useState<number | null>(null);

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
    {
      id: 3,
      question: "How is HTML different from CSS and JavaScript?",
      answer:
        "HTML structures content on the web, CSS styles the content, and JavaScript makes the content interactive and dynamic.",
    },
    {
      id: 4,
      question: "Do I need to know HTML to build websites?",
      answer:
        "Yes, HTML is the backbone of any website. Without it, there would be no structure for the content.",
    },
  ];

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

            <div className="flex flex-col md:flex-row items-center gap-10 ">
              {/* Image Section */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <img
                  src="/icons/html5-original.svg"
                  width={100}
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
                  className="text-xl text-gray-500 md:text-left text-center mb-4"
                >
                  HTML (Hypertext Markup Language) forms the backbone of web development,
                  enabling you to structure and display content effectively on the web.
                </motion.p>

                {/* Additional Information */}
                <div className="mt-4 space-y-2">
                  <div className="text-lg">
                    <strong>Developed By:</strong>{" "}
                    <span className="text-gray-500">

                      World Wide Web Consortium (W3C; formerly)</span>
                  </div>
                  <div className="text-lg">
                    <strong>Filename Extension:</strong>{" "}
                    <span className="text-gray-500">.html, .htm</span>
                  </div>
                  <div className="text-lg">
                    <strong>Official Website:</strong>{" "}
                    <a
                      href="https://html.spec.whatwg.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 underline hover:text-orange-800"
                    >
                      https://html.spec.whatwg.org/
                    </a>
                  </div>
                  <div className="text-lg">
                    <strong>First Released:</strong>{" "}
                    <span className="text-gray-500">1993</span>
                  </div>
                  <div className="text-lg">
                    <strong>Use Case:</strong>{" "}
                    <span className="text-gray-500">
                      Structuring and presenting content on the web.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* dynamic tutorial */}

          <div className="mt-10 flex flex-col md:flex-row gap-10">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className=" p-10 rounded-lg w-2/3"
            >
              <h3 className="text-2xl font-bold py-2 text-orange-600 border-b-2 border-orange-300 mb-4">
                HTML Tutorial
              </h3>
              <ol className="list-decimal pl-6 text-lg font-medium space-y-3">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    className={`hover:underline cursor-pointer ${activeSection.id === section.id
                      ? "text-orange-600 font-semibold transform scale-105"
                      : "text-gray-500"
                      } transition duration-300 ease-in-out`}
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
              className="p-10 rounded-lg border "
            >
              {activeSection.content}
            </motion.div>
          </div>


        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 "
      >
        <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">
          HTML Extensions for VS Code
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Extension 1 */}
          <div className="flex flex-col items-center  p-4 rounded-lg">
            <div className="w-16 h-16  flex items-center justify-center mb-3">
              <img src="https://abusaidm.gallerycdn.vsassets.io/extensions/abusaidm/html-snippets/0.2.1/1514476281055/Microsoft.VisualStudio.Services.Icons.Default" alt="HTML Snippets" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg">HTML Snippets</span>
            <p className="text-center text-gray-400 text-sm mt-2">
              Adds rich HTML snippets to speed up coding and improve productivity.
            </p>
          </div>

          {/* Extension 2 */}
          <div className="flex flex-col items-center  p-4 rounded-lg">
            <div className="w-16 h-16  flex items-center justify-center mb-3">
              <img src="https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-close-tag/0.5.15/1702959502562/Microsoft.VisualStudio.Services.Icons.Default" alt="Auto Close Tag" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg">Auto Close Tag</span>
            <p className="text-center text-gray-400 text-sm mt-2">
              Automatically closes HTML tags as you type, saving time and reducing errors.
            </p>
          </div>

          {/* Extension 3 */}
          <div className="flex flex-col items-center  p-4 rounded-lg">
            <div className="w-16 h-16  flex items-center justify-center mb-3">
              <img src="https://christian-kohler.gallerycdn.vsassets.io/extensions/christian-kohler/path-intellisense/2.3.0/1599815793523/Microsoft.VisualStudio.Services.Icons.Default" alt="Path Intellisense" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg">Path Intellisense</span>
            <p className="text-center text-gray-400 text-sm mt-2">
              Autocompletes file paths in HTML documents to streamline navigation and workflow.
            </p>
          </div>

          {/* Extension 4 */}
          <div className="flex flex-col items-center  p-4 rounded-lg">
            <div className="w-16 h-16  flex items-center justify-center mb-3">
              <img src="https://ecmel.gallerycdn.vsassets.io/extensions/ecmel/vscode-html-css/2.0.12/1735740148938/Microsoft.VisualStudio.Services.Icons.Default" alt="HTML CSS Support" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg">HTML CSS Support</span>
            <p className="text-center text-gray-400 text-sm mt-2">
              Provides CSS class name suggestions within HTML files, making styling easier.
            </p>
          </div>

          {/* Extension 5 */}
          <div className="flex flex-col items-center  p-4 rounded-lg">
            <div className="w-16 h-16  flex items-center justify-center mb-3">
              <img src="https://ritwickdey.gallerycdn.vsassets.io/extensions/ritwickdey/liveserver/5.7.9/1736542717282/Microsoft.VisualStudio.Services.Icons.Default" alt="Live Server" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg">Live Server</span>
            <p className="text-center text-gray-400 text-sm mt-2">
              Launches a local development server with live reload for quick preview of changes.
            </p>
          </div>

          {/* Extension 6 */}
          <div className="flex flex-col items-center  p-4 rounded-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-3">
              <img src="https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/11.0.0/1723648421534/Microsoft.VisualStudio.Services.Icons.Default" alt="Prettier" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg">Prettier</span>
            <p className="text-center text-gray-400 text-sm mt-2">
              Formats your HTML code consistently, adhering to best practices and readability.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="my-10">
        <h2 className="text-2xl font-bold mb-3 text-orange-600">FAQ</h2>
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


      <hr className="my-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="rounded-lg shadow-sm"
      >
        <h2 className="text-2xl font-bold mb-3 text-orange-600">Useful Resources</h2>
        <p className="text-gray-500 text-lg mb-6">
          Here are some excellent resources to enhance your HTML learning journey. Check out these tutorials, references, and tools to level up your skills.
        </p>
        <ul className="space-y-2 list-disc ml-10">
          {[
            {
              title: "HTML Documentation",
              link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
              title: "W3Schools HTML Tutorial",
              link: "https://www.w3schools.com/html/",
            },
            {
              title: "HTML5 Validator",
              link: "https://validator.w3.org/",
            },
            {
              title: "CSS Tricks",
              link: "https://css-tricks.com/",
            },
          ].map((resource, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            >
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-600 hover:underline"
              >
                {resource.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </motion.div>


  );
}

export default Html;
