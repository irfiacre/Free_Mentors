
import pool from '../configurations/db-config';

const checking = async (req, res, next) => {

  if (!req.userData.is_mentor) {
    return res.status(403).json({
      status: 403,
      error: 'Forbidden: Only Mentors can perform this operation',
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