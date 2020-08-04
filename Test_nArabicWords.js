import {nArabicWords} from "./nArabicWords.js";


testCases1();
testCases2();
testCases3();
testCases4();
testCases5();
testCases6();
testCases7();
testCases8();
testCases9();
testCases10();
testCases11();

//=========================================
//             Test Code
//=========================================
function testCases1() {
let r=0; // test tracker
    r |= test("",0,"صفر");
    r |= test(0,0,"صفر");
    r |= test(1,0,"واحد");
    r |= test(2,0,"اثنان");
    r |= test(3,0,"ثلاثة");
    r |= test(4,0,"أربعة");
    r |= test(5,0,"خمسة");
    r |= test(6,0,"ستة");
    r |= test(7,0,"سبعة");
    r |= test(8,0,"ثمانية");
    r |= test(9,0,"تسعة");
    r |= test(10,0,"عشرة");
    r |= test(11,0,"أحد عشر");
    r |= test(12,0,"اثنا عشر");
    r |= test(13,0,"ثلاثة عشر");
    r |= test(14,0,"أربعة عشر");
    r |= test(15,0,"خمسة عشر");
    r |= test(16,0,"ستة عشر");
    r |= test(17,0,"سبعة عشر");
    r |= test(18,0,"ثمانية عشر");
    r |= test(19,0,"تسعة عشر");
    r |= test(20,0,"عشرون");
    r |= test(21,0,"واحد وعشرون");
    r |= test(22,0,"اثنان وعشرون");
    r |= test(23,0,"ثلاثة وعشرون");
    r |= test(30,0,"ثلاثون");
    r |= test(31,0,"واحد وثلاثون");
    r |= test(32,0,"اثنان وثلاثون");
    r |= test(33,0,"ثلاثة وثلاثون");
    r |= test(40,0,"أربعون");
    r |= test(41,0,"واحد وأربعون");
    r |= test(42,0,"اثنان وأربعون");
    r |= test(43,0,"ثلاثة وأربعون");
    r |= test(99,0,"تسعة وتسعون");
    r |= test(100,0,"مائة");
    r |= test(101,0,"مائة وواحد");
    r |= test(102,0,"مائة واثنان");
    r |= test(103,0,"مائة وثلاثة");
    r |= test(104,0,"مائة وأربعة");
    r |= test(105,0,"مائة وخمسة");
    r |= test(106,0,"مائة وستة");
    r |= test(107,0,"مائة وسبعة");
    r |= test(108,0,"مائة وثمانية");
    r |= test(109,0,"مائة وتسعة");
    r |= test(110,0,"مائة وعشرة");
    r |= test(111,0,"مائة وأحد عشر");
    r |= test(112,0,"مائة واثنا عشر");
    r |= test(113,0,"مائة وثلاثة عشر");
    r |= test(120,0,"مائة وعشرون");
    r |= test(121,0,"مائة وواحد وعشرون");
    r |= test(122,0,"مائة واثنان وعشرون");
    r |= test(123,0,"مائة وثلاثة وعشرون");
    r |= test(130,0,"مائة وثلاثون");
    r |= test(131,0,"مائة وواحد وثلاثون");
    r |= test(132,0,"مائة واثنان وثلاثون");
    r |= test(133,0,"مائة وثلاثة وثلاثون");
    r |= test(140,0,"مائة وأربعون");
    r |= test(150,0,"مائة وخمسون");
    r |= test(199,0,"مائة وتسعة وتسعون");
    r |= test(200,0,"مائتان");
    r |= test(201,0,"مائتان وواحد");
    r |= test(202,0,"مائتان واثنان");
    r |= test(203,0,"مائتان وثلاثة");
    r |= test(204,0,"مائتان وأربعة");
    r |= test(205,0,"مائتان وخمسة");
    r |= test(206,0,"مائتان وستة");
    r |= test(207,0,"مائتان وسبعة");
    r |= test(208,0,"مائتان وثمانية");
    r |= test(209,0,"مائتان وتسعة");
    r |= test(210,0,"مائتان وعشرة");
    r |= test(211,0,"مائتان وأحد عشر");
    r |= test(212,0,"مائتان واثنا عشر");
    r |= test(213,0,"مائتان وثلاثة عشر");
    r |= test(220,0,"مائتان وعشرون");
    r |= test(221,0,"مائتان وواحد وعشرون");
    r |= test(222,0,"مائتان واثنان وعشرون");
    r |= test(223,0,"مائتان وثلاثة وعشرون");
    r |= test(230,0,"مائتان وثلاثون");
    r |= test(231,0,"مائتان وواحد وثلاثون");
    r |= test(232,0,"مائتان واثنان وثلاثون");
    r |= test(233,0,"مائتان وثلاثة وثلاثون");
    r |= test(299,0,"مائتان وتسعة وتسعون");
    r |= test(300,0,"ثلاثمائة");
    r |= test(301,0,"ثلاثمائة وواحد");
    r |= test(302,0,"ثلاثمائة واثنان");
    r |= test(303,0,"ثلاثمائة وثلاثة");
    r |= test(310,0,"ثلاثمائة وعشرة");
    r |= test(311,0,"ثلاثمائة وأحد عشر");
    r |= test(312,0,"ثلاثمائة واثنا عشر");
    r |= test(313,0,"ثلاثمائة وثلاثة عشر");
    r |= test(320,0,"ثلاثمائة وعشرون");
    r |= test(321,0,"ثلاثمائة وواحد وعشرون");
    r |= test(322,0,"ثلاثمائة واثنان وعشرون");
    r |= test(323,0,"ثلاثمائة وثلاثة وعشرون");
    r |= test(330,0,"ثلاثمائة وثلاثون");
    r |= test(331,0,"ثلاثمائة وواحد وثلاثون");
    r |= test(332,0,"ثلاثمائة واثنان وثلاثون");
    r |= test(333,0,"ثلاثمائة وثلاثة وثلاثون");
    r |= test(340,0,"ثلاثمائة وأربعون");
    r |= test(400,0,"أربعمائة");
    r |= test(500,0,"خمسمائة");
    r |= test(600,0,"ستمائة");
    r |= test(838,0,"ثمانمائة وثمانية وثلاثون");
    r |= test(999,0,"تسعمائة وتسعة وتسعون");
    r |= test(1000,0,"ألف");
    r |= test(2000,0,"ألفان");
    r |= test(2001,0,"ألفان وواحد");
    r |= test(2002,0,"ألفان واثنان");
    r |= test(2003,0,"ألفان وثلاثة");
    r |= test(2011,0,"ألفان وأحد عشر");
    r |= test(2022,0,"ألفان واثنان وعشرون");
    r |= test(2100,0,"ألفان ومائة");
    r |= test(2200,0,"ألفان ومائتان");
    r |= test(2300,0,"ألفان وثلاثمائة");
    r |= test(3001,0,"ثلاثة آلاف وواحد");
    r |= test(3002,0,"ثلاثة آلاف واثنان");
    r |= test(3003,0,"ثلاثة آلاف وثلاثة");
    r |= test(3011,0,"ثلاثة آلاف وأحد عشر");
    r |= test(3022,0,"ثلاثة آلاف واثنان وعشرون");
    r |= test(3100,0,"ثلاثة آلاف ومائة");
    r |= test(3200,0,"ثلاثة آلاف ومائتان");
    r |= test(3300,0,"ثلاثة آلاف وثلاثمائة");
    r |= test(4001,0,"أربعة آلاف وواحد");
    r |= test(4002,0,"أربعة آلاف واثنان");
    r |= test(10001,0,"عشرة آلاف وواحد");
    r |= test(10002,0,"عشرة آلاف واثنان");
    r |= test(10003,0,"عشرة آلاف وثلاثة");
    r |= test(10011,0,"عشرة آلاف وأحد عشر");
    r |= test(10022,0,"عشرة آلاف واثنان وعشرون");
    r |= test(10100,0,"عشرة آلاف ومائة");
    r |= test(10200,0,"عشرة آلاف ومائتان");
    r |= test(10300,0,"عشرة آلاف وثلاثمائة");
    r |= test(11001,0,"أحد عشر ألفًا وواحد");
    r |= test(11002,0,"أحد عشر ألفًا واثنان");
    r |= test(11003,0,"أحد عشر ألفًا وثلاثة");
    r |= test(11011,0,"أحد عشر ألفًا وأحد عشر");
    r |= test(11022,0,"أحد عشر ألفًا واثنان وعشرون");
    r |= test(11100,0,"أحد عشر ألفًا ومائة");
    r |= test(11200,0,"أحد عشر ألفًا ومائتان");
    r |= test(11300,0,"أحد عشر ألفًا وثلاثمائة");
    r |= test(12001,0,"اثنا عشر ألفًا وواحد");
    r |= test(12002,0,"اثنا عشر ألفًا واثنان");
    r |= test(12003,0,"اثنا عشر ألفًا وثلاثة");
    r |= test(12011,0,"اثنا عشر ألفًا وأحد عشر");
    r |= test(12022,0,"اثنا عشر ألفًا واثنان وعشرون");
    r |= test(12100,0,"اثنا عشر ألفًا ومائة");
    r |= test(12200,0,"اثنا عشر ألفًا ومائتان");
    r |= test(12300,0,"اثنا عشر ألفًا وثلاثمائة");
    r |= test(13001,0,"ثلاثة عشر ألفًا وواحد");
    r |= test(13002,0,"ثلاثة عشر ألفًا واثنان");
    r |= test(13003,0,"ثلاثة عشر ألفًا وثلاثة");
    r |= test(13011,0,"ثلاثة عشر ألفًا وأحد عشر");
    r |= test(13022,0,"ثلاثة عشر ألفًا واثنان وعشرون");
    r |= test(13100,0,"ثلاثة عشر ألفًا ومائة");
    r |= test(13200,0,"ثلاثة عشر ألفًا ومائتان");
    r |= test(13300,0,"ثلاثة عشر ألفًا وثلاثمائة");
    r |= test(20001,0,"عشرون ألفًا وواحد");
    r |= test(20002,0,"عشرون ألفًا واثنان");
    r |= test(20003,0,"عشرون ألفًا وثلاثة");
    r |= test(20011,0,"عشرون ألفًا وأحد عشر");
    r |= test(20022,0,"عشرون ألفًا واثنان وعشرون");
    r |= test(20100,0,"عشرون ألفًا ومائة");
    r |= test(20200,0,"عشرون ألفًا ومائتان");
    r |= test(20300,0,"عشرون ألفًا وثلاثمائة");
    r |= test(100000,0,"مائة ألف");
    r |= test(100001,0,"مائة ألف وواحد");
    r |= test(100002,0,"مائة ألف واثنان");
    r |= test(200000,0,"مائتا ألف");
    r |= test(200001,0,"مائتا ألف وواحد");
    r |= test(200002,0,"مائتا ألف واثنان");
    r |= test(200003,0,"مائتا ألف وثلاثة");
    r |= test(300000,0,"ثلاثمائة ألف");
    r |= test(300300,0,"ثلاثمائة ألف وثلاثمائة");
    r |= test(1000032,0,"مليون واثنان وثلاثون");
    r |= test(1000001,0,"مليون وواحد");
    r |= test(1000002,0,"مليون واثنان");
    r |= test(1000003,0,"مليون وثلاثة");
    r |= test(2002002,0,"مليونان وألفان واثنان");
    r |= test(2002001,0,"مليونان وألفان وواحد");
    r |= test(2002003,0,"مليونان وألفان وثلاثة");
    r |= test(2002000,0,"مليونان وألفان");
    r |= test(2002002000,0,"ملياران ومليونان وألفان");
    r |= test(2452452000,0,"ملياران وأربعمائة واثنان وخمسون مليونًا وأربعمائة واثنان وخمسون ألفًا");
    r |= test("٢٤٥٢٤٥٢٠٠٠",0,"ملياران وأربعمائة واثنان وخمسون مليونًا وأربعمائة واثنان وخمسون ألفًا");
    r |= test(2452002000,0,"ملياران وأربعمائة واثنان وخمسون مليونًا وألفان");
    r |= test(255000000000,0,"مائتان وخمسة وخمسون مليارًا");
    if (r==0) console.log("Test Case  1   ....Passed.");
}

