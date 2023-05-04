import values from './values.json'
import square from './middlewares/square'

const value1 = values.number1
const value2 = values.number2

/**
 * Needs optimization, from https://evertpot.com/generic-middleware/
 */
function calculator(value1: number, value2: number, operation: string) {
    let result
    let numbers = [value1, value2]
switch(operation) {
    case 'add':
        square(numbers)
        console.log(`we are adding ${numbers} to ${value2}`)
        result = value1 + value2
        break
    case 'substract':
        console.log(`we are substracting ${value2} from ${value1}`)
        result = value1 - value2
        break
    case 'multiply':
        console.log(`we are multiplying ${value1} to ${value2}`)
        result = value1 * value2
        break
    default:
        console.log('Not a valid operation')
        return
}
    console.log(result)
}

calculator(value1, value2, "add")
calculator(value1, value2, "substract")
calculator(value1, value2, "multiply")
calculator(value1, value2, "something else")