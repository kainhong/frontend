define(function(require) {
    var views = require('./views');

    function render(id,view){
        var $view = $('#'+id);
        var $e = $(view.html);
        $e.insertBefore($view);
        $view.remove();
    }

    for( var p in views){
        var id = p;
        var view = views[p];
        render(id,view);
    }

});