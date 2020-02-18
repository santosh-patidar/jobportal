module.exports =function(app){
    const user = require('../../controller/user.controller');
    
    app.post('/api/SignUp', user.create);
    app.post('/api/Employee', user.Empcreate);
    app.get('/api/users',user.findAll);
    app.get('/api/users/:id',user.findById);
    app.put('/api/userupdate/:id',user.update);
    app.delete('/api/users/:id',user.delete);
    app.post('/api/login',user.login);
    app.put('/api/verify/:id',user.verify);


   // app.post('/api/sendmail',user.sendMail);
}