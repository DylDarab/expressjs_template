import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    let tokenHeader = req.get('token')
    if (req.body.token) {
        try {
            const decoded = jwt.verify(req.body.token, process.env.TOKEN_KEY)
            if (decoded.role != 'staff')
                return res.status(401).send('INVALID TOKEN')
        } catch (err) {
            return res.status(401).send('INVALID TOKEN')
        }
        return next()
    } else if (tokenHeader) {
        try {
            const decoded = jwt.verify(tokenHeader, process.env.TOKEN_KEY)
            // console.log(decoded.role)
            if (decoded.role != 'employer')
                return res.status(401).send('INVALID TOKEN')
        } catch (err) {
            return res.status(401).send('INVALID TOKEN')
        }
        return next()
    } else {
        return res.status(401).send('INVALID TOKEN')
    }
}
