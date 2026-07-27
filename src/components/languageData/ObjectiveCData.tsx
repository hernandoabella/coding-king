import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const objectiveCConfig: LanguageConfig = {
  title: 'Objective-C',
  language: 'objectivec',
  tutorialData: [
        {
      id: 'basics',
      title: 'Objective-C Basics',
      description: 'Learn Objective-C Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'NSLog / printf.',
      content: `#import <Foundation/Foundation.h>
int main() {
  NSLog(@"Hello, World!");
  return 0;
}`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables & Types',
      description: 'Primitives + objects.',
      content: `#import <Foundation/Foundation.h>
int main() {
  int age = 30;
  NSString *name = @"Ada";
  NSLog(@"%@ is %d", name, age);
  return 0;
}`,
      output: `Ada is 30`,
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
      description: 'Standard branching.',
      content: `#import <Foundation/Foundation.h>
int main() {
  int x = 10;
  if (x > 5) NSLog(@"big"); else NSLog(@"small");
  return 0;
}`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for Loops',
      description: 'Counted loops.',
      content: `#import <Foundation/Foundation.h>
int main() {
  for (int i = 0; i < 3; i++) NSLog(@"%d", i);
  return 0;
}`,
      output: `0
1
2`,
    },
            {
      id: 'while',
      title: 'while',
      description: 'Condition loop.',
      content: `#import <Foundation/Foundation.h>
int main() {
  int i = 0;
  while (i < 3) { NSLog(@"%d", i); i++; }
  return 0;
}`,
      output: `0
1
2`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Object-Oriented Obj-C',
      description: 'Learn Object-Oriented Obj-C',
      content: `    {`,
      subtopics: [
            {
      id: 'interface',
      title: 'Interface & Implementation',
      description: '@interface / @implementation.',
      content: `#import <Foundation/Foundation.h>
@interface Dog : NSObject
- (void)bark;
@end
@implementation Dog
- (void)bark { NSLog(@"Woof"); }
@end
int main() { [[[Dog alloc] init] bark]; return 0; }`,
      output: `Woof`,
    },
            {
      id: 'props',
      title: 'Properties',
      description: '@property / dot syntax.',
      content: `@property (nonatomic, strong) NSString *name;
self.name = @"Lin";
NSLog(@"%@", self.name);`,
      output: `Lin`,
    },
            {
      id: 'class',
      title: 'NSObject',
      description: 'Root class.',
      content: `NSObject *o = [[NSObject alloc] init];
NSLog(@"ok");`,
      output: `ok`,
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
      id: 'array',
      title: 'NSArray',
      description: 'Immutable array.',
      content: `NSArray *a = @[@1, @2, @3];
NSLog(@"%ld", (long)a.count);
NSLog(@"%@", a[0]);`,
      output: `3
1`,
    },
            {
      id: 'dict',
      title: 'NSDictionary',
      description: 'Key-value.',
      content: `NSDictionary *d = @{@"a": @1, @"b": @2};
NSLog(@"%@", d[@"b"]);`,
      output: `2`,
    },
            {
      id: 'mutable',
      title: 'NSMutableArray',
      description: 'Mutable variant.',
      content: `NSMutableArray *m = [NSMutableArray array];
[m addObject:@4];
NSLog(@"%ld", (long)m.count);`,
      output: `1`,
    },
      ],
    },
        {
      id: 'blocks',
      title: 'Blocks',
      description: 'Learn Blocks',
      content: `    {`,
      subtopics: [
            {
      id: 'block',
      title: 'Block Syntax',
      description: '^ closure.',
      content: `int (^sq)(int) = ^(int n){ return n * n; };
NSLog(@"%d", sq(4));`,
      output: `16`,
    },
      ],
    },
        {
      id: 'strings',
      title: 'Strings',
      description: 'Learn Strings',
      content: `    {`,
      subtopics: [
            {
      id: 'format',
      title: 'NSString format',
      description: 'Sprintf-style.',
      content: `NSString *s = [NSString stringWithFormat:@"%d-%d", 3, 4];
NSLog(@"%@", s);`,
      output: `3-4`,
    },
      ],
    },
        {
      id: 'error',
      title: 'Error Handling',
      description: 'Learn Error Handling',
      content: `    {`,
      subtopics: [
            {
      id: 'try',
      title: 'try / catch',
      description: '@try / @catch.',
      content: `@try { [NSException raise:@"oops" format:@"x"]; }
@catch (NSException *e) { NSLog(@"%@", e.name); }`,
      output: `oops`,
    },
      ],
    },
  ],
};
