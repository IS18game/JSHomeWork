document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Очистить содержимое';
    clearButton.className = 'clear-button';
    document.querySelector('.card').appendChild(clearButton);
  
    if (localStorage.getItem('editorContent')) {
      editor.value = localStorage.getItem('editorContent');
    }
  
    editor.addEventListener('input', () => {
      localStorage.setItem('editorContent', editor.value);
    });
  
    clearButton.addEventListener('click', () => {
      editor.value = '';
      localStorage.removeItem('editorContent');
    });
  });
  