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

Initially, we can pick if we want to choose 1 or 2. We can pick neither of these two numbers and reach the subset `[]`.

Alternatively, we can also just pick 1 and not pick 2 and reach the subset `[1]`.