function testCases2() {
let r=0; // test tracker
    r |= test(16588464060,0,"ستة عشر مليارًا وخمسمائة وثمانية وثمانون مليونًا وأربعمائة وأربعة وستون ألفًا وستون");
    r |= test(25933508149,0,"خمسة وعشرون مليارًا وتسعمائة وثلاثة وثلاثون مليونًا وخمسمائة وثمانية آلاف ومائة وتسعة وأربعون");
    r |= test(200_000_000,0,"مائتا مليون");
    r |= test(2_000_000,0,"مليونان");
    r |= test(200_222_200,0,"مائتا مليون ومائتان واثنان وعشرون ألفًا ومائتان");

if (r==0) console.log("Test Case  2   ....Passed.");
}

function testCases3() {
  // ---- Test for Feminine Numbers
  let r=0; // test tracker
  r |= test(""    ,{Feminine:"on"},"صفر");
  r |= test(1     ,{Feminine:"on"},"واحدة");
  r |= test(2     ,{Feminine:"on"},"اثنتان");
  r |= test(3     ,{Feminine:"on"},"ثلاث");
  r |= test(4     ,{Feminine:"on"},"أربع");
  r |= test(5     ,{Feminine:"on"},"خمس");
  r |= test(6     ,{Feminine:"on"},"ست");
  r |= test(7     ,{Feminine:"on"},"سبع");
  r |= test(8     ,{Feminine:"on"},"ثمان");
  r |= test(9     ,{Feminine:"on"},"تسع");
  r |= test(10    ,{Feminine:"on"},"عشر");
  r |= test(11    ,{Feminine:"on"},"إحدى عشرة");
  r |= test(12    ,{Feminine:"on"},"اثنتا عشرة");
  r |= test(13    ,{Feminine:"on"},"ثلاث عشرة");
  r |= test(14    ,{Feminine:"on"},"أربع عشرة");
  r |= test(15    ,{Feminine:"on"},"خمس عشرة");
  r |= test(16    ,{Feminine:"on"},"ست عشرة");
  r |= test(17    ,{Feminine:"on"},"سبع عشرة");
  r |= test(18    ,{Feminine:"on"},"ثمان عشرة");
  r |= test(19    ,{Feminine:"on"},"تسع عشرة");
  r |= test(20    ,{Feminine:"on"},"عشرون");
  r |= test(21    ,{Feminine:"on"},"إحدى وعشرون");
  r |= test(22    ,{Feminine:"on"},"اثنتان وعشرون");
  r |= test(23    ,{Feminine:"on"},"ثلاث وعشرون");
  r |= test(24    ,{Feminine:"on"},"أربع وعشرون");
  r |= test(2013  ,{Feminine:"on"},"ألفان وثلاث عشرة");
  r |= test(213013,{Feminine:"on"},"مائتان وثلاثة عشر ألفًا وثلاث عشرة");
  r |= test(13013 ,{Feminine:"on"},"ثلاثة عشر ألفًا وثلاث عشرة");
  r |= test(200002,{Feminine:"on"},"مائتا ألف واثنتان");
  r |= test(200010,{Feminine:"on"},"مائتا ألف وعشر");
  r |= test(200011,{Feminine:"on"},"مائتا ألف وإحدى عشرة");
  r |= test(200012,{Feminine:"on"},"مائتا ألف واثنتا عشرة");
  r |= test(200013,{Feminine:"on"},"مائتا ألف وثلاث عشرة");
  r |= test(1     ,{Feminine:"on"},"واحدة");
  r |= test(2     ,{Feminine:"on"},"اثنتان");
  if (r==0) console.log("Test Case  3 - Option {Feminine}    ....Passed.");
  }


