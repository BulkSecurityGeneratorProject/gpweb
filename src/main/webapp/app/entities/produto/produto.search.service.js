(function() {
    'use strict';

    angular
        .module('gpwebApp')
        .factory('ProdutoSearch', ProdutoSearch);

    ProdutoSearch.$inject = ['$resource'];

    function ProdutoSearch($resource) {
        var resourceUrl =  'api/_search/produtos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
