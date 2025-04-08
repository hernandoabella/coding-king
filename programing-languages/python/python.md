# Python

## Learning the basics

### What's Python
Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used in web development, data science, automation, AI, and more.

[Python Tutorial](./python-tutorial.md)


## One-Liners
A one-liner is a single line of code that performs a function.

### Strings

[+ View more](./)

## Tips & Tricks

### Swap Two Variables 
Instead of using a temporary variable to swap two values, you can use tuple unpacking in Python.

```
a, b = 5, 10
a, b = b, a  # Now a = 10, b = 5
```

**Why?:** This method is cleaner and more Pythonic.

### Reverse a String in One Line
You can reverse a string in Python using slicing.

```
text = "hello"
  reversed_text = text[::-1]  # Output: 'olleh'
```

**Why?:** This slicing technique is simple and efficient.

### Check if a List is Empty
Instead of checking length, use a direct boolean check.

```
my_list = []
  if not my_list:
      print("List is empty")
```

**Why?:** An empty list evaluates to False, making the condition cleaner.

[+ More tricks?](./python-tricks.md)

## Python Projects
- Mad Libs
- Guess the Number Game
- Rock, Paper, Scissors
- Hangman
- Countdown Timer
- Password Generator
- QR Code Encoder / Decoder
- Tic-Tac-Toe

## Python Resources
- [Official Python Docs](https://docs.python.org/3/)
- [Real Python](https://realpython.com/)
- [Python YouTube Tutorials](https://www.youtube.com/results?search_query=python+tutorial)
- [Awesome Python](https://github.com/vinta/awesome-python)
- [GeeksforGeeks Python](https://www.geeksforgeeks.org/python-programming-language-tutorial/)
- [Full Stack Python](https://www.fullstackpython.com/)
