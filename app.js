                //Chapter 1

//...........................................******.........................................
//Question 1
alert("Welcome to my website ");

//Question 2
alert(" Error!Please enter a valid password.");


//Question 3
alert("Welcome to JS Land...\n Happy Coding!  ");

//Question 4
alert("Welcome to JS Land"); 
alert("Happy Coding!");

//Question 5
alert("Hello...I can run JS through my web browser's console");

//End
//...........................................******.........................................




                //Chapter 2

//...........................................******.........................................

//Question 1
var username ="Tahir";
alert(username);

//question 2
var myName="Hafiz Muhammad Tahir Nisar";
alert(myName);

//Question 3
var message="Hello World";
alert(message);


//Question 4
var biodata="Jhone Doe";
alert(biodata);
var age=15;
alert(age);
var designation="Certified Mobile Application Development";
alert(designation);



//Question 5
var string=" PIZZA \n PIZZ \n PIZ\n PI\n P";
alert(string);



//Question 6
var email="tnisar786@yahoo.com";
var name="My email address is "
alert(name+email);



//Question 7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the Book"+ book);



//Question 8
document.write("Yah! I can write HTML content through JavaScript");




//Question 9
var string="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(string);

//End
//...........................................******.........................................


                //Chapter 3

//...........................................******.........................................

//Question 1
var age=24;
alert("I am " + age +" years old");


//Question 2
var visit=window.prompt();
alert("You have vsisited this site " +visit +" times");


//Question 3
var birthYear=1995;
document.write("My birth year is " +birthYear+ "<br>"); 
document.write("\n Type Data of my declared variable is number ");


//Question 4
var name="John Doe";
var product=" T-shirt(s)";
var number= 5;
var store=" on XYZ Clothing store";
document.write( name +" ordered "+ number + product + store );

//End
//...........................................******.........................................


                //Chapter 4

//...........................................******.........................................


//Question 1
var A= 20, B= 30, C= 40;
document.write( A +"\n" , B +"\n" , C);




//Question 2
var A,B,C,D,E

var 1,2,3,4,5




//Question 3

var rules=" Rules for naming JS variables ";
 document.write(rules +"<br>");
 var variable="Variable names can only contain letters, numbers,$ and _. For example $my_1stVariable.";
 document.write(variable +"<br>");
var begin="Variables must begin with a letter, $ or _. For example $name, _name or name";
document.write(begin +"<br>");
var name=" Variable names are case sensitive";
document.write(name +"<br>");
var javaname="Variable names should not be JS keywords";
document.write(javaname);

//End
//...........................................******.........................................


            //Chapter 5

//...........................................******.........................................


//Question 1
var A= 3, B= 5;
document.write("Sum of " +A +"and " + B + " is " +(A+B));

//Question 2
var A= 3, B= 5;
document.write("Subtraction of " +A + " and " + B + " is " +(A-B) +"<br>");
document.write("Multiplication of " +A + " and " + B + " is " +(A*B) +"<br>");
document.write("Division of " +A + " and " + B + " is " +(A/B) +"<br>");


//Question 3
var a=window.prompt("Please enter a number ");
document.write("Value after variable declaration is: " +a +"<br>");
document.write("Initial value:" +a +"<br>");
document.write("Value after increment is:" + ++a +"<br>");
b=a+7;
document.write("Value after addition is:" +b  +"<br>");
c=b-1;
document.write("Value after decrement is:" +c +"<br>");

document.write("The reminder is:" +a%2);


//Question 4
var A=600;
cost= A*5;
document.write("Total cost to buy 5 tickets to a movie is " +cost+"PKR");


