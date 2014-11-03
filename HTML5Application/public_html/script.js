$(document).ready(function(){
    var isOn = false;
        $('.button').click(function(){
            if(!isOn){
           $('.Menu').css('color','red'); 
           isOn=!isOn;
            }
            else{
           $('.Menu').css('color','green');
           isOn=!isOn;
            }
    });
});
