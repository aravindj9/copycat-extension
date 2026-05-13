// Find all code blocks on the page
document.querySelectorAll('pre, code').forEach(block => {
  // Skip if already has a button
if (block.querySelector('.copycat-button')) return;

  // Create copy button
const button = document.createElement('button');
  button.textContent = '📋';
  button.className = 'copycat-button';
  button.style = `
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 12px;
    opacity: 0.7;
    border: none;
    background: white;
    border-radius: 3px;
    padding: 2px 5px;
    cursor: pointer;
    z-index: 9999;
  `;

  // Add copy action
button.onclick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(block.innerText).then(() => {
      button.textContent = '✅';
      setTimeout(() => (button.textContent = '📋'), 1500);
    });
  };

  // Wrap block in relative container
const wrapper = document.createElement('div');
  wrapper.style.position = 'relative';
  block.parentNode.insertBefore(wrapper, block);
  wrapper.appendChild(block.cloneNode(true));
  wrapper.appendChild(button);
};

