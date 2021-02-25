# comparision operators evaluating conditions:

JavaScript has the following types of operators. This section describes the operators and contains information about operator precedence.

Assignment operators
Comparison operators
Arithmetic operators
Bitwise operators
Logical operators
String operators
Conditional (ternary) operator
Comma operator
Unary operators
Relational operators
JavaScript has both binary and unary operators, and one special ternary operator, the conditional operator. A binary operator requires two operands, one before the operator and one after the operator:

# structuring comparison operators :
You can use the following operators to compare two numbers, or two strings.

The operation returns a boolean.

< less than
<= minus than, or equal to
> greater than
>= greater than, or equal to

When comparing strings, those operators check for the letter ordering, encoded in Unicode. The bigger the letter value, the bigger the letter is to the operator when comparing.

# logical operators: 
There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)
*comparison operators use to return signle valus of true and false.
*logical and : he logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.

The extended algorithm works as follows.
logical or :the logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.

The extended algorithm works as follows.
logical not : The operator accepts a single argument and does the following:

1.Converts the operand to boolean type: true/false.
2.Returns the inverse value.

# for and while loop:
> while : A "While" Loop is used to repeat a specific block of code an unknown number of times, until a condition is met. For example, if we want to ask a user for a number between 1 and 10, we don't know how many times the user may enter a larger number, so we keep asking "while the number is not between 1 and 10".
> for : The for/in statement loops through the properties of an object. The block of code inside the loop will be executed once for each property. JavaScript supports different kinds of loops: for - loops through a block of code a number of times.
 # loop counter :
 You typically use the initialization is to initialize a counter variable. If you use the var keyword to declare the counter variable, the variable will have either function or global scope. In other words, you can reference the counter variable after the loop ends.
 1) initialization
The initialization expression initializes the loop. The initialization expression is executed only once when the loop starts. You typically use the initialization is to initialize a counter variable. If you use the var keyword to declare the counter variable, the variable will have either function or global scope. In other words, you can reference the counter variable after the loop ends. However, if you use the let keyword to declare the counter variable, the variable will have a blocked scope, which is only accessible inside the loop.

2) condition
The condition is an expression that is evaluated once before every iteration. The statement inside the loop is executed only when the condition evaluates to true. The loop is terminated if the condition evaluates to false. Note that the condition is optional. If you omit it, the for loop statement considers it as true.
 3) update 
 Every time the loop run the statemnets in the curly vracws its add one to the counter.