function testCases4() {
// ---- Test for using Miah مئة بدل مائة
let r=0; // test tracker
r |= test(100  ,{Miah:"on"},"مئة");
r |= test(200  ,{Miah:"on"},"مئتان");
r |= test(300  ,{Miah:"on"},"ثلاثمئة");
r |= test(2700 ,{Miah:"on"},"ألفان وسبعمئة");
r |= test(200  ,{Miah:"on",AG:"on"},"مئتين");
r |= test(2700 ,{Miah:"on",AG:"on"},"ألفين وسبعمئة");
if (r==0) console.log("Test Case  4 - Option {Miah}        ....Passed.");
}

function testCases5() {
// ---- Test for Inserting Comma between triplets
let r=0; // test tracker
r |= test(1200      ,{Comma:"on"},"ألف، ومائتان");
r |= test(122500    ,{Comma:"on"},"مائة واثنان وعشرون ألفًا، وخمسمائة");
r |= test(100100100 ,{Comma:"on"},"مائة مليون، ومائة ألف، ومائة");
if (r==0) console.log("Test Case  5 - Option {Comma}       ....Passed.");
}

function testCases6() {
// ---- Test for separating Miah from number
let r=0; // test tracker
r |= test(300  ,{SplitHund:"on"},"ثلاث مائة");
r |= test(500  ,{SplitHund:"on"},"خمس مائة");
r |= test(600  ,{SplitHund:"on"},"ست مائة");
r |= test(2700 ,{SplitHund:"on"},"ألفان وسبع مائة");
if (r==0) console.log("Test Case  6 - Option {SplitHund}   ....Passed.");
}

