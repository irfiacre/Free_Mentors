
const mentors = require('../models/mentors');

const mentorsDisplay = (req,res) => {
return res.status(200).json({
    status: 200,
    data: mentors,
})
};
module.exports=  mentorsDisplay;