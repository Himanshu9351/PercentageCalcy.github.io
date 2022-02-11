const calcy = () => {
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('computer').value;
    let dataSa = document.getElementById('dsa').value;
    let wd = document.getElementById('wd').value;
    let cplus = document.getElementById('cplusplus').value;
    let grades = "";
    // console.log(maths);
    let totalGrad = parseFloat(maths) + parseFloat(comp) + parseFloat(dataSa) + parseFloat(wd) + parseFloat(cplus);

    let perc = (totalGrad / 500) * 100;

    if (perc <= 100 && perc >= 80) {
        grades = 'A';
    }
    else if (perc <= 79 && perc >= 60) {
        grades = 'B'
    }
    else if (perc <= 59 && perc >= 40) {
        grades = 'C';
    }
    else {
        grades = 'F';
    }
    if (perc >= 39) {

        document.getElementById('showData').innerHTML = `Out of 500 your total is ${totalGrad} and percentage is ${perc}%. <br> Your grade is ${grades} you are Pass`;
    }
    else {
        document.getElementById('showData').innerHTML = `Out of 500 your total is ${totalGrad} and percentage is ${perc}%. <br> Your grade is ${grades} you are Fail`;
    }
}