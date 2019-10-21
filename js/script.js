$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "appyhay"){
        appyhay();
    } else if(input==="ovelay"){
        ovelay();
    }else if(input==="angryyay"){
      angryyay();
    }else if(input==="ungryhay"){
      ungryhay();
    }else{
     alert("Please enter ovelay,angryyay,ungryhay,");
    }
});
var appyhaypics=["https://www.baumannmusic.com/wp-content/uploads/2016/09/Happy-Background-Music-Download-e1475058467492.jpg","http://images.hellogiggles.com/uploads/2015/03/22/featured.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4R5c6v3zGdnbMgeZersLabUSFnuzVtfQtXCDjsbpwoIYvLTdG"];

var angryyaypics=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8sgv8bgiTgmvAhiY0IlxwVxgcb8PEY0cdKpbdDDAjLQhz7nn","https://media2.giphy.com/media/3oEdv6UfpU2K6jHot2/source.gif","https://i.pinimg.com/originals/9d/f5/47/9df5473084c7b868c54112f6d2ad1bb0.gif"];

var ungryhaypics =["https://t2.ftcdn.net/jpg/01/90/72/79/400_F_190727909_0bMsdE5O8ZIXUYU36RUOioUmb8nkBt91.jpg","https://2.bp.blogspot.com/-EIGIXESf_yE/VqPMAPh5qwI/AAAAAAAACjQ/2vDjs6msKtA/s1600/26.%2BWhen%2Byou%2527re%2Breally%2Bhungry.gif","http://i.imgur.com/KXKtuJM.gif"];

var ovelaypics=[""];





});
