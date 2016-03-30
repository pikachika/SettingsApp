(function(){
Template.__checkName("userInfo");
Template["userInfo"] = new Template("Template.userInfo", (function() {
  var view = this;
  return HTML.FORM({
    name: "userinfo",
    "class": "userDetails"
  }, "\n\n\n\n", Spacebars.With(function() {
    return Spacebars.call(view.lookup("pullData"));
  }, function() {
    return [ "\n", HTML.DIV({
      "class": "DataFromDb"
    }, "\n\n", HTML.A({
      "class": "glyphicon glyphicon-home",
      href: "/"
    }, "Home "), "\n", HTML.BR(), HTML.BR(), "\n\n   ", HTML.SPAN(" Name :"), "\n      ", HTML.INPUT({
      type: "text",
      name: "clientname",
      value: function() {
        return Spacebars.mustache(view.lookup("name"));
      },
      disabled: ""
    }), "\n   ", HTML.BR(), HTML.BR(), "\n\n", HTML.SPAN("Select Restaurant :"), "\n   ", HTML.SELECT({
      "class": "restaurantList",
      id: "restaurants",
      name: "restaurantlist"
    }, "\n    ", HTML.OPTION({
      name: "restaurantlist1",
      value: function() {
        return Spacebars.mustache(view.lookup("extractRestaurantList"), "0");
      }
    }, Blaze.View("lookup:extractRestaurantList", function() {
      return Spacebars.mustache(view.lookup("extractRestaurantList"), "0");
    }), " "), "\n    ", HTML.OPTION({
      value: function() {
        return Spacebars.mustache(view.lookup("extractRestaurantList"), "1");
      }
    }, Blaze.View("lookup:extractRestaurantList", function() {
      return Spacebars.mustache(view.lookup("extractRestaurantList"), "1");
    }), " "), "\n    ", HTML.OPTION({
      value: function() {
        return Spacebars.mustache(view.lookup("extractRestaurantList"), "2");
      }
    }, Blaze.View("lookup:extractRestaurantList", function() {
      return Spacebars.mustache(view.lookup("extractRestaurantList"), "2");
    }), " "), "\n    "), "\n", HTML.BR(), HTML.BR(), "\n\n\n ", HTML.DIV({
      "class": "btn-toolbar"
    }, "\n   ", HTML.INPUT({
      type: "button",
      "class": "btn btn-primary",
      id: "edit",
      value: "Edit"
    }), "\n   \n   ", HTML.INPUT({
      type: "submit",
      "class": "btn btn-success",
      id: "submit",
      value: "Update"
    }), "\n   \n   ", HTML.INPUT({
      type: "button",
      "class": "btn btn-primary",
      id: "addRestaurant",
      value: "Add Restaurant "
    }), "\n   \n"), "\n", HTML.BR(), "\n\n\n   ", HTML.FIELDSET({
      id: "field",
      "class": "field",
      disabled: ""
    }, "\n  \n   ", Blaze.Each(function() {
      return Spacebars.dataMustache(view.lookup("extractKeyname"), "textbox");
    }, function() {
      return [ "\n  \n      ", HTML.SPAN(Blaze.View("lookup:KeyName", function() {
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
        value: function() {
          return Spacebars.mustache(view.lookup("extractKeyname_Value"), view.lookup("KeyName"), "textbox");
        }
      }), "\n      ", HTML.BR(), HTML.BR(), "\n\n      " ];
    }), "\n\n\n", HTML.DIV({
      "class": "radio_fieldgroup"
    }, "\n\n  ", Blaze.Each(function() {
      return Spacebars.dataMustache(view.lookup("extractKeyname"), "radio");
    }, function() {
      return [ "\n", HTML.DL("\n", HTML.DT({
        id: function() {
          return Spacebars.mustache(view.lookup("KeyName"));
        }
      }, Blaze.View("lookup:KeyName", function() {
        return Spacebars.mustache(view.lookup("KeyName"));
      }), " "), "\n", HTML.DD("     \n      ", HTML.INPUT({
        type: "radio",
        "class": function() {
          return [ "enable", Spacebars.mustache(view.lookup("KeyName")) ];
        },
        id: function() {
          return [ "e", Spacebars.mustache(view.lookup("KeyName")) ];
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
          return [ "e", Spacebars.mustache(view.lookup("KeyName")) ];
        },
        id: function() {
          return [ "1", Spacebars.mustache(view.lookup("KeyName")) ];
        },
        "class": function() {
          return Spacebars.mustache(view.lookup("KeyName"));
        }
      }, " ", Blaze.View("lookup:extractKeynameValue", function() {
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("extractKeynameValue"), view.lookup("KeyName")));
      }), " "), " \n  \n       ", HTML.INPUT({
        type: "radio",
        "class": function() {
          return [ "disable", Spacebars.mustache(view.lookup("KeyName")) ];
        },
        id: function() {
          return [ "d", Spacebars.mustache(view.lookup("KeyName")) ];
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
          return [ "d", Spacebars.mustache(view.lookup("KeyName")) ];
        },
        id: function() {
          return [ "2", Spacebars.mustache(view.lookup("KeyName")) ];
        },
        "class": function() {
          return Spacebars.mustache(view.lookup("KeyName"));
        }
      }, " ", Blaze.View("lookup:extractKeynameValue1", function() {
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("extractKeynameValue1"), view.lookup("KeyName")));
      }), " "), " \n\n      ", Blaze.View("lookup:extractRadioButtonChecked", function() {
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("extractRadioButtonChecked"), view.lookup("KeyName"), "radio"));
      }), "\n\n       "), "\n      "), "\n      ", HTML.BR({
        "class": function() {
          return Spacebars.mustache(view.lookup("KeyName"));
        }
      }), " \n\n\n   \n      " ];
    }), " \n\n "), "\n\n  \n"), "\n\n       ", HTML.BR(), HTML.BR(), "\n  \n  ", HTML.DIV({
      "class": "btn-toolbar"
    }, "\n\n   ", HTML.INPUT({
      type: "button",
      "class": "btn btn-primary",
      id: "edit",
      name: "edit",
      value: "Edit"
    }), " \n   \n   ", HTML.INPUT({
      type: "submit",
      "class": "btn btn-success",
      id: "submit",
      value: "Update"
    }), "  \n    "), "\n\n     ", HTML.SCRIPT({
      src: "jquery.js"
    }), "\n    ", HTML.SCRIPT("\n\nvalueToInsert= {};\nvalueToInsert = {\n            name: ClientsName\n        };\n         valueToInsert[\"public\"] = {};\n         valueToInsert[\"private\"] = {};\n\n         var Restaurant = Session.get(\"RestaurantNameVar\");\n         valueToInsert[\"public\"][Restaurant]= {};\n    valueToInsert[\"private\"][Restaurant]= {};\n\n\n    $(document).ready(function(e) {\n\n\n       for(i in checkedList_2){\nvar label = $(\"#1\" + checkedList_2[i]); \nvar label2 = $(\"#2\" + checkedList_2[i]);\n\n  if(checkedList[i].toLowerCase() ==label[0].innerText.toLowerCase() ){\n    id.push($(\"#1\" + checkedList_2[i]).attr('for'));\n  }\n  else\n  {\n  if(checkedList[i].toLowerCase()  ==label2[0].innerText.toLowerCase()){\n    id.push($(\"#2\" + checkedList_2[i]).attr('for'));\n  }\n}\n}\n\n\n$(function () {\n   for(var j in id){\n  $('#' + id[j]).prop('checked', true);\n}\n});\n\n$(document).on(\"change\", 'input', function (event,target) {\nevent.preventDefault();\n\n if( $(this)[0].name != \"clientname\") {\n  var tempvar= $(this)[0].name;\n  if($(this)[0].type == \"radio\"){\n      var tempvar1 = $(this).next()[0].innerText.toLowerCase();\n\n}\nelse\n{\n  var tempvar1 = $(this).val().toLowerCase(); \n}\nvar security = $(this)[0].attributes.tagname.value;\n Restaurant = Session.get(\"RestaurantNameVar\");\nvalueToInsert[\"public\"][Restaurant]= {};\n    valueToInsert[\"private\"][Restaurant]= {};\n  valueToInsert[security][Restaurant][tempvar]= tempvar1;\n\n     //to hide radio buttons when their parent gets disabled\n  for (var k in dependencyList){\n    if(tempvar == dependencyList_value[k] && tempvar1 ==\"disabled\"){\n  $('input:radio[name=\"' + dependencyList[k] + '\"]').css('display','none');\n  $('#' + dependencyList[k]).css('display','none');\n  $('.' + dependencyList[k]).css('display','none');\n  //Resetting the values of dependant elements to null in db\n  valueToInsert[security][Restaurant][dependencyList[k]]= \"\";\n\n  }\n  //to show radio buttons when their parent gets enabled\n  else  if(tempvar == dependencyList_value[k] && tempvar1 ==\"enabled\"){\n  $('input:radio[name=\"' + dependencyList[k] + '\"]').css('display','inline');\n  $('#' + dependencyList[k]).css('display','inline');\n  $('.' + dependencyList[k]).css('display','inline');\n\n  }\n}\n   \n     \ntmpval = valueToInsert[\"private\"][Restaurant];\ntmpval1 = valueToInsert[\"public\"][Restaurant];\nconsole.log(tmpval,tmpval1);\nMeteor.call('newtodb', valueToInsert, ClientsName, Restaurant, tmpval, tmpval1);\n}\n    }); \n});\n \n    "), "\n   \n\n\n"), "\n" ];
  }), "\n");
}));

})();
