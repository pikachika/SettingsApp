(function(){
Template.__checkName("intro");
Template["intro"] = new Template("Template.intro", (function() {
  var view = this;
  return HTML.FORM({
    name: "introForm",
    "class": "homepageElements"
  }, "\n", HTML.DIV({
    "class": "ClientNameSearch"
  }, "\n\n\n", HTML.Raw('<div class="form-group">\n    <input type="text" class="form-control" id="inputClientName" name="clientsName" placeholder=" Client Name " required="">\n </div>'), "\n  \n\n   ", HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n\n    ", HTML.Raw('<div class="form-group">\n   <button type="submit" class="btn btn-primary"> Get Setting Info</button>\n   </div>'), "\n    ", HTML.Raw("<br>"), "\n\n   ", HTML.DIV({
    "class": "form-group"
  }, "\n   ", HTML.BUTTON({
    type: "button",
    "class": "btn btn-primary",
    onclick: function() {
      return [ "location.href='", Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "clientInput"
      })), "';" ];
    }
  }, " Add Restaurant"), "\n   "), "\n "), HTML.Raw('\n\n\n\n<footer>\n    Powered by <a href="http://websheets.io/">WebSheets™</a>\n</footer>\n'));
}));

})();