function testCases7() {
// ---- Test for text to be followed
let r=0; // test tracker
r |= test(200     ,{TextToFollow:"on"},"مائتا");
r |= test(2000    ,{TextToFollow:"on"},"ألفا");
r |= test(2000_000,{TextToFollow:"on"},"مليونا");
r |= test(200     ,{AG:"on",TextToFollow:"on"},"مائتي");
r |= test(2000    ,{AG:"on",TextToFollow:"on"},"ألفي");
r |= test(2000000 ,{AG:"on",TextToFollow:"on"},"مليوني");
r |= test(23420000,{TextToFollow:"on"},"ثلاثة وعشرون مليونًا وأربعمائة وعشرون ألف");

if (r==0) console.log("Test Case  7 - Option {TextToFollow}....Passed.");
}

function testCases8() {
// ---- Test for Billions
let r=0; // test tracker
r |= test(2002002000  ,{Billions:"on"},"بليونان ومليونان وألفان");
r |= test(2452452000  ,{Billions:"on"},"بليونان وأربعمائة واثنان وخمسون مليونًا وأربعمائة واثنان وخمسون ألفًا");
r |= test(2452002000  ,{Billions:"on"},"بليونان وأربعمائة واثنان وخمسون مليونًا وألفان");
r |= test(255000000000,{Billions:"on"},"مائتان وخمسة وخمسون بليونًا");
if (r==0) console.log("Test Case  8 - Option {Billions}    ....Passed.");
}

