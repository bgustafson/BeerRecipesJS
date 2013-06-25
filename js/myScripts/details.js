$('#links').html("<a href='Edit.html'>Review</a> <a href='Index.html'>Back to List</a>");
  
    ($.ajax({
      url: '../Recipes/Data/data.jsonp',
      dataType: "json",
      success: function (data) {
        //setup the form view
        var len = data.length;
        var id = urlParameter().id;
                        
        for(var i = 0; i < len; i++){
          if(data[i].Id == id){
            $('#links').html("<a href='Edit.html?id=" + data[i].Id + "'>Review</a> <a href='Index.html'>Back to List</a>");
            
            //set values
            $('#dateAdded').html(data[i].DateAdded);
            $('#author').html(data[i].Author);
            $('#rating').html(data[i].Rating);
            $('#name').html(data[i].Name);
            $('#style').html(data[i].Style);
            $('#mashtype').html(data[i].MashType);
            $('#preptime').html(data[i].PrepTime);
            $('#description').html(data[i].Description);
            $('#cost').html(data[i].Cost);         
            $('#primary').html(data[i].Primary);
            $('#secondary').html(data[i].Secondary);
         
            var ingredients = data[i].ingredients
            var ingredients_Len = ingredients.length;
            
            for(var x = 0; x < ingredients_Len; x++){                
              var row =  "<div><div>" + ingredients[x].Amount + " " +ingredients[x].Unit + " " + ingredients[x].Name + "</div></div>";
              $('#ingredients').append(row);
            }
            
            
            var steps = data[i].steps
            var steps_Len = steps.length;
            
            for(var x = 0; x < steps_Len; x++){             
              var row =  "<div><div>" + steps[x].Num + ") " + steps[x].Description + "</div></div>";
              $('#steps').append(row);
            }
          }
        }      
      },
      error: function(xhr, status){
        alert(status);  
      }
    }));
    
    function urlParameter() {
      var url = window.location.href,
      retObject = {},
      parameters;

      if (url.indexOf('?') === -1) {
        return null;
      }

      url = url.split('?')[1];

      parameters = url.split('&');

      for (var i = 0; i < parameters.length; i++) {
        retObject[parameters[i].split('=')[0]] = parameters[i].split('=')[1];
      }

      return retObject;
    }