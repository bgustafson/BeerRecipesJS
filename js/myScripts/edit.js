($.ajax({
      url: '../Recipes/Data/data.jsonp',
      dataType: "json",
      success: function (data) {
        //setup the form view
        var len = data.length;
        var id = urlParameter().id;
                        
        for(var i = 0; i < len; i++){
          if(data[i].Id == id){
           
            //set values
            $('#name').html(data[i].Name);
            $('#description').html(data[i].Description);

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
    
    function updateTextInput(val) {
      $('#sliderVal').html(val); 
    }