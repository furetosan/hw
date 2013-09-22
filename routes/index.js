
/*
 * GET home page.
 */

exports.index = function(req, res){
<<<<<<< HEAD
  domain = req.headers.host;
  if ( domain == '198.199.100.202' ) {
    res.render('index', { title: 'notice', dns: domain, usef
  res.render('index', { title: 'ffb.eng.br', dns: domain });
  console.log(req.headers);
=======
  res.render('index', { title: 'Express' });
};

exports.alunos = function(req, res){
  res.render('alunos', { title: 'Alunos' });
>>>>>>> ed0835dbdefb70eb2dc3fb6233be1241914cfcd5
};
