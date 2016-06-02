$(document).foundation()


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
