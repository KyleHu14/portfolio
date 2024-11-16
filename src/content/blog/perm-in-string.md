---
author: Kyle Hu
pubDatetime: 2024-11-16T22:57:22Z
modDatetime:
title: Leetcode - Permutation in String
slug: "permutation-in-string"
github:
link: "https://leetcode.com/problems/permutation-in-string/"
featured:
ogImage:
tags:
    - leetcode
    - two pointer
    - hashing
description: "Explanation of the Leetcode Permutation in String problem."
---

## Table of contents

## Introduction

This problem is a fairly straightforward two pointer hashing problem. I will show you two ways of solving this problem.

## Intuition

First let's understand how to conceptually solve this problem. For permutations, we do not care about order. Another way we can think of this is we only care about the frequency of characters.

We will create a window that will check if the frequency of characters in the window is the same as permutation given. Let's illustrate this logic with an example.

## Example

Let's take the first example.

```python
s1 = "ab" # The permutation
s2 = "eidbaooo" # The main string
```

Our window starts with the substring of `ei`. This window is invalid since it contains no letters from s1. We can see this by comparing the frequencies maps.

```python
s1_map = {"a": 1, "b": 1}
window_map = {"e": 1, "i": 1}
```

We will move the window to `id`, `db`, and we finally find a match with `ba`.

How do we know we have found a match at `ba`? We can compare the frequencies of both strings. Take a look at the maps of both `s1` and our window.

```python
s1_map = {"a": 1, "b": 1}
window_map = {"b": 1, "a": 1}
```

Although the order is different, they have the same frequencies for each letter. Let's code this solution.

## Code Solution

### Setting up variables

Before we do any looping, we need to create some variables to track the window. We are going to need 2 maps to track the letter frequencies of our window.

I will also go ahead and count the frequencies of each letter in s1.

You will encounter many Python solutions using the Counter module. I personally will not use that since other languages may not have a Counter counterpart.

```python
s1_map = {}
window_map = {}

for letter in s1:
    # s1_map[letter] = s1_map[letter] or 0 if it doesn't exist + 1
    s1_map[letter] = s1_map.get(letter, 0) + 1

```

### Moving the Sliding Window

Let's start moving our sliding window by creating a for loop. The looping index will represent as the right pointer that constantly encounters new letters. For each new letter encountered, let's add it to the sliding window map. We don't want to just add any letter though, we only care about letters that appear in `s1`.

```python
s1_map = {}
window_map = {}

for letter in s1:
    # s1_map[letter] = s1_map[letter] or 0 if it doesn't exist + 1
    s1_map[letter] = s1_map.get(letter, 0) + 1

for index in range(len(s2)):
    s2_letter = s2[index]

    if s2_letter in s1:
        window_map[s2_letter] = window_map.get(s2_letter, 0) + 1
```

Let's now create the "window" part of the code. Our window can't be infinitely expanding, it must trim the left side as the right side grows.

To do this we must detect if the length of our window exceeds the length of `s1`. We can do this by treating the `index` of our for loop as length of the window. If `index` exceeds the length of `s1`, we need to trim. Note that we must add 1 to `index` since its 0 based and we are looking for the length from 0 to the `index`.

```python
s1_map = {}
window_map = {}

for letter in s1:
    # s1_map[letter] = s1_map[letter] or 0 if it doesn't exist + 1
    s1_map[letter] = s1_map.get(letter, 0) + 1

for index in range(len(s2)):
    s2_letter = s2[index]

    if s2_letter in s1:
        window_map[s2_letter] = window_map.get(s2_letter, 0) + 1

    if index + 1 > len(s1):
```

Before we actually trim or update our window_map, we need to make sure that the letter on the left is in `s1` as well. Let's add that condition as well.

```python
s1_map = {}
window_map = {}

for letter in s1:
    # s1_map[letter] = s1_map[letter] or 0 if it doesn't exist + 1
    s1_map[letter] = s1_map.get(letter, 0) + 1

for index in range(len(s2)):
    s2_letter = s2[index]

    if s2_letter in s1:
        window_map[s2_letter] = window_map.get(s2_letter, 0) + 1

    if index + 1 > len(s1) and s2[index - len(s1)] in s1:
```

If our window has a length greater than `s1` AND the letter that needs to be trimmed is in s1, we can go ahead and trim.

```python
s1_map = {}
window_map = {}

for letter in s1:
    # s1_map[letter] = s1_map[letter] or 0 if it doesn't exist + 1
    s1_map[letter] = s1_map.get(letter, 0) + 1

for index in range(len(s2)):
    s2_letter = s2[index]

    if s2_letter in s1:
        window_map[s2_letter] = window_map.get(s2_letter, 0) + 1

    if index + 1 > len(s1) and s2[index - len(s1)] in s1:
        window_map[ s2[index - len(s1)] ] -= 1
```

Lastly, after performing these updates, we can check for the end condition which is if the `window_map` is the same as `s1_map`.

## Final Code (Solution 1)

```python
s1_map = {}
window_map = {}

for letter in s1:
    # s1_map[letter] = s1_map[letter] or 0 if it doesn't exist + 1
    s1_map[letter] = s1_map.get(letter, 0) + 1

for index in range(len(s2)):
    s2_letter = s2[index]

    if s2_letter in s1:
        window_map[s2_letter] = window_map.get(s2_letter, 0) + 1

    if index + 1 > len(s1) and s2[index - len(s1)] in s1:
        window_map[ s2[index - len(s1)] ] -= 1

    if window_map == s1_map:
        return True
return False
```