//Question 5
var number = window.prompt("Please Enter number!");
var a= number*0;
var b= number*1;
var c= number*2;
var d= number*3;
var e= number*4;
var f= number*5;
var g= number*6;
var h= number*7;
var i= number*8;
var j= number*9;
var k= number*10;
document.write(number +" * 0 =" +a +"<br>" +number +" * 1 =" +b +"<br>" +number +" * 2 =" +c +"<br>" 
+number +" * 3 =" +d +"<br>" +number +" * 4 =" +e +"<br>" +number +" * 5 =" +f +"<br>"
+number +" * 6 =" +g +"<br>" +number +" * 7 =" +h +"<br>" +number +" * 8 =" +i +"<br>"
+number +" * 9 =" +j +"<br>" +number +" * 10 =" +k +"<br>");



//Question 6
var c = window.prompt("Please enter temperature in Centigrade temperature");
var f = (c*9/5)+32;
document.write(c +"C is " +f +"F" +"<br>");

var F = window.prompt("Please enter temperature in Fahrenheit temperature");
var C=(F-32)*(5/9);
document.write(F +"F is " +C +"C");



//Question 7
var item1 = window.prompt("Please enter price of itme 1");
var itme2 = window.prompt("Please enter price of item 2 ");
var quantity1 = window.prompt("Please enter quantity of item 1");
var quantity2 = window.prompt("Please enter quantity of item 2");
var shippping_charges = 100;
document.write("Price of itme 1 is" +item1 +"<br>");
document.write("Quantity of itme 1 is" +quantity1 +"<br>");
document.write("Price of itme 2 is" +itme2 +"<br>");
document.write("Quantity of itme 2 is" +quantity2 +"<br>");
document.write("Shipping Charges " +shippping_charges +"<br>");
document.write("Total cost of your order is " +(( +item1* +quantity1)+ +(+itme2* +quantity2)+ +shippping_charges) +"<br>");



//Question 8
var marks = window.prompt("Please enter obtained marks");
var total_marks = 980;
var c = ((marks/total_marks)*100);
document.write("Total marks: " +total_marks +"<br>");
document.write("Marks obtained: " +marks +"<br>");
document.write("Percentage: " +c +"%" +"<br>");



//Question 9
document.write("Currency in PKR" +"<br>");
var dollar = 10;
var riyal = 25;
var Dollar= dollar*104.80
var Riyal = riyal*28
var Rupees= (Dollar+Riyal)
document.write("Total currency in PKR: " +Rupees ); 


//Question 10
var number=window.prompt("Please enter a number");
document.write("Add 5 " +(+5 + +number) +"<br>")
document.write("Multiply by 10 " +10 * +number +"<br>")
document.write("Divide the result by 2 " +number/2 +"<br>") 


//Question 11
var current_year = window.prompt("Please enter current year");
var birth_year = window.prompt("Please enter birth year");
var age = (current_year-birth_year) ;
document.write("Age Calculator ");
document.write("Current Year: " +current_year +"<br>");
document.write("Birht Year: " +birth_year +"<br>");
document.write("Your Age is: " +age +"<br>");


//Question 12
var radius=window.prompt("Please enter a radius of a circule");
var circumferenc=(2*3.142*radius);
var area=(3.142*radius*radius);
document.write("The Geometrizer" +"<br>");
document.write("Radius of circle is: " +radius +"<br>");
document.write("The circumference is: " +circumferenc +"<br>"); 
document.write("The area is: " +area +"<br>");


//End
//...........................................******.........................................


            //Chapter 6-9

//...........................................******.........................................

//Question 1
var a=10
document.write("Result " +"<br>");
document.write(" The value of a is " +a +"<br>");
document.write("..........................." +"<br>"+"<br>");
a=a+1
document.write("The vlaue of ++a is:" +a +"<br>");
document.write("Now the vlaue of a is:"+a +"<br>" +"<br>");
document.write("The value of a++ is:" +a +"<br>");
a=a+1

document.write("Now the vlaue of a is:" +a +"<br>"+"<br>");


a=a-1
document.write("The value of --a is:" +a +"<br>");
document.write("Now the value of a is:" +a +"<br>" +"<br>");
document.write("The value of a-- is:" +a +"<br>");
a=a-1
document.write("Now the vlaue of a is:"+a);


