/* '   123456  ' -> true
' -0123456  ' -> true
'     -12345  ' -> false
'   -023456' -> false
 '-0234560' -> true,
' -000016   ' -> false
' -000000123456  ' -> true
' - 000000123456  ' -> false
' +000123456  ' -> true 
 '100000' -> true*/

const sixDigitsArr = [
  '   123456  ',
  ' -0123456  ',
  '     -12345  ',
  '   -023456',
  '  -0234560',
  ' -000016   ',
  ' -000000123456  ',
  ' - 000000123456  ',
  '  +000123456  ',
  '  100000  ',
];

const sixDigitsRegEx = /^\s*[+-]?0*[1-9]\d{5}\s*$/;

const sixDigits = sixDigitsArr.map(
  (element) => `${element} -> ${sixDigitsRegEx.test(element)}`
);

console.log(sixDigits);
