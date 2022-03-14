const router = require('express').Router()


// router.get('/new', (req, res) => {
//     res.render('places/new')
// })

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

// GET /places
router.get('/', (req, res) => {
    let places = [
        {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thaiPic.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/codingCat.jpg'
    }
]
res.render('places/index', { places })
})

module.exports = router

// Photo by <a href="https://unsplash.com/@amseaman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Seaman</a> on <a href="https://unsplash.com/s/photos/thai-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@agforl24?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tai Bui</a> on <a href="https://unsplash.com/s/photos/coding-cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>