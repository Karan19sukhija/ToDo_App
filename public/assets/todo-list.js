$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',  // this will call the controller with that method 
        data: todo,    // this will be send to the controller
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-"); // replace any spaces with hyphen
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item, // sending the data paramter 
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
