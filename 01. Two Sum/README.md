# Two sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Solution:

## 1. Using a for loop inside another for loop - O(n^2) 

Then compare inside the second loop if the target is equal to the sum of the nums

## 2. Using a for loop and a hash table

Each number will have a complement number (number + complement = target ) and will save inside a hash table with its index.
Each loop will search for the complement in the hashtable, and if the hashtable has the complement property will return the indexes.
