
/*
 * GET home page.
 */

exports.index = function(req, res){
  domain = req.headers.host;
  if ( domain == '198.199.100.202' ) {
    res.render('index', { title: 'notice', dns: domain, usef
  res.render('index', { title: 'ffb.eng.br', dns: domain });
  console.log(req.headers);
};
