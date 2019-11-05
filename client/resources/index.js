(function(root){
  root.readDoc = function(path, cb){
    function callback () {
      var args = [].slice.call(arguments);
      console.log(args)
      cb&&cb(args[0])     
    }
    var filename = path.split('/')[path.split('/').length]
    var file = new convertDocX({'onload': callback})
    file.handleFileSelect(path, filename, 'docx');
  }
  
})(window)