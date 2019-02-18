

//$('[data-toggle="popover"]').popover()

getText = function () {
  return "Data from getText function in dep.js";
}

$('#d8').change(function() {
  calcRevenuePerFTEVeternarian();
  calcAverageTransactionCharge();
  calcRevenuePerFTONonVeternarianEmp();
  calcDrugsSuppliesExpense();
  calcLaboratoryExpense();
  calcStaffSalaryWages();
  var cD8 = new Intl.NumberFormat().format(parseInt($('#d8').val().replace(/,/g, '')))
  $('#d8').val(cD8);
});
$('#d9').change(function() {
  calcTransactionsPerFTEVeternarian();
  calcAverageTransactionCharge();
  calcAnnualTransactionsPerActiveClient();
  var cD9 = new Intl.NumberFormat().format(parseInt($('#d9').val().replace(/,/g, '')))
  $('#d9').val(cD9);
});
$('#d10').change(function() {
  calcRevenuePerFTEVeternarian();
  calcTransactionsPerFTEVeternarian();
  calcActiveClientsPerFTEVeternarian();
  var cD10 = new Intl.NumberFormat().format(parseInt($('#d10').val().replace(/,/g, '')))
  $('#d10').val(cD10);
});
$('#d11').change(function() {
  calcRevenuePerFTONonVeternarianEmp();
  var cD11 = new Intl.NumberFormat().format(parseInt($('#d11').val().replace(/,/g, '')))
  $('#d11').val(cD11);
});
$('#d12').change(function() {
  calcActiveClientsPerFTEVeternarian();
  calcAnnualTransactionsPerActiveClient();
  var cD12 = new Intl.NumberFormat().format(parseInt($('#d12').val().replace(/,/g, '')))
  $('#d12').val(cD12);
});
$('#d13').change(function() {
  calcDrugsSuppliesExpense();
  var cD13 = new Intl.NumberFormat().format(parseInt($('#d13').val().replace(/,/g, '')))
  $('#d13').val(cD13);
});
$('#d14').change(function() {
  calcLaboratoryExpense();
  var cD14 = new Intl.NumberFormat().format(parseInt($('#d14').val().replace(/,/g, '')))
  $('#d14').val(cD14);
});
$('#d15').change(function() {
  calcStaffSalaryWages();
  var cD15 = new Intl.NumberFormat().format(parseInt($('#d15').val().replace(/,/g, '')))
  $('#d15').val(cD15);
});
$('#d19').change(function() {
  calcPotentialEffectOnTotalIncome_1();
});
$('#d20').change(function() {
  calcPotentialEffectOnTotalIncome_2();
});
$('#d34').change(function() {
  calcPotentialEffectOnTotalIncome_1();
});
$('#d39').change(function() {
  calcPotentialEffectOnTotalIncome_2();
});
$('#d46').change(function() {
  calcPotentialEffectOnTotalIncome_3();
});
$('#d53').change(function() {
  calcPotentialEffectOnTotalIncome_4();
});
$('#d58').change(function() {
  calcPotentialEffectOnTotalIncome_5();
});

function calcRevenuePerFTEVeternarian(){
  if($('#d8').val() !== '' && $('#d10').val() !== '' ){
    var d8 = parseInt($('#d8').val().replace(/,/g, ''));
    var d10 = parseFloat($('#d10').val().replace(/,/g, ''));
    $('#d18').val(new Intl.NumberFormat().format(Math.round(d8 / d10)));
  }
}
function calcTransactionsPerFTEVeternarian(){
  if($('#d9').val() !== '' && $('#d10').val() !== '' ){
    var d9 = parseInt($('#d9').val().replace(/,/g, ''));
    var d10 = parseFloat($('#d10').val().replace(/,/g, ''));
    $('#d19').val(new Intl.NumberFormat().format(Math.round(d9 / d10)));
  }
}
function calcAverageTransactionCharge(){
  if($('#d8').val() !== '' && $('#d9').val() !== '' ){
    var d8 = parseInt($('#d8').val().replace(/,/g, ''));
    var d9 = parseInt($('#d9').val().replace(/,/g, ''));
    $('#d20').val(new Intl.NumberFormat().format(Math.round(d8 / d9)));
  }
}
function calcRevenuePerFTONonVeternarianEmp(){
  if($('#d8').val() !== '' && $('#d11').val() !== '' ){
    var d8 = parseInt($('#d8').val().replace(/,/g, ''));
    var d11 = parseFloat($('#d11').val().replace(/,/g, ''));
    $('#d21').val(new Intl.NumberFormat().format(Math.round(d8 / d11)));
  }
}
function calcActiveClientsPerFTEVeternarian(){
  if($('#d10').val() !== '' && $('#d12').val() !== '' ){
    var d10 = parseFloat($('#d10').val().replace(/,/g, ''));
    var d12 = parseFloat($('#d12').val().replace(/,/g, ''));
    $('#d22').val(new Intl.NumberFormat().format(Math.round(d12 / d10)));
  }
}
function calcAnnualTransactionsPerActiveClient(){
  if($('#d9').val() !== '' && $('#d12').val() !== '' ){
    var d9 = parseInt($('#d9').val().replace(/,/g, ''));
    var d12 = parseFloat($('#d12').val().replace(/,/g, ''));
    $('#d23').val(new Intl.NumberFormat().format(parseFloat((d9 / d12).toFixed(2))));
  }
}