//Question 2
var a=2, b=1
document.write("a is "+a +"<br>");
document.write("b is "+b +"<br>");
var result= --a - --b + ++b +b--;
document.write("result is ?? "+result);


//Question 3
var name= window.prompt("Enter your name");
alert("Welcome!" +name);


//Question 4
///Empty


//Question 5
var number = window.prompt("Please Enter number!");
var a= number*0;
var b= number*1;
var c= number*2;
var d= number*3;
var e= number*4;
var f= number*5;
var g= number*6;
var h= number*7;
var i= number*8;
var j= number*9;
var k= number*10;
if (number===null)

{
    alert("5 * 0 = 0" +"\n" +"5 * 1 = 5"  +"\n" +" 5 * 2 = 10"  +"\n" 
    +"5 * 3 = 15"  +"\n" +"5 * 4 = 20"  +"\n" +"5 * 5 = 25"  +"\n"
     +"5 * 6 = 30"  +"\n" +"5 * 7 = 35" +"\n" +"5 * 8 = 40" +"\n"
     +"5 * 9 = 45"  +"\n" +"5 * 10 =50"  +"\n"
    );


}

else {
alert(number +" * 0 =" +a +"\n" +number +" * 1 =" +b +"\n" +number +" * 2 =" +c +"\n" 
+number +" * 3 =" +d +"\n" +number +" * 4 =" +e +"\n" +number +" * 5 =" +f +"\n"
+number +" * 6 =" +g +"\n" +number +" * 7 =" +h +"\n" +number +" * 8 =" +i +"\n"
+number +" * 9 =" +j +"\n" +number +" * 10 =" +k +"\n"
)

}


//Question 6
var subject1 = window.prompt("Please Enter Subject 1");
var subject2 = window.prompt("Please Enter Subject 2");
var subject3 = window.prompt("Please Enter Subject 3");
var total=100;
var subject4 = window.prompt("Please Enter obtained marks for Subject 1");
var subject5 = window.prompt("Please Enter obtained marks for Subject 2");
var subject6 = window.prompt("Please Enter obtained marks for Subject 3");
var percenatege1=(subject4/total)*100;
var percenatege2=(subject5/total)*100;
var percenatege3=(subject6/total)*100;
document.write(" Subject ")
document.write(" Total Marks ")
document.write(" Obtained Marks " )
document.write(" Percentage " +"<br>")
document.write( subject1 +"\n" +total +"\n" +subject4 +"\n" +percenatege1 +"%" +"<br>" )
document.write( subject2 +"\n" +total +"\n" +subject5 +"\n" +percenatege2 +"%" +"<br>" )
document.write( subject3 +"\n" +total +"\n" +subject6 +"\n" +percenatege3 +"%" +"<br>" )

//End
//...........................................******.........................................


            //Chapter 9-11

//...........................................******.........................................

//Question 1
var city=window.prompt("Please enter city")
if (city=="Karachi"){

document.write("Welcome to city of lights");


}
else{

document.write("Welcome to the " +city)


}


//Question 2
var gender=window.prompt("Please enter the gender male or female");
if( gender=="male"){

document.write("Good Morning Sir")

}
else{

    document.write("Good Morning Ma'am")


}



//Question 3
var colour=window.prompt("Please enter colour Red, Yellow, Green");
if(colour=="Red"){

alert("Red Must Stop");

}
else{

if(colour=="Yellow")
    alert("Yellow Ready to move");

else{

    if(colour=="Green")
        alert("Green Move now");
    }
}


//Question 4
var petrol=window.prompt("Plese enter the fuel in litres");
if( petrol<0.25){

alert("Please refill the fuel in your car");


}
else{


alert("Fule is enough!");

}



//Question 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

    if("car" < "cat"){
        alert("car is smaller than cat");
        }



