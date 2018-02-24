export default function convertToHumanTime(duration_ms) {
  const secTotal = duration_ms / 1000.0;
  const sec = Math.round(secTotal % 60.0);
  const secFormatted = sec < 10 ? '0' + sec : sec;
  const mins = parseInt(secTotal / 60.0);
  return `${mins}:${secFormatted}`;
}
