const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')

const membersUrl = 'http://localhost:3000/members'

// simple fetch for members
function get() {
  fetch(membersUrl).then(r => r.json()).then(console.log)
}

// this fn will be passed as a callback function
// into forEach iteration in addRemaningRadioheadMembers
// console log each member's id after post
function postMember(member) {
  let postConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      name: `${member}`,
      band_id: 2
    })
  }

  fetch(membersUrl, postConfig).then(r => r.json()).then(json => console.log(json.id))

}

// iterate through array of members and post for each member
function addRemaningRadioheadMembers(e) {
  radioheadRemainingMembers.forEach(function(member) {
    postMember(member)
  })
}

addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)
