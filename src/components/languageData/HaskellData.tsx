import haskell from 'react-syntax-highlighter/dist/esm/languages/hljs/haskell';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('haskell', haskell);

export const haskellConfig = {
  title: "Haskell Tutorial",
  language: 'haskell',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'types',
        title: 'Types',
        description: 'Haskell is statically typed. Basic types include Int, Integer, Float, Double, Bool, and Char.',
        content: `main = do
  let a = 42 :: Int
  let b = 3.14 :: Double
  let c = True :: Bool
  let d = 'H' :: Char
  let e = "Hello" :: String
  putStrLn (show a ++ " | " ++ show b ++ " | " ++ show c ++ " | " ++ [d] ++ " | " ++ e)`,
        output: "42 | 3.14 | True | H | Hello"
      },
      {
        id: 'functions',
        title: 'Functions',
        description: 'Functions are defined with name, arguments, =, and body. Function application has the highest precedence.',
        content: `add :: Int -> Int -> Int
add a b = a + b

square :: Int -> Int
square x = x * x

main = do
  print (add 3 5)
  print (square 4)`,
        output: "8\n16"
      },
      {
        id: 'lists',
        title: 'Lists',
        description: 'Lists are homogeneous collections. Use : (cons) to prepend, ++ to concatenate, and !! for indexing.',
        content: `main = do
  let numbers = [1, 2, 3, 4, 5]
  print (head numbers)
  print (tail numbers)
  print (numbers !! 2)
  print ([1, 2] ++ [3, 4])
  print (1 : [2, 3, 4])`,
        output: "1\n[2,3,4,5]\n3\n[1,2,3,4]\n[1,2,3,4]"
      },
      {
        id: 'tuples',
        title: 'Tuples',
        description: 'Tuples group values of possibly different types. Use fst, snd for pairs, or pattern matching for larger tuples.',
        content: `main = do
  let pair = ("Alice", 25)
  let triple = ("Bob", 30, True)
  print (fst pair)
  print (snd pair)
  let (name, age, active) = triple
  putStrLn (name ++ " is " ++ show age)`,
        output: "\"Alice\"\n25\nBob is 30"
      }
    ],
  },
  {
    id: 'pattern-matching',
    title: 'Pattern Matching',
    subtopics: [
      {
        id: 'pattern-matching',
        title: 'Pattern Matching',
        description: 'Destructure values by matching against patterns in function definitions. Lists can be matched with [] and (x:xs).',
        content: `factorial :: Int -> Int
factorial 0 = 1
factorial n = n * factorial (n - 1)

isEmpty :: [a] -> Bool
isEmpty [] = True
isEmpty _  = False

main = do
  print (factorial 5)
  print (isEmpty [1, 2])
  print (isEmpty [])`,
        output: "120\nFalse\nTrue"
      },
      {
        id: 'guards',
        title: 'Guards',
        description: 'Guards provide conditional logic in function clauses using boolean expressions after the | symbol.',
        content: `grade :: Int -> String
grade score
  | score >= 90 = "A"
  | score >= 80 = "B"
  | score >= 70 = "C"
  | otherwise   = "D"

main = do
  putStrLn (grade 85)
  putStrLn (grade 72)
  putStrLn (grade 60)`,
        output: "B\nC\nD"
      },
      {
        id: 'case-expressions',
        title: 'case Expressions',
        description: 'case expressions allow pattern matching within an expression body, similar to switch in other languages.',
        content: `describeList :: [a] -> String
describeList xs = case xs of
  []    -> "empty"
  [x]   -> "singleton"
  _     -> "many elements"

main = do
  putStrLn (describeList [])
  putStrLn (describeList [42])
  putStrLn (describeList [1, 2, 3])`,
        output: "empty\nsingleton\nmany elements"
      },
      {
        id: 'where-clauses',
        title: 'where Clauses',
        description: 'where binds local variables and helper functions at the end of an equation for cleaner code.',
        content: `bmi :: Double -> Double -> String
bmi weight height
  | bmiValue <= 18.5 = "Underweight"
  | bmiValue <= 25.0 = "Normal"
  | bmiValue <= 30.0 = "Overweight"
  | otherwise         = "Obese"
  where bmiValue = weight / (height * height)

main = do
  putStrLn (bmi 70 1.75)`,
        output: "Normal"
      }
    ],
  },
  {
    id: 'higher-order-functions',
    title: 'Higher-Order Functions',
    subtopics: [
      {
        id: 'map',
        title: 'map',
        description: 'map applies a function to every element in a list and returns the list of results.',
        content: `main = do
  let numbers = [1, 2, 3, 4, 5]
  print (map (*2) numbers)
  print (map show numbers)
  print (map (\\x -> x * x) numbers)`,
        output: "[2,4,6,8,10]\n[\"1\",\"2\",\"3\",\"4\",\"5\"]\n[1,4,9,16,25]"
      },
      {
        id: 'filter',
        title: 'filter',
        description: 'filter selects elements from a list that satisfy a predicate function.',
        content: `main = do
  let numbers = [1..10]
  print (filter even numbers)
  print (filter (>5) numbers)
  print (filter (\\x -> x \`mod\` 3 == 0) numbers)`,
        output: "[2,4,6,8,10]\n[6,7,8,9,10]\n[3,6,9]"
      },
      {
        id: 'fold',
        title: 'fold (foldl / foldr)',
        description: 'Folds reduce a list to a single value by repeatedly applying a binary function. foldl is left-associative, foldr right-associative.',
        content: `main = do
  print (foldl (+) 0 [1, 2, 3, 4])
  print (foldr (*) 1 [1, 2, 3, 4])
  print (foldl (\\acc x -> acc ++ [x * 2]) [] [1, 2, 3])`,
        output: "10\n24\n[2,4,6]"
      },
      {
        id: 'function-composition',
        title: 'Function Composition',
        description: 'The dot operator (f . g) composes two functions: first g, then f. Great for building pipelines.',
        content: `trim :: String -> String
trim = reverse . dropWhile (==' ') . reverse . dropWhile (==' ')

countOdd :: [Int] -> Int
countOdd = length . filter odd

main = do
  putStrLn (trim "  hello  ")
  print (countOdd [1, 2, 3, 4, 5, 6])`,
        output: "hello\n3"
      }
    ],
  },
  {
    id: 'type-system',
    title: 'Type System',
    subtopics: [
      {
        id: 'type-classes',
        title: 'Type Classes',
        description: 'Type classes define interfaces that types can implement. Common ones include Eq, Ord, Show, and Read.',
        content: `data Box a = Empty | Full a deriving (Show, Eq)

sameValue :: (Eq a) => Box a -> a -> Bool
sameValue (Full x) y = x == y
sameValue Empty _     = False

main = do
  print (Full 42 == Full 42)
  print (sameValue (Full "Hi") "Hi")
  putStrLn (show (Full 3.14))`,
        output: "True\nTrue\nFull 3.14"
      },
      {
        id: 'maybe',
        title: 'Maybe',
        description: 'Maybe a represents an optional value: Just a or Nothing. It replaces null and forces you to handle both cases.',
        content: `safeDivide :: Double -> Double -> Maybe Double
safeDivide _ 0 = Nothing
safeDivide x y = Just (x / y)

display :: Maybe Double -> String
display Nothing  = "Cannot divide by zero"
display (Just v) = "Result: " ++ show v

main = do
  putStrLn (display (safeDivide 10 2))
  putStrLn (display (safeDivide 10 0))`,
        output: "Result: 5.0\nCannot divide by zero"
      },
      {
        id: 'either',
        title: 'Either',
        description: 'Either a b is Right b on success or Left a on failure, giving you error information alongside the result.',
        content: `safeDiv :: Int -> Int -> Either String Int
safeDiv _ 0 = Left "Division by zero"
safeDiv x y = Right (x \`div\` y)

handle :: Either String Int -> String
handle (Left err)  = "Error: " ++ err
handle (Right val) = "Result: " ++ show val

main = do
  putStrLn (handle (safeDiv 10 3))
  putStrLn (handle (safeDiv 10 0))`,
        output: "Result: 3\nError: Division by zero"
      },
      {
        id: 'custom-types',
        title: 'Custom Types',
        description: 'Define algebraic data types with the data keyword. Use record syntax for named fields.',
        content: `data Color = Red | Green | Blue deriving (Show)
data Person = Person { name :: String, age :: Int } deriving (Show)

favorite :: Color -> String
favorite Red   = "Hot!"
favorite Green = "Earthy!"
favorite Blue  = "Cool!"

main = do
  let alice = Person "Alice" 25
  putStrLn (name alice ++ " is " ++ show (age alice))
  putStrLn (favorite Blue)`,
        output: "Alice is 25\nCool!"
      }
    ],
  },
]
};
