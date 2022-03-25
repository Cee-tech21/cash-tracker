// Get elements from DOM
let enteredAmountEl = $("#entered-amount")
let expOrIncomeEl = $("#exp-inc")
let submitButtonEl = $("#submit-btn")
let viewTransHistory = $("#trans-history")
let transHistDiv = $("#tranz-hist")
let currentBalEl = $("#current-bal")

// Declare some variables
let theTotal = 0;
let cashHistory = "";
let transHist = "";

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
            

            transHist = `<p class="bg-light py-2 px-2">
                    ${expOrInc} - ${enteredAmountEl.val()} </p>`
            viewTransHistory.append(cashHistory)
            transHistDiv.append(transHist)

        } else if (expOrInc === "Income"){
            theTotal += Number(enteredAmountEl.val())
            currentBalEl.text( theTotal )
            
            viewTransHistory.append(cashHistory)
            transHist = `<p class="bg-light py-2 px-2">
                    ${expOrInc} + ${enteredAmountEl.val()} </p>`
            transHistDiv.append(transHist)

        }
    } 
    else{swal("Enter a positive amount. Select if \
                transaction is income or expense")}
})
