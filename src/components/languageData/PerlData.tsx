import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const perlConfig: LanguageConfig = {
  title: 'Perl',
  language: 'perl',
  tutorialData: [
        {
      id: 'basics',
      title: 'Perl Basics',
      description: 'Learn Perl Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'print with newline.',
      content: `print "Hello, World!\\n";`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Scalars / $',
      description: 'Sigils per type.',
      content: `my $name = "Ada";
my $age = 36;
print "$name is $age\\n";`,
      output: `Ada is 36`,
    },
            {
      id: 'arrays',
      title: 'Arrays / @',
      description: 'List variables.',
      content: `my @a = (1, 2, 3);
push @a, 4;
print scalar(@a), " ", $a[0], "\\n";`,
      output: `4 1`,
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
      title: 'if / else',
      description: 'Postfix & block.',
      content: `my $x = 10;
if ($x > 5) { print "big\\n"; } else { print "small\\n"; }`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for / foreach',
      description: 'Iterate arrays.',
      content: `for my $i (0..2) { print "$i\\n"; }`,
      output: `0
1
2`,
    },
            {
      id: 'while',
      title: 'while',
      description: 'Condition loop.',
      content: `my $i = 0;
while ($i < 3) { print "$i\\n"; $i++; }`,
      output: `0
1
2`,
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
      title: 'sub',
      description: 'Define subroutines.',
      content: `sub square { my ($n) = @_; return $n * $n; }
print square(5), "\\n";`,
      output: `25`,
    },
            {
      id: 'return',
      title: 'Return Lists',
      description: 'Context-aware.',
      content: `sub div { my ($a,$b) = @_; return int($a/$b), $a % $b; }
my ($q, $r) = div(7, 2);
print "$q $r\\n";`,
      output: `3 1`,
    },
      ],
    },
        {
      id: 'data',
      title: 'Data Structures',
      description: 'Learn Data Structures',
      content: `    {`,
      subtopics: [
            {
      id: 'hash',
      title: 'Hashes / %',
      description: 'Key-value maps.',
      content: `my %m = (a => 1, b => 2);
print $m{b}, "\\n";`,
      output: `2`,
    },
            {
      id: 'references',
      title: 'References',
      description: 'Complex structures.',
      content: `my $aref = [1, 2, 3];
print $aref->[0], "\\n";`,
      output: `1`,
    },
      ],
    },
        {
      id: 'regex',
      title: 'Regular Expressions',
      description: 'Learn Regular Expressions',
      content: `    {`,
      subtopics: [
            {
      id: 'match',
      title: 'm// and s///',
      description: 'Pattern match & substitute.',
      content: `my $s = "hello 123";
if ($s =~ /(\\d+)/) { print "num=$1\\n"; }`,
      output: `num=123`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Object-Oriented Perl',
      description: 'Learn Object-Oriented Perl',
      content: `    {`,
      subtopics: [
            {
      id: 'package',
      title: 'Packages & bless',
      description: 'Blessed refs.',
      content: `package Dog;
sub new { my $c = shift; bless { }, $c }
sub bark { print "Woof\\n" }
package main;
Dog->new->bark;`,
      output: `Woof`,
    },
      ],
    },
        {
      id: 'modules',
      title: 'Modules',
      description: 'Learn Modules',
      content: `    {`,
      subtopics: [
            {
      id: 'use',
      title: 'use strict',
      description: 'Pragmas & CPAN.',
      content: `use strict;
use warnings;
print "safe\\n";`,
      output: `safe`,
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
      id: 'files',
      title: 'open / readline',
      description: 'File handles.',
      content: `open my $fh, ">", "o.txt" or die;
print $fh "hi\\n";
close $fh;
print "written\\n";`,
      output: `written`,
    },
      ],
    },
  ],
};
