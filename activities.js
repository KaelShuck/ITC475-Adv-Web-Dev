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
                //checkbox.id = "cancun1";

                //Label for CheckBox 1
                var label = document.createElement('label')
                label.htmlFor = "cancun1";
                label.appendChild(document.createTextNode('Parks and Recreation'));
                
                //Second CheckBox for Cancun
                var checkbox1 = document.createElement('input');
                checkbox1.type = "checkbox";
                checkbox1.name = "resort";
                checkbox1.value = "beaches";
                //checkbox1.id = "cancun2";

                //Label for CheckBox 2
                var label1 = document.createElement('label1')
                //label1.htmlFor = "cancun2";
                label1.appendChild(document.createTextNode('Beaches'));

                //Third CheckBox for Cancun
                var checkbox2 = document.createElement('input');
                checkbox2.type = "checkbox";
                checkbox2.name = "resort";
                checkbox2.value = "boating";
                //checkbox1.id = "cancun2";

                //Label for CheckBox 3
                var label2 = document.createElement('label2')
                //label1.htmlFor = "cancun2";
                label2.appendChild(document.createTextNode('Boating'));

                //Fourth CheckBox for Cancun
                var checkbox3 = document.createElement('input');
                checkbox3.type = "checkbox";
                checkbox3.name = "resort";
                checkbox3.value = "boating";
                //checkbox1.id = "cancun2";

                //Label for CheckBox 4
                var label3 = document.createElement('label3')
                //label1.htmlFor = "cancun2";
                label3.appendChild(document.createTextNode('Snorkeling'));


                //Append all Checkboxes and labels to Div
                linebreak = document.createElement("br");

                result.appendChild(checkbox);
                result.appendChild(label);
                result.appendChild(linebreak);

                result.appendChild(checkbox1);
                result.appendChild(label1);
                result.appendChild(linebreak);

                result.appendChild(checkbox2);
                result.appendChild(label2);
                result.appendChild(linebreak);

                result.appendChild(checkbox3);
                result.appendChild(label3);
                result.appendChild(linebreak);

            }
            else if(radioButtonVal == "venice")
            {

            }
            else if(radioButtonVal == "maldives")
            {

            }
            else if(radioButtonVal == "newzealand")
            {

            }
            else
            {

            }
            
        }
        
    } 
} 