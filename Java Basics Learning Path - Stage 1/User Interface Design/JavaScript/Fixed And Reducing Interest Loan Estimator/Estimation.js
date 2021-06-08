var P; //= Number(document.getElementById("principalAmount").value);
var R; //= Number(document.getElementById("interestRate").value);
var N; //= Number(document.getElementById("tenure").value);

var emi;
var ttp;
var tti;
var ttiF;
var ttpF;
var emiF

function EstimateReducingInterestLoan()
{
	 P = parseFloat(document.getElementById("principalAmount").value);
      R = parseFloat(document.getElementById("interestRate").value);
      N = parseFloat(document.getElementById("tenure").value);
      R=R/1200;
	  calculateEMI();
      totalPayment();
      totalInterest();
      EstimateFixedInterestLoan();
    
}

function EstimateFixedInterestLoan()
{
    ttiF = P*R*N;
    document.getElementById("tInterestFixed").innerHTML = ttiF.toFixed(2); /Assign total Interest value here/
    
    ttpF = P+ttiF;
     /* Fill with required javascript code here  */
    document.getElementById("tPaymentFixed").innerHTML = ttpF.toFixed(2); /Assign total payment value here/
    
     /* Fill with required javascript code here  */
    emiF = ttpF/N;
    document.getElementById("EMIFixed").innerHTML = emiF.toFixed(2);
    
    
}

function calculateEMI(){
	
     
    emi = P*R*(Math.pow(1+R,N)/(Math.pow(1+R,N)-1));
    document.getElementById("EMI").innerHTML = emi.toFixed(2);/Assign emi value here/
}

function totalPayment(){
	

	ttp = emi*N;
    document.getElementById("tPayment").innerHTML = ttp.toFixed(2); /Assign total payment value here/
}

function totalInterest(){
	
/* Fill with required javascript code here  */
  tti = ttp - P;
    document.getElementById("tInterest").innerHTML = tti.toFixed(2); /Assign total Interest value here/
}