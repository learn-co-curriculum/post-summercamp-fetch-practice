const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')

function addRemaningRadioheadMembers() {
  radioheadRemainingMembers.forEach(function(member){
      config = {
      method: "POST",
      body: JSON.stringify({"name": `${member}`, "band_id": 2}),
      headers:{
        "Content-Type": "application/json"
      }
    }
      fetch('http://localhost:3000/members', config).then(resp => resp.json()).then(obj => console.log(obj.id))
  })

}

addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)
