angular.module('starter.controllers', [])

.controller('AppCtrl', function() {


})
  .controller('HomeCtrl', function () {
    this.title = "Hack Fresno"
  })
  .controller('AboutCtrl', function ($http) {
    this.title = "About Us";
    this.content = "";
    $http.get('http://localhost:3000/about').then(res => {
      this.content = res.data;
    });
  })
  .controller('ThemesCtrl', function ($http) {
    this.themes = [];
    this.title = "Our themes";
    $http.get('http://localhost:3000/themes').then(res => {
      this.themes = res.data;
    });
  });
