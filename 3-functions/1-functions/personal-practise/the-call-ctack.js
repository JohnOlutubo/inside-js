// Trying to see how the function flows
/* The place where the computer stores this context is the call stack. Every
time a function is called, the current context is stored on top of this stack.
When a function returns, it removes the top context from the stack and uses
that context to continue execution. */

function greet(who) {
  console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");


/* Storing this stack requires space in the computer’s memory. When the stack
grows too big, the computer will fail with a message like “out of stack space”
or “too much recursion”. The following code illustrates this by asking the
computer a really hard question that causes an infinite back-and-forth between
two functions. Rather, it would be infinite, if the computer had an infinite
stack. As it is, we will run out of space, or “blow the stack”. */

function chicken() {
return egg();
}
function egg() {
return chicken();
}
console.log(chicken() + " came first.");