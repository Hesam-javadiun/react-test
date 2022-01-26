export default function fn(cards) {
// function fn(cards) {
  const str = cards
    .split('')
    .map(card => '.')
    .join('');

  const loop = cards => {
      const masure = (number) =>{
          if(number >= 0 ){
              return number
          }
          else {
              return 0
          }
      }
    let i;
    let perv;
    let next;
    for (i = 0; i < cards.length; i++) {
        if (cards[i] === '1') {
            perv = cards.slice(0, masure(i - 1)) ? cards.slice(0, masure(i - 1)) : '';
            if (perv !== '' && perv[perv.length - 1] === '1') {
                
                perv = perv.replace( /1$/, '0');
            } else if (perv !== '' && perv[perv.length - 1] === '1') {
                perv = perv.replace(/0$/ ,'1' );
            }

            next = cards.slice( i + 1 , cards.length - 1 ) ? cards.slice(i+ 1, cards.length - 1 ) : '';
            if (next !== '' && next[0] === '1') {
                next = next.replace(/1$/, '0' );

            } else if (next !== '' && next[0] === '0') {
            next = next.replace(/0$/, '1' );
            }
        const newCards = perv + '.' + next;
        console.log("newCards", newCards)
        const index = i;
        return { index, newCards };
    }
    const newCards = null
    const index = null
    return { index, newCards };
    }
  };
  let bol = true;
  let newCards = cards
  let index;
  let resultedString;
  while(bol) {
         const result  = loop(cards) 
         newCards = result.newCards; // in code naghes hastesh va kamel nashode :(
         index = result.index;
         
      if (newCards === null) {
          bol = false;
      }
  }
  return newCards
}