function testCases9() {
// ---- Test for AG Case
let r=0; // test tracker
r |= test(2,{AG:"on"},"اثنين");
r |= test(12,{AG:"on"},"اثني عشر");
r |= test(20,{AG:"on"},"عشرين");
r |= test(21,{AG:"on"},"واحد وعشرين");
r |= test(22,{AG:"on"},"اثنين وعشرين");
r |= test(23,{AG:"on"},"ثلاثة وعشرين");
r |= test(30,{AG:"on"},"ثلاثين");
r |= test(102,{AG:"on"},"مائة واثنين");
r |= test(120,{AG:"on"},"مائة وعشرين");
r |= test(121,{AG:"on"},"مائة وواحد وعشرين");
r |= test(122,{AG:"on"},"مائة واثنين وعشرين");
r |= test(123,{AG:"on"},"مائة وثلاثة وعشرين");
r |= test(199,{AG:"on"},"مائة وتسعة وتسعين");
r |= test(200,{AG:"on"},"مائتين");
r |= test(202,{AG:"on"},"مائتين واثنين");
r |= test(2000,{AG:"on"},"ألفين");
r |= test(2001,{AG:"on"},"ألفين وواحد");
r |= test(2002,{AG:"on"},"ألفين واثنين");
r |= test(2022,{AG:"on"},"ألفين واثنين وعشرين");
r |= test(2200,{AG:"on"},"ألفين ومائتين");
r |= test(10200,{AG:"on"},"عشرة آلاف ومائتين");
r |= test(12002,{AG:"on"},"اثني عشر ألفًا واثنين");
r |= test(100002,{AG:"on"},"مائة ألف واثنين");
r |= test(200000,{AG:"on"},"مائتي ألف");
r |= test(200002,{AG:"on"},"مائتي ألف واثنين");
r |= test(2002002,{AG:"on"},"مليونين وألفين واثنين");
r |= test(2002000,{AG:"on"},"مليونين وألفين");
r |= test(2002002000,{AG:"on"},"مليارين ومليونين وألفين");
r |= test(2452452000,{AG:"on"},"مليارين وأربعمائة واثنين وخمسين مليونًا وأربعمائة واثنين وخمسين ألفًا");
r |= test(2452002000,{AG:"on"},"مليارين وأربعمائة واثنين وخمسين مليونًا وألفين");
r |= test(16588464060,{AG:"on"},"ستة عشر مليارًا وخمسمائة وثمانية وثمانين مليونًا وأربعمائة وأربعة وستين ألفًا وستين");
r |= test(25933508149,{AG:"on"},"خمسة وعشرين مليارًا وتسعمائة وثلاثة وثلاثين مليونًا وخمسمائة وثمانية آلاف ومائة وتسعة وأربعين");
r |= test(200000000,{AG:"on"},"مائتي مليون");
r |= test(2000000,{AG:"on"},"مليونين");
r |= test(200222200,{AG:"on"},"مائتي مليون ومائتين واثنين وعشرين ألفًا ومائتين");

if (r==0) console.log("Test Case  9 - Option {AG}          ....Passed.");
}

