/* '   123456  ' -> так
' -0123456  ' -> так
'     -12345  ' -> ні
'   -023456' -> ні
 '-0234560' -> так,
' -000016   ' -> ні
' -000000123456  ' -> так
' - 000000123456  ' -> ні
' +000123456  ' -> так
'100000' -> так  
 '1000000' -> ні*/

const sixDigitsArr = [
  '   123456  ',
  ' -0123456  ',
  '     -12345  ',
  '   -023456',
  '-0234560',
  ' -000016   ',
  ' -000000123456  ',
  ' - 000000123456  ',
  ' +000123456  ',
  '100000',
  '1000000'
];

const sixDigitsRegEx = /^[+-]?0*[1-9]\d{5}$/;

const sixDigits = sixDigitsArr.map((element) => `${element.trim()} -> ${sixDigitsRegEx.test(element.trim()) ? 'так' : 'ні'} `);

console.log(sixDigits);

