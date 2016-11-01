var userAvatar;
var first_name;
var last_name;
var userId;

VK.init(function() {

	VK.api("users.get", {"fields": "photo_200"}, function (data) {

    	userId.setText(data.response['0'].id);

	});
    
}, function() {



}, '5.59');
