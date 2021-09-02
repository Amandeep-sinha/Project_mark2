var read = require('readline-sync');
const c = require("chalk");
score=0;
var uname = read.question(c.bold.underline.red("Hey, May I have your name ? \n"));
console.log("Welcome "+ uname+" !" +"\n nice to see you here in the quizGame :) \n  " );
var a= read.question(c.red("So, Are you prepared for this quiz   (yes/no)"));
if (a.toLowerCase() === "yes" )
{
  console.log(c.blue("So, The rules of the game are below :- \n> You have to answer in one word \n> For correct answer you'll get +1 where as for wrong its -1 \n> There are total 10 questions\n > You can answer either in lower case or upper case or mixed it's your choice no spaces are allowed"));
  var q1={
    q :"\n\nwrite the keyword used to define 'structure' in C\n",
    ans: "struct"}

    var q2={
    q :"write the datatype of this '67.8' \n",
    ans: "float"}

    var q3={
    q :"first in first out is a characterstics of \n ",
    ans: "queue"}

    var q4={
    q :"last in first out is a characterstics of \n",
    ans: "stack"}

    var q5={
    q :"which data structure is used in c to hold similar type of elemnts in contiguous memory \n ",
    ans: "array"}

    var q6={
    q :"which data structure is used in c to hold similar type of elemnts but not in contiguous memory \n",
    ans: "linkedlist"}

    var q7={
    q :"what does void function return \n",
    ans: "null"}

    var q8={
    q :"do you love coding \n",
    ans: "yes"}

    var q9={
    q :"what do you think will u get full marks in this quiz ? \n",
    ans: "yes"}

    var q10={
    q :"does 'C' lang comes under object-oriented programming \n",
    ans: "no"}

    function play(question,answer){
      var temp=read.question(c.red(question));
      if(temp.toLowerCase() === answer){
        console.log(c.green("You are Right!!!  you got 1 point for this\n"));
        score++;
      }
      else{
        console.log(c.yellow("OOps! You are Wrong,  you lost 1 point for this\n"));
        score--;
      }
    }

    var ar=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
    var n= ar.length;
    for(var i=0;i<n;i++){
      var cur = ar[i];
      play(cur.q,cur.ans);
    }
}
else{
  console.log("OK go prepare for the quiz We'll catchup later \n --------------Thanks------------");
}
if(a.toLowerCase()==="yes")
console.log("Thanks for playing the game, You scored ", score);