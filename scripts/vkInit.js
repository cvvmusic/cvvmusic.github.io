var userAvatar;
var userFirstName = "Имя";
var userLastName = "Фамилия";
var userId = 0;

VK.init(function() {

	VK.api("users.get", {"fields": "first_name, last_name"}, function (data) {

    	userFirstName.setText(data.response['0'].first_name);
    	userLastName.setText(data.response['0'].last_name);

	});
    
}, function() {



}, '5.59');
