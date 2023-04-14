AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Amazing Spiderman",
        url: "./assets/1.png",
      },
      {
        id: "budapest",
        title: "Spiderman",
        url: "./assets/2.png",
      },

      {
        id: "eiffel-tower",
        title: "Avengers",
        url: "./assets/3.png",
      },
      {
        id: "new-york-city",
        title: "Short Stories",
        url: "./assets/4.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.crbo(position,item.id)
      // Thumbnail Element
      const thumbnail = this.crtn(item)
      borderEl.appendChild(thumbnail)
      // Title Text Element
      const title = this.crte(position,item)
      borderEl.appendChild(title)
      this.placesContainer.appendChild(borderEl);
    }
  },
  
crbo: function(position, id){
  const e1 = document.createElement("a-entity")
  e1.setAttribute("id", id)
  e1.setAttribute("visible", true)
  e1.setAttribute("geometry", {
    primitive:"plane",
       
  })
  e1.setAttribute("position", position)
  e1.setAttribute("material", {
    color:"#0077cc",
    opacity:1,
  })
  return e1
},

crtn: function(item){
  const n1 = document.createElement("a-entity")
  n1.setAttribute("visible", true)
  n1.setAttribute("geometry", {
    primitive:"plane", 
    width:"14",
    height:"20"
  })
  n1.setAttribute("material", {
    src:item.url
  })
  return n1
},

crte: function(position, item){
  const t1 = document.createElement("a-entity")
  t1.setAttribute("text", {
    font:"exo2bold",
    align:"center",
    width:70,
    color:"orange",
    value:item.title
  })
  const elpos = position
  elpos.y = -20
  t1.setAttribute("position", elpos)
  t1.setAttribute("visible", true)
  return t1
}

});
