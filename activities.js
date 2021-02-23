function displayRadioValue() { 
    var ele = document.getElementsByName('travel'); 
      
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked)
        {
            radioButtonVal = ele[i].value;
            
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
                //Assigning code to the Div tag labeled result
                var result = document.getElementById("result");

                //First CheckBox for Venice
                var checkbox4 = document.createElement('input');
                checkbox4.type = "checkbox";
                checkbox4.name = "resort";
                checkbox4.value = "museums";
             
                //Label for CheckBox 4 (CB1 for Venice)
                var label4 = document.createElement('label4')
                label4.appendChild(document.createTextNode('Museums'));


                //2
                var checkbox5 = document.createElement('input');
                checkbox5.type = "checkbox";
                checkbox5.name = "resort";
                checkbox5.value = "theatre";
                

                //2
                var label5 = document.createElement('label5')
                label5.appendChild(document.createTextNode('Theatre'));

                //3
                var checkbox6 = document.createElement('input');
                checkbox6.type = "checkbox";
                checkbox6.name = "resort";
                checkbox6.value = "parksandrecreation";
                

                //3
                var label6 = document.createElement('label6')
                label6.appendChild(document.createTextNode('Parks and Recreation'));

                //4
                var checkbox7 = document.createElement('input');
                checkbox7.type = "checkbox";
                checkbox7.name = "resort";
                checkbox7.value = "citytours";
                

                //4
                var label7 = document.createElement('label7')
                label7.appendChild(document.createTextNode('City Tours'));
                
                //Append
                linebreak = document.createElement("br");

                result.appendChild(checkbox4);
                result.appendChild(label4);
                result.appendChild(linebreak);

                result.appendChild(checkbox5);
                result.appendChild(label5);
                result.appendChild(linebreak);

                result.appendChild(checkbox6);
                result.appendChild(label6);
                result.appendChild(linebreak);

                result.appendChild(checkbox7);
                result.appendChild(label7);
                result.appendChild(linebreak);

            }
            else if(radioButtonVal == "maldives")
            {
                 //Assigning code to the Div tag labeled result
                 var result = document.getElementById("result");

                 //First CheckBox for maldives
                 var checkbox8 = document.createElement('input');
                 checkbox8.type = "checkbox";
                 checkbox8.name = "resort";
                 checkbox8.value = "museums";
              
                 //Label for CheckBox 8 (CB1 for maldives)
                 var label8 = document.createElement('label8')
                 label8.appendChild(document.createTextNode('Museums'));

                 //2
                 var checkbox9 = document.createElement('input');
                 checkbox9.type = "checkbox";
                 checkbox9.name = "resort";
                 checkbox9.value = "sailing";
              
                 //2
                 var label9 = document.createElement('label9')
                 label9.appendChild(document.createTextNode('Sailing'));

                 //3
                 var checkbox10 = document.createElement('input');
                 checkbox10.type = "checkbox";
                 checkbox10.name = "resort";
                 checkbox10.value = "beach";
              
                 //3
                 var label10 = document.createElement('label10')
                 label10.appendChild(document.createTextNode('Beach'));

                 //4
                 var checkbox11 = document.createElement('input');
                 checkbox11.type = "checkbox";
                 checkbox11.name = "resort";
                 checkbox11.value = "hiking";
              
                 //4
                 var label11 = document.createElement('label11')
                 label11.appendChild(document.createTextNode('Hiking'));

                  //4
                  var checkbox12 = document.createElement('input');
                  checkbox12.type = "checkbox";
                  checkbox12.name = "resort";
                  checkbox12.value = "boating";
               
                  //4
                  var label12 = document.createElement('label12')
                  label12.appendChild(document.createTextNode('Boating'));

                 //Append
                linebreak = document.createElement("br");

                result.appendChild(checkbox8);
                result.appendChild(label8);
                result.appendChild(linebreak);

                result.appendChild(checkbox9);
                result.appendChild(label9);
                result.appendChild(linebreak);

                result.appendChild(checkbox10);
                result.appendChild(label10);
                result.appendChild(linebreak);

                result.appendChild(checkbox11);
                result.appendChild(label11);
                result.appendChild(linebreak);

                result.appendChild(checkbox12);
                result.appendChild(label12);
                result.appendChild(linebreak);
            }
            else if(radioButtonVal == "newzealand")
            {
                //Assigning code to the Div tag labeled result
                var result = document.getElementById("result");

                //First CheckBox for NewZealand
                var checkbox13 = document.createElement('input');
                checkbox13.type = "checkbox";
                checkbox13.name = "resort";
                checkbox13.value = "citytours";
               
                //Label for CheckBox 8 (CB1 for maldives)
                var label13 = document.createElement('label13')
                label13.appendChild(document.createTextNode('City Tours')); 

                //2
                var checkbox14 = document.createElement('input');
                checkbox14.type = "checkbox";
                checkbox14.name = "resort";
                checkbox14.value = "sports";
               
                //2
                var label14 = document.createElement('label14')
                label14.appendChild(document.createTextNode('Sports')); 

                 //3
                 var checkbox15 = document.createElement('input');
                 checkbox15.type = "checkbox";
                 checkbox15.name = "resort";
                 checkbox15.value = "cycling";
                
                 //3
                 var label15 = document.createElement('label15')
                 label15.appendChild(document.createTextNode('Cycling'));

                 //4
                 var checkbox16 = document.createElement('input');
                 checkbox16.type = "checkbox";
                 checkbox16.name = "resort";
                 checkbox16.value = "museums";
                
                 //4
                 var label16 = document.createElement('label17')
                 label16.appendChild(document.createTextNode('Museums')); 

                 //5
                 var checkbox17 = document.createElement('input');
                 checkbox17.type = "checkbox";
                 checkbox17.name = "resort";
                 checkbox17.value = "boating";
                
                 //5
                 var label17 = document.createElement('label17')
                 label17.appendChild(document.createTextNode('Boating')); 
 

                //Append
                linebreak = document.createElement("br");

                result.appendChild(checkbox13);
                result.appendChild(label13);
                result.appendChild(linebreak);

                result.appendChild(checkbox14);
                result.appendChild(label14);
                result.appendChild(linebreak);

                result.appendChild(checkbox15);
                result.appendChild(label15);
                result.appendChild(linebreak);

                result.appendChild(checkbox16);
                result.appendChild(label16);
                result.appendChild(linebreak);

                result.appendChild(checkbox17);
                result.appendChild(label17);
                result.appendChild(linebreak);

            }
            else
            {
                document.write("Invalid Selection");
            }
            
        }
        
    } 
} 