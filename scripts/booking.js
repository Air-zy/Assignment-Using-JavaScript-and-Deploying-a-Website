/** VARIABLES **/
let dayCounter = 0;
let dailyRate = 35;
var weeklyCost = document.getElementById("calculated-cost");
var clearButton = document.getElementById("clear-button");
var dayButtons = document.querySelectorAll(".day-selector li");
var halfDay = document.getElementById("half");
var fullDay = document.getElementById("full");

/** function to change the colours of the day buttons */
function colourChange() {
    /**If-statement that is satisfied when the day button that is clicked, does not contain the "clicked" class.
     * if satisfied, will then add the "clicked" class to the respective element
    */
    if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        dayCounter++;
    }
    calculate();
}

/** forEach is used to distribute the .addEventListener to each element in the array */
dayButtons.forEach(function(day) { 
    day.addEventListener("click", colourChange);
    });

/** FUNCTION to revert the selected days to its non-clicked stage*/
function clearDays() {
    /** forEach is used to distribute the .remove to each element in the array */
    dayButtons.forEach(function(day) { day.classList.remove("clicked");});

    /** reset dayCounter to 0 */
    dayCounter = 0;
    weeklyCost.innerHTML = dayCounter;
}

clearButton.addEventListener("click",clearDays);

/** FUNCTION to change dailyRate to 20 for when user selects half days */
function changeRateHalf() {
    dailyRate = 20;
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    calculate();
}

halfDay.addEventListener("click", changeRateHalf);

/** FUNCTION to change dailyRate to 35 for when user selects full days */
function changeRateFull() {
    dailyRate = 35;
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    calculate();
}

fullDay.addEventListener("click", changeRateFull);

/** FUNCTION for final calculations for weekly cost */
function calculate() {
    const finalCost = dayCounter * dailyRate;
    weeklyCost.innerHTML = finalCost;
}