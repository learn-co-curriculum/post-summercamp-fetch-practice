const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')



function addRemaningRadioheadMembers() {
  radioheadRemainingMembers.forEach(member =>{
     makePost(member)
  })
}

function makePost(name) {
  fetch('http://localhost:3000/members', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              name: `${name}`,
              band_id: 2,
            }
          )
    })
}


fetch('http://localhost:3000/members').then(text => text.json()).then(data => getIDs(data))

function getIDs(data) {
  data.forEach(member => {
    console.log(member.id);
  })
}


addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)
