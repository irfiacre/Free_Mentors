import bcrypt from 'bcrypt';
import '@babel/plugin-transform-regenerator';
import '@babel/polyfill';
import jwt from 'jsonwebtoken';
import pool from '../configurations/db-config';

class signing {
  async signin(req, res) {
    try {
      const emailGet = 'SELECT email FROM users WHERE email = $1;';
      const { rows: [emailGot] } = await pool.query(emailGet, [req.body.email]);

      if (!emailGot) {
        return res.status(422).json({
          status: 422,
          error: 'Invalid email',
        });
      }

      const passwordGet = 'SELECT * FROM users  WHERE email = $1;';
      const { rows: [passwordGot] } = await pool.query(passwordGet, [req.body.email]);

      const password = await bcrypt.compare(req.body.password, passwordGot.password);
      if (!password) {
        return res.status(422).json({
          status: 422,
          error: 'Invalid Password',
        });
      }

      const token = jwt.sign({
        id: passwordGot.id,
        email: passwordGot.email,
        is_admin: passwordGot.is_admin,
        is_mentor: passwordGot.is_mentor,
      }, 'jwtprivatekey');

      res.status(200).json({
        status: 200,
        message: 'User is successfully signed in',
        data: { token },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  async signup(req, res) {
    try {
      const emailData = 'SELECT * FROM users WHERE email =$1';
      const { rows: [emailFound] } = await pool.query(emailData, [req.body.email]);

      if (emailFound) {
        return res.status(409).json({
          status: 409,
          error: 'Email already exist',
        });
      }

      const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        address: req.body.address,
        bio: req.body.bio,
        occupation: req.body.occupation,
        expertise: req.body.expertise,
        is_mentor: req.body.is_mentor || false,
        is_admin: req.body.is_admin || false,
      };

      const insert = 'INSERT INTO users(firstname, lastname, email, password, address, bio, occupation, expertise) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
      const { rows } = await pool.query(insert,
        [newUser.firstName, newUser.lastName, newUser.email, newUser.password, newUser.address, newUser.bio, newUser.occupation, newUser.expertise]);

      const user = rows.find((obj) => obj.id);
      const token = jwt.sign({
        id: user.id,
        email: user.email,
      }, 'jwtprivatekey');

      res.status(201).json({
        status: 201,
        message: 'user successfuly created',
        data: {
          token,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          address: req.body.address,
          bio: req.body.bio,
          occupation: req.body.occupation,
          expertise: req.body.expertise,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }
}
export default new signing();
