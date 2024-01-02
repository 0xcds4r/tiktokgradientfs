document.addEventListener('DOMContentLoaded', () => {
  const settingsPanel = document.getElementById('settings');
  const content = document.getElementById('content');
  const animationToggle = document.getElementById('animationToggle');
  let a = 1;
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        settingsPanel.style.display = a == 1 ? 'none' : 'flex';
        a = !a;
        // content.style.display = 'none';
    }
  });

  const colorInputs = document.querySelectorAll('.color-input');
  const gradientDirectionSelect = document.getElementById('gradientDirection');

  function updateGradient() {
    const colors = Array.from(colorInputs).map(input => input.value);
    const gradientDirection = gradientDirectionSelect.value;
    const animationEnabled = animationToggle.checked;

    content.style.background = `linear-gradient(${gradientDirection}, ${colors.join(', ')})`;

    if (animationEnabled) {
      content.classList.add('animated');
    } else {
      content.classList.remove('animated');
    }
  }

  colorInputs.forEach(input => {
    input.addEventListener('input', updateGradient);
  });

  gradientDirectionSelect.addEventListener('change', updateGradient);
  animationToggle.addEventListener('change', updateGradient);
});
