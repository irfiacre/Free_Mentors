import sessions from '../models/sessions';
import reviews from '../models/reviews';

const adminDeleteReview = (req,res)=>{
    const checking1 = sessions.find((objectof) => objectof.sessionId === parseInt(req.params.sessionId));

    if(!checking1){
         return res.status(401).json({
             status:401,
             message:"session  is not found"
         })
     }

const reviewIndex = reviews.findIndex((rvobj) => rvobj.sessionId === reviews.sessionId);

  reviews.splice(reviewIndex, 1);
  res.status(200).json({
    status: 200,
    data: {
      message: 'Review successfully deleted',
    },
    });

    }

    module.exports = adminDeleteReview;