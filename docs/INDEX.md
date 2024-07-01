# Documentation

## Dojo Coding Challenges
<details>
  <summary>Unique ascending sorted values in array 🗓️ Wed 22 May 2024</summary>


### Description

Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length. Do not allocate extra space for another array, you must do this in place with constant memory. 		

### Acceptance criteria

#### Example 1:
- Input: A = [-1, 0, 1, 2, -1, -4]
- Output:  	length = 5, and A is now [-4,-1,0,1,2]. 
	

#### Example 2:
- Input: S = [10,15,18,15,22]
- Output:  	length = 4, and S is now [10,15,18,22]. 
  
### Analysis of complexity and space

### Time Complexity

- ### Step 1: Filtering Unique Elements (O(n))

The filter function iterates through the entire input array (array) in the worst case. Inside the filter callback, array.indexOf(value) is called to check if the current element is unique. This might also iterate through the whole array in the worst case to find the first occurrence of the value.

Therefore, this step has a time complexity of O(n * n) = O(n^2). However, there's an optimization here. The indexOf method typically uses a more efficient approach than iterating through the entire array for finding the first occurrence.

 In most modern JavaScript implementations, indexOf has a time complexity of O(1) on average. This brings down the overall time complexity of this step to O(n).

- ### Step 2: Sorting the Filtered Elements (O(n log n))

The sort function uses a comparison-based sorting algorithm (likely merge sort or quicksort) with a time complexity of O(n log n) in the average and worst cases.
Overall Time Complexity:

The time complexity is dominated by the sorting step (O(n log n)) because it's usually more expensive than the linear filtering step (O(n)). So, the overall time complexity of the function is O(n log n).

### Space Complexity

The function creates a new array to store the filtered unique elements in the filter step. This new array can potentially hold all elements from the input array in the worst case (when there are no duplicates).

The sorting algorithm might also use additional temporary space for comparisons and manipulations during the sorting process.
Therefore, the space complexity of the function is also O(n) in the worst case, due to the space requirement for the new array and potential temporary space used by the sorting algorithm.
 
### In summary:

- Time Complexity: O(n log n)
- Space Complexity: O(n)

## Challenge request file

