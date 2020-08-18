const bcrypt = require('bcrypt');

module.exports = {
  login: async (req, res) => {
    const db = req.app.get(db);
    const { username, password } = req.body;
    const user = await db.check_user(username);
    if (!user) {
      return res.status(401).send('User not found');
    } else {
      const authenticated = bcrypt.compareSync(password, user.password);
      if (authenticated) {
        req.session.user = {
          userId: user.id,
          username: user.username,
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send('Username or Password not correct');
      }
    }
  },
  register: async (req, res) => {
    const db = req.app.get('db');
    const { username, password, profile_pic } = req.body;
    const existingUser = await db.check_user(username);
    if (existingUser[0]) {
      return res.status(409).send('User already exists');
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const [newUser] = await db.create_user([firstName, lastName, email, hash]);
    req.session.user = {
      userId: newUser.user_id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
    };
    res.status(200).send(req.session.user);
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  getUser: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.sendStatus(404);
    }
  },
};
