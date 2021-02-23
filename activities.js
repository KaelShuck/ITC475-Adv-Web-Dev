function displayRadioValue() { 
    var ele = document.getElementsByName('travel'); 
      
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked)
        {
            radioButtonVal = ele[i].value;
            //document.write(ele[i].value);
            //document.write("Yup: " + radioButtonVal);
            if(radioButtonVal == "cancun")
            {

                //Assigning code to the Div tag labeled result
                var result = document.getElementById("result");

                //First CheckBox for Cancun
                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.name = "resort";
                checkbox.value = "parksandrec";
                checkbox.id = "cancun1";

                //Label for CheckBox 1
                var label = document.createElement('label')
                label.htmlFor = "cancun1";
                label.appendChild(document.createTextNode('Parks and Recreation'));
                
                //Second CheckBox for Cancun
                var checkbox1 = document.createElement('input');
                checkbox1.type = "checkbox";
                checkbox1.name = "resort";
                checkbox1.value = "beaches";
                checkbox1.id = "cancun2";

                //Label for CheckBox 2
                var label1 = document.createElement('label1')
                label1.htmlFor = "cancun2";
                label1.appendChild(document.createTextNode('Beaches'));


                //Append all Checkboxes and labels to Div
                linebreak = document.createElement("br");
                result.appendChild(checkbox);
                result.appendChild(linebreak);
                result.appendChild(checkbox1);
                result.appendChild(label);
                result.appendChild(label1);

            }
            
        }
        
    } 
} 