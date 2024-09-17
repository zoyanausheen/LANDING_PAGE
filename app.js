// Initialize Angular App
var app = angular.module('seriesApp', []);

// Controller to manage series data
app.controller('seriesController', function($scope) {
    // List of series
    $scope.seriesList = [
        {
            name: "Game of Thrones",
            description: "An epic fantasy drama where noble families vie for control of the Iron Throne.",
            platform: "HBO Max",
            image: "https://res.cloudinary.com/dcofr8eie/image/upload/v1726315653/game-of-thrones-poster_t8i1lt.jpg"
        },
        {
            name: "Breaking Bad",
            description: "A high school teacher turned methamphetamine producer struggles to protect his family.",
            platform: "Netflix",
            image: "https://res.cloudinary.com/dcofr8eie/image/upload/v1726315736/breaking-bad-poster_ipvckz.jpg"
        },
        {
            name: "Stranger Things",
            description: "A group of kids uncover supernatural mysteries in their small town.",
            platform: "Netflix",
            image: "https://res.cloudinary.com/dcofr8eie/image/upload/v1726315781/stranger-things-poster_d3pacy.jpg"
        },
        {
            name: "The Witcher",
            description: "A monster hunter embarks on dangerous journeys in a world of magic and dark forces.",
            platform: "Netflix",
            image: "https://res.cloudinary.com/dcofr8eie/image/upload/v1726315848/the-witcher-poster_pwqfnl.jpg"
        }
    ];

    // Default series
    $scope.selectedSeries = $scope.seriesList[0];

    // Function to get series info
    $scope.getSeriesInfo = function(seriesName) {
        $scope.selectedSeries = $scope.seriesList.find(series => series.name === seriesName);
    };
});
