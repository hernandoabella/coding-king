# Python

table of contents

## Learning the basics

### What's Python
Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used in web development, data science, automation, AI, and more.

##


## One-Liners
A one-liner is a single line of code that performs a function.

### Strings

### Math
 
### Lists

### Dictionaries

### Datetime

### Randomization

## Tips & Tricks

### Swap Two Vari8ables 
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


### Find the Most Frequent Eleent in a List
Use the `max()` function with `key=list.count` to find the most frequent element.

```
nums = [1, 3, 3, 7, 3, 2, 2]
  most_frequent = max(set(nums), key=nums.count)  # Output: 3
```

**Why?:** This method avoids extra loops and is more readable.

### Merge Two Dictionaries
Use the `|` operator (Python 3.9+) or `update()` to merge dictionaries.

```
dict1 = {'a': 1, 'b': 2}
  dict2 = {'c': 3, 'd': 4}
  merged = dict1 | dict2  # Output: {'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

**Why?:** This is the most modern and concise way to merge dictionaries.

## Python Projects
- Mad Libs
- Guess the Number Game
- Rock, Paper, Scissors
- Hangman
- Countdown Timer
- Password Generator
- QR Code Encoder / Decoder
- Tic-Tac-Toe