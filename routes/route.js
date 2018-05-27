var citiesHashMap;

function renderHome(req, res) {

    res.render('home', {
        title: 'iLoveMyCity',
        headline: 'We believe that every city has something to say'
    })
}

function renderCity(req, res) {

    var cityName = req.params.city;

    var cityObj = citiesHashMap[cityName];

    res.render('city', {
        title: cityObj.title,
        headline: cityObj.heading,
        city: cityName,
        imageArray: cityObj.imageArray
    })
}

function fillCitiesHashMap() {

    var fourImageArray = [1, 2, 3, 4];

    var sixImageArray = [1, 2, 3, 4, 5, 6];


    citiesHashMap = {

        berlin: {
            title: "Berlin",
            heading: "Berlin: Where love is in the air",
            imageArray: fourImageArray
        },

        paris: {
            title: "Paris",
            heading: "Paris: Good talkers are only found in Paris",
            imageArray: fourImageArray
        },

        madrid: {
            title: "Madrid",
            heading: "Madrid: Buzz, Beautiful architecture and Football",
            imageArray: fourImageArray
        },

        london: {
            title: "London",
            heading: "London: Sparkling, Still, Food, Gorgeous",
            imageArray: fourImageArray
        },

        newyork: {
            title: "New York",
            heading: "New York: Come to New York to become someone new",
            imageArray: sixImageArray
        }
    };
}

exports.fillCitiesHashMap = fillCitiesHashMap;
exports.renderHome = renderHome;
exports.renderCity = renderCity;