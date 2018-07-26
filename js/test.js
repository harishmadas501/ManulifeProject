$("#jsVolumeBall").mousemove(function(){
    var height = $("#jsVolumeLevel").height();
	$("#jsVolumeLevel").css('height', height+1);
	$("#jsVolumeLevel").css('width', '0px');
});
