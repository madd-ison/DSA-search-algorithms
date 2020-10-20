// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and 
// using the recursive binary search algorithm, identify the 
// sequence of numbers that each recursive call will search to try and find 8.

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and 
// using the recursive binary search algorithm, identify the sequence 
// of numbers that each recursive call will search to try and find 16.


// 1
// [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
// [3, 5, 6, 8, 11]
// [8, 11]


// 2
// [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
// [14, 15, 17, 18]
// [17, 18]
// [17], returns -1