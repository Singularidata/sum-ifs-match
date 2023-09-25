# SUM IFS MATCH

SumIfsMatch is a Google Sheets formula written in Javascript using the App Script Extension developed by Singularidata.com

`SumIfsMatch` functions like the conventional `SUMIFS()` formula, enabling you to specify:

- The column to sum
- The column of criteria
- The criteria itself

However, it introduces a new operator: "\*="

## \*=

This operator represents a "contains" criterion. That is, you can use a word (or phrase) that appears within a range of criteria.

For example: `=SumIfsMatch(B:B, A:A, "10", C:C, "*=Github")`

This formula will sum the values in column B where the corresponding cell in column A equals "10" and the corresponding cell in column C contains "Github".

## Example
Do you have this table bellow:

|	A	|  B  |  C  |
| -- |-- |--  |
| row1 | foobar | 10 |
| row2 | foo | 15 |

Now you wanna sum column C where B **CONTAINS** the word *"foo"*

With sumifsMatch you can:

``=SumIfsMatch(C:C, B:B,"*=foo")``

To sum all values on column C where B CONTAINS "foo"

![enter image description here](https://media.giphy.com/media/ncTvVeWqvnNu4lZQIH/giphy.gif)
