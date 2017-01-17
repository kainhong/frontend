function globalEval(content) {
    if (content && /\S/.test(content)) {
        (window.execScript || function (content) {
            (window.eval || eval).call(window, content)
        })(content)
    }
}

seajs.config({
    base: './'
});

function compile(id, name) {
    var js = `define('./${id}',function(require,exports,module){
        require('${name}');
    });`;

    globalEval(js);
}


$(function () {
    var $views = $("view");
    var ids = [];
    $views.each((i,v)=>{
        var $v = $(v);
        var $pre = $v.prev();
        var id = $v.attr('id');
        var name =$v.attr('name');
        compile(id,name);
        ids.push(`${id}:require('${name}')`);
    });


    var base = `define('./views',function(require, exports, module){
        module.exports = {
            ${ids.join(',')}
        };
    });`;

    globalEval(base);

});

$(function () {
    seajs.use('init');
});
