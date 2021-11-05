function humanReadable(seconds) {
  /* HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59 */
  let time = { HH: 0, MM: 0, SS: 0 };
  while (seconds > 0) {
    if (time.SS < 59) {
      time.SS++;
    } else if (time.MM < 59) {
      time.MM++;
      time.SS = 0;
    } else if (time.HH < 99) {
      time.HH++;
      time.MM = 0;
      time.SS = 0;
    } else {
      return -1;
    }
    seconds--;
  }

  return Object.values(time)
    .map((i) => {
      return i < 10 ? 0 + i.toString() : i;
    })
    .join(":");
}

console.log(humanReadable(369999));
