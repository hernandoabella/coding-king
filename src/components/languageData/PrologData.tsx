import prolog from 'react-syntax-highlighter/dist/esm/languages/hljs/prolog';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('prolog', prolog);

export const prologConfig = {
  title: "Prolog Tutorial",
  language: 'prolog',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'facts',
        title: 'Facts',
        description: 'Define facts as the fundamental building blocks.',
        content: `likes(alice, pizza).
likes(bob, pasta).
likes(charlie, pizza).
likes(charlie, sushi).

?- likes(alice, pizza).`,
        output: "true."
      },
      {
        id: 'rules',
        title: 'Rules',
        description: 'Define rules that express logical relationships.',
        content: `likes(alice, pizza).
likes(bob, pasta).
likes(charlie, sushi).

foodie(X) :- likes(X, pizza); likes(X, sushi).

?- foodie(alice).
?- foodie(bob).`,
        output: "true.\nfalse."
      },
      {
        id: 'queries',
        title: 'Queries',
        description: 'Ask Prolog questions about your knowledge base.',
        content: `likes(alice, pizza).
likes(bob, pasta).
likes(charlie, pizza).

?- likes(Person, pizza).
?- likes(Person, salad).`,
        output: "Person = alice ;\nPerson = charlie.\nfalse."
      },
      {
        id: 'variables',
        title: 'Variables',
        description: 'Use uppercase variables to match any value.',
        content: `parent(alice, bob).
parent(alice, charlie).
parent(bob, diana).

?- parent(alice, Child).
?- parent(Parent, diana).`,
        output: "Child = bob ;\nChild = charlie.\nParent = bob."
      },
    ],
  },
  {
    id: 'logic-programming',
    title: 'Logic Programming',
    subtopics: [
      {
        id: 'unification',
        title: 'Unification',
        description: 'Prolog matches terms by unifying variables.',
        content: `?- X = 10.
?- X = Y, Y = 42.
?- f(a, X) = f(Y, b).
?- [H|T] = [1, 2, 3].`,
        output: "X = 10.\nX = 42,\nY = 42.\nY = a,\nX = b.\nH = 1,\nT = [2, 3]."
      },
      {
        id: 'backtracking',
        title: 'Backtracking',
        description: 'Prolog automatically backtracks to find all solutions.',
        content: `fruit(apple).
fruit(banana).
fruit(cherry).

color(apple, red).
color(banana, yellow).
color(cherry, red).

?- fruit(X), color(X, red).`,
        output: "X = apple ;\nX = cherry."
      },
      {
        id: 'recursion',
        title: 'Recursion',
        description: 'Define recursive rules for repeated reasoning.',
        content: `parent(alice, bob).
parent(bob, charlie).
parent(charlie, diana).

ancestor(X, Y) :- parent(X, Y).
ancestor(X, Y) :- parent(X, Z), ancestor(Z, Y).

?- ancestor(alice, diana).
?- ancestor(bob, diana).`,
        output: "true.\ntrue."
      },
      {
        id: 'lists',
        title: 'Lists',
        description: 'Work with lists using head/tail pattern matching.',
        content: `head([H|_], H).

sum_list([], 0).
sum_list([H|T], Sum) :- sum_list(T, Rest), Sum is H + Rest.

?- head([apple, banana, cherry], X).
?- sum_list([1, 2, 3, 4], S).`,
        output: "X = apple.\nS = 10."
      },
    ],
  },
  {
    id: 'built-in-predicates',
    title: 'Built-in Predicates',
    subtopics: [
      {
        id: 'member',
        title: 'Member',
        description: 'Check if an element belongs to a list.',
        content: `?- member(apple, [banana, apple, cherry]).
?- member(X, [a, b, c]).
?- member(banana, [apple, orange, grape]).`,
        output: "true.\nX = a ;\nX = b ;\nX = c.\nfalse."
      },
      {
        id: 'append',
        title: 'Append',
        description: 'Concatenate or split lists with append/3.',
        content: `?- append([1, 2], [3, 4], Result).
?- append(Front, Back, [1, 2, 3, 4]).
?- append([1, 2], _, [1, 2, 3, 4]).`,
        output: "Result = [1, 2, 3, 4].\nFront = [], Back = [1, 2, 3, 4] ;\nFront = [1], Back = [2, 3, 4] ;\n...\ntrue."
      },
      {
        id: 'findall',
        title: 'Findall',
        description: 'Collect all solutions into a list.',
        content: `likes(alice, pizza).
likes(bob, pasta).
likes(charlie, pizza).
likes(charlie, sushi).

?- findall(X, likes(X, pizza), Fans).`,
        output: "Fans = [alice, charlie]."
      },
      {
        id: 'cut',
        title: 'Cut',
        description: 'Prune the search tree with the ! operator.',
        content: `grade(Score, excellent) :- Score >= 90, !.
grade(Score, good) :- Score >= 70, !.
grade(Score, fair) :- Score >= 50, !.
grade(_, fail).

?- grade(95, G).
?- grade(72, G).
?- grade(45, G).`,
        output: "G = excellent.\nG = good.\nG = fail."
      },
    ],
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    subtopics: [
      {
        id: 'family-tree',
        title: 'Family Tree',
        description: 'Model family relationships with facts and rules.',
        content: `male(john). male(tom). male(jim).
female(mary). female(ann). female(sue).

parent(john, tom). parent(john, jim).
parent(mary, tom). parent(mary, jim).

father(X, Y) :- parent(X, Y), male(X).
mother(X, Y) :- parent(X, Y), female(X).
sibling(X, Y) :- parent(P, X), parent(P, Y), X \= Y.

?- father(john, tom).
?- sibling(tom, jim).`,
        output: "true.\ntrue."
      },
      {
        id: 'path-finding',
        title: 'Path Finding',
        description: 'Find paths in a graph using recursion.',
        content: `edge(a, b). edge(a, c).
edge(b, d). edge(c, d).
edge(d, e).

path(X, Y) :- edge(X, Y).
path(X, Y) :- edge(X, Z), path(Z, Y).

?- path(a, e).
?- path(a, d).`,
        output: "true.\ntrue."
      },
      {
        id: 'arithmetic',
        title: 'Arithmetic',
        description: 'Evaluate expressions with the is operator.',
        content: `factorial(0, 1).
factorial(N, Result) :-
    N > 0,
    N1 is N - 1,
    factorial(N1, SubResult),
    Result is N * SubResult.

?- factorial(5, X).
?- X is 2 + 3 * 4.`,
        output: "X = 120.\nX = 14."
      },
      {
        id: 'constraint-logic',
        title: 'Constraint Logic',
        description: 'Solve constraints over finite domains.',
        content: `?- use_module(library(clpfd)).
?- X in 1..10, Y in 1..10, X + Y #= 7, X #< Y, label([X, Y]).`,
        output: "X = 1, Y = 6 ;\nX = 2, Y = 5 ;\nX = 3, Y = 4."
      },
    ],
  },
]
};
