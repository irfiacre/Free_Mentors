import pool from '../configurations/db-config';

class mentors {
  async mentorsDisplay(req, res) {
    try {
      const mentors = 'SELECT * FROM USERS WHERE is_mentor =\'true\'';
      const { rows } = await pool.query(mentors);

      const check = [];
      rows.forEach((mentor) => {
        const mentorData = {

          firstName: mentor.firstname,
          lastName: mentor.lastname,
          email: mentor.email,
          address: mentor.address,
          bio: mentor.bio,
          occupation: mentor.occupation,
          expertise: mentor.expertise,
        };
        check.push(mentorData);
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

  async specificMentorDisplay(req, res) {
    try {
      if (isNaN(req.params.mentorId)) {
        return res.status(400).json({
          status: 400,
          error: 'The Mentor id must be an integer',
        });
      }

      const mentors = 'SELECT * FROM USERS WHERE is_mentor =\'true\'';
      const { rows } = await pool.query(mentors);

      const Check = rows.find((objectof) => objectof.id === parseInt(req.params.mentorId));

      if (!Check) {
        return res.status(404).json({
          status: 404,
          error: 'Mentor not found'
        });
      }
      if (Check.is_mentor) {
        let mentorData = {
          firstName: Check.firstName,
          lastName: Check.lastName,
          email: Check.email,
          address: Check.address,
          bio: Check.bio,
          occupation: Check.occupation,
          expertise: Check.expertise,
        };

        return res.status(200).json({
          status: 200,
          message:"specified mentor",
          data: mentorData
          
        });
      }
      return res.status(400).json({
        status: 400,
        error: 'This is not a mentor',
      });
    } catch(error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  async changeUserToMentor(req, res) {
    try {
      if (isNaN(req.params.userId)) {
        return res.status(400).json({
          status: 400,
          error: 'The userId must be an integer',
        });
      }

      const mentors = `SELECT * FROM USERS WHERE id = ${req.params.userId}`;
      const { rows: [checking] } = await pool.query(mentors);

      if (!checking) {
        return res.status(404).json({
          status: 404,
          message: 'user is not found',
        });
      }

      if (checking.is_mentor === true) {
        return res.status(208).json({
          status: 208,
          error: 'User is already mentor',
        });
      }
      const newInfo = `UPDATE users SET is_mentor=true WHERE id = ${req.params.userId} `;
      const { row } = await pool.query(newInfo);
      
      res.status(200).json({
        status: 200,
        message: ` ${checking.id} status changed to true`,
      });
    } catch(error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }
}

export default new mentors();
