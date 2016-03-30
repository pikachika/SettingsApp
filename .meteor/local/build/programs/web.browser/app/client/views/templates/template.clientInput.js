(function(){
Template.__checkName("clientInput");
Template["clientInput"] = new Template("Template.clientInput", (function() {
  var view = this;
  return HTML.FORM({
    id: "clientinput",
    name: "clientInput",
    "class": "FormElements",
    autocomplete: "off",
    onsubmit: "alert('Your preferences have been saved')"
  }, HTML.Raw('\n<a class="glyphicon glyphicon-home" href="/">Home </a>\n<br><br>\n\n'), HTML.DIV({
    "class": "@container-desktop",
    id: "main"
  }, "\n\n\n\n   ", HTML.Raw("<span> Name :</span>"), "\n      ", HTML.Raw('<input type="text" class="ClientName" name="clientname" value="" required="">'), "\n   ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n\n   ", HTML.Raw('<fieldset id="restaurant_field" class="field" disabled="">\n\n  <span> Restaurant :</span>\n      <input type="text" class="RestaurantName" name="restaurant" value="" required="">\n   <br><br>\n\n   </fieldset>'), "\n\n   ", HTML.FIELDSET({
    id: "clientinput_field",
    "class": "field",
    disabled: ""
  }, "\n\n", Blaze.Each(function() {
    return Spacebars.dataMustache(view.lookup("extractKeyname"), "textbox");
  }, function() {
    return [ "\n\n    ", HTML.SPAN(Blaze.View("lookup:KeyName", function() {
      return Spacebars.mustache(view.lookup("KeyName"));
    }), " :"), "\n      ", HTML.INPUT({
      type: "text",
      "class": function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      },
      name: function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      },
      tagname: function() {
        return Spacebars.mustache(view.lookup("Security"));
      },
      value: ""
    }), "\n      ", HTML.BR(), HTML.BR(), "\n  ", Blaze.View("lookup:nestedobj_creation", function() {
      return Spacebars.mustache(view.lookup("nestedobj_creation"), view.lookup("KeyName"));
    }), "\n      " ];
  }), "\n\n\n", HTML.DIV({
    "class": "fieldgroup"
  }, "\n\n", Blaze.Each(function() {
    return Spacebars.dataMustache(view.lookup("extractKeyname"), "radio");
  }, function() {
    return [ "\n", HTML.DL("\n    ", HTML.DT({
      id: function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      }
    }, Blaze.View("lookup:KeyName", function() {
      return Spacebars.mustache(view.lookup("KeyName"));
    }), " "), "\n    ", HTML.DD("\n      ", HTML.INPUT({
      type: "radio",
      "class": function() {
        return [ "enable", Spacebars.mustache(view.lookup("KeyName")) ];
      },
      id: function() {
        return [ "1", Spacebars.mustache(view.lookup("KeyName")) ];
      },
      name: function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      },
      value: function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      },
      tagname: function() {
        return Spacebars.mustache(view.lookup("Security"));
      }
    }), " \n      ", HTML.LABEL({
      "for": function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      },
      id: function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      }
    }, " ", Blaze.View("lookup:extractKeynameValue", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("extractKeynameValue"), view.lookup("KeyName")));
    }), " "), "\n       ", HTML.INPUT({
      type: "radio",
      "class": function() {
        return [ "disable", Spacebars.mustache(view.lookup("KeyName")) ];
      },
      id: function() {
        return [ "2", Spacebars.mustache(view.lookup("KeyName")) ];
      },
      name: function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      },
      value: function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      },
      tagname: function() {
        return Spacebars.mustache(view.lookup("Security"));
      }
    }), " \n       ", HTML.LABEL({
      "for": function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      },
      id: function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      }
    }, " ", Blaze.View("lookup:extractKeynameValue1", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("extractKeynameValue1"), view.lookup("KeyName")));
    }), " "), "  \n\n      "), "\n      "), "\n      ", HTML.BR({
      "class": function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      }
    }), " \n      \n   ", Blaze.View("lookup:nestedobj_creation", function() {
      return Spacebars.mustache(view.lookup("nestedobj_creation"), view.lookup("KeyName"));
    }), "\n   \n      " ];
  }), " \n"), "\n\n", Blaze.View("lookup:db_insertion", function() {
    return Spacebars.mustache(view.lookup("db_insertion"));
  }), "\n "), "\n\n\n ", HTML.INPUT({
    type: "submit",
    "class": "btn btn-success",
    value: "Submit",
    onclick: function() {
      return Spacebars.mustache(view.lookup("submitfn"));
    }
  }), " ", HTML.Raw("&nbsp;"), "\n ", HTML.Raw('<input type="reset" class="btn btn-warning" name="reset_btn" value="Reset">'), "\n "), "  \n\n    ");
}));

})();
