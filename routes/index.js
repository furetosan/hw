
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.alunos = function(req, res){
  res.render('alunos', { title: 'Alunos' });
};
