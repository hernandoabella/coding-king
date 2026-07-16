import elm from 'react-syntax-highlighter/dist/esm/languages/hljs/elm';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('elm', elm);

export const elmConfig = {
  title: "Elm Tutorial",
  language: 'elm',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'values',
        title: 'Values',
        description: 'Declare immutable values and basic operations in Elm.',
        content: `module Main exposing (..)

name : String
name =
    "Alice"

age : Int
age =
    25

pi : Float
pi =
    3.14159

isAdmin : Bool
isAdmin =
    True

main : String
main =
    name ++ " is " ++ String.fromInt age ++ " years old"`,
        output: "Alice is 25 years old"
      },
      {
        id: 'types',
        title: 'Types',
        description: 'Elm\'s built-in types: Int, Float, String, Bool, Char, and List.',
        content: `module Main exposing (..)

intVal : Int
intVal =
    42

floatVal : Float
floatVal =
    3.14

stringVal : String
stringVal =
    "Hello, Elm!"

boolVal : Bool
boolVal =
    True

charVal : Char
charVal =
    'A'

listVal : List Int
listVal =
    [1, 2, 3, 4, 5]

main : String
main =
    stringVal ++ " (length: " ++ String.fromInt (String.length stringVal) ++ ")"`,
        output: "Hello, Elm! (length: 11)"
      },
      {
        id: 'records',
        title: 'Records',
        description: 'Named key-value data structures — similar to objects.',
        content: `module Main exposing (..)

type alias Person =
    { name : String
    , age : Int
    , city : String
    }

alice : Person
alice =
    { name = "Alice"
    , age = 30
    , city = "NYC"
    }

-- Access fields
getName : Person -> String
getName person =
    person.name

-- Update record (returns new, does NOT mutate)
birthday : Person -> Person
birthday person =
    { person | age = person.age + 1 }

main : String
main =
    let
        older = birthday alice
    in
    older.name ++ " just turned " ++ String.fromInt older.age`,
        output: "Alice just turned 31"
      },
      {
        id: 'type-aliases',
        title: 'Type Aliases',
        description: 'Create readable type names with type alias.',
        content: `module Main exposing (..)

type alias Name = String
type alias Age = Int
type alias Score = Float

type alias Student =
    { name : Name
    , age : Age
    , score : Score
    }

student : Student
student =
    { name = "Bob"
    , age = 20
    , score = 92.5
    }

grade : Score -> String
grade s =
    if s >= 90 then
        "A"
    else if s >= 80 then
        "B"
    else
        "C"

main : String
main =
    student.name ++ " got a " ++ grade student.score`,
        output: "Bob got a A"
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
        description: 'Define pure functions with type annotations and currying.',
        content: `module Main exposing (..)

add : Int -> Int -> Int
add x y =
    x + y

greet : String -> String -> String
greet greeting name =
    greeting ++ ", " ++ name ++ "!"

-- Partial application (currying)
addFive : Int -> Int
addFive =
    add 5

sayHello : String -> String
sayHello =
    greet "Hello"

main : String
main =
    sayHello "Alice" ++ " 5 + 3 = " ++ String.fromInt (addFive 3)`,
        output: "Hello, Alice! 5 + 3 = 8"
      },
      {
        id: 'pipes',
        title: 'Pipes',
        description: 'Chain function calls with |> and <| operators.',
        content: `module Main exposing (..)

-- Forward pipe |>
result1 : String
result1 =
    "  hello world  "
        |> String.trim
        |> String.toUpper
        |> String.words
        |> String.join "-"

-- Backward pipe <|
result2 : String
result2 =
    String.join "-"
        (String.words
            (String.toUpper
                (String.trim "  hello world  ")
            )
        )

-- Both produce the same result
main : String
main =
    "Forward: " ++ result1 ++ " | Backward: " ++ result2`,
        output: "Forward: HELLO-WORLD | Backward: HELLO-WORLD"
      },
      {
        id: 'anonymous',
        title: 'Anonymous',
        description: 'Lambda functions with \\ syntax for inline logic.',
        content: `module Main exposing (..)

nums : List Int
nums =
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

-- Anonymous function with List.filter
evens : List Int
evens =
    List.filter (\\n -> modBy 2 n == 0) nums

-- Anonymous with List.map
squared : List Int
squared =
    List.map (\\n -> n ^ 2) nums

display : List Int -> String
display list =
    list
        |> List.map String.fromInt
        |> String.join ", "

main : String
main =
    "Evens: [" ++ display evens ++ "], Squared: [" ++ display squared ++ "]"`,
        output: "Evens: [2, 4, 6, 8, 10], Squared: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]"
      },
      {
        id: 'composition',
        title: 'Composition',
        description: 'Combine functions with >> and << operators.',
        content: `module Main exposing (..)

trimUpper : String -> String
trimUpper =
    String.trim >> String.toUpper

countWords : String -> Int
countWords =
    String.words >> List.length

-- Left-to-right composition
process : String -> ( String, Int )
process str =
    ( trimUpper str, countWords str )

-- Alternative: use << for right-to-left
initials : String -> String -> String
initials first last =
    String.left 1 first ++ String.left 1 last

main : String
main =
    let
        (upper, wordCount) = process "  the quick brown fox  "
    in
    "\"" ++ upper ++ "\" has " ++ String.fromInt wordCount ++ " words"`,
        output: "\"THE QUICK BROWN FOX\" has 4 words"
      },
    ],
  },
  {
    id: 'union-types',
    title: 'Union Types',
    subtopics: [
      {
        id: 'custom-types',
        title: 'Custom Types',
        description: 'Define your own algebraic data types in Elm.',
        content: `module Main exposing (..)

type Color
    = Red
    | Green
    | Blue
    | Custom String

type TrafficLight
    = RedLight
    | YellowLight
    | GreenLight

describe : Color -> String
describe color =
    case color of
        Red ->
            "It's red!"
        Green ->
            "It's green!"
        Blue ->
            "It's blue!"
        Custom name ->
            "Custom color: " ++ name

main : String
main =
    describe Red ++ " " ++ describe (Custom "magenta")`,
        output: "It's red! Custom color: magenta"
      },
      {
        id: 'maybe',
        title: 'Maybe',
        description: 'Maybe type for handling optional values without null.',
        content: `module Main exposing (..)

-- Maybe is built-in: type Maybe a = Just a | Nothing

safeDivide : Float -> Float -> Maybe Float
safeDivide numerator denominator =
    if denominator == 0 then
        Nothing
    else
        Just (numerator / denominator)

display : Maybe Float -> String
display maybeValue =
    case maybeValue of
        Just value ->
            String.fromFloat value
        Nothing ->
            "undefined"

main : String
main =
    "10 / 2 = " ++ display (safeDivide 10 2)
        ++ ", 10 / 0 = " ++ display (safeDivide 10 0)`,
        output: "10 / 2 = 5, 10 / 0 = undefined"
      },
      {
        id: 'pattern-matching',
        title: 'Pattern Matching',
        description: 'Destructure values with case expressions.',
        content: `module Main exposing (..)

type Shape
    = Circle Float
    | Rectangle Float Float
    | Triangle Float Float

area : Shape -> Float
area shape =
    case shape of
        Circle radius ->
            pi * radius ^ 2
        Rectangle width height ->
            width * height
        Triangle base height ->
            0.5 * base * height

describe : Shape -> String
describe shape =
    case shape of
        Circle r ->
            "Circle(r=" ++ String.fromFloat r ++ ")"
        Rectangle w h ->
            "Rectangle(" ++ String.fromFloat w ++ "x" ++ String.fromFloat h ++ ")"
        Triangle b h ->
            "Triangle(b=" ++ String.fromFloat b ++ ", h=" ++ String.fromFloat h ++ ")"

main : String
main =
    let
        s = Rectangle 3 4
    in
    describe s ++ " area = " ++ String.fromFloat (area s)`,
        output: "Rectangle(3x4) area = 12"
      },
      {
        id: 'result',
        title: 'Result',
        description: 'Result type for explicit error handling with Ok and Err.',
        content: `module Main exposing (..)

-- Result is built-in: type Result error value = Ok value | Err error

type alias User =
    { name : String, age : Int }

validateAge : Int -> Result String Int
validateAge age =
    if age < 0 then
        Err "Age cannot be negative"
    else if age > 150 then
        Err "Age seems too high"
    else
        Ok age

createUser : String -> Int -> Result String User
createUser name age =
    case validateAge age of
        Err msg ->
            Err msg
        Ok validAge ->
            Ok { name = name, age = validAge }

display : Result String User -> String
display result =
    case result of
        Ok user ->
            user.name ++ " (age " ++ String.fromInt user.age ++ ")"
        Err error ->
            "Error: " ++ error

main : String
main =
    display (createUser "Alice" 30)
        ++ " | "
        ++ display (createUser "Bob" -5)`,
        output: "Alice (age 30) | Error: Age cannot be negative"
      },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    subtopics: [
      {
        id: 'model',
        title: 'Model',
        description: 'Define your application state as an immutable record.',
        content: `module Main exposing (..)

type alias Model =
    { count : Int
    , message : String
    }

init : Model
init =
    { count = 0
    , message = "Click the button!"
    }

display : Model -> String
display model =
    "Count: " ++ String.fromInt model.count
        ++ " | " ++ model.message

main : String
main =
    display init`,
        output: "Count: 0 | Click the button!"
      },
      {
        id: 'update',
        title: 'Update',
        description: 'Define messages and a pure update function to change state.',
        content: `module Main exposing (..)

type alias Model =
    { count : Int }

type Msg
    = Increment
    | Decrement
    | Reset
    | SetCount Int

update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model | count = model.count + 1 }
        Decrement ->
            { model | count = model.count - 1 }
        Reset ->
            { model | count = 0 }
        SetCount n ->
            { model | count = n }

simulate : List Msg -> Model -> String
simulate msgs model =
    let
        final = List.foldl update model msgs
    in
    "Final count: " ++ String.fromInt final.count

main : String
main =
    simulate [ Increment, Increment, Decrement, SetCount 10 ] { count = 0 }`,
        output: "Final count: 10"
      },
      {
        id: 'view-basics',
        title: 'View Basics',
        description: 'Render HTML with Elm\'s pure view functions.',
        content: `module Main exposing (..)

-- In a real Elm app, these would produce Html
-- Here we demonstrate the pattern

type alias Model =
    { name : String, items : List String }

greeting : String -> String
greeting name =
    if String.isEmpty name then
        "Hello, stranger!"
    else
        "Hello, " ++ name ++ "!"

itemsDisplay : List String -> String
itemsDisplay items =
    if List.isEmpty items then
        "No items yet"
    else
        "Items: " ++ String.join ", " items

view : Model -> String
view model =
    greeting model.name ++ " | " ++ itemsDisplay model.items

main : String
main =
    let
        model1 = { name = "Alice", items = [ "apples", "bananas" ] }
        model2 = { name = "", items = [] }
    in
    view model1 ++ "\\n" ++ view model2`,
        output: "Hello, Alice! | Items: apples, bananas\nHello, stranger! | No items yet"
      },
      {
        id: 'html-module',
        title: 'Html Module',
        description: 'The building blocks: Html.text, Html.div, Html.button, and events.',
        content: `module Main exposing (..)

-- Simulating what Html module functions produce
-- Real code: import Html exposing (Html, div, button, text, h1)
-- Real code: import Html.Events exposing (onClick)

type alias Model =
    Int

type Msg
    = Click

update : Msg -> Model -> Model
update _ model =
    model + 1

-- Html functions return Html values
-- button [ onClick Click ] [ text "+" ]
-- div [] [ h1 [] [ text (String.fromInt model) ], button [] [ text "+" ] ]

simulate : Model -> String
simulate model =
    "Html structure: div > [ h1(\"" ++ String.fromInt model
        ++ "\"), button(onClick Click, \"+\") ]"

main : String
main =
    "Initial: " ++ simulate 0 ++ "\\nAfter click: " ++ simulate (update Click 0)`,
        output: "Initial: Html structure: div > [ h1(\"0\"), button(onClick Click, \"+\") ]\nAfter click: Html structure: div > [ h1(\"1\"), button(onClick Click, \"+\") ]"
      },
    ],
  },
]
};
