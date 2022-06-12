


export const usuario_duplicado = (req, res, next) => {
    // Username
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "error, usuario en uso"
        });
        return;
    }   next();
        })
};


export const email_duplicado = (req, res, next) => {
    // Email
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "error, email en uso"
            });
            return;
            }
            next();
            }
    )
};
