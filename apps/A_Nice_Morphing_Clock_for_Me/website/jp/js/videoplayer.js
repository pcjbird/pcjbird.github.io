function playVideo(videoUrl)
{
	
    document.getElementById("video_overlay").style.display="block";
    document.getElementById("video_holder").style.display="block";
    document.getElementById("video_loader").style.display="block";
    document.getElementById("video_holder").innerHTML = "<div class=\"video_close\" onclick=\"closeVideo()\"></div><video autoplay loop controls id=\"video\" class=\"video\"><source src=\""+videoUrl+"\" type=\"video/mp4\"></video>";
}

function closeVideo()
{
	document.getElementById("video_overlay").style.display="none";
	document.getElementById("video_holder").style.display="none";
	document.getElementById("video_loader").style.display="none";
	document.getElementById("video_holder").innerHTML = "";
}