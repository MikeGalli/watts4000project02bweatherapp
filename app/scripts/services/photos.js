'use strict';

/**
 * @ngdoc service
 * @name watts4000project02bweatherappApp.current
 * @description
 * # current
 * Factory in the watts4000project02bweatherappApp.
 */
angular.module('watts4000project02bweatherappApp')
  .factory('photos', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d9d5cc05a654a396190ad3403494361f&tags=Sunny%2CClear&tag_mode=any&text=skyline&sort=relevance&lat=47.61&lon=-122.33&radius=2&extras=url_l&format=json&nojsoncallback=1', {}, {
      query: {
        method:'GET',
        params:{
          title: ''
        },
        isArray:false
      }
    });
  });

/*flickr SEARCH_v1:  https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=34f1662e1698d44471a38e17d014a520&tags=rainy&lat=47.61&lon=-122.33&extras=url_l&format=json&nojsoncallback=1

*/
