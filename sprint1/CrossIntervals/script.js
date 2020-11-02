/*
Пересечение интервалов
Даны два отсортированных списка с временными интервалами, когда пользователи были в сети.
Начало интервала строго меньше конца.
Напишите функцию, которая находит интервалы, когда оба пользователя были онлайн.
intersection(
    [[8, 12], [17, 22]],
    [[5, 11], [14, 18], [20, 23]]
) // [[8, 11], [17, 18], [20, 22]]

intersection(
    [[9, 15], [18, 21]],
    [[10, 14], [21, 22]]
) // [[10, 14]]
 */

function intersection(user1, user2) {
  const crossIntervals = [];
  for (let i = 0; i < user1.length; i++) {
    const user1Start = user1[i][0];
    const user1End = user1[i][1];
    for (let j = 0; j < user2.length; j++) {
      const resInterval = [];
      const user2Start = user2[j][0];
      const user2End = user2[j][1];
      if(user1End <= user2Start || user1Start >= user2End) {
        continue;
      }
      if (user1Start >= user2Start) {
        resInterval.push(user1Start);
      } else {
        resInterval.push(user2Start)
      }
      if (user1End <= user2End) {
        resInterval.push(user1End)
      } else {
        resInterval.push(user2End)
      }
      crossIntervals.push(resInterval);
    }
  }
  return crossIntervals;
}