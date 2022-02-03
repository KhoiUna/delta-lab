$(() => {
  $("#btnName").click(() => {
    const userName = $("#userName").val();

    const nameLength = getStringLength(userName);
    let nameMsg = "The Length of your name is: ";
    $("#nameOutput").append(nameMsg + nameLength + "<br/>");

    const nameReverse = reverseString(userName);
    nameMsg = "Your Name reversed letters is: ";
    $("#nameOutput").append(nameMsg + nameReverse + "<br/>");

    nameMsg = "The first letter of your name is: ";
    $("#nameOutput").append(nameMsg + firstLetter(userName) + "<br/>");

    nameMsg = "Your encrypted name is: ";
    $("#nameOutput").append(nameMsg + encryptName(userName) + "<br/>");
  });

  $("#btnClear").click(() => {
    clearElement("#nameOutput", "html");
    clearElement("#userName", "input");
  });

  function getStringLength(stringVal) {
    var stringLength = stringVal.length;
    return stringLength;
  }

  const reverseString = (stringVal) => stringVal.split("").reverse().join("");

  const firstLetter = (stringVal) => stringVal[0];

  const clearElement = (elementId, elementType) => {
    if (elementType == "html") {
      $(elementId).html("");
    } else if (elementType == "input") {
      $(elementId).val(" ");
    }
  };

  const encryptName = (stringVal) => {
    const newName = stringVal.split("").map((letter) => {
      if (letter === "a") return "@";
      if (letter === "e") return "3";
      if (letter === "o") return "0";
      return letter;
    });

    return newName.join("");
  };
});
