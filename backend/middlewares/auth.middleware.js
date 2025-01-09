const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const blacklistTokenModel = require('../models/blacklistToken.model')

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ]
    if(!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token})

    if(isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)

        req.user = user

        return next()
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
}

module.exports.authAdmin = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
  
    if (!token) {
      return res.status(401).json({ message: 'Access denied' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.adminId = decoded.id;
      next();
    } catch (error) {
      res.status(400).json({ message: 'Invalid token' });
    }
  };