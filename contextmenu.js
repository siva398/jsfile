 <style>
 #rmenu {
  border: 1px solid #058dfa;
  background-color: #058dfa;
  font-size: 13px;
}

#rmenu ul {
  padding: 0;
  list-style: none;
  margin-bottom: 0;
}
#rmenu li
{
  list-style: none;
  padding: 3px 5px 3px 5px;
  color:white;
  cursor: pointer;
}
#rmenu li:hover{
background-color:#01579b;
}
 </style>
 
 <div class="hide" id="rmenu">
        <ul>
            <li id="ifrm_print" class="grow">Print<span style="font-size:10px;padding-left:80px;" id="ifrm_printspan">Ctrl + P</span></li>
			<li id="ifrm_mail" class="grow">Mail<span style="font-size:10px;padding-left:80px;" id="ifrm_mailspan">Ctrl + M</span></li>
        </ul>
    </div>
    <script>
    $(document).on('keydown', function(e) {
			
			var code = (e.keyCode ? e.keyCode : e.which);
			if (e.ctrlKey === true && code == 80) {
				e.preventDefault();
				$("#print_mode").click();
			}else if(e.ctrlKey === true && code == 77){
				$('#snd_mail').click();
			}
	 });
	 //check document mousedown:
	 $(document).on('mousedown', function(e) {
		if(e.button == 2){
			 document.addEventListener('contextmenu', function(e) {
					$("#rmenu").removeClass("hide");
					$("#rmenu").css({position: "absolute",top:e.pageY,left: e.pageX});
					e.preventDefault();
			}, false);
		}else{
			
			$("#rmenu").addClass("hide");
			
				if(e.target.id == 'ifrm_mail' || e.target.id == 'ifrm_mailspan'){
					$('#snd_mail').click();
				}else if(e.target.id == 'ifrm_print' || e.target.id == 'ifrm_printspan'){
					$("#print_mode").click();
				}
		}		
	 });
	//check iframe mousedown:	
	window.frames["ifmdts"].addEventListener('mousedown', function(event) {
			
		   if(event.button == 2){
				var x = event.pageX;
				var y = event.pageY;
				window.frames["ifmdts"].document.oncontextmenu = function(){
					$("#rmenu").removeClass("hide");
					$("#rmenu").css({position: "absolute",top:y,left: x});
					return false;
				}
		   }else{
			$("#rmenu").addClass("hide");
				if(event.target.id == 'ifrm_mail' || event.target.id == 'ifrm_mailspan'){
					$('#snd_mail').click();
				}else if(event.target.id == 'ifrm_print' || event.target.id == 'ifrm_printspan'){
					$("#print_mode").click();
				}
		   }
	}, true); 
	//detect owne contextmenu:
	$(document).on('contextmenu','#rmenu', e => {
		  return false;
	});
    </script>
