$(document).foundation()

function createButton(context, func){
  var button = document.createElement("input");
  button.type = "button";
  button.value = "Delete";
  button.onclick = func;
  context.appendChild(button);
}

window.onload = function(){
    createButton(document.body,function(){
      highlight(this.parentNode.childNodes[1]);
    });
}


var myForm = document.querySelector('form');
myForm.onsubmit = function(ev) {
  ev.preventDefault();
  var details = document.querySelector('div.details');

  var studentName = this.studentName.value;

  details.innerHTML += ' \
    <dl> \
      <dt>Student Name</dt> \
      <dd>' + studentName + '</dd> \
    </dl>';

};
