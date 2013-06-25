var _ingredient = 0;
var _step = 0;

function addIngredientUI(){
  var i = "<div id='IngreNo" + _ingredient + "'>"+  
            "<div class='editor-label'>Name</div>"+
            "<div class='editor-field'>"+
              "<input type='text' id='name" + _ingredient + "'/>"+
            "</div>"+
            "<div class='editor-label'>Amount</div>"+
            "<div class='editor-field'>"+
                "<input type='text' id='amount" + _ingredient + "'/>"+
            "</div>"+
            "<div class='editor-label'>Unit</div>"+
            "<div class='editor-field'>"+
                "<select id='unit" + _ingredient + "'>"+
                    "<option value='Package'>Package</option>"+
                    "<option value='oz'>oz</option>"+
                    "<option value='lbs'>lbs</option>"+
                "</select>"+
            "</div>"+
           "</div>";
           
  _ingredient++; 
  $('#editorRowsIngredients').append(i);
}

function addStepUI(){
  var s = "<div id='StepNo" + _step + "'>"+   
            "<div class='editor-label'>Description</div>"+
            "<div class='editor-field'>"+
              "<textarea id='description'/>"+
            "</div>"+
            "<div class='editor-label'>Step Number</div>"+
            "<div class='editor-field'>"+
              "<input type='text' id='num'/>"+
            "</div>"+
          "</div>";
  
  _step++;
  $('#editorRowsSteps').append(s);
}

function saveRecipe(){
  //code to save recipe to server
  //now i can searcch for each main div by name and then get that divs elements to build the json
  
  var ingredients= "";
  var steps = "";
  
  for(var i = 0; i < _ingredient; i++){    
    //use jquery to get element values
    ingredients += "{'amount':'" + $('#amount' + i).val() + "',"+
                  "'unit':'" + $('#unit' + i).val() + "',"+
                  "'name':'" + $('#name' + i).val() +"'},"; 
  }
  
  if(_ingredient > 0){
    ingredients = ingredients.substring(0, ingredients.length - 1)
  }

  for(var i = 0; i < _step; i++){  
    steps += "{'description':'" +  $('#description' + i).val() + "',"+
             "'num':'" +  $('#num' + i).val() + "'},";   
  }

  if(_step > 0){
    steps = steps.substring(0, steps.length - 1)
  }

  var json = "{'author':$('author').val(),"+ 
             "'name':$('name').val(),"+
              "'style':$('style').val(),"+
              "'mashtyp':$('mashtyp').val(),"+
              "'description':$('description').val(),"+
              "'preptime':$('preptime').val(),"+
              "'cost':$('cost').val(),"+
              "'primary':$('primary').val(),"+
              "'secondary':$('secondary').val(),"+
              "'ingredients':["+ ingredients +
              "],"+
              "'steps':[" + steps +
              "]}";     
  
  alert(json);
  /*$.ajax({
        type: "POST",
        url: "www.url.com",
        data: jQuery.parseJSON(json),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){alert(data);},
        failure: function(errMsg) {
            alert(errMsg);
        }
  });*/

  window.location = 'Index.html';
}
