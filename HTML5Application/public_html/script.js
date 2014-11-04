var isOn = false;
var clicks = 0;
var amount = 1;
var price = 5;
$(document).ready(function(){
        $('.button').click(function(){
            if(!isOn){
           $('.Menu').css('color','red'); 
            }
            else{
           $('.Menu').css('color','green');
            }
            isOn=!isOn;
    });
    
    $('.add').click(function(){
        clicks+=amount;
        refresh();
    });
    
    $('.BuyButtonA').click(function(){
        if(checkIf(clicks,price)){
            clicks-=price;
            price+=10;
            amount++;
            refresh();
            refreshShop();
        }
    });
});

 var checkIf = function(a,b){
        if(a===b||a>b){
            return true;
        }
        else{
            return false;
        }
    };
var refresh = function(){
  $('.counter').text('Clicks: '+clicks);    
};
var refreshShop = function(){
    $('.PriceA').text('Price: '+price);
};
