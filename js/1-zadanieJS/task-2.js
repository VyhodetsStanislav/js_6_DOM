//он онлайн isOnLine
const isOnLine = true;
//он друг isFriend
const isFriend = true;
//включен не беспокоить isDnd
const isDnd = false;
// он онлайн и друг и не включен режим не беспокоить
const canOpenChat = isOnLine && isFriend && !isDnd;
console.log("можно открыть чат", canOpenChat);
