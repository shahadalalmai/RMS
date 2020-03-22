// // let mongoose = require('mongoose');
// let TourModel = require('./tour')

// // TourModel.remove({})
// // .then(() => {
// //     console.log('Tour collection cleared!')
// //   })
// //   .catch((error) => {
// //     console.log(error)
// // })

// const kingdomTower = new TourModel({
//     title: "Kingdom Tower Tour",
//     duration: "1.5 hours",
//     status: "Bestseller",
//     img: "https://thegosmart.com/kingdom-center/wp-content/uploads/2019/12/slider1.jpg",
//     reviews: 26981,
//     price: 112
// })

// const althumama = new TourModel({
//     title: "Al Thumama Desert Tour",
//     duration: "4 - 7 hours",
//     status: "Bestseller",
//     img: "https://happytovisit.com/glib/3/4X4-Desert-Safari-with-BBQ-Dinner-from-Dubai-6-13790.png",
//     reviews: 14894,
//     price: 100
// })

// const wadiHanifa = new TourModel({
//     title: "Wadi Hanifa Tour",
//     duration: "90 minutes",
//     status: "Likely to sell out",
//     img: "https://destinationksa.com/wp-content/uploads/2015/03/5-1-710x434.jpg",
//     reviews: 8880,
//     price: 62
// })

// const boulevard = new TourModel({
//     title: "Boulevard Tour",
//     duration: "1 - 2 hours",
//     status: "Likely to sell out",
//     img: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2017/04/06/886951-804850594.jpg?itok=pMA2uEvE",
//     reviews: 3135,
//     price: 145
// })

// //************************** */


// const almasmak = new TourModel({
//     title: "Qasr Al-Masmak Tour",
//     duration: "8 - 9 hours",
//     status: "Bestseller",
//     img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Masmak.JPG",
//     reviews: 6834,
//     price: 79
// })


// const wonderlan = new TourModel({
//     title: "Winter Wonderland Tour",
//     duration: "10 - 12 hours",
//     status: "Bestseller",
//     img: "https://pbs.twimg.com/media/ED_LoUwXkAE9Axt.jpg",
//     reviews: 8550,
//     price: 200
// })


// const busTour = new TourModel({
//     title: "Riyadh Hop-On Hop-Off Bus Tour",
//     duration: "8 hours",
//     status: "Likely to sell out",
//     img: "https://i.pinimg.com/originals/c4/39/dd/c439ddcebfdad0778a88a0f8a3c50fff.jpg",
//     reviews: 1665,
//     price: 68
// })


// const riyadhFront = new TourModel({
//     title: "Riyadh Front Tour",
//     duration: "2 hours",
//     status: "Likely to sell out",
//     img: "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/79278646_2458914094328924_5308153726355627159_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=RJ0lQIdL-d8AX_aMk-q&oh=e9d13393fa5cedbdc22f0663f8b0b20a&oe=5EAA3E2F",
//     reviews: 1412,
//     price: 80
// })


// //************************** */


// const theEdge = new TourModel({
//     title: "Edge of The World Tour",
//     duration: "5 - 8 hours",
//     status: "Bestseller",
//     img: "https://lh3.googleusercontent.com/p/AF1QipOKi2wmc1KWq29PSJ-7vbPRSLchGjKYzA6zvbxX=s1600-w1024",
//     reviews: 6414,
//     price: 59
// })


// const theZone = new TourModel({
//     title: "The Zone Tour",
//     duration: "3 hours",
//     status: "Likely to sell out",
//     img: "http://www.qdesign.net/web/wp-content/uploads/2018/01/05-gardens-landscaping.jpg",
//     reviews: 1558,
//     price: 40
// })



// const albujairi = new TourModel({
//     title: "Al-Bujairi Tour",
//     duration: "1.5 hours",
//     status: "Likely to sell out",
//     img: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2019/06/21/1633886-164244933.jpg?itok=z-gj0bTG",
//     reviews: 588,
//     price: 77
// })



// const ritz = new TourModel({
//     title: "Riyadh Ritz Carlton Tour",
//     duration: "3 - 4 hours",
//     status: "Bestseller",
//     img: "https://news.travelerpedia.net/wp-content/uploads/2017/04/%D9%81%D9%86%D8%AF%D9%82-%D8%A7%D9%84%D8%B1%D9%8A%D8%AA%D8%B2-%D9%83%D8%A7%D8%B1%D9%84%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6.jpg",
//     reviews: 1004,
//     price: 180
// })


// const tours = [kingdomTower, riyadhFront, almasmak, wonderlan, busTour, althumama, wadiHanifa,  boulevard, theEdge, theZone, albujairi, ritz]


// // TourModel.insertMany(tours)
// // .then(() => {
// //     return console.log('All tours seeded!')
// //   })
// // .catch((error) => {
// //     console.log(error)
// // })