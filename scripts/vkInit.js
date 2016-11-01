var userAvatar;
var userFirstName = "Имя";
var userLastName = "Фамилия";
var userId = 0;

VK.init(function() {

	VK.api("users.get", {"fields": "photo_200"}, function (data) {

		userAvatar.setImage(data.response['0'].photo_200);
    	userFirstName = data.response['0'].first_name;
    	userLastName = data.response['0'].last_name;
    	userId = data.response['0'].id;

	});
    
}, function() {



}, '5.59');
