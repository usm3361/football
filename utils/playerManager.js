import { players } from "../data/players.js";

export function getAllPlayers() {
  return players;
}

export const findPlayerById = (id) => {
  return players.find((player) => player.id === id);
};

export function addPlayer(playerData) {
 
  const newPlayer = {
    id: players.length + 1,
    name: playerData.name,
    position: playerData.position,
    age: playerData.age,
    goals: 0,
    assists: 0,
    matches: 0,
    nationality: playerData.nationality
    }
    players.push(newPlayer)
    return newPlayer
}


addPlayer({
    name: "Uri",
    position: "GoalKeeper",
    age: 30,
    nationality: "Israeli"
})
    
console.log(players)