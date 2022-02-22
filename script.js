
//use focusout() to check if fields have been populated with a valid entry
$(document).ready(function(){

    // //disabled submit btn
    $('#submitBtn').attr('disabled',true);
         
    //validate fields & show error messages
    $('input[name="username"]').focusout(function(){
        let input_value_username = $(this).val();
        let text1 = ""
        if (input_value_username.length < 6) {
            $(this).css("border", "1px solid red");
            text1 += "Username must be at least 6 characters";
            document.getElementById("invalid-username").innerText = text1;
        }
    });
    $('input[name="username"]').focusin(function(){
        $(this).css("border", "1px solid #CED4DA");
        document.getElementById("invalid-username").innerText = "";
      });

      $('input[name="img-title"]').focusout(function(){
        let input_value_title = $(this).val();
        let text2 = ""
        if (input_value_title.length < 1) {
            $(this).css("border", "1px solid red");
            text2 += "Please enter an image title";
            document.getElementById("invalid-title").innerText = text2;
        }
    });
    $('input[name="img-title"]').focusin(function(){
        $(this).css("border", "1px solid #CED4DA");
        document.getElementById("invalid-title").innerText = "";
      });

    $('textarea[name=comment]').focusout(function(){
        let input_value_comment = $(this).val();
        let text3 = ""
        if (input_value_comment.length < 1) {
            $(this).css("border", "1px solid red");
            text3 += "Please enter a comment";
            document.getElementById("invalid-comment").innerText = text3;
        }
    });
    $('textarea[name=comment]').focusin(function(){
        $(this).css("border", "1px solid #CED4DA");
        document.getElementById("invalid-comment").innerText = "";
      });

      //using JQuery give button a border and background color
      $('#submitBtn').css("border", "5px solid rgb(104, 72, 68)").css("background-color", "rgb(199, 144, 137)")

});

//enable button once all fields are validated
//how to apply this to the button?
function validated() {
        let username = $('input[name="username"]').val();
        let img_title = $('input[name="img-title"]').val();
        let comment = $('textarea[name=comment]').val();
    
        if ((username.length >6) && (img_title.length > 1) && (comment.length > 1)) {
            $('#submitBtn').removeAttr('disabled');
        }
    } 
