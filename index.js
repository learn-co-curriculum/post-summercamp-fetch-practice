const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')

const url = 'http://localhost:3000/members'

i = 1
radioheadRemainingMembers.forEach(member => {
  data = {
    'name': member,
    'id': ++i,
    'band_id': 1
  }
  addRemaningRadioheadMembers(data)
})

function addRemaningRadioheadMembers(data) {
  fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(showIds)
}

function showIds(data){
  fetch(url)
    .then(r => r.json())
    .then(json => console.log(json))
}

addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)
