import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const elmConfig: LanguageConfig = {
  title: 'Elm',
  language: 'elm',
  tutorialData: [
        {
      id: 'basics',
      title: 'Elm Basics',
      description: 'Learn Elm Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'Html.text in main.',
      content: `module Main exposing (main)
import Html exposing (text)
main = text "Hello, World!"`,
      output: `Hello, World!`,
    },
            {
      id: 'functions',
      title: 'Functions',
      description: 'Pure, typed.',
      content: `square n = n * n
main = text (String.fromInt (square 5))`,
      output: `25`,
    },
            {
      id: 'let',
      title: 'let / in',
      description: 'Local bindings.',
      content: `greet = let name = "Ada" in "Hi " ++ name
main = text greet`,
      output: `Hi Ada`,
    },
      ],
    },
        {
      id: 'types',
      title: 'Types',
      description: 'Learn Types',
      content: `    {`,
      subtopics: [
            {
      id: 'annotations',
      title: 'Type Annotations',
      description: 'a -> b.',
      content: `double : Int -> Int
double x = x * 2
main = text (String.fromInt (double 5))`,
      output: `10`,
    },
            {
      id: 'union',
      title: 'Union Types',
      description: 'Tagged unions.',
      content: `type Color = Red | Green | Blue
main = text "ok"`,
      output: `ok`,
    },
      ],
    },
        {
      id: 'records',
      title: 'Records',
      description: 'Learn Records',
      content: `    {`,
      subtopics: [
            {
      id: 'record',
      title: 'Record Syntax',
      description: 'Composite data.',
      content: `type alias Point = { x : Int, y : Int }
p = { x = 3, y = 4 }
main = text (String.fromInt p.x)`,
      output: `3`,
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
      title: 'List Functions',
      description: 'map / filter.',
      content: `import List exposing (map, filter)
evens = filter (\\x -> modBy 2 x == 0) [1,2,3,4]
main = text (String.fromInt (List.length evens))`,
      output: `2`,
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
      id: 'case',
      title: 'case / of',
      description: 'Pattern matching.',
      content: `describe d =
  case d of
    1 -> "one"
    2 -> "two"
    _ -> "other"
main = text (describe 2)`,
      output: `two`,
    },
      ],
    },
        {
      id: 'architecture',
      title: 'The Elm Architecture',
      description: 'Learn The Elm Architecture',
      content: `    {`,
      subtopics: [
            {
      id: 'tea',
      title: 'Model / Update / View',
      description: 'Unidirectional.',
      content: `type Model = Int
type Msg = Increment
update msg model = case msg of Increment -> model + 1
view model = text (String.fromInt model)`,
      output: `(TEA ready)`,
    },
      ],
    },
        {
      id: 'effects',
      title: 'Effects',
      description: 'Learn Effects',
      content: `    {`,
      subtopics: [
            {
      id: 'cmd',
      title: 'Cmd & Sub',
      description: 'Side effects.',
      content: `import Platform.Cmd exposing (Cmd)
main = text "effects via Cmd"`,
      output: `effects via Cmd`,
    },
      ],
    },
  ],
};
