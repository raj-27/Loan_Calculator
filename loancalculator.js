let formSubmit = document.getElementById('loan-form');

formSubmit.addEventListener('submit', (e) => {
    // UI Variables
    let amount = document.getElementById('inputAmount');
    let interest = document.getElementById('inputInterest');
    let years = document.getElementById('inputYears')
    let monthlyPayment = document.getElementById('monthlyPayment');
    let totalPayment = document.getElementById('totalPayment');
    let totalInterest = document.getElementById('totalInterest')

    let principle = parseFloat(amount.value);
    let calculateInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayment = parseFloat(years.value) * 12;

    let a = Math.pow(1 + calculateInterest, calculatePayment);
    let monthly = (principle * a * calculateInterest) / (a - 1);
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayment).toFixed(2);
        totalInterest.value = ((monthly * calculatePayment) - principle).toFixed(2);

    } else {
        console.log("Enter Your Number Properly");
    }

    e.preventDefault()

    amount.value = '';
    interest.value = '';
    years.value = '';
})