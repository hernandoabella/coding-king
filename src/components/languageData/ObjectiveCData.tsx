import objc from 'react-syntax-highlighter/dist/esm/languages/hljs/objectivec';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('objectivec', objc);

export const objectiveCConfig = {
  title: "Objective-C Tutorial",
  language: 'objectivec',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Declare and initialize basic variables and data types.',
        content: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        int age = 25;
        float price = 19.99;
        double pi = 3.14159265359;
        char grade = 'A';
        BOOL isActive = YES;

        NSLog(@"Age: %d, Price: %.2f, Pi: %.5f", age, price, pi);
        NSLog(@"Grade: %c, Active: %d", grade, isActive);
    }
    return 0;
}`,
        output: "Age: 25, Price: 19.99, Pi: 3.14159\nGrade: A, Active: 1"
      },
      {
        id: 'nslog',
        title: 'NSLog',
        description: 'Log formatted output to the console with NSLog.',
        content: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // Format specifiers
        NSLog(@"Integer: %d", 42);
        NSLog(@"Float: %f", 3.14);
        NSLog(@"String: %@", @"Hello");
        NSLog(@"Object: %@", [NSDate date]);

        // Multiple arguments
        NSString *name = @"Alice";
        int score = 95;
        NSLog(@"%@ scored %d points", name, score);

        // Debugging objects
        NSArray *items = @[@"a", @"b", @"c"];
        NSLog(@"Array contents: %@", items);

        // Padding and precision
        NSLog(@"|%10d|", 42);
        NSLog(@"Pi: %.3f", M_PI);
    }
    return 0;
}`,
        output: "Integer: 42\nFloat: 3.140000\nString: Hello\nAlice scored 95 points"
      },
      {
        id: 'nsstring',
        title: 'NSString',
        description: 'Working with strings: creation, formatting, and manipulation.',
        content: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // String creation
        NSString *greeting = @"Hello, World!";
        NSString *copy = [NSString stringWithString:greeting];

        // String formatting
        NSString *formatted = [NSString stringWithFormat:@"Age: %d", 30];

        // Concatenation
        NSString *first = @"Hello";
        NSString *second = @"World";
        NSString *combined = [first stringByAppendingString:@" "];
        combined = [combined stringByAppendingString:second];

        // Common methods
        NSUInteger len = [greeting length];
        NSString *upper = [greeting uppercaseString];
        NSString *lower = [greeting lowercaseString];
        BOOL hasPrefix = [greeting hasPrefix:@"Hello"];
        BOOL contains = [greeting containsString:@"World"];

        // Substring
        NSRange range = NSMakeRange(0, 5);
        NSString *sub = [greeting substringWithRange:range];

        NSLog(@"%@ (length: %lu)", combined, len);
        NSLog(@"Upper: %@, Sub: %@", upper, sub);
    }
    return 0;
}`,
        output: "Hello World (length: 13)\nUpper: HELLO, WORLD!, Sub: Hello"
      },
      {
        id: 'numbers',
        title: 'Numbers',
        description: 'Working with NSNumber and numeric conversions.',
        content: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // Wrap primitives in NSNumber
        NSNumber *intNum = @42;
        NSNumber *floatNum = @3.14;
        NSNumber *boolNum = @YES;
        NSNumber *charNum = @'A';

        // Unwrapping
        int value = [intNum intValue];
        float fval = [floatNum floatValue];
        double dval = [intNum doubleValue];
        BOOL bval = [boolNum boolValue];

        // Number comparison
        NSComparisonResult cmp = [intNum compare:@100];
        if (cmp == NSOrderedAscending) {
            NSLog(@"%d is less than 100", value);
        }

        // Numeric operations via NSNumber
        NSNumber *a = @10, *b = @3;
        NSInteger sum = [a integerValue] + [b integerValue];

        // Storing in collections
        NSArray *numbers = @[@1, @2, @3, @4, @5];

        // String to number
        NSString *numStr = @"3.14159";
        double parsed = [numStr doubleValue];

        NSLog(@"Sum: %ld, Parsed: %f", sum, parsed);
    }
    return 0;
}`,
        output: "42 is less than 100\nSum: 13, Parsed: 3.141590"
      }
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-else',
        title: 'If / Else',
        description: 'Conditional branching with if, else if, and else.',
        content: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        int score = 85;

        if (score >= 90) {
            NSLog(@"Grade: A");
        } else if (score >= 80) {
            NSLog(@"Grade: B");
        } else if (score >= 70) {
            NSLog(@"Grade: C");
        } else {
            NSLog(@"Grade: F");
        }

        // Ternary operator
        NSString *status = (score >= 60) ? @"Pass" : @"Fail";
        NSLog(@"Status: %@", status);

        // Compound conditions
        int age = 20;
        BOOL hasID = YES;
        if (age >= 18 && hasID) {
            NSLog(@"Access granted");
        }

        // String comparison
        NSString *name = @"Alice";
        if ([name isEqualToString:@"Alice"]) {
            NSLog(@"Welcome back, Alice!");
        }
    }
    return 0;
}`,
        output: "Grade: B\nStatus: Pass\nAccess granted\nWelcome back, Alice!"
      },
      {
        id: 'switch',
        title: 'Switch',
        description: 'Multi-way branching with switch statements on integers and enums.',
        content: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        int day = 3;

        switch (day) {
            case 1:
                NSLog(@"Monday");
                break;
            case 2:
                NSLog(@"Tuesday");
                break;
            case 3:
                NSLog(@"Wednesday");
                break;
            case 4:
                NSLog(@"Thursday");
                break;
            case 5:
                NSLog(@"Friday");
                break;
            case 6:
            case 7:
                NSLog(@"Weekend!");
                break;
            default:
                NSLog(@"Invalid day");
                break;
        }

        // Fall-through example
        char grade = 'B';
        switch (grade) {
            case 'A':
                NSLog(@"Excellent!");
                break;
            case 'B':
            case 'C':
                NSLog(@"Well done");
                break;
            case 'D':
                NSLog(@"You passed");
                break;
        }
    }
    return 0;
}`,
        output: "Wednesday\nWell done"
      },
      {
        id: 'for-forin',
        title: 'For / For-In',
        description: 'Traditional for loops and fast enumeration with for-in.',
        content: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // Traditional for loop
        for (int i = 0; i < 5; i++) {
            NSLog(@"Iteration: %d", i);
        }

        // For-in with NSArray
        NSArray *fruits = @[@"apple", @"banana", @"cherry"];
        for (NSString *fruit in fruits) {
            NSLog(@"Fruit: %@", fruit);
        }

        // For-in with NSDictionary
        NSDictionary *ages = @{
            @"Alice": @25,
            @"Bob": @30,
            @"Carol": @28
        };
        for (NSString *name in ages) {
            NSLog(@"%@ is %@ years old", name, ages[name]);
        }

        // Enumerate with index using block
        [fruits enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL *stop) {
            NSLog(@"%lu: %@", idx, obj);
            if (idx == 1) *stop = YES;  // stop early
        }];
    }
    return 0;
}`,
        output: "Iteration: 0\nIteration: 1\n...\nFruit: apple\nFruit: banana\nFruit: cherry\nAlice is 25 years old"
      },
      {
        id: 'while',
        title: 'While',
        description: 'While and do-while loops for repeated execution.',
        content: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // While loop
        int count = 0;
        while (count < 5) {
            NSLog(@"Count: %d", count);
            count++;
        }

        // Do-while loop (runs at least once)
        int num = 10;
        do {
            NSLog(@"Number: %d", num);
            num--;
        } while (num > 5);

        // While with break/continue
        int i = 0;
        while (i < 10) {
            i++;
            if (i == 2) continue;  // skip 2
            if (i == 5) break;     // stop at 5
            NSLog(@"Value: %d", i);
        }

        // Infinite loop pattern
        BOOL running = YES;
        int tries = 0;
        while (running) {
            tries++;
            NSLog(@"Attempt %d", tries);
            if (tries >= 3) running = NO;
        }
    }
    return 0;
}`,
        output: "Count: 0\nCount: 1\n...\nNumber: 10\nNumber: 9\n...\nValue: 1\nValue: 3\nValue: 4\nAttempt 1\nAttempt 2\nAttempt 3"
      }
    ],
  },
  {
    id: 'classes-objects',
    title: 'Classes & Objects',
    subtopics: [
      {
        id: 'interface-implementation',
        title: 'Interface / Implementation',
        description: 'Define classes with @interface (header) and @implementation (body).',
        content: `// Person.h (header / interface)
#import <Foundation/Foundation.h>

@interface Person : NSObject {
    NSString *_name;
    int _age;
}

- (void)setName:(NSString *)name;
- (NSString *)name;
- (void)setAge:(int)age;
- (int)age;
- (void)introduce;

@end

// Person.m (implementation)
#import "Person.h"

@implementation Person

- (void)setName:(NSString *)name {
    _name = [name copy];
}

- (NSString *)name {
    return _name;
}

- (void)setAge:(int)age {
    _age = age;
}

- (int)age {
    return _age;
}

- (void)introduce {
    NSLog(@"Hi, I'm %@ and I'm %d years old.", _name, _age);
}

@end`,
        output: "Class Person defined with name, age, and introduce method."
      },
      {
        id: 'properties',
        title: 'Properties',
        description: 'Use @property to auto-generate getters, setters, and instance variables.',
        content: `// Person.h
#import <Foundation/Foundation.h>

@interface Person : NSObject

@property (nonatomic, copy) NSString *name;
@property (nonatomic, assign) int age;
@property (nonatomic, strong) NSDate *birthDate;
@property (nonatomic, readonly) NSString *displayName;
@property (nonatomic, getter=isVip) BOOL vip;

- (instancetype)initWithName:(NSString *)name age:(int)age;
- (void)introduce;

@end

// Person.m
#import "Person.h"

@implementation Person

- (instancetype)initWithName:(NSString *)name age:(int)age {
    self = [super init];
    if (self) {
        _name = [name copy];
        _age = age;
    }
    return self;
}

- (NSString *)displayName {
    return [NSString stringWithFormat:@"%@ (%d)", _name, _age];
}

- (void)introduce {
    NSLog(@"I'm %@, age %d", self.name, self.age);
}

@end`,
        output: "Properties provide dot-syntax access and auto-generated accessors."
      },
      {
        id: 'methods',
        title: 'Methods',
        description: 'Define instance methods, class methods, and method signatures.',
        content: `#import <Foundation/Foundation.h>

@interface Calculator : NSObject

// Instance method
- (int)add:(int)a to:(int)b;

// Instance method with multiple parameters
- (double)divide:(double)dividend by:(double)divisor error:(NSError **)error;

// Class method (static)
+ (NSString *)version;
+ (instancetype)sharedCalculator;

@end

@implementation Calculator

- (int)add:(int)a to:(int)b {
    return a + b;
}

- (double)divide:(double)dividend by:(double)divisor error:(NSError **)error {
    if (divisor == 0.0) {
        if (error) {
            *error = [NSError errorWithDomain:@"CalcError" code:1
                userInfo:@{NSLocalizedDescriptionKey: @"Division by zero"}];
        }
        return 0.0;
    }
    return dividend / divisor;
}

+ (NSString *)version {
    return @"1.0.0";
}

+ (instancetype)sharedCalculator {
    static Calculator *shared = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        shared = [[self alloc] init];
    });
    return shared;
}

@end

// Usage:
// Calculator *calc = [[Calculator alloc] init];
// int result = [calc add:3 to:5];  // 8
// NSLog(@"Version: %@", [Calculator version]);`,
        output: "Methods use named parameters with colon syntax: [obj method:arg1 param2:arg2]"
      },
      {
        id: 'init',
        title: 'Init',
        description: 'Designated initializers, convenience initializers, and init patterns.',
        content: `#import <Foundation/Foundation.h>

@interface Book : NSObject

@property (nonatomic, copy) NSString *title;
@property (nonatomic, copy) NSString *author;
@property (nonatomic, assign) int pages;

// Designated initializer
- (instancetype)initWithTitle:(NSString *)title
                       author:(NSString *)author
                        pages:(int)pages;

// Convenience initializers
- (instancetype)initWithTitle:(NSString *)title;

@end

@implementation Book

- (instancetype)initWithTitle:(NSString *)title
                       author:(NSString *)author
                        pages:(int)pages {
    self = [super init];
    if (self) {
        _title = [title copy];
        _author = [author copy];
        _pages = pages;
    }
    return self;
}

- (instancetype)initWithTitle:(NSString *)title {
    return [self initWithTitle:title author:@"Unknown" pages:0];
}

- (instancetype)init {
    return [self initWithTitle:@"Untitled"];
}

- (NSString *)description {
    return [NSString stringWithFormat:@"<%@: %@ by %@, %d pages>",
        NSStringFromClass([self class]), self.title, self.author, self.pages];
}

@end

// Usage:
// Book *book = [[Book alloc] initWithTitle:@"1984"
//                                   author:@"Orwell" pages:328];
// NSLog(@"%@", book);`,
        output: "<Book: 1984 by Orwell, 328 pages>"
      }
    ],
  },
  {
    id: 'memory-protocols',
    title: 'Memory & Protocols',
    subtopics: [
      {
        id: 'arc-basics',
        title: 'ARC Basics',
        description: 'Automatic Reference Counting: retain cycles, strong vs weak, and best practices.',
        content: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // ARC automatically manages object lifetimes
        NSString *str = [[NSString alloc] initWithFormat:@"Hello %@", @"World"];
        // str is automatically released when it goes out of scope

        // @autoreleasepool creates a pool for temporary objects
        for (int i = 0; i < 100; i++) {
            @autoreleasepool {
                NSString *temp = [NSString stringWithFormat:@"Item %d", i];
                // temp released at end of this pool, not end of loop
            }
        }

        // ARC prohibited: no manual retain/release/autorelease
        // [obj retain]  -- compiler error
        // [obj release] -- compiler error

        // Ownership qualifiers
        // __strong: default, retained reference
        // __weak: zeroing weak, avoids retain cycles
        // __unsafe_unretained: no retain (like assign)

        __weak NSString *weakStr = str;
        // weakStr becomes nil when str is deallocated
    }
    return 0;
}`,
        output: "ARC eliminates manual memory management; use strong/weak for ownership."
      },
      {
        id: 'weak-strong',
        title: 'Weak / Strong',
        description: 'Avoid retain cycles with weak references and strongSelf dance in blocks.',
        content: `#import <Foundation/Foundation.h>

@interface Parent : NSObject
@property (nonatomic, strong) NSMutableArray *children;
- (void)addChild:(id)child;
@end

@implementation Parent
- (void)addChild:(id)child {
    [self.children addObject:child];
}
- (instancetype)init {
    if (self = [super init]) {
        _children = [NSMutableArray array];
    }
    return self;
}
@end

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // Retain cycle example (bad)
        // Parent -> child (strong) and child -> parent (strong) = leak

        // Solution: child uses __weak for parent reference
        __weak Parent *weakParent = nil;

        // Strong-weak dance in blocks
        void (^completionBlock)(void) = ^{
            // __strong __typeof(weakSelf) strongSelf = weakSelf;
            // if (!strongSelf) return;
            // [strongSelf doSomething];
            NSLog(@"Block executed");
        };

        // Copy semantics for properties
        // Use @property (copy) for NSString, NSArray, etc.
        // to prevent mutation from outside

        // NSNotificationCenter: always remove observer in dealloc
        [[NSNotificationCenter defaultCenter] removeObserver:self];
    }
    return 0;
}`,
        output: "Use weak references to break retain cycles; strongSelf in blocks."
      },
      {
        id: 'protocols',
        title: 'Protocols',
        description: 'Define and adopt protocols (similar to interfaces in other languages).',
        content: `#import <Foundation/Foundation.h>

