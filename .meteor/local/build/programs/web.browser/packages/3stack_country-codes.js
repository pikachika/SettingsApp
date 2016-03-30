//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Template = Package.templating.Template;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var CountryCodes, countriesByCode;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/3stack:country-codes/country-codes.js                                          //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
countriesByCode = {                                                                        // 1
    "AF": "Afghanistan",                                                                   // 2
    "AX": "Åland Islands",                                                                 // 3
    "AL": "Albania",                                                                       // 4
    "DZ": "Algeria",                                                                       // 5
    "AS": "American Samoa",                                                                // 6
    "AD": "Andorra",                                                                       // 7
    "AO": "Angola",                                                                        // 8
    "AI": "Anguilla",                                                                      // 9
    "AQ": "Antarctica",                                                                    // 10
    "AG": "Antigua And Barbuda",                                                           // 11
    "AR": "Argentina",                                                                     // 12
    "AM": "Armenia",                                                                       // 13
    "AW": "Aruba",                                                                         // 14
    "AU": "Australia",                                                                     // 15
    "AT": "Austria",                                                                       // 16
    "AZ": "Azerbaijan",                                                                    // 17
    "BS": "Bahamas",                                                                       // 18
    "BH": "Bahrain",                                                                       // 19
    "BD": "Bangladesh",                                                                    // 20
    "BB": "Barbados",                                                                      // 21
    "BY": "Belarus",                                                                       // 22
    "BE": "Belgium",                                                                       // 23
    "BZ": "Belize",                                                                        // 24
    "BJ": "Benin",                                                                         // 25
    "BM": "Bermuda",                                                                       // 26
    "BT": "Bhutan",                                                                        // 27
    "BO": "Bolivia, Plurinational State Of",                                               // 28
    "BQ": "Bonaire, Sint Eustatius And Saba",                                              // 29
    "BA": "Bosnia And Herzegovina",                                                        // 30
    "BW": "Botswana",                                                                      // 31
    "BV": "Bouvet Island",                                                                 // 32
    "BR": "Brazil",                                                                        // 33
    "IO": "British Indian Ocean Territory",                                                // 34
    "BN": "Brunei Darussalam",                                                             // 35
    "BG": "Bulgaria",                                                                      // 36
    "BF": "Burkina Faso",                                                                  // 37
    "BI": "Burundi",                                                                       // 38
    "KH": "Cambodia",                                                                      // 39
    "CM": "Cameroon",                                                                      // 40
    "CA": "Canada",                                                                        // 41
    "CV": "Cape Verde",                                                                    // 42
    "KY": "Cayman Islands",                                                                // 43
    "CF": "Central African Republic",                                                      // 44
    "TD": "Chad",                                                                          // 45
    "CL": "Chile",                                                                         // 46
    "CN": "China",                                                                         // 47
    "CX": "Christmas Island",                                                              // 48
    "CC": "Cocos (keeling) Islands",                                                       // 49
    "CO": "Colombia",                                                                      // 50
    "KM": "Comoros",                                                                       // 51
    "CG": "Congo",                                                                         // 52
    "CD": "Congo, The Democratic Republic Of The",                                         // 53
    "CK": "Cook Islands",                                                                  // 54
    "CR": "Costa Rica",                                                                    // 55
    "CI": "Côte D'ivoire",                                                                 // 56
    "HR": "Croatia",                                                                       // 57
    "CU": "Cuba",                                                                          // 58
    "CW": "Curaçao",                                                                       // 59
    "CY": "Cyprus",                                                                        // 60
    "CZ": "Czech Republic",                                                                // 61
    "DK": "Denmark",                                                                       // 62
    "DJ": "Djibouti",                                                                      // 63
    "DM": "Dominica",                                                                      // 64
    "DO": "Dominican Republic",                                                            // 65
    "EC": "Ecuador",                                                                       // 66
    "EG": "Egypt",                                                                         // 67
    "SV": "El Salvador",                                                                   // 68
    "GQ": "Equatorial Guinea",                                                             // 69
    "ER": "Eritrea",                                                                       // 70
    "EE": "Estonia",                                                                       // 71
    "ET": "Ethiopia",                                                                      // 72
    "FK": "Falkland Islands (malvinas)",                                                   // 73
    "FO": "Faroe Islands",                                                                 // 74
    "FJ": "Fiji",                                                                          // 75
    "FI": "Finland",                                                                       // 76
    "FR": "France",                                                                        // 77
    "GF": "French Guiana",                                                                 // 78
    "PF": "French Polynesia",                                                              // 79
    "TF": "French Southern Territories",                                                   // 80
    "GA": "Gabon",                                                                         // 81
    "GM": "Gambia",                                                                        // 82
    "GE": "Georgia",                                                                       // 83
    "DE": "Germany",                                                                       // 84
    "GH": "Ghana",                                                                         // 85
    "GI": "Gibraltar",                                                                     // 86
    "GR": "Greece",                                                                        // 87
    "GL": "Greenland",                                                                     // 88
    "GD": "Grenada",                                                                       // 89
    "GP": "Guadeloupe",                                                                    // 90
    "GU": "Guam",                                                                          // 91
    "GT": "Guatemala",                                                                     // 92
    "GG": "Guernsey",                                                                      // 93
    "GN": "Guinea",                                                                        // 94
    "GW": "Guinea-bissau",                                                                 // 95
    "GY": "Guyana",                                                                        // 96
    "HT": "Haiti",                                                                         // 97
    "HM": "Heard Island And Mcdonald Islands",                                             // 98
    "VA": "Holy See (vatican City State)",                                                 // 99
    "HN": "Honduras",                                                                      // 100
    "HK": "Hong Kong",                                                                     // 101
    "HU": "Hungary",                                                                       // 102
    "IS": "Iceland",                                                                       // 103
    "IN": "India",                                                                         // 104
    "ID": "Indonesia",                                                                     // 105
    "IR": "Iran, Islamic Republic Of",                                                     // 106
    "IQ": "Iraq",                                                                          // 107
    "IE": "Ireland",                                                                       // 108
    "IM": "Isle Of Man",                                                                   // 109
    "IL": "Israel",                                                                        // 110
    "IT": "Italy",                                                                         // 111
    "JM": "Jamaica",                                                                       // 112
    "JP": "Japan",                                                                         // 113
    "JE": "Jersey",                                                                        // 114
    "JO": "Jordan",                                                                        // 115
    "KZ": "Kazakhstan",                                                                    // 116
    "KE": "Kenya",                                                                         // 117
    "KI": "Kiribati",                                                                      // 118
    "KP": "Korea, Democratic People's Republic Of",                                        // 119
    "KR": "Korea, Republic Of",                                                            // 120
    "KW": "Kuwait",                                                                        // 121
    "KG": "Kyrgyzstan",                                                                    // 122
    "LA": "Lao People's Democratic Republic",                                              // 123
    "LV": "Latvia",                                                                        // 124
    "LB": "Lebanon",                                                                       // 125
    "LS": "Lesotho",                                                                       // 126
    "LR": "Liberia",                                                                       // 127
    "LY": "Libya",                                                                         // 128
    "LI": "Liechtenstein",                                                                 // 129
    "LT": "Lithuania",                                                                     // 130
    "LU": "Luxembourg",                                                                    // 131
    "MO": "Macao",                                                                         // 132
    "MK": "Macedonia, The Former Yugoslav Republic Of",                                    // 133
    "MG": "Madagascar",                                                                    // 134
    "MW": "Malawi",                                                                        // 135
    "MY": "Malaysia",                                                                      // 136
    "MV": "Maldives",                                                                      // 137
    "ML": "Mali",                                                                          // 138
    "MT": "Malta",                                                                         // 139
    "MH": "Marshall Islands",                                                              // 140
    "MQ": "Martinique",                                                                    // 141
    "MR": "Mauritania",                                                                    // 142
    "MU": "Mauritius",                                                                     // 143
    "YT": "Mayotte",                                                                       // 144
    "MX": "Mexico",                                                                        // 145
    "FM": "Micronesia, Federated States Of",                                               // 146
    "MD": "Moldova, Republic Of",                                                          // 147
    "MC": "Monaco",                                                                        // 148
    "MN": "Mongolia",                                                                      // 149
    "ME": "Montenegro",                                                                    // 150
    "MS": "Montserrat",                                                                    // 151
    "MA": "Morocco",                                                                       // 152
    "MZ": "Mozambique",                                                                    // 153
    "MM": "Myanmar",                                                                       // 154
    "NA": "Namibia",                                                                       // 155
    "NR": "Nauru",                                                                         // 156
    "NP": "Nepal",                                                                         // 157
    "NL": "Netherlands",                                                                   // 158
    "NC": "New Caledonia",                                                                 // 159
    "NZ": "New Zealand",                                                                   // 160
    "NI": "Nicaragua",                                                                     // 161
    "NE": "Niger",                                                                         // 162
    "NG": "Nigeria",                                                                       // 163
    "NU": "Niue",                                                                          // 164
    "NF": "Norfolk Island",                                                                // 165
    "MP": "Northern Mariana Islands",                                                      // 166
    "NO": "Norway",                                                                        // 167
    "OM": "Oman",                                                                          // 168
    "PK": "Pakistan",                                                                      // 169
    "PW": "Palau",                                                                         // 170
    "PS": "Palestine, State Of",                                                           // 171
    "PA": "Panama",                                                                        // 172
    "PG": "Papua New Guinea",                                                              // 173
    "PY": "Paraguay",                                                                      // 174
    "PE": "Peru",                                                                          // 175
    "PH": "Philippines",                                                                   // 176
    "PN": "Pitcairn",                                                                      // 177
    "PL": "Poland",                                                                        // 178
    "PT": "Portugal",                                                                      // 179
    "PR": "Puerto Rico",                                                                   // 180
    "QA": "Qatar",                                                                         // 181
    "RE": "Réunion",                                                                       // 182
    "RO": "Romania",                                                                       // 183
    "RU": "Russian Federation",                                                            // 184
    "RW": "Rwanda",                                                                        // 185
    "BL": "Saint Barthélemy",                                                              // 186
    "SH": "Saint Helena, Ascension And Tristan Da Cunha",                                  // 187
    "KN": "Saint Kitts And Nevis",                                                         // 188
    "LC": "Saint Lucia",                                                                   // 189
    "MF": "Saint Martin (french Part)",                                                    // 190
    "PM": "Saint Pierre And Miquelon",                                                     // 191
    "VC": "Saint Vincent And The Grenadines",                                              // 192
    "WS": "Samoa",                                                                         // 193
    "SM": "San Marino",                                                                    // 194
    "ST": "Sao Tome And Principe",                                                         // 195
    "SA": "Saudi Arabia",                                                                  // 196
    "SN": "Senegal",                                                                       // 197
    "RS": "Serbia",                                                                        // 198
    "SC": "Seychelles",                                                                    // 199
    "SL": "Sierra Leone",                                                                  // 200
    "SG": "Singapore",                                                                     // 201
    "SX": "Sint Maarten (dutch Part)",                                                     // 202
    "SK": "Slovakia",                                                                      // 203
    "SI": "Slovenia",                                                                      // 204
    "SB": "Solomon Islands",                                                               // 205
    "SO": "Somalia",                                                                       // 206
    "ZA": "South Africa",                                                                  // 207
    "GS": "South Georgia And The South Sandwich Islands",                                  // 208
    "SS": "South Sudan",                                                                   // 209
    "ES": "Spain",                                                                         // 210
    "LK": "Sri Lanka",                                                                     // 211
    "SD": "Sudan",                                                                         // 212
    "SR": "Suriname",                                                                      // 213
    "SJ": "Svalbard And Jan Mayen",                                                        // 214
    "SZ": "Swaziland",                                                                     // 215
    "SE": "Sweden",                                                                        // 216
    "CH": "Switzerland",                                                                   // 217
    "SY": "Syrian Arab Republic",                                                          // 218
    "TW": "Taiwan, Province Of China",                                                     // 219
    "TJ": "Tajikistan",                                                                    // 220
    "TZ": "Tanzania, United Republic Of",                                                  // 221
    "TH": "Thailand",                                                                      // 222
    "TL": "Timor-leste",                                                                   // 223
    "TG": "Togo",                                                                          // 224
    "TK": "Tokelau",                                                                       // 225
    "TO": "Tonga",                                                                         // 226
    "TT": "Trinidad And Tobago",                                                           // 227
    "TN": "Tunisia",                                                                       // 228
    "TR": "Turkey",                                                                        // 229
    "TM": "Turkmenistan",                                                                  // 230
    "TC": "Turks And Caicos Islands",                                                      // 231
    "TV": "Tuvalu",                                                                        // 232
    "UG": "Uganda",                                                                        // 233
    "UA": "Ukraine",                                                                       // 234
    "AE": "United Arab Emirates",                                                          // 235
    "GB": "United Kingdom",                                                                // 236
    "US": "United States",                                                                 // 237
    "UM": "United States Minor Outlying Islands",                                          // 238
    "UY": "Uruguay",                                                                       // 239
    "UZ": "Uzbekistan",                                                                    // 240
    "VU": "Vanuatu",                                                                       // 241
    "VE": "Venezuela, Bolivarian Republic Of",                                             // 242
    "VN": "Viet Nam",                                                                      // 243
    "VG": "Virgin Islands, British",                                                       // 244
    "VI": "Virgin Islands, U.s.",                                                          // 245
    "WF": "Wallis And Futuna",                                                             // 246
    "EH": "Western Sahara",                                                                // 247
    "YE": "Yemen",                                                                         // 248
    "ZM": "Zambia",                                                                        // 249
    "ZW": "Zimbabwe"                                                                       // 250
};                                                                                         // 251
                                                                                           // 252
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/3stack:country-codes/country-code-common.js                                    //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
CountryCodes = {                                                                           // 1
  _codeByCountry: null,                                                                    // 2
                                                                                           // 3
  _countriesByCode: countriesByCode,                                                       // 4
                                                                                           // 5
  _invertCountriesByCode: function(){                                                      // 6
    return _.object(_.map(countriesByCode, function CountryCodes_lowercaseMap(name, code){ // 7
      return [name.toUpperCase(), code];                                                   // 8
    }));                                                                                   // 9
  },                                                                                       // 10
                                                                                           // 11
  countryName: function (countryCode) {                                                    // 12
    return CountryCodes._countriesByCode[countryCode];                                     // 13
  },                                                                                       // 14
                                                                                           // 15
  countryCode: function (countryName) {                                                    // 16
    if (this._codeByCountry == null){                                                      // 17
      this._codeByCountry = this._invertCountriesByCode();                                 // 18
    }                                                                                      // 19
    return this._codeByCountry[countryName.toUpperCase()];                                 // 20
  },                                                                                       // 21
                                                                                           // 22
  getList: function () {                                                                   // 23
    return _.extend({}, this._countriesByCode);                                            // 24
  },                                                                                       // 25
                                                                                           // 26
  getCountryCodes: function(){                                                             // 27
    return _.keys(this._countriesByCode);                                                  // 28
  }                                                                                        // 29
};                                                                                         // 30
                                                                                           // 31
                                                                                           // 32
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/3stack:country-codes/template.country-code-ui.js                               //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
                                                                                           // 1
