function access() {
  let orisha = 'oya'; 

  function showOrisha() {
    console.log(orisha);
  }
  return showOrisha; 
}

let manifest = access(); 
manifest(); 
