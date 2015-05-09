/**
 * Created by Cristian on 09/05/2015.
 */
(function ($) {
    "use strict";
    $('#mainForm').on('submit', function (e) {
        e.preventDefault();
        var user = {
            user: {
                email: e.target.email.value,
                username: e.target.username.value,
                name: e.target.name.value,
                id: e.target.idUser.value
            }
        };
        $.ajax({
            url: 'http://192.168.1.52:3000/api/user',
            type: 'PUT',
            data: JSON.stringify(user),
            contentType: 'application/json; charset=ISO-8859-1',
            dataType: 'json',
            success: function (data) {
                alert(data.message);
            },
            err: function(err){
                alert(JSON.stringify(err));
            }
        });
        console.log(user);
    });
}(jQuery));
