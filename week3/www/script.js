$( document ).ready(function() {
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost(){
        var formData = {
            email : $("#email").val(),
            password : $("#password").val()
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location + "login/attempt",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(value){
                if (value.ok){
                    $("#loginform").removeClass("fail");
                    $("#loginform").addClass("success");
                    $("#errormsg").removeClass("fail");
                    $("#errormsg").addClass("hidemessage");
                } else {
                    $("#loginform").removeClass("success");
                    $("#loginform").addClass("fail");
                    $("#errormsg").addClass("fail");
                    $("#errormsg").removeClass("hidemessage");

                }
            },
            error : function(e){
                alert("Error");
                console.log("Error: ", e);
            }
        });
        resetData();
    }
    function resetData(){
        $("#email").val("");
        $("#password").val("");
    }
});
