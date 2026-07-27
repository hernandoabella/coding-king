import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const matlabConfig: LanguageConfig = {
  title: 'MATLAB',
  language: 'matlab',
  tutorialData: [
        {
      id: 'basics',
      title: 'MATLAB Basics',
      description: 'Learn MATLAB Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'disp / fprintf.',
      content: `disp('Hello, World!')`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables',
      description: 'Weakly typed, no decl.',
      content: `name = 'Ada';
age = 36;
fprintf('%s is %d\\n', name, age)`,
      output: `Ada is 36`,
    },
            {
      id: 'types',
      title: 'Arrays are core',
      description: 'Everything is a matrix.',
      content: `x = 5;
y = 3.14;
whos x y`,
      output: ``,
    },
      ],
    },
        {
      id: 'arrays',
      title: 'Arrays & Matrices',
      description: 'Learn Arrays & Matrices',
      content: `    {`,
      subtopics: [
            {
      id: 'vector',
      title: 'Vectors',
      description: 'Row & column.',
      content: `v = [1 2 3];
disp(v(2))`,
      output: `     2`,
    },
            {
      id: 'matrix',
      title: 'Matrices',
      description: '2D arrays.',
      content: `M = [1 2; 3 4];
disp(M(1,2))`,
      output: `     2`,
    },
            {
      id: 'colon',
      title: 'Colon Operator',
      description: 'Ranges & slicing.',
      content: `r = 1:3;
disp(r)`,
      output: `     1     2     3`,
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
      title: 'if / elseif / else',
      description: 'End-based.',
      content: `x = 10;
if x > 5, disp('big'); else, disp('small'); end`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for Loops',
      description: 'Iterate ranges.',
      content: `for i = 1:3, disp(i); end`,
      output: `     1
     2
     3`,
    },
            {
      id: 'while',
      title: 'while',
      description: 'Condition loop.',
      content: `i = 1;
while i <= 3, disp(i); i = i + 1; end`,
      output: `     1
     2
     3`,
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
      title: 'Function Files',
      description: 'function y = f(x)',
      content: `function y = square(n)
  y = n * n;
end
disp(square(5))`,
      output: `    25`,
    },
            {
      id: 'anonymous',
      title: 'Anonymous Functions',
      description: '@ handle.',
      content: `sq = @(n) n * n;
disp(sq(4))`,
      output: `    16`,
    },
      ],
    },
        {
      id: 'plotting',
      title: 'Plotting',
      description: 'Learn Plotting',
      content: `    {`,
      subtopics: [
            {
      id: 'plot',
      title: '2D Plot',
      description: 'plot(x, y).',
      content: `x = 0:0.1:6.28;
plot(x, sin(x))
title('Sine')`,
      output: ``,
    },
            {
      id: 'surf',
      title: '3D Surface',
      description: 'surf(Z).',
      content: `[X,Y] = meshgrid(-2:0.2:2);
Z = X.^2 + Y.^2;
surf(Z)`,
      output: ``,
    },
      ],
    },
        {
      id: 'linear-algebra',
      title: 'Linear Algebra',
      description: 'Learn Linear Algebra',
      content: `    {`,
      subtopics: [
            {
      id: 'solve',
      title: 'Solve Ax=b',
      description: 'Backslash operator.',
      content: `A = [3 2; 1 2];
b = [7; 5];
x = A \\ b;
disp(x)`,
      output: `    1.0000
    2.0000`,
    },
            {
      id: 'eig',
      title: 'Eigenvalues',
      description: 'eig().',
      content: `M = [1 2; 2 1];
disp(eig(M))`,
      output: `    3.0000
   -1.0000`,
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
      id: 'load',
      title: 'load / save',
      description: 'Workspace files.',
      content: `save('data.mat', 'x')
disp('saved')`,
      output: `saved`,
    },
      ],
    },
  ],
};
