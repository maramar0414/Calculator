class calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = currentOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
  }

  clear()/*It will clear all the different variables*/{
    this.currentOperandTextElement = ''
    this.previousOperandTextElement = ''
    this.operation = undefined

  }

  delete()/*for removing a single number*/{

  }

  appendNumber(number)/*what's going to happend every single time a user clicks on a number to add to the screen*/{
    this.currentOperand = number
  }

  chooseOperaction(operation)/*what happend when a user clicks in a operation button /+-**/{

  }

  compute()/*take the value inside the calculator and calculate the single value*/{

  }

  updateDisplay()/*update the value inside the output*/{
    this.currentOperandTextElement.innerText = this.currentOperand

  }
}





const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new calculator (previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()


  })
})