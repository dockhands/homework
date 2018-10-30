

document.querySelectorAll(".square").forEach(node => {

    node.addEventListener("click", event => { 
      const currentTarget = event.currentTarget;
      
      currentTarget.classList.toggle("selected");
    });
  });

