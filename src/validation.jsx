let marbles = 10;
export default async function validate(isOdd, betCount) {
  if (typeof isOdd !== 'boolean') throw new Error('MUST_BE_BOOLEAN');

  let hiderBet = Math.min(Math.floor(Math.random() * 100) % 3 || 1, marbles);
  let hiderBetIsOdd = hiderBet % 2 === 1;

  if (hiderBetIsOdd === isOdd) {
    marbles -= hiderBet;
    return hiderBet;
  } else {
    marbles += betCount;
    return -1 * betCount;
  }
}