//CALC EXPENSES
function calcDrugsSuppliesExpense(){
  if($('#d8').val() !== '' && $('#d13').val() !== '' ){
    var d8 = parseInt($('#d8').val().replace(/,/g, ''));
    var d13 = parseFloat($('#d13').val().replace(/,/g, ''));
    $('#d26').val(parseFloat((d13 / d8) * 100).toFixed(1));
  }
}
function calcLaboratoryExpense(){
  if($('#d8').val() !== '' && $('#d14').val() !== '' ){
    var d8 = parseInt($('#d8').val().replace(/,/g, ''));
    var d14 = parseFloat($('#d14').val().replace(/,/g, ''));
    $('#d27').val(parseFloat((d14 / d8) * 100).toFixed(1));
  }
}
function calcStaffSalaryWages(){
  if($('#d8').val() !== '' && $('#d15').val() !== '' ){
    var d8 = parseInt($('#d8').val().replace(/,/g, ''));
    var d15 = parseFloat($('#d15').val().replace(/,/g, ''));
    $('#d28').val(parseFloat((d15 / d8) * 100).toFixed(1));
  }
}

//SCENARIOS TO INCREASE INCOME
function calcPotentialEffectOnTotalIncome_1(){
  if($('#d34').val() !== '' && $('#d19').val() !== '' ){
    var d34 = parseInt($('#d34').val().replace(/,/g, ''));
    var d19 = parseFloat($('#d19').val().replace(/,/g, ''));
    $('#d36').val(new Intl.NumberFormat().format(Math.round(d34 * d19).toFixed(2)));
  }
}
function calcPotentialEffectOnTotalIncome_2(){
  if($('#d39').val() !== '' && $('#d20').val() !== '' ){
    var d39 = parseInt($('#d39').val().replace(/,/g, ''));
    var d20 = parseFloat($('#d20').val().replace(/,/g, ''));
    var d34 = parseFloat($('#d34').val().replace(/,/g, ''));
    var d41 = parseFloat($('#d41').val().replace(/,/g, ''));
    var d26 = parseFloat($('#d26').val().replace(/,/g, ''));
    var d27 = parseFloat($('#d27').val().replace(/,/g, ''));
    $('#d41').val(new Intl.NumberFormat().format(Math.round(d39 * d20 * 52).toFixed(2)));
    var d41 = parseFloat($('#d41').val().replace(/,/g, ''));
    $('#d42').val(new Intl.NumberFormat().format(Math.round(d41 * (1 - (d26/100) - (d27/100))).toFixed(2)));
  }
}
function calcPotentialEffectOnTotalIncome_3(){
  if($('#d46').val() !== '' && $('#d20').val() !== '' ){
    var d12 = parseFloat($('#d12').val().replace(/,/g, ''));
    var d20 = parseFloat($('#d20').val().replace(/,/g, ''));
    var d46 = parseFloat($('#d46').val().replace(/,/g, ''));
    var d41 = parseFloat($('#d41').val().replace(/,/g, ''));
    var d26 = parseFloat($('#d26').val().replace(/,/g, ''));
    var d27 = parseFloat($('#d27').val().replace(/,/g, ''));
    $('#d48').val(new Intl.NumberFormat().format(Math.round(d46 * d20 * d12).toFixed(2)));
    var d48 = parseFloat($('#d48').val().replace(/,/g, ''));
    $('#d49').val(new Intl.NumberFormat().format(Math.round(d48 * (1 - (d26/100) - (d27/100))).toFixed(2)));
  }
}
function calcPotentialEffectOnTotalIncome_4(){
  if($('#d53').val() !== '' && $('#d8').val() !== '' ){
    var d8 = parseFloat($('#d8').val().replace(/,/g, ''));
    var d53 = parseFloat($('#d53').val().replace(/,/g, ''));
    $('#d55').val(new Intl.NumberFormat().format(Math.round((d53 * d8)/100).toFixed(2)));
  }
}
function calcPotentialEffectOnTotalIncome_5(){
  if($('#d58').val() !== '' && $('#d8').val() !== '' ){
    var d8 = parseFloat($('#d8').val().replace(/,/g, ''));
    var d58 = parseFloat($('#d58').val().replace(/,/g, ''));
    $('#d60').val(new Intl.NumberFormat().format(Math.round((d58 * d8)/100).toFixed(2)));
  }
}
