 const tooltip = document.getElementById('tooltipp');
const svgContainer = document.querySelector('.svg-container');
let tools = document.querySelectorAll('.tool'); // коллектция элементов

tools.forEach(el => {
  el.addEventListener('mouseenter', (e) => {
	  console.log("0");
    const text = e.target.getAttribute('data-tooltip'); // получаем текст из атрибута
    tooltip.textContent = text || 'Подсказка'; // вставляем текст или дефолт
    tooltip.style.display = 'block';
    positionTooltip(e);
  });
  
  el.addEventListener('mousemove', (e) => {
    positionTooltip(e);
  });
  
  el.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});

function positionTooltip(e) {
  const rect = svgContainer.getBoundingClientRect();
  tooltip.style.left = (e.clientX - rect.left + 10) + 'px';
  tooltip.style.top = (e.clientY - rect.top + 10) + 'px';
}