[View Content](https://docs.google.com/presentation/d/100f39EOMR0qgk-hqbEJNOFvcYLF_ju_f4PbQXOFsynU/edit#slide=id.p)

</details>

<details>
  <summary>Subarray of minimum size for a given number 🗓️ Fri 24 May 2024</summary>


### Description

Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn’t one, return [0] instead. 	

### Acceptance criteria

#### Example 1:
- Input:  array= [2,3,1,2,4,3]  s=7
- Output:  	[4,3]
	

#### Example 2:
- Input: array= [2, 6, 5, 6, 7, 9, 10] s=22
- Output:  	[6, 7, 9]

#### Example 3:
- Input: array= [1,2,3,4,5]  s=16
- Output:  	[0]
  
### Analysis of complexity and space

### Time Complexity

- ### Step 1: 
The function utilizes two nested while loops.
- ### Step 2:
 The outer loop iterates through each element of the array once, from start to end.
- ### Step 3: 
The inner loops iterate through the array elements as well, but their exact number of iterations depends on the specific conditions.
- ### Step 4:
 Overall, the function iterates through each element of the array at most twice (once for each while loop).

Therefore, the time complexity is approximately O(2n), which simplifies to O(n), where n is the length of the numbers array.

### Space Complexity

The function uses a few constant variables (minLength, sum, start, end, result) which occupy constant space regardless of the input size.
Additionally, it initializes an array result, which may store a subarray of the input numbers. The size of this array is at most equal to the size of the input array.

Therefore, the space complexity of the function is O(n), where n is the length of the numbers array.
 
### In summary:

Overall, the time complexity of the function is linear (O(n)), and the space complexity is also linear (O(n)). This indicates that the performance of the function scales linearly with the size of the input array.

## Challenge request file

[View Content](https://docs.google.com/presentation/d/1pZILpQNlF-4oAnkXGT77f01PRLU07wbSzwBpFVCLmQ4/edit#slide=id.p)

</details>


<details>
  <summary>Min Stack 🗓️ Wen 29 May 2024</summary>


### Description

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.						
push(x) – Push element x onto stack. pop() – Removes the element on top of the stack. top() – Get the top element. getMin() – Retrieve the minimum element in the stack. Here's a valuable tip:

Research how the stack process works in your technology and try to replicate it, forming your own data structure and everything that entails this process.


### Acceptance criteria (Not Provided)

  
### Analysis of complexity and space

### Time Complexity

- ### constructor: O(n)
It iterates through the initialData array (up to n elements) during initialization.
- ### get values: O(n)
Creating a copy of the _stack using spread syntax takes linear time (proportional to n elements).
- ### set values: O(n)
Slicing the newData array to create a copy takes O(n) time.
- ### push: O(1)
The native push method on arrays has constant time complexity, regardless of the stack size.
- ### pop: O(1)
Similar to push, the pop method on arrays operates in constant time.
- ### top: O(1)
Accessing the last element using the stack size (_stack.length - 1) and creating a new array with a single element is a constant time operation.
- ### getMin: O(n)
Finding the minimum value using Math.min requires iterating through the entire stack (n elements) in the worst case.

### Space Complexity

- Overall: O(n)
The dominant factor is the _stack array which stores the elements. Its size scales directly with the number of elements (n) in the stack.
- constructor: O(n)
It initializes the _stack with the provided initialData array. In the worst case, it copies all n elements.
- get values: O(n)
It creates a copy of the _stack using the spread operator (...) to avoid modifying the original array. This copy takes O(n) space.
- set values: O(n)
Similar to get values, it slices the newData array to create a copy (O(n)) which is then assigned to _stack.
- Other methods (push, pop, top, getMin): O(1)
These methods involve constant space operations like adding/removing a single element or finding the minimum value within the existing array.

 
### In summary:

The space complexity of the Stack class is dominated by the _stack array, making it O(n). Most operations have constant time complexity (O(1)) except for get values, set values, and getMin which involve creating copies and iterating through the array, resulting in O(n) time complexity.

## Challenge request file

[View Content](https://docs.google.com/presentation/d/1028U-WH0A21YX60989PLnWVAC9VNZIsbcXpilzJIo0g/edit#slide=id.p)

</details>


<details>
  <summary>Merge Intervals 🗓️ Fri 31 May 2024</summary>


### Description

Given a collection of intervals, merge all overlapping intervals.
	

### Acceptance criteria

#### Example 1:
- Input: [1,3],[2,6],[8,10],[15,18]
- Output: [1,6],[8,10],[15,18]
	

#### Example 2:
- Input: [1,3],[4,10],[6,12][11,18]
- Output:  [1,3],[4,18]

#### Example 3:
- Input: array= [1,2,3,4,5]  s=16
- Output:  	[0]
  
### Analysis of complexity and space

### Time Complexity

Best-case: O(n) - This scenario occurs when there are no overlapping intervals. The forEach loop iterates through each interval (n elements) once, adding them to the mergedIntervals array without any merging operations.
Average-case: O(n) - In most cases, some merging might happen, but it's a linear process dependent on the number of intervals (n). Sorting is not involved in this approach.

Worst-case: O(n) - Similar to the average case, the worst-case scenario also has a linear time complexity. Even if all intervals overlap, the merging process within the loop still iterates through each interval once.
Space Complexity:



### Space Complexity

 The space complexity is dominated by the mergedIntervals array. In the worst-case scenario (all intervals overlap), this array can store up to n merged intervals (one for each input interval).
Explanation:

The forEach loop iterates a maximum of n times, once for each element in the intervals array.
Inside the loop, constant time operations like comparisons, assignments, and updating a single element in the previousInterval array occur.
There's no sorting involved in this algorithm, so the time complexity doesn't include a logarithmic factor.
The space complexity is linear (O(n)) because the mergedIntervals array can potentially store all n input intervals in the worst-case scenario of maximum overlap.

 
### In summary:

This approach avoids sorting, leading to a simpler implementation and potentially better performance for cases where sorting is not necessary.
However, it might not be as efficient for highly overlapping intervals compared to an approach that utilizes sorting (which can have a time complexity of O(n log n) in the average and worst cases).
Overall, the time complexity of this mergeOverlap function is linear (O(n)) in most practical cases. The space complexity is also linear (O(n)) due to the mergedIntervals array.

## Challenge request file

[View Content](https://docs.google.com/presentation/d/1HiTrNCheQa_HgP2OcI8kAliZPhE1vPbMOPMO9G3vFCk/edit#slide=id.p)

</details>

<details>
  <summary>Rotate Image (Matrix) 🗓️ Fri 14 Jun 2024</summary>


### Description

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.	

### Acceptance criteria

#### Example 1:
- Input: `[[0]]`
- Output: `[[0]]`
	

#### Example 2:
- Input: `[[1, 2], [3, 4]]`
- Output:  `[[3, 1], [4, 2]]`

#### Example 3:
- Input: array= `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`
- Output:  	`[[7, 4, 1], [8, 5, 2], [9, 6, 3]]`

#### Example 4:
- Input: array= `[[5, 1, 9, 11],[2, 4, 8, 10],[13, 3, 6, 7],[15, 14, 12, 16]]`
- Output:  	`[[15, 13, 2, 5],[14, 3, 4, 1],[12, 6, 8, 9],[16, 7, 10, 11]]`

#### Constrain # 1 Same number of elments in rows

- Input: array= `[[1, 2, 3], [5, 6], [7, 8, 9]]`
- Output: Should throw an error for invalid input: Matrix must contain equal number of elements per row as per column

#### Constrain # 2 Same number of elments in columns

- Input: array= `[[[1, 2, 3], [7, 8, 9]]]`
- Output: Should throw an error for invalid input: Matrix must contain equal number of elements per row as per column


### Analysis of complexity and space

### Time Complexity
The time complexity of the rotateMatrix function is  `O(n^2)`. This is because the function iterates over the matrix twice:

Once in the nested loop `for (let i = 0; i < n; i++) { for (let j = i + 1; j < n; j++) { ... } }` to transpose the matrix.
Once in the loop `for (row in matrix) { row.reverse() }` to reverse each row of the transposed matrix.
In both loops, i and j iterate n times in the worst case. Therefore, the total number of operations is proportional to `n * n = n^2`.



### Space Complexity

The space complexity of the rotateMatrix function is O(1). This is because the function only uses a constant amount of extra space, regardless of the size of the input matrix. The function modifies the input matrix in-place, so it doesn't need to allocate any additional data structures.



| Matrix Size | Time Complexity | Space Complexity |
| ------ | ------ | ------ |
| n x n | O(n^2) | O(1) |

### In summary:

This approach avoids sorting, leading to a simpler implementation and potentially better performance for cases where sorting is not necessary.
However, it might not be as efficient for highly overlapping intervals compared to an approach that utilizes sorting (which can have a time complexity of `O(n log n)` in the average and worst cases).
Overall, the time complexity of this mergeOverlap function is linear `(O(n))` in most practical cases. The space complexity is also linear `(O(n))` due to the `mergedIntervals` array.

## Challenge request file

[View Content](https://docs.google.com/presentation/d/114ECtSVEOxn5VStI2u020fpKpYCfjvgiJo1cUsAENa0/edit#slide=id.g24f6360d8c8_0_208)

</details>