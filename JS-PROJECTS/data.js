// Append value to the display
function appendValue(value) {
    const resultField = document.getElementById("result");
    resultField.value += value;
  }
  
  // Clear all input (Total Clear)
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  // Delete the last character (Backspace)
  function deleteLast() {
    const resultField = document.getElementById("result");
    resultField.value = resultField.value.slice(0, -1);
  }
  
  // Perform the calculation
  function calculate() {
    const resultField = document.getElementById("result");
    try {
      resultField.value = eval(resultField.value);
    } catch (error) {
      resultField.value = "Error";
    }
  }
  