//Question 6
var subject1=window.prompt("Enter first subject marks" );
var subject2=window.prompt("Enter second subject marks" );
var subject3=window.prompt("Enter third subject marks" );
var total= 300;
var totalmarks=(+subject1 + +subject2 + +subject3);
var percentage=((totalmarks/total)*100);
var grade,remarks; 
document.write("Marks Sheet" +"<br>" +"<br>")
document.write("Total marks:" +total +"<br>");
document.write("Marks obtained:" +totalmarks +"<br>");
document.write("Percentage:" +percentage +"<br>");
if(percentage>=80){
var grade="A-one"
 var remarks="Excellent"
document.write("Grade:" +grade +"<br>");
document.write("Remarks:"+remarks)
}
if(percentage>=70){
var grade="A"
var remarks="Good"
document.write("Grade:" +grade +"<br>");
document.write("Remarks:"+remarks)
}

if(percentage>=60){
    var grade="B"
     var remarks="You need to improve"
    document.write("Grade:" +grade +"<br>");
    document.write("Remarks:"+remarks)
}
if(percentage<60){
    var grade="Fail"
     var remarks="Sorry"
    document.write("Grade:" +grade +"<br>");
    document.write("Remarks:"+remarks)
    }


//Question 7
var secret= 6;
var number=window.prompt("Please enter your number");
if(number==6)

{

document.write("Bingo! Correct answer");


}
if(number==secret+1){

document.write("Close enough to the correct answer");


}



//Question 8
var number =window.prompt("Please enter number");
if(number%3==0)
{

document.write("The number is divisible by 3");

}
else{

    document.write("The number is not divisible by 3");
}




//Question 9
var number =window.prompt("Please enter number");
if(number%2==0)
{

document.write("The number is even");

}
else{

    document.write("The number is odd");
}



//Question 10
var number=window.prompt("Please enter temperature");
if(number >=40)
{

document.write("It is too hot outside.");


}
else{

    if(number>=30)
    {
        document.write("The Weather today is Normal.");

    }
    else{

        if(number>=20)
        {
            document.write("Today’s Weather is cool.");
    
        }    
        else{

            if(number>=10)
            {
                document.write("OMG! Today’s weather is so Cool.");
        
            }
        }
    }
}


//Question 11

var A=window.prompt("Enter first number");
var B=window.prompt("Enter second number");
var C=window.prompt("What you want to do Addition, Subtraction, Multiplication, Division or Percentage");
if(C=="Addition")
{
document.write(+A + +B);

}
if(C=="Subtraction")
{
document.write(+A - +B);

}

if(C=="Multiplication")
{
document.write(+A * +B);

}

if(C=="Division")
{
document.write(+A / +B);

}
if(C=="Percentage")
{
document.write((+A / +B)*100);

}

//End
//...........................................******.........................................



                //Chapter 12-13

//...........................................******.........................................
//Question 2
var number1 = window.prompt("Please Enter first string");
var number2 = window.prompt("Please Enter second string");
var a=number1.length
var b=number2.length
if(a > b )
{

document.write("First string is greater");



}
else
{
if(a < b)
{

document.write("Second string is greater");

}

else
{
if(a = b)
{
document.write("Both strings are equal ");
}
}
}



//Question 3
var number=window.prompt("Please enter the number");
if( number > 0)
{

document.write("Number is positive");


}
else
{

if(number < 0)
{

document.write("Number is negative");


}
else
{

if(number == 0)
{
document.write("Number is zero");

}


}


}



//Question 4
var number=window.prompt("Please enter the number");
if( number > 0)
{

document.write("Number is positive");


}
else
{

if(number < 0)
{

document.write("Number is negative");


}
else
{

if(number == 0)
{
document.write("Number is zero");

}


}


}



//Question 5
var password=window.prompt("Please enter your password!");
var match=window.prompt("Please again enter your password!");
var a=password.length;
var b=match.length;
if(a == 0 )
{

document.write("Please enter your password!");

}


else
{

if(a ==b)
{

document.write("Correct! The password you entered matches the original password");

}
else

{
document.write("Incorrect password");

}

}


