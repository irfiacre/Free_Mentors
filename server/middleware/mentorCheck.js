
import pool from '../configurations/db-config';

const checking = async (req, res, next) => {
  if (!req.userData.is_mentor) {
    return res.status(403).json({
      status: 403,
      error: 'Forbidden: Only Mentors can perform this operation',
    });
  }

  const retrieve1 = `SELECT * FROM sessions WHERE session_id=${req.params.sessionId} AND status='accepted'`;
  const { rows: [session1] } = await pool.query(retrieve1);
  if (session1) {
    return res.status(400).json({
      status: 400,
      error: 'session is already accepted',
    });
  }

  const retrieve2 = `SELECT * FROM sessions WHERE session_id=${req.params.sessionId} AND status='rejected'`;
  const { rows: [session2] } = await pool.query(retrieve2);
  if (session2) {
    return res.status(400).json({
      status: 400,
      error: 'session is already rejected',
    });
  }

  const retrieve = `SELECT * FROM sessions WHERE session_id=${req.params.sessionId} AND status='pending'`;
  const { rows: [session] } = await pool.query(retrieve);

  if (!session) {
    return res.status(404).json({
      status: 404,
      error: 'session not found',
    });
  }


  next();
};

export default checking;
