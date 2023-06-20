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
