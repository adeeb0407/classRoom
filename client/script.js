const title = document.getElementById("title");
const textArea = document.getElementById("note-text");
const date = document.getElementById("note-date");
const time = document.getElementById("note-time");
const button = document.getElementById("note-btn");
const insertNotes = document.getElementById('notes');



let classRooms;

fetch('http://localhost:5000/schedule').then(function(response) {
    return response.json();
  }).then(function(data) {
      classRooms = data
      console.log(classRooms);
      document.getElementById('notes').innerHTML = classRooms.map((user, index) => 
      `<div>
      <div class="card">
          <h2>${user?.batch_name} </h2>
          <p>${user?.teacher_name}</p>
          <p> Date : ${user?.batch_date}</p>
          <p> Time : ${user?.batch_time}</p>
          <button onClick="deleteNote(this.id)" id="${user?.idschedule}" class="deleteBtn">Delete Note</button>
      </div>
      </div>`
  ).join('')
  }).catch(function() {
    console.log("Booo");
  });

  
function deleteNote(index) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/scheduleDelete", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        id : index
    }));
  xhr.onload = function() {
    location.reload();
  }
}
console.log(classRooms);

button.addEventListener("click", function (e) {

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:5000/schedulePost", true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({
        title: title.value,
        textArea: textArea.value,
        date : date.value,
        time : time.value
    }));
    xhr.onload = function() {
        location.reload();
        textArea.value = '';
        title.value = '';
        date.value ='';
        time.value ='';
    }

});



let searchTxt = document.getElementById("searchTxt");

searchTxt.addEventListener("input", function () {
    let inputVal = searchTxt.value;
    console.log("input event fired", inputVal);
    let cards = document.getElementsByClassName("card");
   classRooms.forEach(function (element) {
        let cardTxt = element.getElementsByTagName('h2')[0].innerHTML;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})
