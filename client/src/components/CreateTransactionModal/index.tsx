import { Wrapper, Modal, Header, Form } from './styles';

import SVGClose from '../../assets/close.svg';
import SVGIncome from '../../assets/income.svg';
import SVGOutcome from '../../assets/outcome.svg';

import { handleRadioButtonSelection } from './handleRadioButtonSelection';

import { useModal } from '../../contexts/ModalContext';

export function CreateTransactionModal() {
  const { isOpen, toggleIsOpen } = useModal();

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
