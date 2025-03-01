
//HTML forms, checking if radiobuttons are checked

  const Radiobutton1 = document.getElementById("radioBtn1");

  const Radiobutton2 = document.getElementById("radioBtn2");


  const Checkbox1 = document.getElementById("Checkbox1");

  const submitRadioBtn = document.getElementById("submitRadioBtn");

  const submitCheckboxBtn = document.getElementById("submitCheckboxBtn");
 
 const submitBtn = document.getElementById("submitButton");

 submitBtn.onclick = function () {
    





     if (Radiobutton1.checked || Radiobutton2.checked) {

        submitRadioBtn.textContent = "You clicked a Radiobutton";
        }

        else { submitRadioBtn.textContent = "Please click one of the radio buttons!"

        }

        if (Checkbox1.checked) {

            submitCheckboxBtn.textContent = "You checked a Checkbox!"
        }
        else {

            submitCheckboxBtn.textContent = "Please check the Checkbox!"}

    
    }

