var userAvatar;
var first_name;
var last_name;
var id;

VK.init(function() {

	VK.api("users.get", {"fields": "photo_200"}, function (data) {

    	userAvatar.setImage(data.response['0'].photo_200);

	});
    
}, function() {



}, '5.59');
