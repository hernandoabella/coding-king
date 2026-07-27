import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const rConfig: LanguageConfig = {
  title: 'R',
  language: 'r',
  tutorialData: [
        {
      id: 'basics',
      title: 'R Basics',
      description: 'Learn R Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'print() function.',
      content: `print("Hello, World!")`,
      output: `[1] "Hello, World!"`,
    },
            {
      id: 'variables',
      title: 'Variables & <-',
      description: 'Assignment operator.',
      content: `name <- "Ada"
age <- 36
print(paste(name, "is", age))`,
      output: `[1] "Ada is 36"`,
    },
            {
      id: 'vectors',
      title: 'Vectors',
      description: 'Atomic arrays.',
      content: `v <- c(1, 2, 3)
print(v[2])
print(length(v))`,
      output: `[1] 2
[1] 3`,
    },
      ],
    },
        {
      id: 'data-structures',
      title: 'Data Structures',
      description: 'Learn Data Structures',
      content: `    {`,
      subtopics: [
            {
      id: 'list',
      title: 'Lists',
      description: 'Heterogeneous collections.',
      content: `L <- list(a = 1, b = "x", c = c(1,2))
print(L$b)`,
      output: `[1] "x"`,
    },
            {
      id: 'dataframe',
      title: 'Data Frames',
      description: 'Tabular data.',
      content: `df <- data.frame(name = c("A","B"), score = c(9, 8))
print(df$score)`,
      output: `[1] 9 8`,
    },
            {
      id: 'matrix',
      title: 'Matrices',
      description: '2D numeric.',
      content: `m <- matrix(1:6, nrow = 2)
print(m[1, 2])`,
      output: `[1] 3`,
    },
      ],
    },
        {
      id: 'control-flow',
      title: 'Control Flow',
      description: 'Learn Control Flow',
      content: `    {`,
      subtopics: [
            {
      id: 'if',
      title: 'if / else',
      description: 'Vectorized conditions.',
      content: `x <- 10
if (x > 5) print("big") else print("small")`,
      output: `[1] "big"`,
    },
            {
      id: 'for',
      title: 'for Loops',
      description: 'Iterate sequences.',
      content: `for (i in 1:3) print(i)`,
      output: `[1] 1
[1] 2
[1] 3`,
    },
            {
      id: 'while',
      title: 'while',
      description: 'Condition loop.',
      content: `i <- 1
while (i <= 3) { print(i); i <- i + 1 }`,
      output: `[1] 1
[1] 2
[1] 3`,
    },
            {
      id: 'apply',
      title: 'apply family',
      description: 'Functional iteration.',
      content: `v <- c(1, 2, 3)
print(sapply(v, function(x) x * 2))`,
      output: `[1] 2 4 6`,
    },
      ],
    },
        {
      id: 'functions',
      title: 'Functions',
      description: 'Learn Functions',
      content: `    {`,
      subtopics: [
            {
      id: 'def',
      title: 'Defining Functions',
      description: 'function(...) { }.',
      content: `square <- function(n) n * n
print(square(5))`,
      output: `[1] 25`,
    },
            {
      id: 'default',
      title: 'Default Args',
      description: 'Named defaults.',
      content: `greet <- function(name = 'World') paste('Hi', name)
print(greet('Ada'))`,
      output: `[1] "Hi Ada"`,
    },
      ],
    },
        {
      id: 'stats',
      title: 'Statistics',
      description: 'Learn Statistics',
      content: `    {`,
      subtopics: [
            {
      id: 'summary',
      title: 'Summary',
      description: 'Quick stats.',
      content: `v <- c(1, 2, 3, 4)
print(mean(v))
print(sum(v))`,
      output: `[1] 2.5
[1] 10`,
    },
            {
      id: 'plot',
      title: 'Plotting',
      description: 'Base graphics.',
      content: `plot(1:10, (1:10)^2, type = 'l', main = 'Square')
print('plotted')`,
      output: `[1] "plotted"`,
    },
      ],
    },
        {
      id: 'io',
      title: 'Input / Output',
      description: 'Learn Input / Output',
      content: `    {`,
      subtopics: [
            {
      id: 'read',
      title: 'read.csv',
      description: 'Load tabular data.',
      content: `df <- read.csv('data.csv')
print(nrow(df))`,
      output: `[1] 0`,
    },
      ],
    },
        {
      id: 'packages',
      title: 'Packages',
      description: 'Learn Packages',
      content: `    {`,
      subtopics: [
            {
      id: 'install',
      title: 'library()',
      description: 'Load packages.',
      content: `library(ggplot2)
print("loaded")`,
      output: `[1] "loaded"`,
    },
      ],
    },
        {
      id: 'modern',
      title: 'Tidyverse',
      description: 'Learn Tidyverse',
      content: `    {`,
      subtopics: [
            {
      id: 'dplyr',
      title: 'dplyr verbs',
      description: 'filter / mutate / select.',
      content: `library(dplyr)
df <- data.frame(x = 1:3)
out <- df %>% filter(x > 1)
print(nrow(out))`,
      output: `[1] 2`,
    },
      ],
    },
  ],
};
