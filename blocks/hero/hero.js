/**
 * Lincoln Hero Block
 * Matches lincoln.com design - no overlay, lower-left content
 */
export default function decorate(block) {
  const div = block.querySelector('div');
  const picture = div.querySelector('picture');
  
  // Set background image from picture element (NO overlay)
  if (picture) {
    const img = picture.querySelector('img');
    if (img && img.src) {
      div.style.backgroundImage = `url('${img.src}')`;
    }
  }
  
  // Ensure button has correct class
  const link = div.querySelector('a');
  if (link && !link.classList.contains('button')) {
    link.classList.add('button');
  }
}
