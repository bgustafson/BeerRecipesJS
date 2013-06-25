($.ajax({
      url: '../Recipes/Data/data.jsonp',
      dataType: "json",
      success: function (data) {
        //setup the form view
        var len = data.length;
        
        for(var i = 0; i < len; i++){
          var row = "<tr><td>" + data[i].Name + "</td><td>" + data[i].Style + "</td><td>" + data[i].MashType + "</td><td>" + data[i].Rating + "</td><td><a href='Edit.html?id=" + data[i].Id + "''>Review</a><a href='Details.html?id=" + data[i].Id + "'>Details</a></td></tr>";   
          $('#recipetable').append(row);
        }      
      },
      error: function(xhr, status){
        alert(status);  
      }
    }));