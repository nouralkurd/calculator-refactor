function calculateHandler(a, b, op) {
  try {
    // read & process user input from event
    a = parseInt(a);
    b = parseInt(b);
    op = op.toString();
    // pass user input through core logic

    var calculate;
    calculate = doMath(op, a, b);
    // render output to DOM for user
    document.querySelector("#results").innerText =
      a + " " + op + " " + b + " " + " = " + calculate;
    // log user action for developers
    console.log(calculate);
    // return true for the browser
    return true;
  }
  catch (err) {
    document.getElementById("results").innerHTML = err.message;
  }
}