// Define a protocol
@protocol Printable <NSObject>

@required
- (NSString *)printDescription;

@optional
- (void)printDebugInfo;
- (BOOL)validate;

@end

// Adopt the protocol
@interface Document : NSObject <Printable>
@property (nonatomic, copy) NSString *title;
@property (nonatomic, copy) NSString *content;
@end

@implementation Document

- (NSString *)printDescription {
    return [NSString stringWithFormat:@"Document: %@", self.title];
}

- (void)printDebugInfo {
    NSLog(@"Content length: %lu", [self.content length]);
}

@end

// Protocol as type
void printObject(id<Printable> obj) {
    NSLog(@"%@", [obj printDescription]);

    // Check optional methods
    if ([obj respondsToSelector:@selector(printDebugInfo)]) {
        [obj printDebugInfo];
    }
}

// Protocol conformance check
// if ([someObject conformsToProtocol:@protocol(Printable)]) { ... }

// Informal protocol (category on NSObject) -- older pattern`,
        output: "Document: MyTitle\nContent length: 42\nProtocols define method contracts."
      },
      {
        id: 'categories',
        title: 'Categories',
        description: 'Extend existing classes with categories; add methods without subclassing.',
        content: `#import <Foundation/Foundation.h>

// NSString+Utilities.h
@interface NSString (Utilities)

- (BOOL)isValidEmail;
- (NSString *)reversedString;
+ (NSString *)randomStringWithLength:(NSUInteger)length;

@end

// NSString+Utilities.m
@implementation NSString (Utilities)

- (BOOL)isValidEmail {
    NSString *pattern = @"[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}";
    NSPredicate *pred = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", pattern];
    return [pred evaluateWithObject:self];
}

- (NSString *)reversedString {
    NSMutableString *reversed = [NSMutableString string];
    for (NSInteger i = self.length - 1; i >= 0; i--) {
        [reversed appendFormat:@"%C", [self characterAtIndex:i]];
    }
    return [reversed copy];
}

+ (NSString *)randomStringWithLength:(NSUInteger)length {
    NSString *letters = @"abcdefghijklmnopqrstuvwxyz";
    NSMutableString *random = [NSMutableString string];
    for (NSUInteger i = 0; i < length; i++) {
        uint32_t idx = arc4random_uniform((uint32_t)letters.length);
        [random appendFormat:@"%C", [letters characterAtIndex:idx]];
    }
    return [random copy];
}

@end

// Usage:
// NSString *email = @"test@example.com";
// if ([email isValidEmail]) { ... }
// NSLog(@"Reversed: %@", [@"Hello" reversedString]);  // "olleH"

// Class extension (anonymous category, in .m file)
@interface MyClass ()
@property (nonatomic, strong) NSString *privateData;
- (void)privateMethod;
@end`,
        output: "Categories add methods to any class, even system classes like NSString."
      }
    ],
  },
]
};