Template.__checkName("countryCodeSelect");                                                 // 2
Template["countryCodeSelect"] = new Template("Template.countryCodeSelect", (function() {   // 3
  var view = this;                                                                         // 4
  return HTML.SELECT(HTML.Attrs(function() {                                               // 5
    return Spacebars.attrMustache(view.lookup("props"));                                   // 6
  }), "\n    ", Blaze.Each(function() {                                                    // 7
    return Spacebars.call(view.lookup("highlightedCountryList"));                          // 8
  }, function() {                                                                          // 9
    return [ "\n      ", HTML.OPTION(HTML.Attrs({                                          // 10
      value: function() {                                                                  // 11
        return Spacebars.mustache(view.lookup("_id"));                                     // 12
      }                                                                                    // 13
    }, function() {                                                                        // 14
      return Spacebars.attrMustache(view.lookup("props"));                                 // 15
    }), Blaze.View(function() {                                                            // 16
      return Spacebars.mustache(view.lookup("name"));                                      // 17
    })), "\n    " ];                                                                       // 18
  }), "\n    ", Blaze.Each(function() {                                                    // 19
    return Spacebars.call(view.lookup("remainingCountries"));                              // 20
  }, function() {                                                                          // 21
    return [ "\n      ", HTML.OPTION(HTML.Attrs({                                          // 22
      value: function() {                                                                  // 23
        return Spacebars.mustache(view.lookup("_id"));                                     // 24
      }                                                                                    // 25
    }, function() {                                                                        // 26
      return Spacebars.attrMustache(view.lookup("props"));                                 // 27
    }), Blaze.View(function() {                                                            // 28
      return Spacebars.mustache(view.lookup("name"));                                      // 29
    })), "\n    " ];                                                                       // 30
  }), "\n  ");                                                                             // 31
}));                                                                                       // 32
                                                                                           // 33
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/3stack:country-codes/country-code-ui.js                                        //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
                                                                                           // 1
