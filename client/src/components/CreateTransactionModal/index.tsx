import { Wrapper, Modal, Header, Form } from './styles';

import SVGClose from '../../assets/close.svg';
import SVGIncome from '../../assets/income.svg';
import SVGOutcome from '../../assets/outcome.svg';

import { useModal } from '../../contexts/ModalContext';

export function CreateTransactionModal() {
  const { isOpen, toggleIsOpen } = useModal();

  function handleRadioButtonSelection() {
    const radioButtons = document.getElementsByName('type') as NodeListOf<HTMLInputElement>;

    radioButtons.forEach(btn => {
      const label = btn.closest('label')!;

      if (btn.checked) {
        label.style.borderColor = 'transparent';
        label.style.backgroundColor =
          btn.value === 'income' ? 'rgba(18, 164, 84, 0.1)' : 'rgba(229, 46, 77, 0.1)';
      } else {
        label.style.borderColor = '#969CB2';
        label.style.backgroundColor = 'inherit';
      }
    });
  }

  return (
    <>
      {isOpen && (
        <Wrapper>
          <Modal>
            <Header>
              <h1>Create transaction</h1>

              <button onClick={toggleIsOpen}>
                <img src={SVGClose} width="14px" alt="Close" />
              </button>
            </Header>

            <Form>
              <input type="text" name="name" placeholder="Name" />

              <input type="number" name="price" placeholder="Price" />

              <section>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="income"
                    onChange={handleRadioButtonSelection}
                  />
                  <img src={SVGIncome} width="20px" alt="Income" /> Income
                </label>

                <label>
                  <input
                    type="radio"
                    name="type"
                    value="outcome"
                    onChange={handleRadioButtonSelection}
                  />
                  <img src={SVGOutcome} width="20px" alt="Outcome" /> Outcome
                </label>
              </section>

              <input type="text" name="category" placeholder="Category" />

              <button>Create</button>
            </Form>
          </Modal>
        </Wrapper>
      )}
    </>
  );
}