//Question 6
var hour=window.prompt("Please enter your time");
if (hour < 18) 
{
greeting = "Good day";
document.write(greeting);
}
else
{
greeting = "Good evening";
document.write(greeting);
}


//Question 7
var time=window.prompt("Please enter time in format 0000");
if(time >= 0000 && time < 1200)
{
document.write("Good morning!");

}

else
{

if( time >= 1200 && time <1700 )
{

    document.write("Good afternoon!");

}

else
{

if(time >=1700 && time <2100)
{

    document.write("Good Evening!");

}
else
{

if(time >=2100 && time <=2359)
{

    document.write("Good night!");
}

} 
}

}

//End
//...........................................******.........................................




                //Chapter 14-16

//...........................................******.........................................

//Question 1
var student=window.prompt("Please enter student name");
student[0]=student;
document.write(student);

//Question 2
var student=window.prompt("Please enter student name");
student[0]=student;
document.write(student);


//Question 3
var array=window.prompt("Please enter any String data");
array[0]=array;
array[1]=array;
document.write(array);


//Question 4
var array=window.prompt("Please enter any number");
array[0]=array;
array[1]=array;
document.write(array);



//Question 5
var myArr = [];
var value = 2;
for(var i = 0; i < value; i++) 

{
    myArr[i]=window.prompt("Please enter the Boolean character");
 }
 document.write(myArr);
 


//Question 6
var mixedArray=[];
var length=window.prompt("Please enter the range of Array only number");
var i;
for(i=0; i<length; i++)
{

mixedArray[i]=window.prompt("Please enter mixed character number and strings");

}
document.write(mixedArray);


//Question 7
var array=[];
var size=8;
document.write("Qualifications: " +"<br>");
for(var i=0; i<size; i++ ) 

{
	
	//Taking Input from user
    array[i ] =window.prompt("Please enter element"  );
    
    document.write(array[i] +"<br>" );
    
} 


//Question 8
var array=[];
var number=[];
var total=500;
var i; 
//var j;
var value =window.prompt("Enter vlaue of array");
var Value=value;
for(i=0; i<Value; i++)
{

array[i] = window.prompt("Please enter the student name ");
number[i]=window.prompt("Please enter score of students");
document.write(" Score of " +array[i] +" is " +number[i] + " .Percentage: " +number[i]/total*100 +"%" +"<br>");
}


//Question 9
var colour=[];
var Colour=[];
var length=window.prompt("Please enter the length of array only number");
var Length=length;
var i;
for(i=0; i<Length; i++)
{

colour[i]= window.prompt("Please enter colour names ");
document.write(colour[i] +"\n" )
}
window.prompt("Please Enter the colour you want to add to the beginning ");


//Question 10
var value=window.prompt("Please enter value of array");
var score=[];
var Score=[];
var i;
var Value=value;
document.write("Score of Students: " );

for(i=0; i<Value; i++)

{

score[i]=window.prompt("Please enter the Score of students");
document.write( +score[i] +",");

}
document.write("Ordered Scores of Students" +"<br>");

for(i=0; i<Value; i++)
{

    Score=score.sort(function(a,b)
{

    return a-b
}

);

document.write( +Score[i] +"," )
}




//Question 11
var list=[];
var selected=[];
var i;
var length;
length = window.prompt("Please enter the range of array");
var Length =length;
document.write("Cities list:" +"<br>");

for(i =0; i<Length; i++)
{

list[i]=window.prompt("Please enter the city lists")
document.write(list[i] +",");

}

document.write("Selected cities list:" +"<br>");
for(i =0; i<Length; i++)
{

selected.slice[i]=window.prompt("Please enter the city to show ")
document.write(selected.slice[i] +",");

}



//Question 12
var arr = ["This", "is" , "my" , "cat"];
document.write("Arrays:"  +"<br>");
document.write(arr +"<br>");
var i;
document.write("String:" +"<br>");
for(i=0; i<arr.length; i++)
{
arr[i]=document.write( arr[i ] +" " );
}



