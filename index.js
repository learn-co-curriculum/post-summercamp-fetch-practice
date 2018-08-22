const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')
const membersURL = "http://localhost:3000/members"


function addRemaningRadioheadMembers() {
  return radioheadRemainingMembers.forEach(member => {
    const postMemberConfig = {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({name: member, band_id: 2})
    }
    fetch(membersURL, postMemberConfig).then(res => res.json()).then(console.log)
  })
}

addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)
