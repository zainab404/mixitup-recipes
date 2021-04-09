const recipies = [
  {
    id: '1',
    title: 'Chocolate Ganache Cake',
    description: 'This incredibly moist chocolate cake is smothered with a creamy chocolate ganache.'
  },
  {
    id: '2',
    title: 'Salmon en Papillote', 
    description: 'Cooking salmon in parchment with vegetables is nearly fool-proof—the steam-cooking that happens en papillote guarantees that your fish comes out of the oven beautifully moist and tender.'
  }, 
  {
    id: '3',
    title: 'Honey-Mint Lamb Skewers', 
    description: 'Hearty lamb bites are delicious and convenient. Assemble them the day before, then pop them under the broiler when the party starts.'
  }
]

export function getRecipieData() {
  return recipies
}

export function getAllRecipieIds() {
  console.log(recipies.id)
  return {
    params: {
      id: recipies.id
    }
  }
}