//Question 13
var array=[];
var i;
var length=window.prompt("Please enter the length of array");
var Length=length;
document.write("Devices: " +"<br>");
for(i=0; i<Length;i++)
{

array[i]=window.prompt("Please enter data");
document.write(array[i] +",");

}
for(i=0; i<Length;i++)
{

document.write( "Out: " +"<br>" +array[i] );

}



//Question 14
var array=[];
var i;
var length=window.prompt("Please enter the length of array");
var Length=length;
var LENGTH=Length-1
document.write("Devices: " +"<br>");
for(i=0; i<Length;i++)
{

array[i]=window.prompt("Please enter data");
document.write(array[i] +",");

}
for(i=LENGTH; i>=0;i--)
{

document.write( "Out: " +"<br>" +array[i] +"<br>" );

}



//Question 15
var mobile=["Apple","Samsung", "Motorola", "Nokia" ,"Sony" , "Haier"]
document.write("<select>");
var i;
for(i=0; i<mobile.length; i++)
{

document.write("<option>"+ mobile[i]  +"</option>")

}
document.write("</select>");

//End
//...........................................******.........................................



//Chapter 17-20

//...........................................******.........................................
//Question 1
var A=[[],[]];
var i;
var j;
var rows;
var colums;
for(i=0; i< rows; i++)
{

for(j=0; j<colums;j++)
{

A[i][j]

}


}


//Question 2
var array=[
    
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]


];
var i;
var j;
var rows=3;
var colums =4;
for(i=0; i<rows; i++)
{

for(j=0; j<colums;j++)
{

document.write(array[i ][j ]);

}


}



//Question 3
var array=[
    
    [1,2,3,4,5],
    [6,7,8,9,10],
    


];
var i;
var j;
var rows=2;
var colums =5;
for(i=0; i<rows; i++)
{

for(j=0; j<colums;j++)
{

document.write(array[i ][j ] +"<br>");

}


}



//Question 4
var number=window.prompt("Enter a number to show its multiplication table");
var length=window.prompt("Enter length multiplication table");
var Length=length;
var i;
document.write("Multiplication table of " +number +"<br>");
document.write("Length" +Length +"<br>");
for(i=1; i<=Length;i++)
{

document.write(number +"*"+i +"=" +number*i +"<br>");


}



//Question 5
var fruits = ["apple","banana","mango","orange","strawberry"];
var Fruits=[];
var i;
var length=fruits.length;

for(i=0; i<length;i++)
{

Fruits[i] = document.write(fruits[i] +"<br>");


}
for(i=0; i<length;i++)
{

document.write("Element at index " +i +" is " +fruits[i] +"<br>");



}




//Question 6
var count=window.prompt("Please enter the range of counting");
var i;
var numbering=[];
var reversing=[];
var even=[];
var odd=[];
var series=[];
document.write("Counting:" );

for(i=0; i<=count;i++)
{

numbering[i]= document.write( +i +"," );

}

document.write("Reverse counting:" +"<br>");

for(i=count; i>=0;i--)
{

reversing[i]= document.write( +i +"," );

}

document.write("Even:" +"<br>");
for(i=0; i<=count;i++)
{

if(i % 2 ==0)
{

even[i]=document.write(+i +",");

}

}

document.write("Odd:" +"<br>");
for(i=0; i<=count;i++)
{

if(i % 2 !==0)
{

odd[i]=document.write(+i +",");

}

}

document.write("Series:" +"<br>" );
for(i=2; i<=count;i=i+2)
{

series[i]= document.write( +i+"k" +"," );

}


//Question 7
var A = ["cake","apple pie", "cookie", "chips", "patties"];
var search=window.prompt("Welcome to ABC Bakery. What you want to order");
var Length=A.length
var i;
for(i=0; i<Length; i++)
{

if(search==A[i])
{

document.write(search +" is available at index " + i +" in our bakery ");
 
}

else
{

document.write("Not available")

}

}


//End
//...........................................******.........................................





