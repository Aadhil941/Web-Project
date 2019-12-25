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
 		.when("/cart", {
 			templateUrl: "cart-list.html",
      controller: "cartListCtrl"
 		})
 	.otherwise({
 		redirectTo: "/books"
 	});
 });
 myApp.factory("cartService",function () {
   var cart =[];

   return {
     getCart:function () {
       return cart;
     },
     addToCart:function (book) {
       cart.push(book);
     },
     buy:function (book) {
       alert("Thanks for buying "+ book.name);
     }
   }
 });
 myApp.factory("bookService",function () {
   var books =[
  		{
  			imgUrl: "java.jpg",
  			name: "Java Concurrency in Practice",
  			price: 3050,
  			rating: 4,
  			binding: "Paperback",
  			publisher: "Wrox Press",
  			releaseDate: "09-05-2006",
  			details: "I was fortunate indeed to have worked with a fantastic team on the design and implementation of the concurrency features added to the Java platform in Java 5.0 and Java 6...."
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
  			imgUrl: "csharp.jpg",
  			name: "C# 7.0 in a Nutshell: The Definitive Reference",
  			price: 3370,
  			rating: 4.64,
  			binding: "Paperback",
  			publisher: "O'Reilly Media",
  			releaseDate: "28-10-2017",
  			details: "When you have questions about C# 7.0 or the .NET CLR and its core Framework assemblies, this bestselling guide has the answers you need. C# has become a language of unusual flexibility and breadth since its premiere in 2000..."
  		},
  		{
  			imgUrl: "python.jpg",
  			name: "Dive into Python",
  			price: 5999,
  			rating: 4,
  			binding: "Paperback",
  			publisher: "Apress",
  			releaseDate: "05-11-2004",
  			details: "Whether you're an experienced programmer looking to get into Python or grizzled Python veteran who remembers the days when you had to import the string module, Dive Into Python is your 'desert island' Python book..."
  		},
  		{
  			imgUrl: "iot.jpg",
  			name: "Enterprise IoT: Strategies and Best Practices for Connected Products and Services",
  			price:9000,
  			rating: 3.5,
  			binding: "Paperback",
  			publisher: "O'Reilly Media",
  			releaseDate: "22-11-2015",
  			details: "Current hype aside, the Internet of Things will ultimately become as fundamental as the Internet itself, with lots of opportunities and trials along the way. To help you navigate these choppy waters..."
  		},
  		{
  			imgUrl: "js.jpg",
  			name: "Beginning JavaScript",
  			price: 4000,
  			rating: 4.1,
  			binding: "Paperback",
  			publisher: "Wrox Press",
  			releaseDate: "09-03-2015",
  			details: "The bestselling JavaScript guide, updated with current features and best practices Beginning JavaScript 5th Edition shows you how to work effectively with JavaScript frameworks, functions, and modern browsers..."
  		}
  	];
    return {
      getBooks :function() {
        return books;
      }
    }


 });
myApp.controller("cartListCtrl",function ($scope,cartService) {
  $scope.cart = cartService.getCart();
  $scope.buy =function (book) {
    cartService.buy(book);

  }



});
 myApp.controller("HeaderCtrl", function($scope) {
 	$scope.appDetails = {};
 	$scope.appDetails.title = "Bookcart";
 	$scope.appDetails.tagline = "We have collection of 1 Million books";


 });

 myApp.controller("BookListCtrl", function($scope,bookService,cartService) {
 	$scope.books =bookService.getBooks();

 	$scope.addToCart = function(book) {
    cartService.addToCart(book);
 	}


  $(document).on('click','.nav-wrapper ul li',function () {
     $(this).addClass('activeClass').siblings().removeClass('activeClass');
  });


 });
