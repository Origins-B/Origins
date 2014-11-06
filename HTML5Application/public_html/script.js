
var clicks = 0;
var amount = 1;
var price = 10;
var runs = 0;
$(document).ready(function(){
    $('.add').click(function(){
        clicks=clicks+amount;
        refresh();
        
    });
    
    $('.BuyButtonA').click(function(){
        if(checkIf(clicks,price)){
            clicks-=price;
            price=price+150;
            amount=amount+4;
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

var Save = function(){
    $.cookie('clicks', clicks, { expires: 7 });
    $.cookie('amount', amount, { expires: 7 });
    $.cookie('price', price, { expires: 7 });
};

var Load = function(){
    price = $.cookie('price');
    amount= $.cookie('amount');
    clicks= $.cookie('clicks');
};
