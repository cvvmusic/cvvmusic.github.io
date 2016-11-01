var userAvatar;
var first_name;
var last_name;
var userId;

VK.init(function() {

	VK.api("users.get", {"fields": "id", "photo_200"}, function (data) {

    	userId = data.response.id;

	});
    
}, function() {



}, '5.59');
