// Oe20Ni80.js
function round(number,X) {
// rounds number to X decimal places, defaults to 3
	X = (!X ? 3 : X);
	return Math.round(number*Math.pow(10,X))/Math.pow(10,X);
}

// U * U/ (WR * L)  = 12 * 12 / (0.6 * 50)

function calcAmpere() {

var L, WR, W, A 
var cm, inches, feet, meter

// get values from input
WR = eval(document.frm.WR.value);
U = eval(document.frm.U.value);
L = eval(document.frm.L.value);
unitType = document.frm.unitType.value;

if (unitType == 100) 
	{
		L = L / unitType
	}
	else
	{
		L = L * unitType;
	}

W = (U * U) / (WR * L);
A =  U / (WR * L);

document.frm.A.value = round(A,2); // Ampere
document.frm.W.value = round(W,1);	// Watt

}

 function calcR1()  {
 var Tf, R1;
 
 Tf = document.frm1.Tf.value;
 alert(Tf);
 
 R1 = 10(1+0.004×Tf)
 
 alert(R1);
 
 }