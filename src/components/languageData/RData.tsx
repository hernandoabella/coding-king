import r from 'react-syntax-highlighter/dist/esm/languages/hljs/r';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('r', r);

export const rConfig = {
  title: "R Language Tutorial",
  language: 'r',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Declare variables with <- and basic operations.',
        content: `name <- "Alice"
age <- 25
height <- 1.75

print(paste("Name:", name))
print(paste("Age:", age))
print(paste("Height:", height, "m"))`,
        output: `[1] "Name: Alice"
[1] "Age: 25"
[1] "Height: 1.75 m"`
      },
      {
        id: 'vectors',
        title: 'Vectors',
        description: 'Create and manipulate vectors — the fundamental R data structure.',
        content: `# Create vectors
nums <- c(1, 2, 3, 4, 5)
chars <- c("a", "b", "c")

print(nums)
print(length(nums))
print(sum(nums))
print(mean(nums))

# Sequence and repeat
print(1:10)
print(seq(0, 1, by = 0.25))
print(rep("A", 3))`,
        output: `[1] 1 2 3 4 5
[1] 5
[1] 15
[1] 3
 [1]  1  2  3  4  5  6  7  8  9 10
[1] 0.00 0.25 0.50 0.75 1.00
[1] "A" "A" "A"`
      },
      {
        id: 'factors',
        title: 'Factors',
        description: 'Categorical data with levels for statistical modeling.',
        content: `# Create a factor
colors <- factor(c("red", "blue", "red", "green", "blue"))

print(colors)
print(levels(colors))
print(table(colors))
print(nlevels(colors))

# Ordered factor
sizes <- factor(c("S", "M", "L", "M"),
                levels = c("S", "M", "L"),
                ordered = TRUE)
print(sizes)`,
        output: `[1] red   blue  red   green blue
Levels: blue green red

blue green   red
   2     1     2
[1] 3

[1] S M L M
Levels: S < M < L`
      },
      {
        id: 'data-frames',
        title: 'Data Frames',
        description: 'Tabular data — the cornerstone of data analysis in R.',
        content: `# Create a data frame
df <- data.frame(
  name = c("Alice", "Bob", "Carol"),
  age = c(25, 30, 28),
  score = c(88, 92, 85)
)

print(df)
print(nrow(df))
print(ncol(df))
print(colnames(df))
print(df$name)
print(summary(df))`,
        output: `   name age score
1 Alice  25    88
2   Bob  30    92
3 Carol  28    85

[1] 3
[1] 3
[1] "name"  "age"   "score"
[1] "Alice" "Bob"   "Carol"

     name                age           score
 Length:3           Min.   :25.0   Min.   :85.0
 Class :character   1st Qu.:26.5   1st Qu.:86.5
 Mode  :character   Median :28.0   Median :88.0
                    Mean   :27.7   Mean   :88.3
                    3rd Qu.:29.0   3rd Qu.:90.0
                    Max.   :30.0   Max.   :92.0`
      },
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-else',
        title: 'If / Else',
        description: 'Conditional execution with if, else if, and else.',
        content: `score <- 85

if (score >= 90) {
  print("A")
} else if (score >= 80) {
  print("B")
} else if (score >= 70) {
  print("C")
} else {
  print("F")
}

# Vectorised ifelse
grades <- c(95, 72, 88, 60)
result <- ifelse(grades >= 80, "Pass", "Fail")
print(result)`,
        output: `[1] "B"
[1] "Pass" "Fail" "Pass" "Fail"`
      },
      {
        id: 'for-loops',
        title: 'For Loops',
        description: 'Iterate over elements of a vector or list.',
        content: `# For loop over a vector
fruits <- c("apple", "banana", "cherry")
for (fruit in fruits) {
  print(paste("I like", fruit))
}

# For loop with index
for (i in 1:5) {
  cat(i, " ")
}
cat("\\n")`,
        output: `[1] "I like apple"
[1] "I like banana"
[1] "I like cherry"
1 2 3 4 5`
      },
      {
        id: 'while',
        title: 'While Loops',
        description: 'Loop while a condition remains true.',
        content: `n <- 3
while (n > 0) {
  print(n)
  n <- n - 1
}
print("Go!")

# Break and next
i <- 0
while (i < 10) {
  i <- i + 1
  if (i %% 2 == 0) next
  if (i > 7) break
  cat(i, " ")
}
cat("\\n")`,
        output: `[1] 3
[1] 2
[1] 1
[1] "Go!"
1 3 5 7`
      },
      {
        id: 'vectorized-ops',
        title: 'Vectorized Ops',
        description: 'R\'s vectorised operations are faster and more idiomatic than loops.',
        content: `# Operations are element-wise
a <- c(1, 2, 3, 4)
b <- c(5, 6, 7, 8)

print(a + b)
print(a * b)
print(a^2)
print(sqrt(a))

# Logical indexing (no loop needed)
scores <- c(88, 92, 75, 60, 95)
print(scores[scores >= 80])
print(sum(scores > 90))`,
        output: `[1]  6  8 10 12
[1]  5 12 21 32
[1]  1  4  9 16
[1] 1.000000 1.414214 1.732051 2.000000

[1] 88 92 95
[1] 2`
      },
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'functions',
        title: 'Functions',
        description: 'Define reusable functions with default argument values.',
        content: `greet <- function(name, greeting = "Hello") {
  paste(greeting, name, sep = ", ")
}

print(greet("Alice"))
print(greet("Bob", "Hi"))

# Multiple returns via list
stats <- function(x) {
  list(mean = mean(x), sd = sd(x), n = length(x))
}

result <- stats(c(2, 4, 6, 8))
print(result)
print(result$mean)`,
        output: `[1] "Hello, Alice"
[1] "Hi, Bob"

$mean
[1] 5

$sd
[1] 2.581989

$n
[1] 4

[1] 5`
      },
      {
        id: 'apply-family',
        title: 'Apply Family',
        description: 'Functional programming with lapply, sapply, and apply.',
        content: `# lapply: apply to each element, returns list
nums <- list(a = 1:3, b = 4:6)
print(lapply(nums, sum))

# sapply: simplified output
print(sapply(nums, sum))

# apply: over rows/cols of matrix
mat <- matrix(1:9, nrow = 3)
print(mat)
print(apply(mat, 1, sum))  # row sums
print(apply(mat, 2, mean)) # col means`,
        output: `$a
[1] 6

$b
[1] 15

a b
6 15

     [,1] [,2] [,3]
[1,]    1    4    7
[2,]    2    5    8
[3,]    3    6    9

[1] 12 15 18

[1] 2 5 8`
      },
      {
        id: 'anonymous',
        title: 'Anonymous',
        description: 'Inline functions without names — great with apply functions.',
        content: `# Anonymous function in sapply
print(sapply(1:5, function(x) x^2))

# Filter with anonymous predicate
nums <- 1:10
Filter(function(x) x %% 3 == 0, nums)

# lapply with inline function
df <- data.frame(a = 1:3, b = 4:6)
lapply(df, function(col) c(mean = mean(col), total = sum(col)))`,
        output: `[1]  1  4  9 16 25

[1] 3 6 9

$a
mean total
   2     6

$b
mean total
   5    15`
      },
      {
        id: 's3-classes',
        title: 'S3 Classes',
        description: 'R\'s most common OOP system — generic functions and class attributes.',
        content: `# Define an S3 class
person <- function(name, age) {
  obj <- list(name = name, age = age)
  class(obj) <- "person"
  return(obj)
}

# Generic print method
print.person <- function(x, ...) {
  cat("Person:", x$name, "- Age:", x$age, "\\n")
}

# Generic method
describe <- function(x) UseMethod("describe")
describe.person <- function(x) {
  paste(x$name, "is", x$age, "years old")
}

alice <- person("Alice", 30)
print(alice)
print(describe(alice))`,
        output: `Person: Alice - Age: 30

[1] "Alice is 30 years old"`
      },
    ],
  },
  {
    id: 'data-manipulation',
    title: 'Data Manipulation',
    subtopics: [
      {
        id: 'subsetting',
        title: 'Subsetting',
        description: 'Extract rows, columns, and elements with [ ], [[ ]], and $.',
        content: `df <- data.frame(
  name = c("Alice", "Bob", "Carol"),
  age = c(25, 30, 28),
  score = c(88, 92, 85)
)

# By position
print(df[1, ])         # first row
print(df[, 2])         # second column
print(df[1:2, c(1,3)]) # rows 1-2, cols 1 and 3

# By condition
print(df[df$age > 26, ])

# By name
print(df$name)
print(df[["score"]])`,
        output: `   name age score
1 Alice  25    88

[1] 25 30 28

   name score
1 Alice    88
2   Bob    92

   name age score
2   Bob  30    92
3 Carol  28    85

[1] "Alice" "Bob"   "Carol"

[1] 88 92 85`
      },
      {
        id: 'dplyr-basics',
        title: 'dplyr Basics',
        description: 'Data manipulation with filter, select, mutate, and pipes.',
        content: `library(dplyr)

df <- data.frame(
  name = c("Alice", "Bob", "Carol", "Dave"),
  age = c(25, 30, 28, 35),
  score = c(88, 92, 85, 78)
)

# Pipe workflow
result <- df %>%
  filter(age >= 28) %>%
  select(name, score) %>%
  mutate(grade = ifelse(score >= 90, "A",
                 ifelse(score >= 80, "B", "C"))) %>%
  arrange(desc(score))

print(result)
print(nrow(result))`,
        output: `   name score grade
1   Bob    92     A
2 Carol    85     B
3  Dave    78     C

[1] 3`
      },
      {
        id: 'ggplot2-basics',
        title: 'ggplot2 Basics',
        description: 'Create data visualisations with the grammar of graphics.',
        content: `library(ggplot2)

df <- data.frame(
  name = c("Alice", "Bob", "Carol", "Dave"),
  score = c(88, 92, 85, 78),
  group = c("A", "B", "A", "B")
)

# Bar chart
ggplot(df, aes(x = name, y = score, fill = group)) +
  geom_bar(stat = "identity") +
  labs(title = "Scores by Student",
       x = "Student", y = "Score") +
  theme_minimal()

print("Plot created successfully!")`,
        output: `[1] "Plot created successfully!"`
      },
      {
        id: 'summary-stats',
        title: 'Summary Stats',
        description: 'Descriptive statistics with summary, table, and aggregate.',
        content: `scores <- c(88, 92, 85, 78, 95, 82, 90)

# Basic summaries
print(summary(scores))
print(paste("Mean:", mean(scores)))
print(paste("SD:", round(sd(scores), 2)))
print(paste("Median:", median(scores)))
print(paste("IQR:", IQR(scores)))

# Group summaries
df <- data.frame(
  group = c("A", "A", "B", "B", "A", "B", "A"),
  score = scores
)
print(aggregate(score ~ group, data = df, FUN = mean))`,
        output: `   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
  78.00   83.50   88.00   87.14   91.00   95.00

[1] "Mean: 87.1428571428571"
[1] "SD: 5.9"
[1] "Median: 88"
[1] "IQR: 8"

  group    score
1     A 88.75000
2     B 85.00000`
      },
    ],
  },
]
};
