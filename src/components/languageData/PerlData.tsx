import perl from 'react-syntax-highlighter/dist/esm/languages/hljs/perl';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('perl', perl);

export const perlConfig = {
  title: "Perl Tutorial",
  language: 'perl',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'scalars',
        title: 'Scalars ($)',
        description: 'Scalar variables hold single values — strings, numbers, or references.',
        content: `my \$name = "Alice";
my \$age = 25;
my \$pi = 3.14159;

print "Name: \$name\\n";
print "Age: \$age\\n";
print "Pi: \$pi\\n";`,
        output: `Name: Alice
Age: 25
Pi: 3.14159`
      },
      {
        id: 'arrays',
        title: 'Arrays (@)',
        description: 'Ordered lists accessed with @ sigil and $ for individual elements.',
        content: `my @fruits = ("apple", "banana", "cherry");
print "First: \$fruits[0]\\n";
print "Last:  \$fruits[-1]\\n";
print "Count: " . scalar(@fruits) . "\\n";

push(@fruits, "date");
print join(", ", @fruits) . "\\n";`,
        output: `First: apple
Last:  cherry
Count: 3
apple, banana, cherry, date`
      },
      {
        id: 'hashes',
        title: 'Hashes (%)',
        description: 'Key-value pairs accessed with % sigil and $ for individual values.',
        content: `my %person = (
  name => "Alice",
  age  => 30,
  city => "NYC",
);

print "Name: \$person{name}\\n";
print "Age:  \$person{age}\\n";

\$person{job} = "Engineer";
while (my (\$k, \$v) = each %person) {
  print "\$k => \$v\\n";
}`,
        output: `Name: Alice
Age:  30
city => NYC
job => Engineer
name => Alice
age => 30`
      },
      {
        id: 'context',
        title: 'Context',
        description: 'Perl\'s scalar vs. list context determines how expressions are evaluated.',
        content: `my @nums = (1, 2, 3, 4, 5);

# Scalar context — returns count
my \$count = @nums;
print "Count: \$count\\n";

# List context — returns all elements
my @copy = @nums;
print "Copy:  @copy\\n";

# Context-aware functions
my \$first = reverse("Hello");
my @split  = reverse("Hello");
print "\$first: \$first\\n";
print "@split: @split\\n";`,
        output: `Count: 5
Copy:  1 2 3 4 5
$first: olleH
@split: o l l e H`
      },
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-elsif',
        title: 'If / Elsif',
        description: 'Conditional branching with if, elsif, and else.',
        content: `my \$score = 85;

if (\$score >= 90) {
  print "A\\n";
} elsif (\$score >= 80) {
  print "B\\n";
} elsif (\$score >= 70) {
  print "C\\n";
} else {
  print "F\\n";
}`,
        output: `B`
      },
      {
        id: 'unless',
        title: 'Unless',
        description: 'unless is the opposite of if — runs when condition is false.',
        content: `my \$debug = 0;

unless (\$debug) {
  print "Running in normal mode\\n";
}

# Postfix form
print "Success!\\n" unless 0;

# Works with else too
unless (1 > 2) {
  print "One is not greater than two\\n";
} else {
  print "This won't print\\n";
}`,
        output: `Running in normal mode
Success!
One is not greater than two`
      },
      {
        id: 'for-foreach',
        title: 'For / Foreach',
        description: 'Loop over lists with for/foreach, and C-style for loops.',
        content: `# Foreach over a list
foreach my \$fruit ("apple", "banana", "cherry") {
  print "\$fruit\\n";
}

# C-style for loop
for (my \$i = 1; \$i <= 5; \$i++) {
  print "\$i ";
}
print "\\n";`,
        output: `apple
banana
cherry
1 2 3 4 5`
      },
      {
        id: 'while',
        title: 'While',
        description: 'Loop while a condition is true, with next and last controls.',
        content: `my \$n = 3;
while (\$n > 0) {
  print "\$n\\n";
  \$n--;
}
print "Go!\\n";

# next and last
my \$i = 0;
while (\$i < 10) {
  \$i++;
  next if \$i % 2 == 0;   # skip evens
  last if \$i > 7;         # stop after 7
  print "\$i ";
}
print "\\n";`,
        output: `3
2
1
Go!
1 3 5 7`
      },
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'subroutines',
        title: 'Subroutines',
        description: 'Define and call subroutines with the sub keyword.',
        content: `sub greet {
  my \$name = shift;   # first argument
  print "Hello, \$name!\\n";
}

greet("Alice");
greet("Bob");`,
        output: `Hello, Alice!
Hello, Bob!`
      },
      {
        id: 'arguments',
        title: 'Arguments',
        description: 'Access subroutine arguments via @_ and shift.',
        content: `sub sum {
  my \$total = 0;
  foreach my \$num (@_) {
    \$total += \$num;
  }
  return \$total;
}

print "Sum: " . sum(1, 2, 3, 4) . "\\n";
print "Sum: " . sum(10, 20) . "\\n";`,
        output: `Sum: 10
Sum: 30`
      },
      {
        id: 'return',
        title: 'Return',
        description: 'Return values explicitly or implicitly from subroutines.',
        content: `sub min_max {
  my @sorted = sort { \$a <=> \$b } @_;
  return \$sorted[0], \$sorted[-1];
}

my (\$min, \$max) = min_max(42, 7, 99, 3);
print "Min: \$min, Max: \$max\\n";

# Implicit return (last expression)
sub double { \$_ [0] * 2 }
print double(21) . "\\n";`,
        output: `Min: 3, Max: 99
42`
      },
      {
        id: 'references',
        title: 'References',
        description: 'Create and dereference references to scalars, arrays, and hashes.',
        content: `my \$scalar_ref = \\"hello";
my \$array_ref  = [1, 2, 3];
my \$hash_ref   = {name => "Alice", age => 30};

print \$\$scalar_ref . "\\n";
print \$array_ref->[1] . "\\n";
print \$hash_ref->{name} . "\\n";

foreach my \$item (@{\$array_ref}) {
  print "\$item ";
}
print "\\n";`,
        output: `hello
2
Alice
1 2 3`
      },
    ],
  },
  {
    id: 'regex-text',
    title: 'Regex & Text',
    subtopics: [
      {
        id: 'matching',
        title: 'Matching',
        description: 'Pattern matching with =~ and m// operator.',
        content: `my \$text = "The quick brown fox";

if (\$text =~ /quick/) {
  print "Found 'quick'!\\n";
}

if (\$text =~ /^The/) {
  print "Starts with 'The'\\n";
}

if (\$text =~ /fox\$/) {
  print "Ends with 'fox'\\n";
}`,
        output: `Found 'quick'!
Starts with 'The'
Ends with 'fox'`
      },
      {
        id: 'substitution',
        title: 'Substitution',
        description: 'Search and replace with s/// operator.',
        content: `my \$str = "hello world hello";
\$str =~ s/hello/hi/;
print "\$str\\n";

\$str =~ s/hello/hi/g;
print "\$str\\n";

my \$phone = "555-123-4567";
\$phone =~ s/\\d/*/g;
print "\$phone\\n";`,
        output: `hi world hello
hi world hi
***-***-****`
      },
      {
        id: 'capturing-groups',
        title: 'Capturing Groups',
        description: 'Capture subpatterns with parentheses and access with $1, $2, etc.',
        content: `my \$email = "alice@example.com";

if (\$email =~ /(.+)@(.+)/) {
  print "User:   \$1\\n";
  print "Domain: \$2\\n";
}

my \$date = "2024-01-15";
\$date =~ s/(\\d{4})-(\\d{2})-(\\d{2})/\$2\/\$3\/\$1/;
print "\$date\\n";

my @words = ("cat", "bat", "rat");
print join(" ", grep { /^.at\$/ } @words) . "\\n";`,
        output: `User:   alice
Domain: example.com
01/15/2024
cat bat rat`
      },
      {
        id: 'file-io',
        title: 'File I/O',
        description: 'Read from and write to files using open and filehandles.',
        content: `# Write to file
open(my \$fh, '>', 'test.txt') or die \$!;
print \$fh "Line one\\n";
print \$fh "Line two\\n";
close \$fh;

# Read from file
open(my \$fh, '<', 'test.txt') or die \$!;
while (my \$line = <\$fh>) {
  chomp \$line;
  print "\$line\\n";
}
close \$fh;`,
        output: `Line one
Line two`
      },
    ],
  },
]
};
