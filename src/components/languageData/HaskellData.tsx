import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const haskellConfig: LanguageConfig = {
  title: 'Haskell',
  language: 'haskell',
  tutorialData: [
        {
      id: 'basics',
      title: 'Haskell Basics',
      description: 'Learn Haskell Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'putStrLn in main.',
      content: `main = putStrLn "Hello, World!"`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables & let',
      description: 'Immutable bindings.',
      content: `name = "Ada"
age = 36
main = putStrLn (name ++ " is " ++ show age)`,
      output: `Ada is 36`,
    },
            {
      id: 'types',
      title: 'Type Signatures',
      description: 'Strong static types.',
      content: `double :: Int -> Int
double x = x * 2
main = print (double 5)`,
      output: `10`,
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
      description: 'Pattern & guards.',
      content: `square :: Int -> Int
square n = n * n
main = print (square 5)`,
      output: `25`,
    },
            {
      id: 'guards',
      title: 'Guards',
      description: 'Boolean conditions.',
      content: `grade :: Int -> String
grade s | s >= 90 = 'A' | s >= 80 = 'B' | otherwise = 'C'
main = putStrLn (grade 85)`,
      output: `B`,
    },
            {
      id: 'higher',
      title: 'Higher-order',
      description: 'map / filter.',
      content: `main = print (map (*2) [1,2,3])`,
      output: `[2,4,6]`,
    },
      ],
    },
        {
      id: 'lists',
      title: 'Lists',
      description: 'Learn Lists',
      content: `    {`,
      subtopics: [
            {
      id: 'list-ops',
      title: 'List Operations',
      description: 'head, tail, cons.',
      content: `main = do
  let xs = [1,2,3]
  print (xs !! 1)
  print (1 : xs)`,
      output: `2
[1,1,2,3]`,
    },
            {
      id: 'comprehension',
      title: 'List Comprehensions',
      description: 'Math-style.',
      content: `evens = [x | x <- [1..10], even x]
main = print evens`,
      output: `[2,4,6,8,10]`,
    },
      ],
    },
        {
      id: 'recursion',
      title: 'Recursion',
      description: 'Learn Recursion',
      content: `    {`,
      subtopics: [
            {
      id: 'rec',
      title: 'Recursive Functions',
      description: 'No loops; recurse.',
      content: `fact :: Integer -> Integer
fact 0 = 1
fact n = n * fact (n - 1)
main = print (fact 5)`,
      output: `120`,
    },
            {
      id: 'fold',
      title: 'fold / reduce',
      description: 'Aggregate lists.',
      content: `main = print (foldl (+) 0 [1,2,3,4])`,
      output: `10`,
    },
      ],
    },
        {
      id: 'types',
      title: 'Algebraic Types',
      description: 'Learn Algebraic Types',
      content: `    {`,
      subtopics: [
            {
      id: 'adt',
      title: 'data Declarations',
      description: 'Sum types.',
      content: `data Color = Red | Green | Blue
main = print Green`,
      output: `Green`,
    },
            {
      id: 'maybe',
      title: 'Maybe',
      description: 'Safe optional.',
      content: `safeHead :: [a] -> Maybe a
safeHead [] = Nothing
safeHead (x:_) = Just x
main = print (safeHead [1,2])`,
      output: `Just 1`,
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
      title: 'getLine',
      description: 'Read stdin.',
      content: `main = do
  putStr "Name: "
  n <- getLine
  putStrLn ("Hi " ++ n)`,
      output: `Name: Hi `,
    },
      ],
    },
        {
      id: 'typeclasses',
      title: 'Type Classes',
      description: 'Learn Type Classes',
      content: `    {`,
      subtopics: [
            {
      id: 'show',
      title: 'Show / Eq',
      description: 'Deriving instances.',
      content: `data Pt = Pt Int Int deriving (Show)
main = print (Pt 3 4)`,
      output: `Pt 3 4`,
    },
      ],
    },
  ],
};
