const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')

function addRemaningRadioheadMembers() {
  radioheadRemainingMembers.forEach( memberName => {
    fetch(" http://localhost:3000/members", {
    method: "post",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify( { name: memberName, band_id: 2 } )
    }).then(res => res.json()).then(data => console.log(data.id))
  })
}

addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)
