# Roman Numeral Converter

This is an algorithm designed to convert **standard digits** in base 10 to Roman Numerals. An important distinction is that numerals are ***not*** numbers, but representations of numbers. With that logic, the digits we use today are just Hindu-Arabic numerals... *which they are!* Numbers are simply a ***mathematical object*** used to count, measure, and label, albeit with different symbols in history and around the world.

## My Implementation

Presently, this simple converter abides *classical* rules, meaning numbers 1-3,999 and no negative numbers. "Modern" Roman numeral notation uses overlines indicating a multiplication by 1,000. This expands the number range from 1 to 3,999,999. 

First things first, I set up a table with the numeral symbols and values. One of the simpler ways to go about this logically, is to start with the bigger numerals and work your way down. This is because of **Place Value**. The ***position*** of a digit in a number actually gives us valuable information. For instance, take the number 82. In the 'ones' place, we have the digit 2, and in the 'tens' place, we have the digit 8. This tells us to multiply the 8 by 10 before we sum it with 2. See the example below for further detail. 

    The number 472 is essentially 400 + 70 + 2.
    Given the number XYZ, it can actually be represented as:

            X * (10 ^ 2)
            Y * (10 ^ 1)
        +   Z * (10 ^ 0)    <-- Remember, this is equal to 1.
        ----------------
                    X00
                     Y0
                    + Z
        ----------------
                    XYZ


The main loop starts with the lookup table. I found it easier to iterate through the lookup table and determine whether each symbol was a suitable match, rather than manipulating the input number and *finding* the suitable match, if that makes sense. 

A numeral matches if it can be represented by the input number at least once. This is its multiplier, how many times the numeral can fit in the given input value. A multiplier value less than zero means the number is too big and cannot fit inside the input value.

*Note: Roman Numerals aren't represented more than thrice in a row, because the next biggest numeral (minus a smaller one) is a proper representation of the number.*

    The number 4 is not 'IIII', but 'IV' (5 - 1)
    The number 9 is not 'VIIII', but 'IX' (10 - 1)

If the multiplier is at least 1, meaning this numeral fits at least once, push this numeral to the result, *multiplier* times. Following that push to the result, divide this numeral value out of the input and proceed with the remainder. 

And that's it! When the loop ends, the result is a proper Roman Numeral. There is no need to worry about a potential 'remainder' left over. Every number can and will be represented by a Roman Numeral.

## Want to try it out?
Here are three ways to run my program, in order of complexity:

1) Use my website! [Click here](https://www.DeveloperSean.com) to see what it's all about!

2) Use an online JavaScript compiler.
    - Copy and paste my code into [Programiz](https://www.programiz.com/javascript/online-compiler/) and give it the beans!

3) Download the project yourself and build upon it! 

---

### Option 3: Advanced Users Only
Want to take a deeper dive into the Matrix? Here's how you can get set up with customizing 
this program and see what sort of mistakes you can make (it's all apart of the process!)  

**You'll Need:**

* [**Visual Studio Code**](https://code.visualstudio.com/) (*An environment to write your own programs! It's free!*)

* [**Node.JS**](https://nodejs.org/en) (*So you can execute JavaScript code on your machine, rather than through a web browser! Also free!*)

After installing the above programs, make a new folder in any directory for this project.  

Download *main.js* into the new project folder, and open the file in VS Code.  

In VS, open the integrated terminal with Ctrl+`, or open through the 'View' tab. **Alternatively, you can open your local command line (CMD on Windows).**  
- *In EITHER terminal, be sure you are working in the directory of 'main.js'*  

Entering the following command will run the program. Huzzah!

```
node main.js
```

Thanks for reading, and good luck out there!
---
> See any issues? [Let me know!](https://www.DeveloperSean.com)