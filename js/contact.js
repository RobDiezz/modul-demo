(() => {
  'use strict';
  const modelNames = {
    'linea-01': 'LINEA 01', 'terra-02': 'TERRA 02',
    'frame-03': 'FRAME 03', 'nodo-04': 'NODO 04'
  };
  const form = document.getElementById('inquiry-form');
  const modelSelect = document.getElementById('inquiry-model');
  const status = document.getElementById('form-status');
  const fields = ['name', 'email', 'task'].map(key => ({
    key, input: document.getElementById(`inquiry-${key}`),
    error: document.getElementById(`${key}-error`)
  }));
  const touched = new Set();
  const requestedModel = new URLSearchParams(window.location.search).get('model');
  modelSelect.value = Object.hasOwn(modelNames, requestedModel) ? requestedModel : '';

  function validate(field) {
    const value = field.input.value.trim();
    let message = '';
    if (field.key === 'name' && [...value].length < 2) message = 'Введите имя: не менее 2 символов.';
    if (field.key === 'email') {
      if (!value) message = 'Введите e-mail.';
      else if (field.input.validity.typeMismatch || !field.input.validity.valid) message = 'Введите корректный e-mail, например name@example.com.';
    }
    if (field.key === 'task' && [...value].length < 10) message = 'Опишите задачу: не менее 10 символов.';
    field.error.textContent = message;
    field.input.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  }

  fields.forEach(field => {
    field.input.addEventListener('blur', () => { touched.add(field.key); validate(field); });
    field.input.addEventListener('input', () => {
      status.textContent = '';
      if (touched.has(field.key)) validate(field);
    });
  });
  form.addEventListener('input', () => { status.textContent = ''; });
  form.addEventListener('change', () => { status.textContent = ''; });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const invalid = fields.filter(field => { touched.add(field.key); return !validate(field); });
    if (invalid.length) {
      status.textContent = 'Проверьте отмеченные поля. Данные не отправлены.';
      invalid[0].input.focus();
      return;
    }
    status.textContent = 'Форма заполнена. В демонстрационной версии данные не отправляются.';
  });
  document.getElementById('inquiry-submit').disabled = false;
})();