var highlightedCountries = [];                                                             // 2
_.extend(CountryCodes, {                                                                   // 3
  setHighlightedCountries: function (aCountryCodes){                                       // 4
    highlightedCountries = highlightedCountries.concat(aCountryCodes);                     // 5
  },                                                                                       // 6
  getHighlightedCountries: function(){                                                     // 7
    return highlightedCountries.slice();                                                   // 8
  },                                                                                       // 9
  getPartialList: function(highlighted){                                                   // 10
    var fn = highlighted ? 'pick': 'omit';                                                 // 11
    return _[fn].apply(_, [CountryCodes.getList()].concat(highlightedCountries));          // 12
  }                                                                                        // 13
});                                                                                        // 14
                                                                                           // 15
Template.countryCodeSelect.helpers({                                                       // 16
  highlightedCountryList: function(){                                                      // 17
    var selectedCode = this.selected;                                                      // 18
    return _.map(CountryCodes.getPartialList(true), function(name, code){                  // 19
      var props = {};                                                                      // 20
      if (code === selectedCode){                                                          // 21
        props = {selected: true};                                                          // 22
      }                                                                                    // 23
      return {_id: code, name: name, props: props};                                        // 24
    });                                                                                    // 25
  },                                                                                       // 26
  remainingCountries: function(){                                                          // 27
    var selectedCode = this.selected;                                                      // 28
    return _.map(CountryCodes.getPartialList(false), function(name, code){                 // 29
      var props = {};                                                                      // 30
      if (code === selectedCode){                                                          // 31
        props = {selected: true};                                                          // 32
      }                                                                                    // 33
      return {_id: code, name: name, props: props};                                        // 34
    });                                                                                    // 35
  }                                                                                        // 36
});                                                                                        // 37
                                                                                           // 38
                                                                                           // 39
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['3stack:country-codes'] = {
  CountryCodes: CountryCodes
};

})();
