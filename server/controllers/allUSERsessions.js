
import userSessions from '../models/sessions';

const sessionsDisplay = (req,res) =>{
    return res.status(200).json({
        status:200,
        data: userSessions,
    })
};

module.exports = sessionsDisplay;

