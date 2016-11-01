var userAvatar;
var userFirstName;
var userLastName;
var userId = 0;

VK.init(function() {

	VK.api("users.get", {fields: "photo_200"}, function (data) {

    	userFirstName.setText(data.response['0'].first_name);
    	userLastName.setText(data.response['0'].last_name);

	});
    
}, function() {



}, '5.59');
