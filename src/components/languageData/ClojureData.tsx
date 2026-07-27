import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const clojureConfig: LanguageConfig = {
  title: 'Clojure',
  language: 'clojure',
  tutorialData: [
        {
      id: 'basics',
      title: 'Clojure Basics',
      description: 'Learn Clojure Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'println.',
      content: `(println "Hello, World!")`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'def / let',
      description: 'Bindings.',
      content: `(def name "Ada")
(def age 36)
(println (str name " is " age))`,
      output: `Ada is 36`,
    },
            {
      id: 'types',
      title: 'Types',
      description: 'Dynamic immutability.',
      content: `(def x 5)
(def y "hi")
(println [x y])`,
      output: `[5 "hi"]`,
    },
      ],
    },
        {
      id: 'collections',
      title: 'Collections',
      description: 'Learn Collections',
      content: `    {`,
      subtopics: [
            {
      id: 'list',
      title: 'Lists & Vectors',
      description: 'Immutable seqs.',
      content: `(println (conj [1 2 3] 4))
(println (first (list 1 2 3)))`,
      output: `[1 2 3 4]
1`,
    },
            {
      id: 'map',
      title: 'Maps & Sets',
      description: 'Key-value & unique.',
      content: `(def m {:a 1 :b 2})
(println (:b m))
(println (contains? #{1 2 3} 2))`,
      output: `2
true`,
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
      id: 'defn',
      title: 'defn',
      description: 'Define functions.',
      content: `(defn square [n] (* n n))
(println (square 5))`,
      output: `25`,
    },
            {
      id: 'higher',
      title: 'Higher-order',
      description: 'map / filter.',
      content: `(println (map #(* % 2) [1 2 3]))
(println (filter even? [1 2 3 4]))`,
      output: `(2 4 6)
(2 4)`,
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
      title: 'if / when',
      description: 'Expressions.',
      content: `(println (if (> 10 5) "big" "small"))`,
      output: `big`,
    },
            {
      id: 'cond',
      title: 'cond',
      description: 'Multi-branch.',
      content: `(def n 10)
(println (cond (> n 5) "big" :else "small"))`,
      output: `big`,
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
      title: 'recur',
      description: 'Tail recursion.',
      content: `(defn fact [n] (loop [i n acc 1] (if (zero? i) acc (recur (dec i) (* acc i)))))
(println (fact 5))`,
      output: `120`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Datatypes & Protocols',
      description: 'Learn Datatypes & Protocols',
      content: `    {`,
      subtopics: [
            {
      id: 'defrecord',
      title: 'defrecord',
      description: 'Composite types.',
      content: `(defrecord Point [x y])
(println (:x (->Point 3 4)))`,
      output: `3`,
    },
      ],
    },
        {
      id: 'concurrency',
      title: 'Concurrency',
      description: 'Learn Concurrency',
      content: `    {`,
      subtopics: [
            {
      id: 'future',
      title: 'future / promise',
      description: 'Async computation.',
      content: `(def f (future (* 6 7)))
(println @f)`,
      output: `42`,
    },
      ],
    },
        {
      id: 'macros',
      title: 'Macros',
      description: 'Learn Macros',
      content: `    {`,
      subtopics: [
            {
      id: 'defmacro',
      title: 'defmacro',
      description: 'Code as data.',
      content: `(defmacro twice [x] \`(do ~x ~x))
(twice (println "hi"))`,
      output: `hi
hi`,
    },
      ],
    },
  ],
};
