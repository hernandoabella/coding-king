import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const prologConfig: LanguageConfig = {
  title: 'Prolog',
  language: 'prolog',
  tutorialData: [
        {
      id: 'basics',
      title: 'Prolog Basics',
      description: 'Learn Prolog Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Facts',
      description: 'Define facts.',
      content: `likes(ada, coding).
likes(lin, music).
?- likes(ada, coding).`,
      output: `true`,
    },
            {
      id: 'queries',
      title: 'Queries',
      description: 'Ask the database.',
      content: `parent(tom, bob).
parent(tom, amy).
?- parent(tom, X).`,
      output: `X = bob ;
X = amy`,
    },
      ],
    },
        {
      id: 'rules',
      title: 'Rules',
      description: 'Learn Rules',
      content: `    {`,
      subtopics: [
            {
      id: 'rule',
      title: 'Define Rules',
      description: 'Head :- Body.',
      content: `parent(tom, bob).
grandparent(X, Z) :- parent(X, Y), parent(Y, Z).
?- grandparent(tom, Z).`,
      output: `false`,
    },
            {
      id: 'recursive',
      title: 'Recursive Rules',
      description: 'Ancestor chains.',
      content: `ancestor(X, Y) :- parent(X, Y).
ancestor(X, Y) :- parent(X, Z), ancestor(Z, Y).
?- ancestor(tom, X).`,
      output: `X = bob ;
X = amy`,
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
      id: 'member',
      title: 'member/2',
      description: 'List membership.',
      content: `member(X, [1, 2, 3]).
?- member(2, [1, 2, 3]).`,
      output: `true`,
    },
            {
      id: 'append',
      title: 'append/3',
      description: 'Concatenate lists.',
      content: `?- append([1, 2], [3, 4], R).`,
      output: `R = [1, 2, 3, 4]`,
    },
      ],
    },
        {
      id: 'unification',
      title: 'Unification',
      description: 'Learn Unification',
      content: `    {`,
      subtopics: [
            {
      id: 'unify',
      title: '= Operator',
      description: 'Pattern match.',
      content: `?- X = 5, Y = X.`,
      output: `X = 5,
Y = 5`,
    },
      ],
    },
        {
      id: 'arithmetic',
      title: 'Arithmetic',
      description: 'Learn Arithmetic',
      content: `    {`,
      subtopics: [
            {
      id: 'is',
      title: 'is / =:=',
      description: 'Evaluate expressions.',
      content: `?- X is 3 + 4 * 2.`,
      output: `X = 11`,
    },
      ],
    },
        {
      id: 'builtins',
      title: 'Built-ins',
      description: 'Learn Built-ins',
      content: `    {`,
      subtopics: [
            {
      id: 'findall',
      title: 'findall/3',
      description: 'Collect solutions.',
      content: `color(apple, red).
color(banana, yellow).
?- findall(C, color(_, C), Cs).`,
      output: `Cs = [red, yellow]`,
    },
      ],
    },
        {
      id: 'dcg',
      title: 'DCG Grammars',
      description: 'Learn DCG Grammars',
      content: `    {`,
      subtopics: [
            {
      id: 'dcg',
      title: 'Grammar Rules',
      description: 'Definite clause grammars.',
      content: `sentence --> noun_phrase, verb_phrase.
noun_phrase --> [the, cat].
?- phrase(sentence, [the, cat, sleeps]).`,
      output: `true`,
    },
      ],
    },
  ],
};
