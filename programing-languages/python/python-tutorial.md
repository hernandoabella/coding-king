# Python Tutorial
## Introduction
### What is Python?
> Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used in web development, data science, automation, AI, and more.

![Guido-portrait-2014-drc](https://github.com/user-attachments/assets/c223c4f8-e07e-4336-bc4f-3e4e1d470914)

*Created by Guido van Rossum*
*Released in 1991*

### History of Python
- Created by Guido van Rossum in 1989.
- Officially released in 1991 as version 0.9.0.
- Named after the TV show “Monty Python’s Flying Circus” — not the snake! 🐍😂
- Current stable version (as of 2025): Python 3.x

### What's Python Used for?
Python is a powerful, high-level programming language known for its readability and versatility. It's used in a wide range of fields, including:

- **Web Development** – Frameworks like Django and Flask make building web apps quick and efficient.
- **Data Science & Machine Learning** – Libraries like Pandas, NumPy, scikit-learn, and TensorFlow power data analysis and AI models.
- **Automation & Scripting** – Perfect for automating tasks, scraping websites, or managing systems.
- **Software Development** – Build full-scale applications or use Python as a supporting language for backend systems.
- **Cybersecurity** – Frequently used for writing tools, scanning vulnerabilities, and building automation for security tasks.
- **Game Development** – Libraries like Pygame allow developers to prototype and build simple games.
- **Internet of Things (IoT)** – Works with Raspberry Pi and microcontrollers to create hardware-based projects.

### Installing Python

#### Windows
1. Download Python from the official Python website.
2. Run the installer and check "Add Python to PATH".
3. Click Install and wait for completion.
4. Open Command Prompt and type:
```bash
python --version
```
#### MacOS
##### 1. Open Terminal and type: (Requires Homebrew).
```
brew install python
```
##### 2. Verify the installation with:
```bash
python3 --version
```

#### Linux (Debian-based)
##### 1. Open Terminal and type:
```
sudo apt update && sudo apt install python3
```
##### 2. Verify with:
```
python3 --version
```

### Setting Up IDEs (VS Code, PyCharm, Jupyter)
#### VS Code (Recommended for Beginners)
- Install from [https://code.visualstudio.com](https://code.visualstudio.com)
- Install the Python extension (Microsoft)
Create .py file and run it using terminal or “Run” button
#### Jupyter Notebook
- Great for data science and experimentation
- **Install via pip:**
```bash
pip install notebook
jupyter notebook
```
#### PyCharm
- Install from https://www.jetbrains.com/pycharm/
- Professional (paid) vs Community (free)
- Feature-rich with code completion and debugger

### Your First Python Program: Hello, World!
Let’s write your very first Python program:
#### 1. Open any code editor (or terminal).
#### 2. Create a file called `hello.py`.
#### 3. Type:
```python
print("Hello, World!")
```
#### 4. Save and run it:
```bash
python hello.py
```
#### Output:
```python
Hello, World!
```

You’ve just written your first Python program! 🎉

## Python Basics
### Comments:
Used to explain code and make it more readable. Ignored during execution.

**Single-line comment:**
```python
# This is a single-line comment
print("Hello")
```

**Multi-line comment (not official, but using multiple # lines or strings):**
```python
# This is a
# multi-line
# comment
```

### Docstrings:
Used to describe modules, functions, classes, or methods.
```python
def greet():
    """This function prints a greeting message."""
    print("Hello!")
```
You can access the docstring like this:
```python
print(greet.__doc__)
```

### Declaring Variables:
```python
name = "Alice"       # string
age = 25             # integer
height = 5.7         # float
is_student = True    # boolean
```

### Common Data Types:
| Type | Example |
| ---- | ------- |
| int | `10`, `-3` |
| float	 | `3.14`, `-0.5` |
| str | `"hello"` |
| bool | `True`, `False` |
| list | `[1, 2, 3]` |
| tuple | `(1, 2, 3)` |
| dict | `{"a": 1, "b": 2}` |

- Python is dynamically typed, so you don’t need to declare the type explicitly.

### Type Casting
Convert values between data types:
```python
x = "10"
y = int(x)      # str to int
z = float(x)    # str to float
s = str(25)     # int to str

print(type(y))  # <class 'int'>
```
- Common casting functions: `int()`, `float()`, `str()`, `bool()`

### Input and Output
#### Output with print()
```python
print("Hello", "World", sep=", ", end="!\n")  # Hello, World!
```
#### Input with input()
```python
name = input("Enter your name: ")
print("Hello, " + name)
```
`input()` always returns a string. Cast it if needed:
```python
age = int(input("Enter your age: "))
```

### Arithmetic Operations

| Operator | Description | Example (`a = 10`, `b = 3`) | Result |
| -------- | ----------- | ---------------------------- | ------ |
| `+` | Addition | `a + b` | `13` |
| `-` | Subtraction | `a - b` | `7` |
| `*` | Multiplication | `a * b` | `30` |
| `/` | Division | `a / b` | `3.33` |
| `//` | Floor Division | `a // b` | `3` |
| `%` | Modulus | `a % b` | `1` |
| `**` | Exponentiation	 | `a ** b` | `1000` |







