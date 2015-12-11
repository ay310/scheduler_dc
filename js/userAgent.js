(function(){
 
    var ua = navigator.userAgent.toUpperCase();
    var url = document.location.pathname;
    var spDir = '/sp/';
    (ua.indexOf('IPHONE') != -1 || (ua.indexOf('ANDROID') != -1 && ua.indexOf('MOBILE') != -1))?
        isSP() :
        isPC();
    function isSP(){
        if(url.match(spDir)){
            return false;
        }else{
            location.href = 'http://mima.c.fun.ac.jp/cgi-bin/1012151/cal/sp_index.rb';
        }
    }
    function isPC(){
        if(!url.match(spDir)){
            return false;
        }else{
            location.href = '/';
        }
    }
 
}());