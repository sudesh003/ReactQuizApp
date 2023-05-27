const questions = [
    {
      question: '1. If a square matrix A satisfies AT = I, then the matrix, A is_____',
      options: ['Idempotent', 'Symmetric', 'Orthogonal','Hermitian'],
      correct: 2,
    },
    {
      question: '2. How many 4-digit even numbers have all 4 digits distinct?',
      options: ['4536', '2620', '2296','2240'],
      correct: 2,
    },
    {
      question:'3. The number of 4 digit numbers having their digits in non-decreasing order (from left to right) constructed by using the digits belonging to the set {1, 2, 3} is____',
      options:['12','13','14','15'],
      correct:3,
    },
    {
      question:'4. The number of binary strings of n zeros and k ones such that no two ones are adjacent is:',
      options:['n-1Ck','nCk','nCk+1','None of the above'],
      correct:3,
    },
    {
      question:'5. Two girls have picked 10 roses, 15 sunflowers and 14 daffodils. What is the number of ways they can divide the flowers amongst  themselves?',
      options:['1638','2100','2640','None of the above'],
      correct:2,
    },
    {
      question:'6. How many substrings of different length (non-zero) can be formed from a character string of length n ?',
      options:['n',<p>n<sup>2</sup></p>,<p>2<sup>n</sup></p>,'n(n+1)/2'],
      correct:3,
    },
    {
      question:'7. A dice is thrown. Let A be the event that the number obtained is greater than 5. Let B be the event that the number obtained is less than 5. Then P (AUB) is__',
      options:['5/6','2/6','3/6','None of these'],
      correct:0,
    },
    {
      question:'8. The number of bit strings of length 8 that will either start with 1 or end with 00 is?',
      options:['32','128','160','192'],
      correct:2,
    },
    {
      question:'9. What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?',
      options:['Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)','Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)','Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(nLogn)','Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)'],
      correct:1,
    },
    {
      question:'10. Suppose we have an O(n) time algorithm that finds the median of an unsorted array. Now consider a QuickSort implementation where we first find the median using the above algorithm, then use the median as a pivot. What will be the worst-case time complexity of this modified QuickSort?',
      options:['O(n^2 Logn)','O(n^2)','O(n Logn Logn)','O(nLogn)'],
      correct:3,
    },
    {
      question:'11. The recurrence relation capturing the optimal time of the Tower of Hanoi problem with n discs is_____',
      options:['T(n) = 2T(n – 2) + 2','T(n) = 2T(n – 1) + n','T(n) = 2T(n/2) + 1','T(n) = 2T(n – 1) + 1'],
      correct:3,
    },
    {
      question:'12. Which of the following is not O(n2)?',
      options:[<p>(15)*n<sup>2</sup></p>,<p>n<sup>1.98</sup></p>,<p>n<sup>3</sup>/(sqrt(n))</p>,<p>(20)*n<sup>2</sup></p>],
      correct:2,
    },
    {
      question:'13. What is the value of the sum: 1 + 2 + 4 + 8 + ... + 2^n, where n is a positive integer?',
      options:['2^n - 1','2^n','2^(n+1)-1','2^(n+1)'],
      correct:2,
    },
    {
      question:`14. There's a digit that is greater than 3 such that the digit gives remainder 0 when divided by 3 and remainder non-zero when divided by 6. Which one of the following is divisible by 5?`,
      options:['2n','3n','2n+4','3n+3'],
      correct:3,
    },
    {
      question:`15. k, l, m and n are four natural numbers having following arithmetic relation: \u2003 \u2003 \u2003 \u2003 k - 1948 = l + 1949 = m - 1950 = n + 1951  Which one of the following is the largest natural number?`,
      options:['k','l','m','n'],
      correct:2,
    },

    
    // Add more questions...
  ];
  
  export default questions;