function testCases10() {
    // ---- Test for Subjects
    let r=0; // test tracker
let Students = ["طالب","طالبان","طلاب","طالبًا"];

r |= test(1,{Subject:Students},"طالب واحد");
r |= test(2,{Subject:Students},"طالبان اثنان");
r |= test(3,{Subject:Students},"ثلاثة طلاب");
r |= test(10,{Subject:Students},"عشرة طلاب");
r |= test(13,{Subject:Students},"ثلاثة عشر طالبًا");
r |= test(20,{Subject:Students},"عشرون طالبًا");
r |= test(21,{Subject:Students},"واحد وعشرون طالبًا");
r |= test(100,{Subject:Students},"مائة طالب");
r |= test(1000,{Subject:Students},"ألف طالب");
r |= test(350,{Subject:Students},"ثلاثمائة وخمسون طالبًا");
r |= test(300001,{Subject:Students},"ثلاثمائة ألف وطالب واحد");
r |= test(300002,{Subject:Students},"ثلاثمائة ألف وطالبان اثنان");
r |= test(300003,{Subject:Students},"ثلاثمائة ألف وثلاثة طلاب");
r |= test(3000015,{Subject:Students},"ثلاثة ملايين وخمسة عشر طالبًا");
r |= test(102000,{Subject:Students},"مائة وألفان طالب");
r |= test(101000,{Subject:Students},"مائة وألف طالب");
r |= test(101002,{Subject:Students},"مائة وألف وطالبان اثنان");

let Girls = ["بنت","بنتان","بنات","بنتًا"];

r |= test(1,{Feminine:"on",Subject:Girls},"بنت واحدة");
r |= test(2,{Feminine:"on",Subject:Girls},"بنتان اثنتان");
r |= test(3,{Feminine:"on",Subject:Girls},"ثلاث بنات");
r |= test(10,{Feminine:"on",Subject:Girls},"عشر بنات");
r |= test(13,{Feminine:"on",Subject:Girls},"ثلاث عشرة بنتًا");
r |= test(20,{Feminine:"on",Subject:Girls},"عشرون بنتًا");
r |= test(21,{Feminine:"on",Subject:Girls},"إحدى وعشرون بنتًا");
r |= test(100,{Feminine:"on",Subject:Girls},"مائة بنت");
r |= test(1000,{Feminine:"on",Subject:Girls},"ألف بنت");
r |= test(300001,{Feminine:"on",Subject:Girls},"ثلاثمائة ألف وبنت واحدة");
r |= test(300002,{Feminine:"on",Subject:Girls},"ثلاثمائة ألف وبنتان اثنتان");
r |= test(300003,{Feminine:"on",Subject:Girls},"ثلاثمائة ألف وثلاث بنات");
r |= test(3000015,{Feminine:"on",Subject:Girls},"ثلاثة ملايين وخمس عشرة بنتًا");
r |= test(102000,{Feminine:"on",Subject:Girls},"مائة وألفان بنت");
r |= test(101000,{Feminine:"on",Subject:Girls},"مائة وألف بنت");
r |= test(101002,{Feminine:"on",Subject:Girls},"مائة وألف وبنتان اثنتان");

if (r==0) console.log("Test Case 10 - Option {Subject}     ....Passed.");
}

function testCases11() {
// ---- Test for Legal
let r=0; // test tracker
r |= test(101234,{Legal:"on"},"مائة ألف وألف ومائتان وأربعة وثلاثون");
r |= test(102234,{Legal:"on"},"مائة ألف وألفان ومائتان وأربعة وثلاثون");
r |= test(103234,{Legal:"on"},"مائة وثلاثة آلاف ومائتان وأربعة وثلاثون");
r |= test(102000,{Legal:"on"},"مائة ألف وألفان");
r |= test(502102000,{Legal:"on"},"خمسمائة مليون ومليونان ومائة ألف وألفان");

if (r==0) console.log("Test Case 11 - Option {Legal}       ....Passed.");
}
//------------------
function test(n,flags,should) {
let result = nArabicWords(n,flags);
if (result !== should) {console.log(`${n} Output   : ${result}\n${n} Should be: ${should}`);return 1;}
}
