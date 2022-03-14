// Get elements from DOM
let enteredAmountEl = $("#entered-amount")
let expOrIncomeEl = $("#exp-inc")
let submitButtonEl = $("#submit-btn")
let viewTransHistory = $("#trans-history")
let currentBalEl = $("#current-bal")

// Declare some variables
let theTotal = 0;
let cashHistory = "";

// Manipulate DOM
submitButtonEl.click(function(){
    
    if (expOrIncomeEl.val() !==  "Select" && enteredAmountEl.val() >= 1){
        let expOrInc = expOrIncomeEl.val()
        //console.log(enteredAmountEl.val())

        // Do computations
        if( expOrInc === "Expense"){
            console.log(expOrInc)
            theTotal -= enteredAmountEl.val()
            currentBalEl.text( theTotal )
            cashHistory = `<option>${expOrInc} - ${enteredAmountEl.val()} </option>`
            viewTransHistory.append(cashHistory)
            

        } else if (expOrInc === "Income"){
            theTotal += Number(enteredAmountEl.val())
            currentBalEl.text( theTotal )
            cashHistory = `<option>${expOrInc} + ${enteredAmountEl.val()} </option>`
            viewTransHistory.append(cashHistory)

        }
    } else{alert("Enter a positive amount and select whether income or expense")}
})
