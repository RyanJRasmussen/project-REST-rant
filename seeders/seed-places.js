require('dotenv').config()
const db = require('../models')
const mongoose = require('mongoose')

// console.log(process.env.MONGO_URI)
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// })
// .then(console.log(()=>{console.log('12345')}))
// .catch(err=>{console.log(err)})



db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})