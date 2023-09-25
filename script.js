/**
 * Create a monster object, populate some HTML to display its properties.
 */
const updatemonster = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(monster);
  console.info(update);
};

const monster = {
  name: "Graveyard Ghoul",
  hp: 30,
  color: "grey",
  numberOfArms: 4,
  attack: false,
  toggleAttack: function (attack) {
    this.attack = attack;
    updatemonster(`Monster status changed.`);
  },
};

const markup = (monster) => {
  return `
  <div>
    <h3>${monster.name}</h3>
    <ul>
      <li>Hit Points: ${monster.hp}</li>
      <li>Color: ${monster.color}</li>
      <li>Number of arms: ${monster.numberOfArms}</li>
      <li>Attack Mode: ${monster.attack ? "Attack" : "Peaceful"}</li>
    </ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(monster);
document.body.appendChild(main);
