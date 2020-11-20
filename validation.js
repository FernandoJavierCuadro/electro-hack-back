module.exports = {
  validateRegister: (req, res, next) => {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
      return res.json("invalid data on form");
    } else {
      if (req.body.name === undefined) {
        return res.json("invalid data on form");
      } else if (req.body.name.trim().length < 3) {
        return res.json("invalid data on form");
      } else if (req.body.name.trim().length > 10) {
        return res.json("invalid data on form");
      }

      if (req.body.lastname === undefined) {
        return res.json("invalid data on form");
      } else if (req.body.lastname.trim().length < 3) {
        return res.json("invalid data on form");
      } else if (req.body.lastname.trim().length > 10) {
        return res.json("invalid data on form");
      }

      if (req.body.telephone === undefined) {
        return res.json("invalid data on form");
      } else if (isNaN(req.body.telephone)) {
        return res.json("invalid data on form");
      } else if (req.body.telephone.trim().length > 15) {
        return res.json("invalid data on form");
      }

      if (req.body.address === undefined) {
        return res.json("invalid data on form");
      }

      if (req.body.password === undefined) {
        return res.json("invalid data on form");
      } else if (req.body.password.trim().length < 4) {
        return res.json("invalid data on form");
      } else if (req.body.password.trim().length > 10) {
        return res.json("invalid data on form");
      }

      const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (req.body.email === undefined) {
        return res.json("invalid data on form");
      } else if (!req.body.email.match(mailformat)) {
        return res.json("invalid data on form");
      }

      next();
    }
  },
  validateLogin: (req, res, next) => {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
      return res.json("invalid data on form");
    } else {
      if (req.body.password === undefined) {
        return res.json("invalid data on form");
      } else if (req.body.password.trim().length < 4) {
        return res.json("invalid data on form");
      } else if (req.body.password.trim().length > 10) {
        return res.json("invalid data on form");
      }

      const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (req.body.email === undefined) {
        return res.json("invalid data on form");
      } else if (!req.body.email.match(mailformat)) {
        return res.json("invalid data on form");
      }

      next();
    }
  },
};
