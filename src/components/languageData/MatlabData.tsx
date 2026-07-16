import matlab from 'react-syntax-highlighter/dist/esm/languages/hljs/matlab';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('matlab', matlab);

export const matlabConfig = {
  title: "MATLAB Tutorial",
  language: 'matlab',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Declare and assign variables in MATLAB.',
        content: `name = 'Alice';
age = 25;
score = 98.5;
isPassed = true;

disp(name);
disp(age);
disp(score);
disp(isPassed);`,
        output: "Alice\n    25\n   98.5000\n     1"
      },
      {
        id: 'matrices',
        title: 'Matrices',
        description: 'Create and manipulate matrices, the core data type.',
        content: `A = [1, 2, 3]
B = [4; 5; 6]
C = [1 2 3; 4 5 6; 7 8 9]

disp(A)
disp(B)
disp(C)`,
        output: "     1     2     3\n     4\n     5\n     6\n     1     2     3\n     4     5     6\n     7     8     9"
      },
      {
        id: 'colon-operator',
        title: 'Colon Operator',
        description: 'Generate sequences and slice with the colon operator.',
        content: `seq1 = 1:5
seq2 = 1:2:10
seq3 = 10:-2:2

disp(seq1)
disp(seq2)
disp(seq3)`,
        output: "     1     2     3     4     5\n     1     3     5     7     9\n    10     8     6     4     2"
      },
      {
        id: 'element-wise-ops',
        title: 'Element-wise Ops',
        description: 'Use dot operators for element-wise operations.',
        content: `A = [1, 2, 3];
B = [4, 5, 6];

sumVal = A + B
prodVal = A .* B
sqrVal = A .^ 2

disp(sumVal)
disp(prodVal)
disp(sqrVal)`,
        output: "     5     7     9\n     4    10    18\n     1     4     9"
      },
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-else',
        title: 'If / Else',
        description: 'Conditional branching with if-elseif-else-end.',
        content: `x = 15;
if x < 10
    disp('small')
elseif x < 20
    disp('medium')
else
    disp('large')
end`,
        output: "medium"
      },
      {
        id: 'for-loops',
        title: 'For Loops',
        description: 'Iterate over vectors with for loops.',
        content: `for i = 1:5
    fprintf('%d ', i)
end
fprintf('\n')

names = {'Alice', 'Bob', 'Charlie'};
for k = 1:length(names)
    fprintf('Hello %s\n', names{k})
end`,
        output: "1 2 3 4 5 \nHello Alice\nHello Bob\nHello Charlie"
      },
      {
        id: 'while',
        title: 'While Loops',
        description: 'Loop while a condition remains true.',
        content: `n = 1;
while n <= 5
    fprintf('%d ', n)
    n = n + 1;
end
fprintf('\n')`,
        output: "1 2 3 4 5 "
      },
      {
        id: 'switch',
        title: 'Switch',
        description: 'Multi-way branching with switch-case.',
        content: `day = 'Tue';
switch day
    case 'Mon'
        disp('Monday')
    case 'Tue'
        disp('Tuesday')
    case 'Wed'
        disp('Wednesday')
    otherwise
        disp('Other day')
end`,
        output: "Tuesday"
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
        description: 'Define functions with inputs and outputs.',
        content: `function result = add(a, b)
    result = a + b;
end
function [s, p] = sumProd(a, b)
    s = a + b;
    p = a * b;
end

disp(add(3, 7))
[sumVal, prodVal] = sumProd(4, 5);
disp(sumVal)
disp(prodVal)`,
        output: "    10\n     9\n    20"
      },
      {
        id: 'anonymous',
        title: 'Anonymous Functions',
        description: 'Create functions inline with @ syntax.',
        content: `square = @(x) x^2;
multiply = @(a, b) a * b;

disp(square(5))
disp(multiply(3, 7))`,
        output: "    25\n    21"
      },
      {
        id: 'vectorization',
        title: 'Vectorization',
        description: 'Write vectorized code for speed and brevity.',
        content: `x = 1:5;
tLoop = zeros(1, 5);
for i = 1:5
    tLoop(i) = x(i)^2;
end
tVec = x .^ 2;

disp(tLoop)
disp(tVec)`,
        output: "     1     4     9    16    25\n     1     4     9    16    25"
      },
      {
        id: 'function-handles',
        title: 'Function Handles',
        description: 'Pass functions as arguments with handles.',
        content: `function result = apply(func, x)
    result = func(x);
end

sq = @(n) n^2;
fprintf('%d\\n', apply(sq, 4))
fprintf('%d\\n', apply(@sin, pi/2))`,
        output: "16\n     1"
      },
    ],
  },
  {
    id: 'plotting',
    title: 'Plotting',
    subtopics: [
      {
        id: 'plot',
        title: 'Plot',
        description: 'Create 2D line plots with plot().',
        content: `x = 0:0.2:2*pi;
y = sin(x);
plot(x, y);
xlabel('x');
ylabel('sin(x)');
title('Sine Wave');
grid on;`,
        output: "<2D line plot of sin(x)>"
      },
      {
        id: 'subplot',
        title: 'Subplot',
        description: 'Display multiple plots in a grid.',
        content: `x = 0:0.1:2*pi;
subplot(2, 1, 1);
plot(x, sin(x));
title('sin(x)');

subplot(2, 1, 2);
plot(x, cos(x));
title('cos(x)');`,
        output: "<2x1 grid of sine and cosine plots>"
      },
      {
        id: 'labels-titles',
        title: 'Labels / Titles',
        description: 'Annotate plots with labels, titles, and legends.',
        content: `x = 0:0.1:2*pi;
plot(x, sin(x), 'r-', x, cos(x), 'b--');
xlabel('Angle (rad)');
ylabel('Value');
title('Sine and Cosine');
legend('sin', 'cos');
grid on;`,
        output: "<plot with labels, title, and legend>"
      },
      {
        id: '3d-plots',
        title: '3D Plots',
        description: 'Create surface and mesh plots in 3D.',
        content: `[X, Y] = meshgrid(-2:0.2:2, -2:0.2:2);
Z = X .* exp(-X.^2 - Y.^2);
surf(X, Y, Z);
xlabel('X');
ylabel('Y');
zlabel('Z');
title('3D Surface Plot');
colorbar;`,
        output: "<3D surface plot of X*exp(-X^2-Y^2)>"
      },
    ],
  },
]
};
