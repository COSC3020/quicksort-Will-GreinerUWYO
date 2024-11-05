# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The worst-case scenario for this function would require the lowest value to be pivoted first. This would essentially make the algorithm call for every index in the array. For example the array 5,4,3,2,1 would shuffle to 5,4,3,1,2 then 5,4,1,2,3 etc. It would need to be called n times, and the function itself operates on every element of the array, so the worst-case runtime is $\Theta(n^2)$

## Plagarism Statement and Sources

Used the following website [geeksforgeeks](https://www.geeksforgeeks.org/quick-sort-algorithm/#) and the following video [BroCode](https://www.youtube.com/watch?v=Vtckgz38QHs&ab_channel=BroCode) to understand the basics of quicksort, and write that fundamental logic. Used their end based structure instead of the start based one in lectures. Near the end, I glanced at [geeksforgeeks](https://www.geeksforgeeks.org/iterative-quick-sort/#) but didn't use that code structure.

Used class slides and videos to understand partition code and understand worst case runtimes. 

Worked with fellow student Lily Brongo to figure out the stack architecture and the general format of the code. Used her method of pushing the start and end of each partition to the stack and then popping them to sort.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
