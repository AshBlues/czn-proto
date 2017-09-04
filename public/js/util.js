var util = (function() {

  function formToJSON(form) {
    var json = {};
    var arr = $(form).serializeArray();
    $(arr).each(function(i, obj) {
      var $n = obj.name, $v = obj.value;
      if(!json[$n]) {
        json[$n] = $v;
      } else {
        var what = json[$n];
        if(typeof what === 'string') {
          json[$n] = [what];
        }
        json[$n].push($v);
      }
    });
    return json;
  }


  return this;

})();
