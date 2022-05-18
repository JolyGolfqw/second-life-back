const {Router} = require('express')

const router = Router()

router.use(require('./pets.route'))
router.use(require('./petsKeeping.route'))


module.exports = router