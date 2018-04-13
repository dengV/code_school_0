As discussed in the comments on this answer, setting certain values can have unexpected consequences.

In Javascript, this is more likely because setting a global variable actually means setting a property of the window object. For instance:

<code>
function foo (input) {
    top = 45;
    return top * input;
}
foo(5);
</code>
This returns NaN because you can't set window.top and multiplying a window object doesn't work. Changing it to var top = 45 works.

Other values that you can't change include document. Furthermore, there are other global variables that, when set, do exciting things. For instance, setting window.status updates the browser's status bar value and window.location goes to a new location.

Finally, if you update some values, you may lose some functionality. If, for instance, you set window.frames to a string, for instance, you can't use window.frames[0] to access a frame.



<hr>

<hr>

<hr>


Global variable make it very difficult to isolate your code, and to reuse it in new contexts.




Point #1: If you have a Javascript object that relies on a global var. you will not be able to create several instances of this object within your app because each instance will change the value of the global thereby overwriting data the was previously written by the another instance. (Unless of course this variable holds a value that is common to all instances - but more often than not you'll discover that such an assumption is wrong).





Point #2: Globals make it hard to take existing pieces of code and reuse them in new apps. Suppose you have a set of functions defined in one file and you want to use them in some other file (in another app). So you extract them to a new file and have that file included in the new app. If these function rely on a global your 2nd app will fail at runtime because the global variable is not there. The dependency on globals is not visible in the code so forgetting these variables (when moving functions to new files) is a likely danger.