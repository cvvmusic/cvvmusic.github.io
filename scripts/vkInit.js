var userAvatar;
var userFirstName = "Имя";
var userLastName = "Фамилия";
var userId = 0;

VK.init(function() {

	VK.api("users.get", {"fields": photo_200, id}, function (data) {

    	userFirstName.setText(data.response.first_name);
    	userLastName.setText(data.response.last_name);

	});
    
}, function() {



}, '5.59');
