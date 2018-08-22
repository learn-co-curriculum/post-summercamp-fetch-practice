const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')

function addRemaningRadioheadMembers() {

  radioheadRemainingMembers.forEach((e) => {
    fetch("http://localhost:3000/members", {
      method: 'POST',
      body: JSON.stringify({name: e, band_id: 2}),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => console.log(data.id))
  })
}

addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)
