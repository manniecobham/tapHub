import { useState } from "react";

// Resource for custom hook:
// https://github.com/academind/react-complete-guide-code/blob/16-working-with-forms/code/12-finished/src/hooks/use-input.js

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // Instead of using state for valueIsValid, it will be derived
  // Also, the validation logic should be retrieved from outside, not hardcoded,
  // since each input will have different validation logic (passed via validateValue)
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  // Reset the inputs and touched state
  // Used when user submits form
  const reset = () => {
    // Clear the input
    setEnteredValue("");
    // Reset the touched states
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    // return the two functions so the components that use the hook
    // can change their internal state
    valueChangeHandler: valueChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset,
  };
};

export default useInput;
