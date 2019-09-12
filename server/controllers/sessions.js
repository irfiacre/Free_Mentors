import pool from '../configurations/db-config';

class sessions {
  async sessionCreate(req, res) {
    try {
      const mentors = `SELECT * FROM users WHERE id = ${req.body.mentorId} AND is_mentor ='true' `;
      const { rows: [mentorCheck] } = await pool.query(mentors);

      if (!mentorCheck) {
        return res.status(404).json({
          status: 404,
          message: 'mentor not found',
        });
      }

      const sessionGet = `SELECT*FROM sessions WHERE mentorid=${req.body.mentorId} AND menteeid=${req.userData.id} `;
      const { rows: [sessionCheck] } = await pool.query(sessionGet);
      if (sessionCheck) {
        return res.status(208).json({
          status: 208,
          error: 'session is already created.',
        });
      }
      const newSession = {
        sessionId: sessions.length + 1,
        mentorId: parseInt(req.body.mentorId),
        menteeId: req.userData.id,
        questions: req.body.questions,
        menteeEmail: req.userData.email,
        status: 'pending',
      };
      const insert = 'INSERT INTO sessions(mentorid, menteeid, questions,menteeemail,status) VALUES($1, $2, $3, $4, $5) RETURNING *';
      const { rows } = await pool.query(insert,
        [newSession.mentorId, newSession.menteeId, newSession.questions, newSession.menteeEmail, newSession.status]);

      res.status(200).json({
        status: 200,
        data: newSession,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  async acceptSession(req, res) {

    const retrieve = `SELECT * FROM sessions WHERE session_id=${req.params.sessionId} AND status='pending'`;
    const { rows: [session] } = await pool.query(retrieve);

    const acceptSession = {
      sessionId: session.session_id,
      mentorId: session.mentorId,
      menteeId: req.userData.id,
      questions: session.questions,
      menteeEmail: req.userData.email,
      status: 'accepted',
    };

    const update = `UPDATE sessions SET status='accepted' WHERE status='pending' AND session_id=${req.params.sessionId}`;
    const { row } = await pool.query(update);

    res.status(200).json({
      status: 200,
      message: `session ${session.session_id} is accepted`,
      data: acceptSession,
    });
  }

  async rejectSession(req, res) {
    const retrieve = `SELECT * FROM sessions WHERE session_id=${req.params.sessionId} AND status='pending'`;
    const { rows: [session] } = await pool.query(retrieve);


    const update = `UPDATE sessions SET status='rejected' WHERE status='pending' AND session_id=${req.params.sessionId}`;
    const { row } = await pool.query(update);


    const rejectSession = {
      sessionId: session.session_id,
      mentorId: session.mentorId,
      menteeId: req.userData.id,
      questions: session.questions,
      menteeEmail: req.userData.email,
      status: 'rejected',
    };

    res.status(200).json({
      status: 200,
      message: `session ${session.session_id} is rejected`,
      data: rejectSession,
    });
  }
}

export default new sessions();
