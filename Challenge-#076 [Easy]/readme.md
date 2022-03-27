# Challenge 76

**Difficulty** `Easy`

**Language** `NodeJS`

## Prompt

Write a function that transforms a string into title case. This mostly means: capitalizing only every first letter of every word in the string. However, there are some non-obvious exceptions to title case which can't easily be hard-coded. Your function must accept, as a second argument, a set or list of words that should not be capitalized. Furthermore, the first word of every title should always have a capital leter. For example:

```
exceptions = ['jumps', 'the', 'over']
titlecase('the quick brown fox jumps over the lazy dog', exceptions)
```

This should return:

> The Quick Brown Fox jumps over the Lazy Dog