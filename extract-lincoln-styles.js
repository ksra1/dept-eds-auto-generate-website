// This will be executed in the browser console to extract exact styles
const heading = document.querySelector('h1, h2, .hero h1, .hero h2');
if (heading) {
  const styles = window.getComputedStyle(heading);
  console.log({
    fontFamily: styles.fontFamily,
    fontSize: styles.fontSize,
    fontWeight: styles.fontWeight,
    lineHeight: styles.lineHeight,
    color: styles.color,
    textAlign: styles.textAlign,
    letterSpacing: styles.letterSpacing
  });
}
