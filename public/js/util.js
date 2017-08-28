var util = (function() {

  function formToJSON(form) {
    var json = {};
    var arr = $(form).serializeArray();
    $(arr).each(function(i, obj) {
      if(!json[obj.name]) {
        json[obj.name] = obj.value;
      } else {
        var what = json[obj.name];
        if(typeof what === 'string') {
          json[obj.name] = [what];
        }
        json[obj.name].push(obj.value);
      }
    });
    return JSON.stringify(json);
  }


  return this;

})();
