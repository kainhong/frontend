define(function(require, exports, module) {
    var html = require('./a.tpl');

    class View{
        constructor(){
            this.$element = null;
        }

        get html(){
            return html;
        }
    }

    module.exports = new View();
});