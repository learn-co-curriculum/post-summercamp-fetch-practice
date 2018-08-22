const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')

function addRemaningRadioheadMembers() {
  radioheadRemainingMembers.forEach((member)=>{
    fetch('http://localhost:3000/members', {
      method: "POST",
      headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          name: member,
          band_id: 2
        })
      })
        .then(res => res.json())
        .then(data => console.log(data.id))
  })


}

addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)
