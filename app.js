const weekdays = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];
const stockArray = [];

let count = 0;
document.querySelector('.showWeekDay').textContent = weekdays[count];

function addDayofWeek() {
    // get stock input value
    let stock = Number(document.getElementById('stockPrice').value);
    // put each input into an array
    // save input an array and remove number from input textbox
    stockArray[count] = stock;
    count++
    document.querySelector('.showWeekDay').textContent = weekdays[Math.min(count, weekdays.length - 1)];
    removeText();
    
    function removeText() {
        document.getElementById('stockPrice').value = '';
    }
    // do it seven times
    // after seven inputs stop receiving inputs
    // after seven inputs hide button and input area
    // show bar graph with weekdays corresponding to the correct value
    console.log(stockArray);

}

function getStocks () {
    if (count < weekdays.length) {
        addDayofWeek();
    }
    else {
        document.querySelector('.container').classList.add('hide')
        showGraph()
    }
    
}

function showGraph() {
    document.querySelector('.stock-container').classList.remove('hide');
}