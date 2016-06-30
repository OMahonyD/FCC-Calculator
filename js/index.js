var totalDiv = document.getElementById('result');

//Function handling '.num-button' click
function numClick(){
  $('.num-button').click(function(){
    if(this.id === 'one') {
      $(totalDiv).append($('#one').html());  
    }else if(this.id === 'two') {
      $(totalDiv).append($('#two').html());
    }else if(this.id === 'three') {
      $(totalDiv).append($('#three').html());
    }else if(this.id === 'four') {
      $(totalDiv).append($('#four').html());
    }else if(this.id === 'five') {
      $(totalDiv).append($('#five').html());
    }else if(this.id === 'six') {
      $(totalDiv).append($('#six').html());
    }else if(this.id === 'seven') {
      $(totalDiv).append($('#seven').html());
    }else if(this.id === 'eight') {
      $(totalDiv).append($('#eight').html());
    }else if(this.id === 'nine') {
      $(totalDiv).append($('#nine').html());
    }else if(this.id === 'zero') {
      $(totalDiv).append($('#zero').html());
    }
  });
}//end numClick function

//Function handling '.function-button' click
function operatorClick(){
  $('#add').click(function(){
    $(totalDiv).append($(this).html());
  });
  
  $('#subtract').click(function(){
    $(totalDiv).append($(this).html())
  });
  
  $('#multiply').click(function(){
    $(totalDiv).append('*');
  });
  
  $('#divide').click(function(){
    $(totalDiv).append('/');
  });
  
   $('.clear-button').click(function(){
    $(totalDiv).text("");
  });
 
  $('.clear-all-button').click(function(){
    $(totalDiv).text("");
  });  
  
     $('.equals-button').click(function(){
    $(totalDiv).html(eval($(totalDiv).text()))
  })
  
}//end operatorClick

//document ready
$(function() {
  numClick();
  operatorClick();
});//end document ready
