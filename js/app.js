$(document).foundation();

var app = {

  init: function() {
    var myForm = document.querySelector('form');
    myForm.onsubmit = this.addValuesToDetails;
  },

  function killStudent() {
    var elem = document.getElementById('promote');
    elem.parentNode.removeChild(elem);
    return false;
  },

  buildList: function(listValues) {
    var dl = document.createElement('dl');
    //dl.style.border = '1px solid blue';
    dl.innerHTML = this.buildListItem('Student Name', listValues.studentName);

    return dl;
  },

  buildListItem: function(term, definition) {
    var li = ' \
      <li> \
        <dt>' + term + '</dt> \
        <dd>' + definition + '</dd> \
      </li>';
    return li;
  },

  addValuesToDetails: function(ev) {
    ev.preventDefault();
    var details = document.querySelector('div.details');

    var listValues = {
      studentName: this.studentName.value,
    };

    details.appendChild(app.buildList(listValues));
  }
};
app.init();
