$("style").last().append(`
#users .uzr.stl1 .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 9px !important;
  height: 52px !important;
  margin-left: 12px!important;
  z-index: 0 !important;
  
}
#users .uzr.stl1 .d-flex.dots {
  margin-top: 7px !important;
  margin-left: 5px;
}
#users .uzr.stl1 .u-msg {
  text-align: center;
  -webkit-background-clip: text;
  padding: 1px !important;
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
  background-image: url(https://i.ibb.co/JzgnvW8/61.gif);
  color: transparent !important;
  background-size: 90% 100%;
}
#users .uzr.stl1 .ustat {
  width: 54px !important;
  border-radius: 0px 50px 50px 50px !important;
  height: 52px !important;
  margin-top: 5px !important;
  min-height: 0% !important;
  margin-left: 10px;
  z-index: 0 !important;
  display: none;
}
#users .uzr.stl1 span.uhash {
  margin-right: 324px;
  margin-top: 24px;
  margin-left: 0px;
}
#users .uzr.stl1 img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 282px;
}
#users .uzr.stl1 {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  height: 90px;
  border-radius: 4px;
  background-image: url("https://www.raed.net/img?id=339908");
  background-size: cover;
  border: 1px solid #fff;
}
#users .uzr.stl1 .c-flex.fr {
  margin-left: -4px!important;
  float: left;
}
#users .uzr.stl1 .d-flex.fl {
  padding-right: 0px !important;
}
#users .uzr.stl1 .u-topic {
  margin-left: 5px;
}
#users .uzr.stl1 .My_star1 {
  width: 100px;
  margin-top: -74px;
  margin-left: -10px;
  height: 96px;
}
#users .uzr.stl1 .My_tsor {
  width: 79px;
  margin-top: -45px;
  z-index: 0;
  margin-left: 36px;
}
#users .uzr.stl1 .My_vedio1 {
  float: right;
  width: 20px;
  margin-top: 0px;
  margin-right: 5px;
  cursor: pointer;
}
`);
var l_itv1=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itv1);
        $("#users .uzr:contains('قِسْطَاسٌ')").addClass('stl1');
        $("#users .uzr.stl1 .c-flex.fr").append('<img class="My_star1" src="https://h.top4top.io/p_2792tp8yv0.gif">');
	$("#users .uzr.stl1 .c-flex.fr").append('<img class="My_tsor" src="">');
	
        $("#users .uzr span.u-topic:contains('*90+')").after('<img id="mystory1" class="My_vedio1" title="يوتيوب" src="https://i.ibb.co/47VS4nY/image.png">');
    
        $("#users .uzr.stl1 span.uhash, #users .uzr.stl1 img.co").hide(); 


        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">'); 
        
        
        
        $("div#users .uzr:contains('قِسْطَاسٌ') .My_vedio1").click(function(){
        $("#movon1").show();
        
        $('#movon1').addClass('stl1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        
        
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');
          
		  
        $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/sv3N3jLfc7A" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
        
       $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);
