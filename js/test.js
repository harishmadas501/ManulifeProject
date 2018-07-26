$("#jsVolumeBall").mousemove(function(){
    var height = $("#jsVolumeLevel").height();
	if(height!=100)
		$("#jsVolumeLevel").css('height', height+1);
	$("#jsVolumeLevel").css('max-width', '0px');
});

$("#jsVolumeBall").mousedown(function(){
    var height = $("#jsVolumeLevel").height();
	if(height!=0)
		$("#jsVolumeLevel").css('height', height-1);
	$("#jsVolumeLevel").css('max-width', '0px');
});
