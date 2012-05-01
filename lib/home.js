HomeController = new Stellar.Controller('home');

HomeController.index = function() {
  Stellar.render('hello', {greeting: "Welcome to interstellar."});
};

HomeController.new_page = function() {
  Stellar.render('hello', {greeting: "Testing, new page"});
};

