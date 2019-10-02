var createPage = function (user) {
   var div = document.createElement('div');
   div.setAttribute('id','usr');
   div.innerHTML = user.name + ":" + user.gpa;
   document.body.appendChild(div);
}

module.exports = {createPage}
