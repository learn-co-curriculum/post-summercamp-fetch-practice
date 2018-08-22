const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]
const addMembersTrigger = document.getElementById('add-members-trigger')
const jsonUrl = 'http://localhost:3000/members'

addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)

function addRemaningRadioheadMembers(bandId) {
  radioheadRemainingMembers.forEach(member => {
    const postConfig = {
      method: 'POST',
      body: JSON.stringify(
        {name: member,
        band_id: bandId}),
      headers: {
        'Content-type':'application/json'
      }
    }
    return fetch(jsonUrl, postConfig).then(res=>res.json()).then(data=>console.log(data.id))
  })
}
