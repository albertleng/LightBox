window.addEventListener('load', function(){
  var nodes = document.querySelectorAll('.lightbox');
  for (var i=0; i<nodes.length;i++) {
    nodes[i].addEventListener('click', function(){
      if (this.classList.contains('open')) {
        this.classList.remove('open');
      } else {
        this.classList.add('open')
      }
    })
  }
})