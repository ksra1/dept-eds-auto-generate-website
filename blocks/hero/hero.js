/**
 * Lincoln Hero Block
 * Full-screen hero with background image
 */
export default function decorate(block) {
  const div = block.querySelector('div');
  const picture = div.querySelector('picture');
  
  // Set background image from picture element
  if (picture) {
    const img = picture.querySelector('img');
    if (img && img.src) {
      div.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${img.src}')`;
    }
  }
  
  // Ensure button has correct class
  const link = div.querySelector('a');
  if (link && !link.classList.contains('button')) {
    link.classList.add('button');
  }
}
