function operacion(){
	let num1, num2;

	num1= parseInt(document.getElementById('numero1').value);
	num2= parseInt(document.getElementById('numero2').value);

	suma= num1+num2;
	res= num1-num2;
	mult= num1*num2;
	div= num1/num2;

	alert("La suma es: " +suma +  "\nLa resta es: " 
		  +res+ "\nLa multiplicacion es es: " +mult+  " \nLa división es: "  +div);



}