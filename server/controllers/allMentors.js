
import pool from '../configurations/db-config';

class mentors {
  async mentorsDisplay(req, res) {
    try {
      const mentors = `SELECT * FROM USERS WHERE is_mentor ='true'`;
      
      const { rows } = await pool.query(mentors);
        
      const check = [];
      rows.forEach((mentor) => {
        if (mentor) {
          const mentorData = {
            firstName: mentor.firstName,
            lastName: mentor.lastName,
            email: mentor.email,
            address: mentor.address,
            bio: mentor.bio,
            occupation: mentor.occupation,
            expertise: mentor.expertise,

          };
          check.push(mentorData);
        }
      });

      return res.status(200).json({
        status: 200,
        message: 'All Mentors',
        data: check,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }
}

export default new mentors();
