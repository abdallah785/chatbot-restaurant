// chat/photos-defaults.js
// Photos par defaut: placeholder neutre par defaut (halal-safe).
// On garde uniquement les photos clairement non-risquees (boissons, eau, jus, frites).
// Les patrons uploaderont leurs vraies photos plus tard via le dashboard admin ou Airtable.
(function (global) {
  "use strict";

  var PLACEHOLDER_DATA_URI =
    "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#0f3a3a"/><stop offset="100%" stop-color="#062929"/>' +
      '</linearGradient></defs>' +
      '<rect width="600" height="600" fill="url(#g)"/>' +
      '<text x="50%" y="50%" font-size="220" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.85)" font-family="-apple-system,Segoe UI Emoji,Apple Color Emoji,sans-serif">' +
      '\uD83C\uDF7D\uFE0F</text>' +
      '</svg>'
    );

  var SAFE_PHOTOS = {
    eau:     "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=600",
    coca:    "https://images.pexels.com/photos/2531190/pexels-photo-2531190.jpeg?auto=compress&cs=tinysrgb&w=600",
    jus:     "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=600",
    cafe:    "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
    frites:  "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600"
  };

  var DEFAULT_PHOTOS = {
    burger:  PLACEHOLDER_DATA_URI,
    taco:    PLACEHOLDER_DATA_URI,
    naan:    PLACEHOLDER_DATA_URI,
    pizza:   PLACEHOLDER_DATA_URI,
    poulet:  PLACEHOLDER_DATA_URI,
    riz:     PLACEHOLDER_DATA_URI,
    kebab:   PLACEHOLDER_DATA_URI,
    wraps:   PLACEHOLDER_DATA_URI,
    frites:  SAFE_PHOTOS.frites,
    salade:  PLACEHOLDER_DATA_URI,
    couscous:PLACEHOLDER_DATA_URI,
    tajine:  PLACEHOLDER_DATA_URI,
    boisson: SAFE_PHOTOS.eau,
    coca:    SAFE_PHOTOS.coca,
    eau:     SAFE_PHOTOS.eau,
    jus:     SAFE_PHOTOS.jus,
    dessert: PLACEHOLDER_DATA_URI,
    glace:   PLACEHOLDER_DATA_URI,
    cafe:    SAFE_PHOTOS.cafe,
    soupe:   PLACEHOLDER_DATA_URI,
    poisson: PLACEHOLDER_DATA_URI,
    pates:   PLACEHOLDER_DATA_URI,
    sandwich:PLACEHOLDER_DATA_URI,
    default: PLACEHOLDER_DATA_URI
  };

  var KEYWORD_RULES = [
    { test: /(makloub|maklouba)/i,                                 photo: "kebab" },
    { test: /(tajine|tagine)/i,                                    photo: "tajine" },
    { test: /(couscous|seksu)/i,                                   photo: "couscous" },
    { test: /(kebab|doner|donner|durum|shawarma|chawarma)/i,       photo: "kebab" },
    { test: /(burger|cheese|big mac|smash)/i,                      photo: "burger" },
    { test: /(taco|tortilla)/i,                                    photo: "taco" },
    { test: /(naan|chapati|roti)/i,                                photo: "naan" },
    { test: /(pizza|focaccia|calzone)/i,                           photo: "pizza" },
    { test: /(poulet|chicken|escalope|nuggets|tenders|wings)/i,    photo: "poulet" },
    { test: /(poisson|saumon|thon|cabillaud|colin|merlu)/i,        photo: "poisson" },
    { test: /(riz|rice|biriyani|biryani|pilaf)/i,                  photo: "riz" },
    { test: /(pates|pasta|spaghetti|tagliatelle|penne|lasagne)/i,  photo: "pates" },
    { test: /(sandwich|panini|club)/i,                             photo: "sandwich" },
    { test: /(wrap|fajita)/i,                                      photo: "wraps" },
    { test: /(frite|frites|chips|potato)/i,                        photo: "frites" },
    { test: /(salade|cesar|salad)/i,                               photo: "salade" },
    { test: /(soupe|soup|harira|chorba)/i,                         photo: "soupe" },
    { test: /(coca|cola|fanta|sprite|soda|sodas)/i,                photo: "coca" },
    { test: /(eau|water|evian|cristaline|h2o)/i,                   photo: "eau" },
    { test: /(jus|juice|orangina|nectar)/i,                        photo: "jus" },
    { test: /(cafe|coffee|expresso|espresso|cappuccino|capucino|latte)/i, photo: "cafe" },
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
