$(document).ready(function () {
 "use strict";
 $('#slider-caroufredsel').caroufredsel({
   responsive:true,
   width:'100%',
   circular:true,
   scroll:
   {
      items:1,
      duration:500,
      pauseOnHover:true

   },
   auto:true,
   items:
   {
        visible:
        {
              min:1,
              max:1
        },
        height:"variable",
   },
   pagination :
   {
      container:".sliderpager",
      pageAnchorBuilder:false
   }

 });

    $(window).scroll(function () {
      var top = $(window).scrollTop();
      if(top>=60) {
        $("header").addClass('secondary');
      }else if ($("header").hasClass('secondary')) {
          $("header").removeClass('secondary');
      }
});
 });

 var myApp = angular.module("myApp", ["ngRoute","ngAnimate"]);

 myApp.config(function($routeProvider) {
 	$routeProvider
 		.when("/books", {
 			templateUrl: "book-list.html",
 			controller: "BookListCtrl"
 		})
 		.when("/kart", {
 			templateUrl: "kart-list.html",
      controller: "KartListCtrl"
 		})
 	.otherwise({
 		redirectTo: "/books"
 	});
 });
 myApp.factory("kartService",function () {
   var kart =[];

   return {
     getKart:function () {
       return kart;
     },
     addToKart:function (book) {
       kart.push(book);
     },
     buy:function (book) {
       alert("Thanks for buying "+ book.name);
     }
   }
 });
 myApp.factory("bookService",function () {
   var books =[
  		{
  			imgUrl: "adultery.jpeg",
  			name: "Adultery",
  			price: 3050,
  			rating: 4,
  			binding: "Paperback",
  			publisher: "Random House India",
  			releaseDate: "12-08-2014",
  			details: "Linda, in her thirties, begins to question the routine and predictability of her days. In everybodys eyes, she has a perfect life-happy marriage, children and a career..."
  		},
  		{
  			imgUrl: "coder.jpg",
  			name: "The Clean Coder: A Code of Conduct for Professional Programmers",
  			price: 8500,
  			rating: 4.5,
  			binding: "Paperback",
  			publisher: "Prentice Hall",
  			releaseDate: "04-05-2011",
  			details: "Between 1986 and 2000 I worked closely with Jim Newkirk, a colleague from Teradyne. He and I shared a passion for programming and for clean code.We would spend nights, evenings, and weekends together playing with different programming styles and design techniques..."
  		},
  		{
  			imgUrl: "life-or-death.jpeg",
  			name: "Life or Death",
  			price: 3370,
  			rating: 4,
  			binding: "Paperback",
  			publisher: "Hachette India",
  			releaseDate: "01-04-2017",
  			details: "Why would a man escape from prison the day before he's due to be released? Audie Palmer has spent a decade in prison for an armed robbery in which four people died, including two of his gang..."
  		},
  		{
  			imgUrl: "playing.jpeg",
  			name: "Playing It My Way : My Autobiography",
  			price: 5999,
  			rating: 5,
  			binding: "Hardcover",
  			publisher: "Hodder & Stoughton",
  			releaseDate: "01-08-2010",
  			details: "I knew that if I agreed to write my story, I would have to be completely honest, as thats the way I have always played the game and that would mean talking about a number of things..."
  		},
  		{
  			imgUrl: "the-fault.jpeg",
  			name: "The Fault in Our Stars",
  			price: 2500,
  			rating: 4.5,
  			binding: "Paperback",
  			publisher: "Penguin Books Ltd",
  			releaseDate: "25-01-2013",
  			details: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis..."
  		},
  		{
  			imgUrl: "wings-of-fire.jpeg",
  			name: "Wings of Fire: An Autobiography",
  			price: 4000,
  			rating: 5,
  			binding: "Paperback",
  			publisher: "Universities Press",
  			releaseDate: "25-08-2000",
  			details: "Wings of Fire traces the life and times of India's former president A.P.J. Abdul Kalam. It gives a glimpse of his childhood as well as his growth as India's Missile Man..."
  		}
  	];
    return {
      getBooks :function() {
        return books;
      }
    }


 });
myApp.controller("KartListCtrl",function ($scope,kartService) {
  $scope.kart = kartService.getKart();
  $scope.buy =function (book) {
    kartService.buy(book);

  }



});
 myApp.controller("HeaderCtrl", function($scope) {
 	$scope.appDetails = {};
 	$scope.appDetails.title = "BooKart";
 	$scope.appDetails.tagline = "We have collection of 1 Million books";


 });

 myApp.controller("BookListCtrl", function($scope,bookService,kartService) {
 	$scope.books =bookService.getBooks();

 	$scope.addToKart = function(book) {
    kartService.addToKart(book);
 	}


  $(document).on('click','.nav-wrapper ul li',function () {
     $(this).addClass('activeClass').siblings().removeClass('activeClass');
  });


 });
