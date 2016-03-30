(function(){
Restaurant = undefined;
dataObtained = "";
checkedList = [];
checkedList_2 = [];

dependencyList = [];
dependencyList_value = [];
id = [];
Template.registerHelper('$', function() {
    return Helpers;
});




Template.userInfo.helpers({


    'pullData': function() {
        searchdata = ClientChoice.findOne({
            name: ClientsName
        });


        Session.set("toSearchData", searchdata);
        dataObtained = Session.get("toSearchData");
        return dataObtained;
    },

    'extractKeyname_Value': function(arg1, arg2) {
        Restaurant = Session.get("RestaurantNameVar");
        var dataset = settingsmetadata.findOne({
            'Type': arg2,
            'KeyName': arg1
        }, {
            sort: {
                'sheetRowId': 1
            }
        });
        var security = dataset.Security;
        
        if(dataset.Parent){
       return dataObtained[security][Restaurant][dataset.Parent][arg1];
        }
        else{
        return dataObtained[security][Restaurant][arg1];
    }
    },

    'extractKeynameValue': function(arg1) {

        var dataset = settingsmetadata.findOne({
            'Type': 'value',
            'KeyName': arg1
        }, {
            sort: {
                'Value': -1
            }
        });
        //Creating an array of elements with dependencies and another array with the dependency values
        //A dependent element needs to be hidden when its dependent gets disabled
        if (dataset.Depends) {
            dependencyList.push(arg1);
            dependencyList_value.push(dataset.Depends);
        }

        return dataset.Value;
    },

    'extractKeynameValue1': function(arg1) {
        var dataset = settingsmetadata.findOne({
            'Type': 'value',
            'KeyName': arg1
        }, {
            sort: {
                'Value': 1
            }
        });


        return dataset.Value;
    },

    'extractRadioButtonChecked': function(arg1, arg2) {
        Restaurant = Session.get("RestaurantNameVar");
        var dataset = settingsmetadata.findOne({
            'Type': arg2,
            'KeyName': arg1
        }, {
            sort: {
                'sheetRowId': 1
            }
        });
        var security = dataset.Security;
        var checked_value = dataObtained[security][Restaurant][arg1];
        //Creating an array with  selected radio button values
        //To pre-select radio button values as per stored DB values
        if(checked_value){

        checkedList.push(checked_value);
        checkedList_2.push(arg1);

        for (i in checkedList) {

            var label = $("#1" + checkedList_2[i]);
            var label2 = $("#2" + checkedList_2[i]);

            if (checkedList[i].toLowerCase() == label[0].innerText.toLowerCase()) {
                id.push($("#1" + checkedList_2[i]).attr('for'));
            } else if (checkedList[i].toLowerCase() == label2[0].innerText.toLowerCase()) {
                id.push($("#2" + checkedList_2[i]).attr('for'));
            }
        }}

        $(function() {
            for (var j in id) {
                $('#' + id[j]).prop('checked', true);
            }
        });
    },

    'extractKeyname': function(arg1) {
        return settingsmetadata.find({
            'Type': arg1
        }, {
            sort: {
                'sheetRowId': 1
            }
        });
    },


    'extractRestaurantList': function(arg1) {
        Restaurant = this["public"]["orgCodeSupported"]["orgcodes"][0];
        Session.set("RestaurantNameVar", Restaurant);

        return this["public"]["orgCodeSupported"]["orgcodes"][arg1];
    }
});


Template.userInfo.events({


    'change .restaurantList': function(event) {
        Restaurant = document.getElementById("restaurants").value;
        Session.set("RestaurantNameVar", Restaurant);
    },

    'click #edit': function(event) {
        event.preventDefault();
        // Making fields editable
        $('#field').attr('disabled',false);
    },

    'click #addRestaurant': function(event) {
        event.preventDefault();
        Router.go('/myForm');
    },

    'submit form': function(event) {
        event.preventDefault();
        tmpval = valueToInsert["private"][Restaurant];
        tmpval1 = valueToInsert["public"][Restaurant];
        Meteor.call('newtodb', valueToInsert, ClientsName, Restaurant, tmpval, tmpval1);
        alert("Data updated");
        $('#field').attr('disabled',true);

    }

});

})();
