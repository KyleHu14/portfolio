---
author: Kyle Hu
pubDatetime: 2024-11-08T22:57:22Z
modDatetime:
title: Leetcode - Subsets
slug: "subsets"
github:
link: "https://leetcode.com/problems/subsets/description/"
featured:
ogImage:
tags:
    - leetcode
    - backtracking
    - recursion
description: "Explanation of the Leetcode Subsets problem."
---

## Table of contents

## Introduction

The subsets problem is a fairly straightforward problem but can be a little confusing due to recursion.

## Intuition

First let's understand how to conceptually solve this problem.

To build the subsets of any list of numbers, we just need to go through each number in the list and build a subset depending on if we add or don't add the number.

## Example

To illustrate the intuition, let's take the example of :

```python
nums = [1, 2]
```

### Building the First Subset

When building all subsets of nums, we can choose to either pick or skip a number. Let's first look at `1`. We can choose to pick or skip `1`. Let's first pick `1` and add it to the current subset.

Our temporary subset looks like : `[1]`.

After processing `1`, let's look at `2`. We can once again, choose to either pick or skip `2`. Let's pick `2`.

Our temporary subset looks like : `[1, 2]`.

We have processed all numbers for this subset and we can add it to our result.

`result = [ [1,2] ]`

### Building the Second Subset

Let's go back one step to when our temporary subset was `[1]`. We previously chose to pick `2`, but now we can choose to skip `2`.

Our temporary subset looks like : `[1]`.

After processing all the numbers, we can once again add it to our result.

`result = [ [1,2], [1] ]`

### Building the Third Subset

We have now processed all subsets that start with a `1`. We have to now go back to the step when our subset was `[]`. We initially chose `1` when building all subsets that start with `1`. Now we have to explore the subsets that do not start with `1`.

In other words after picking `1` and exploring all subsets associated with it (`[1,2], [1]`) we need to now skip it to explore other unique subsets that do not start with `1`.

If we skip `1` we can also pick `2`. This leaves us with the subset `[2]`.

Lastly, we can skip both numbers and reach the subset `[]`.

## Code Solution

```python
def subsets(self, nums: List[int]) -> List[List[int]]:
    subset = []
    result = []

    def dfs(cur_index):
        if cur_index == len(nums):
            result.append(subset[:])
            return

        subset.append(nums[cur_index])
        dfs(cur_index = cur_index + 1)

        subset.pop()
        dfs(cur_index = cur_index + 1)

    dfs(0)
    return result
```

### Explanation

1. We first create two lists, the final `result` list and a `subset` list.
2. Our function will only keep track of the current index being processed. The `subsets` list declared above will keep track of the current subset being processed.
3. Within the dfs function, the stopping point is when we have processed all numbers. This can be translated as when the `cur_idex` has reached `len(nums)`, since the max index is `len(nums) - 1`.
4. If we have reached a stopping point, we can add `subset` to the `result` list.
5. We use the `[:]` notation since we are adding a shallow copy of `subset`, since all lists are pass by reference in Python.
6. The last part of the function represents either picking (represented by appending) or skipping (represented by popping) the current value from the subset list and recursively checking the subset associated with that route.
