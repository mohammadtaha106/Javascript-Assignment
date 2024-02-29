var h1 = document.createElement("h1")
h1.textContent = "Result"
document.body.appendChild(h1)

var a = 10 
document.write('The value of a is: ', a,'<br>')
++a
document.write('The value of ++a is: ', a ,'<br>')
document.write('Now the value of a is: ', a)
document.write('<br>','<br>')

document.write('The value of a++ is: ', a++ ,'<br>')

document.write('The value of a is: ', a ,'<br>')
document.write('<br>','<br>')
document.write('The value of --a is: ', --a ,'<br>')

document.write('The value of a is: ', a ,'<br>')
document.write('<br>','<br>')

document.write('The value of a-- is: ', a-- ,'<br>')
document.write('The value of a is: ', a ,'<br>')
document.write('<br>','<br>')
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write('result = ',result)
document.write('<br>')
document.write('--a = ','1','<br>' )
document.write('--a - --b = ','1','<br>')
document.write('--a - --b + ++b = ','2','<br>');
document.write('--a - --b + ++b + b-- = ','3','<br>');
var user = prompt("Enter your name")
alert('Hello '+ user)


