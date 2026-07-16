import clojure from 'react-syntax-highlighter/dist/esm/languages/hljs/clojure';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('clojure', clojure);

export const clojureConfig = {
  title: "Clojure Tutorial",
  language: 'clojure',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'def-let',
        title: 'def / let',
        description: 'Bind values with def (global) and let (local bindings).',
        content: `(def name "Alice")
(def age 25)
(println (str "Name: " name ", Age: " age))

(let [x 10
      y 20
      sum (+ x y)]
  (println (str "Sum of " x " and " y " is " sum)))`,
        output: "Name: Alice, Age: 25\nSum of 10 and 20 is 30"
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: "Work with Clojure's core types: numbers, strings, keywords, booleans.",
        content: `(def n 42)
(def pi 3.14)
(def s "Hello")
(def k :active)
(def b true)
(def ratio 1/3)

(println (type n))
(println (type s))
(println k)
(println (str "Is string? " (string? s)))
(println ratio)`,
        output: "java.lang.Long\njava.lang.String\n:active\nIs string? true\n1/3"
      },
      {
        id: 'vectors',
        title: 'Vectors',
        description: 'Create and manipulate vectors — indexed, grow-at-end collections.',
        content: `(def v [1 2 3 4 5])
(println v)
(println (first v))
(println (last v))
(println (nth v 2))
(println (conj v 6))
(println (assoc v 0 99))`,
        output: "[1 2 3 4 5]\n1\n5\n3\n[1 2 3 4 5 6]\n[99 2 3 4 5]"
      },
      {
        id: 'maps',
        title: 'Maps',
        description: 'Store key-value pairs with hash-map or array-map.',
        content: `(def user {:name "Alice" :age 30 :role "admin"})
(println user)
(println (:name user))
(println (:age user))

(def updated (assoc user :city "NYC"))
(println updated)

(doseq [[k v] user]
  (println (str k " -> " v)))`,
        output: "{:name Alice, :age 30, :role admin}\nAlice\n30\n{:name Alice, :age 30, :role admin, :city NYC}\n:name -> Alice\n:age -> 30\n:role -> admin"
      }
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'defn',
        title: 'defn',
        description: 'Define named functions with optional docstrings and metadata.',
        content: `(defn greet
  "Returns a greeting string"
  [name]
  (str "Hello, " name "!"))

(defn factorial [n]
  (if (<= n 1)
    1
    (* n (factorial (dec n)))))

(println (greet "Alice"))
(println (factorial 5))`,
        output: "Hello, Alice!\n120"
      },
      {
        id: 'anonymous-functions',
        title: 'Anonymous Functions',
        description: 'Create inline functions with fn or the #() reader macro.',
        content: `(def add (fn [a b] (+ a b)))
(println (add 3 4))

(def square #(* % %))
(println (square 7))

(map (fn [n] (* n 2)) [1 2 3])
(println (map #(* % 2) [1 2 3]))`,
        output: "7\n49\n(2 4 6)"
      },
      {
        id: 'partial',
        title: 'partial',
        description: 'Create a new function by fixing some arguments of an existing function.',
        content: `(def multiply (fn [a b] (* a b)))
(def double (partial multiply 2))
(def triple (partial multiply 3))

(println (double 5))
(println (triple 5))

(def greet (partial str "Hello, "))
(println (greet "Bob"))`,
        output: "10\n15\nHello, Bob"
      },
      {
        id: 'comp',
        title: 'comp',
        description: 'Compose functions right-to-left: (comp f g) = f(g(x)).',
        content: `(defn square [x] (* x x))
(defn inc [x] (+ x 1))

(def square-then-inc (comp inc square))
(println (square-then-inc 5))

(def inc-then-square (comp square inc))
(println (inc-then-square 5))

((comp str inc) 41)`,
        output: "26\n36\n42"
      }
    ],
  },
  {
    id: 'collections',
    title: 'Collections',
    subtopics: [
      {
        id: 'lists',
        title: 'Lists',
        description: 'Work with linked lists — prepend, peek, and pop.',
        content: `(def lst (list 1 2 3 4))
(println lst)
(println (first lst))
(println (rest lst))

(def more (conj lst 0))
(println more)

(println (cons 0 lst))
(println (into '() [5 4 3 2 1]))`,
        output: "(1 2 3 4)\n1\n(2 3 4)\n(0 1 2 3 4)\n(0 1 2 3 4)\n(1 2 3 4 5)"
      },
      {
        id: 'vectors',
        title: 'Vectors',
        description: 'Use vectors for random-access data and stack-like operations.',
        content: `(def v [10 20 30 40])
(println (get v 2))
(println (v 1))
(println (subvec v 1 3))
(println (pop v))
(println (peek v))
(println (contains? v 20))`,
        output: "30\n20\n[20 30]\n[10 20 30]\n40\ntrue"
      },
      {
        id: 'maps',
        title: 'Maps',
        description: 'Create, access, and transform hash maps.',
        content: `(def scores {"Alice" 95 "Bob" 87 "Charlie" 92})
(println (get scores "Bob"))
(println (keys scores))
(println (vals scores))

(def updated (assoc scores "Bob" 90))
(println updated)

(def merged (merge scores {"Diana" 88}))
(println merged)`,
        output: "87\n(Alice Bob Charlie)\n(95 87 92)\n{Alice 95, Bob 90, Charlie 92}\n{Alice 95, Bob 87, Charlie 92, Diana 88}"
      },
      {
        id: 'sets-operations',
        title: 'Sets Operations',
        description: 'Create sets and use union, intersection, and difference.',
        content: `(def a #{1 2 3 4})
(def b #{3 4 5 6})

(println (clojure.set/union a b))
(println (clojure.set/intersection a b))
(println (clojure.set/difference a b))
(println (contains? a 3))
(println (a 2))
(println (disj a 3))
(println (conj a 5))`,
        output: "#{1 4 6 2 3 5}\n#{4 3}\n#{1 2}\ntrue\n2\n#{1 4 2}\n#{1 4 3 2 5}"
      }
    ],
  },
  {
    id: 'sequence-operations',
    title: 'Sequence Operations',
    subtopics: [
      {
        id: 'map-filter-reduce',
        title: 'map / filter / reduce',
        description: 'Transform, filter, and accumulate collections.',
        content: `(def nums [1 2 3 4 5 6])

(println (map inc nums))
(println (filter even? nums))
(println (remove odd? nums))
(println (reduce + nums))
(println (reduce * (range 1 6)))`,
        output: "(2 3 4 5 6 7)\n(2 4 6)\n(2 4 6)\n21\n120"
      },
      {
        id: 'lazy-sequences',
        title: 'Lazy Sequences',
        description: 'Work with infinite or lazily-evaluated sequences.',
        content: `(println (take 5 (range)))
(println (take 5 (iterate inc 0)))
(println (take 5 (repeat "hi")))

(def naturals (iterate inc 0))
(println (take 8 (filter odd? naturals)))

(def fibs (lazy-cat [0 1] (map + fibs (rest fibs))))
(println (take 10 fibs))`,
        output: "(0 1 2 3 4)\n(0 1 2 3 4)\n(hi hi hi hi hi)\n(1 3 5 7 9 11 13 15)\n(0 1 1 2 3 5 8 13 21 34)"
      },
      {
        id: 'threading-macros',
        title: 'Threading Macros -> / ->>',
        description: 'Use -> and ->> to thread expressions through a pipeline.',
        content: `(def data {:users [{:name "Alice" :scores [85 90 92]}
                    {:name "Bob" :scores [78 88 95]}]})

(-> data
    :users
    first
    :scores
    (conj 99))
(println "-> result:")

(->> [1 2 3 4 5]
     (map inc)
     (filter odd?)
     (reduce +))
(println "->> result:")`,
        output: "-> result:\n->> result:"
      }
    ],
  },
]
};
