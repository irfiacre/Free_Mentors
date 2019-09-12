import pool from "../configurations/db-config";

class sessions {

    async sessionCreate (req,res) {
        try{

        const mentors = `SELECT * FROM users WHERE id = ${req.body.mentorId} AND is_mentor ='true' `;
        const { rows:[mentorCheck] } = await pool.query(mentors);

        if(!mentorCheck){
        return res.status(404).json({
            status: 404,
            message:"mentor not found"
        })
         }
         
    const sessionGet = `SELECT*FROM sessions WHERE mentorid=${req.body.mentorId} AND menteeid=${req.userData.id} `
    const {rows:[sessionCheck]}= await pool.query(sessionGet) 
    if(sessionCheck){
        return res.status(208).json({
            status: 208,
            error:"session is already created."
        })
    }
     const newSession = {
        sessionId : sessions.length+1,
        mentorId : parseInt(req.body.mentorId),
        menteeId : req.userData.id,
        questions : req.body.questions,
        menteeEmail : req.userData.email,
        status : 'pending'
    }
 const insert = 'INSERT INTO sessions(mentorid, menteeid, questions,menteeemail,status) VALUES($1, $2, $3, $4, $5) RETURNING *';
    const { rows } = await pool.query(insert,
      [newSession.mentorId, newSession.menteeId, newSession.questions, newSession.menteeEmail, newSession.status]);
          
    res.status(200).json({
        status:200,
        data: newSession,
    })
} catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};

}

export default new sessions();