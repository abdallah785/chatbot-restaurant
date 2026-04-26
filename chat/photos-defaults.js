undefined// chat/photos-defaults.js
// Photos par défaut HALAL-SAFE (Pexels libre de droit) + détection auto par mot-clé.

(function (global) {
  "use strict";

  var PLACEHOLDER_DATA_URI =
    "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#0f3a3a"/><stop offset="100%" stop-color="#062929"/>' +
      '</linearGradient></defs>' +
      '<rect width="600" height="600" fill="url(#g)"/>' +
      '<text x="50%" y="50%" font-size="240" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.85)">🍽️</text>' +
      '</svg>'
    );

  var DEFAULT_PHOTOS = {
    burger:  "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600",
    taco:    "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=600",
    naan:    "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
    pizza:   "https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=600",
    poulet:  "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600",
    riz:     "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600",
    kebab:   "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=600",
    wraps:   "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=600",
    frites:  "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600",
    salade:  "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600",
    couscous:"https://images.pexels.com/photos/4193872/pexels-photo-4193872.jpeg?auto=compress&cs=tinysrgb&w=600",
    tajine:  "https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=compress&cs=tinysrgb&w=600",
    boisson: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600",
    coca:    "https://images.pexels.com/photos/2531190/pexels-photo-2531190.jpeg?auto=compress&cs=tinysrgb&w=600",
    eau:     "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=600",
    jus:     "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=600",
    dessert: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=600",
    glace:   "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?auto=compress&cs=tinysrgb&w=600",
    cafe:    "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
    soupe:   "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600",
    poisson: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600",
    pates:   "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600",
    sandwich:"https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600",
    default: PLACEHOLDER_DATA_URI
  };

  var KEYWORD_RULES = [
    { test: /(makloub|m['’]akloub|maklouba)/i,                    photo: "kebab" },
    { test: /(tajine|tagine)/i,                                    photo: "tajine" },
    { test: /(couscous|seksu)/i,                                   photo: "couscous" },
    { test: /(kebab|d[oö]ner|d[uü]rum|sh?awarma|chawarma)/i,       photo: "kebab" },
    { test: /(burger|cheese|big mac|smash)/i,                      photo: "burger" },
    { test: /(taco|tortilla)/i,                                    photo: "taco" },
    { test: /(naan|chapati|roti)/i,                                photo: "naan" },
    { test: /(pizza|focaccia|calzone)/i,                           photo: "pizza" },
    { test: /(poulet|chicken|escalope|nuggets|tenders|wings)/i,    photo: "poulet" },
    { test: /(poisson|saumon|thon|cabillaud|colin|merlu)/i,        photo: "poisson" },
    { test: /(riz|rice|biriyani|biryani|pilaf)/i,                  photo: "riz" },
    { test: /(p[aâ]tes|pasta|spaghetti|tagliatelle|penne|lasagne)/i, photo: "pates" },
    { test: /(sandwich|panini|club)/i,                             photo: "sandwich" },
    { test: /(wrap|fajita)/i,                                      photo: "wraps" },
    { test: /(frite|frites|chips|potato)/i,                        photo: "frites" },
    { test: /(salade|c[ée]sar|salad)/i,                            photo: "salade" },
    { test: /(soupe|soup|harira|chorba)/i,                         photo: "soupe" },
    { test: /(coca|cola|fanta|sprite|sodas?)/i,                    photo: "coca" },
    { test: /(eau|water|evian|cristaline|h2o)/i,                   photo: "eau" },
    { test: /(jus|juice|orangina|nectar)/i,                        photo: "jus" },
    { test: /(caf[ée]|coffee|expresso|espresso|capp?ucc?ino|latte)/i, photo: "cafe" },
    { test: /(boisson|drink|smoothie|milkshake)/i,                 photo: "boisson" },
    { test: /(glace|ice cream|sorbet|sundae)/i,                    photo: "glace" },
    { test: /(dessert|tiramisu|brownie|fondant|cheesecake|cake|tarte|crumble)/i, photo: "dessert" }
  ];

  function getPhotoForDish(dishName) {
    if (!dishName) return DEFAULT_PHOTOS.default;
    var name = String(dishName);
    for (var i = 0; i < KEYWORD_RULES.length; i++) {
      if (KEYWORD_RULES[i].test.test(name)) {
        return DEFAULT_PHOTOS[KEYWORD_RULES[i].photo] || DEFAULT_PHOTOS.default;
      }
    }
    return DEFAULT_PHOTOS.default;
  }

  function getPhotoForCategory(catName) { return getPhotoForDish(catName); }

  global.IABOT_PHOTOS = {
    DEFAULT_PHOTOS: DEFAULT_PHOTOS,
    PLACEHOLDER: PLACEHOLDER_DATA_URI,
    getPhotoForDish: getPhotoForDish,
    getPhotoForCategory: getPhotoForCategory
  };
})(typeof window !== "undefined" ? window : this);
