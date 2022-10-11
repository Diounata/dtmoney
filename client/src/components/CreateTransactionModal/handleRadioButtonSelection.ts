export function handleRadioButtonSelection() {
  const radioButtons = document.getElementsByName('type') as NodeListOf<HTMLInputElement>;

  radioButtons.forEach(btn => {
    const label = btn.closest('label')!;

    if (btn.checked) {
      label.style.borderColor = 'transparent';
      label.style.backgroundColor = btn.value === 'income' ? 'rgba(18, 164, 84, 0.1)' : 'rgba(229, 46, 77, 0.1)';
    } else {
      label.style.borderColor = '#969CB2';
      label.style.backgroundColor = 'inherit';
    }
  });
}
