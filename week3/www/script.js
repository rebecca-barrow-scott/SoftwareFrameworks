$( document ).ready(function() {
    $("#loginForm").submit(function(event){
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
            url : window.location + "form",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(customer){
                if (customer.valid == true){
                    $("#loginForm").removeClass("fail");
                    $("#loginForm").addClass("success");
                } else {
                    $("#loginForm").removeClass("success");
                    $("#loginForm").addClass("fail");
                }
            },
            error : function(e){
                alert("Error!")
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
