function pimp()
	{
		document.getElementById('pimpedText').style.fontSize="24pt";
	}
function makeBold(checkbox){
	if (checkbox.checked) {
			document.getElementById('pimpedText').style.fontWeight="bold";
			document.getElementById('pimpedText').style.textDecoration="underline";
			document.getElementById('pimpedText').style.color="green";
		}else{
			document.getElementById('pimpedText').style.fontWeight="normal";
			document.getElementById('pimpedText').style.textDecoration="";
		}
}
function transformSize(){
	document.getElementById('pimpedText').style.textTransform="uppercase";
}