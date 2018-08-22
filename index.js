const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')

// let i = 2

function addRemaningRadioheadMembers() {

  radioheadRemainingMembers.forEach(member => {
    fetch('http://localhost:3000/members', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({"name": member, "band_id": 2})}).then(res => res.json()).then(info => console.log(info.id))
  })
}


addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)
