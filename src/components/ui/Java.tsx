import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/themes/prism-tomorrow.css";
import {  FaChevronRight } from "react-icons/fa";
import { FaJava } from "react-icons/fa";


const tutorialData = [
  {
    id: "basics",
    title: "Java Basics",
    subtopics: [
      {
        id: "variables",
        title: "Variables",
        description: "Learn how to declare and use variables in Java.",
        content: (
          <pre>
            <code className="language-java">{`int x = 5;\nString y = "Hello";\nSystem.out.println(x + " " + y);`}</code>
          </pre>
        ),
      },
      {
        id: "data-types",
        title: "Data Types",
        description: "Understand Java's built-in data types such as int, float, String, and boolean.",
        content: (
          <pre>
            <code className="language-java">{`int a = 10;\nfloat b = 3.14f;\nString c = "Java";\nboolean d = true;`}</code>
          </pre>
        ),
      },
      {
        id: "type-casting",
        title: "Type Casting",
        description: "Convert between data types using casting.",
        content: (
          <pre>
            <code className="language-java">{`int x = Integer.parseInt("10");\ndouble y = Double.parseDouble("3.14");\nString z = String.valueOf(100);`}</code>
          </pre>
        ),
      },
      {
        id: "input-output",
        title: "User Input & Output",
        description: "Use Scanner and System.out to interact with users.",
        content: (
          <pre>
            <code className="language-java">{`import java.util.Scanner;\n\nScanner scanner = new Scanner(System.in);\nSystem.out.print("Enter your name: ");\nString name = scanner.nextLine();\nSystem.out.println("Hello, " + name);`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "control",
    title: "Control Flow",
    subtopics: [
      {
        id: "if-else",
        title: "If / Else",
        description: "Make decisions using if, else if, and else.",
        content: (
          <pre>
            <code className="language-java">{`int x = 10;\nif (x > 5) {\n    System.out.println("Greater than 5");\n} else if (x == 5) {\n    System.out.println("Equal to 5");\n} else {\n    System.out.println("Less than 5");\n}`}</code>
          </pre>
        ),
      },
      {
        id: "loops",
        title: "Loops",
        description: "Repeat actions using for and while loops.",
        content: (
          <pre>
            <code className="language-java">{`for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n\nint count = 0;\nwhile (count < 5) {\n    System.out.println(count);\n    count++;\n}`}</code>
          </pre>
        ),
      },
      {
        id: "break-continue",
        title: "Break & Continue",
        description: "Control the flow of loops using break and continue.",
        content: (
          <pre>
            <code className="language-java">{`for (int i = 0; i < 5; i++) {\n    if (i == 3) {\n        continue;\n    }\n    System.out.println(i);\n}`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "functions",
    title: "Methods",
    subtopics: [
      {
        id: "defining-functions",
        title: "Defining Methods",
        description: "Learn how to define and call methods in Java.",
        content: (
          <pre>
            <code className="language-java">{`public static String greet(String name) {\n    return "Hello, " + name + "!";\n}\n\nSystem.out.println(greet("Alice"));`}</code>
          </pre>
        ),
      },
      {
        id: "arguments",
        title: "Method Arguments",
        description: "Understand how to pass and use arguments in methods.",
        content: (
          <pre>
            <code className="language-java">{`public static void greet(String name) {\n    System.out.println("Hello " + name);\n}\n\ngreet("Ana");`}</code>
          </pre>
        ),
      },
      {
        id: "lambda",
        title: "Lambda Expressions",
        description: "Use simple anonymous functions with lambda (Java 8+).",
        content: (
          <pre>
            <code className="language-java">{`interface Square {\n    int calculate(int x);\n}\n\nSquare square = (x) -> x * x;\nSystem.out.println(square.calculate(5));`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "collections",
    title: "Collections",
    subtopics: [
      {
        id: "lists",
        title: "Lists",
        description: "Use lists to store sequences of items.",
        content: (
          <pre>
            <code className="language-java">{`import java.util.*;\nList<String> fruits = new ArrayList<>();\nfruits.add("apple");\nfruits.add("banana");\nSystem.out.println(fruits.get(1));`}</code>
          </pre>
        ),
      },
      {
        id: "dictionaries",
        title: "Maps",
        description: "Use maps to store key-value pairs.",
        content: (
          <pre>
            <code className="language-java">{`Map<String, Object> person = new HashMap<>();\nperson.put("name", "Alice");\nperson.put("age", 25);\nSystem.out.println(person.get("name"));`}</code>
          </pre>
        ),
      },
      {
        id: "tuples",
        title: "Pairs (Tuple-like)",
        description: "Use Pair class from JavaFX or custom class.",
        content: (
          <pre>
            <code className="language-java">{`import javafx.util.Pair;\nPair<Integer, Integer> coordinates = new Pair<>(10, 20);\nSystem.out.println(coordinates.getKey());`}</code>
          </pre>
        ),
      },
      {
        id: "sets",
        title: "Sets",
        description: "Sets store unique elements.",
        content: (
          <pre>
            <code className="language-java">{`Set<Integer> nums = new HashSet<>(Arrays.asList(1, 2, 3, 3, 4));\nSystem.out.println(nums);`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "errors",
    title: "Error Handling",
    subtopics: [
      {
        id: "try-except",
        title: "Try / Catch",
        description: "Handle runtime errors using try/catch blocks.",
        content: (
          <pre>
            <code className="language-java">{`try {\n    int x = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("Cannot divide by zero.");\n}`}</code>
          </pre>
        ),
      },
      {
        id: "finally",
        title: "Finally Block",
        description: "Run code no matter what using finally.",
        content: (
          <pre>
            <code className="language-java">{`try {\n    System.out.println("Try block");\n} finally {\n    System.out.println("Always runs");\n}`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "modules",
    title: "Packages & Imports",
    subtopics: [
      {
        id: "import",
        title: "Importing Classes",
        description: "Use external or built-in classes in your project.",
        content: (
          <pre>
            <code className="language-java">{`import java.lang.Math;\nSystem.out.println(Math.sqrt(16));`}</code>
          </pre>
        ),
      },
      {
        id: "custom-modules",
        title: "Custom Classes",
        description: "Create your own reusable Java classes.",
        content: (
          <pre>
            <code className="language-java">{`// Utils.java\npublic class Utils {\n    public static String greet(String name) {\n        return "Hello " + name;\n    }\n}\n\n// Main.java\nSystem.out.println(Utils.greet("Ana"));`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "files",
    title: "File Handling",
    subtopics: [
      {
        id: "read-file",
        title: "Reading Files",
        description: "Read text from files using BufferedReader.",
        content: (
          <pre>
            <code className="language-java">{`import java.io.*;\nBufferedReader reader = new BufferedReader(new FileReader("file.txt"));\nString content = reader.readLine();\nSystem.out.println(content);\nreader.close();`}</code>
          </pre>
        ),
      },
      {
        id: "write-file",
        title: "Writing Files",
        description: "Write text to a file using FileWriter.",
        content: (
          <pre>
            <code className="language-java">{`import java.io.*;\nFileWriter writer = new FileWriter("file.txt");\nwriter.write("Hello, file!");\nwriter.close();`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "oop",
    title: "Object-Oriented Programming",
    subtopics: [
      {
        id: "classes",
        title: "Classes & Objects",
        description: "Create classes and instantiate objects.",
        content: (
          <pre>
            <code className="language-java">{`class Person {\n    String name;\n    Person(String name) {\n        this.name = name;\n    }\n}\n\nPerson p = new Person("Alice");\nSystem.out.println(p.name);`}</code>
          </pre>
        ),
      },
      {
        id: "inheritance",
        title: "Inheritance",
        description: "Extend one class from another using inheritance.",
        content: (
          <pre>
            <code className="language-java">{`class Animal {\n    void speak() {\n        System.out.println("Sound");\n    }\n}\n\nclass Dog extends Animal {\n    void speak() {\n        System.out.println("Woof");\n    }\n}\n\nDog d = new Dog();\nd.speak();`}</code>
          </pre>
        ),
      },
    ],
  },
];



const JavaTutorial = () => {
  const [activeSection, setActiveSection] = useState(tutorialData[0]);
  const [activeSubtopic, setActiveSubtopic] = useState(tutorialData[0].subtopics[0]);

  useEffect(() => {
    Prism.highlightAll();
  }, [activeSubtopic]);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start mt-10 px-4">
      {/* Glow bg effect */}
      <div className=" w-[500px] h-[400px] bg-sky-500 opacity-20 rounded-full blur-3xl flex absolute justify-center item-center z-0"></div>
      {/* Sidebar */}
      <aside className="z-10 w-full lg:w-[450px] max-h-[400px] overflow-auto p-4 bg-base-100 rounded-md  shadow-md mb-6 lg:mb-0 lg:mr-6">
        <div className="flex items-center gap-3 border-b border-gray-600 pb-4 mb-4">
          <FaJava className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">Java Tutorial</h2>
        </div>

        <ul className="space-y-2 text-sm">
          {tutorialData.map((section) => (
            <li key={section.id}>
              <button
  onClick={() => {
    setActiveSection(section);
    setActiveSubtopic(section.subtopics[0]);
  }}
  className={`flex items-center w-full text-left px-3 py-2 rounded-md transition-colors ${
    activeSection.id === section.id
      ? "bg-sky-900 text-white"
      : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
  }`}
>
  <FaChevronRight
    className={`mr-2 transition-transform duration-300 ${
      activeSection.id === section.id ? "rotate-90" : ""
    }`}
  />
  {section.title}
</button>

              {/* Render subtopics if this section is active */}
              {activeSection.id === section.id && (
                <ul className="pl-6 mt-2 space-y-1">
                  {section.subtopics.map((sub) => (
                    <li key={sub.id}>
                      <button
                        onClick={() => setActiveSubtopic(sub)}
                        className={`text-sm w-full text-left px-2 py-1 rounded-md transition-colors ${activeSubtopic.id === sub.id
                            ? "bg-sky-700 text-white"
                            : "text-gray-400 hover:bg-gray-700"
                          }`}
                      >
                        {sub.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

      </aside>

      {/* Main Content */}
      <main className="z-10 flex-grow w-full p-4 overflow-y-auto bg-base-100 rounded-md shadow-md">
        <h3 className="text-2xl md:text-3xl font-bold text-sky-500">{activeSubtopic.title}</h3>
        <p className="my-4 md:text-lg">{activeSubtopic.description}</p>
        <div className="prose prose-invert max-w-none">{activeSubtopic.content}</div>
      </main>
    </div>
  );
};


export default JavaTutorial;