import { Wrapper, Modal, Header, Form, CreateTransactionButton } from './styles';
import { logic } from './logic';

import SVGClose from '../../assets/close.svg';
import SVGIncome from '../../assets/income.svg';
import SVGOutcome from '../../assets/outcome.svg';

import { useModal } from '../../contexts/ModalContext';

export function CreateTransactionModal() {
  const { handleChange, handleAddition } = logic();
  const { isOpen, closeModal } = useModal();

  return (
    <>
      {isOpen && (
        <Wrapper className="wrapper">
          <Modal className="modal">
            <Header>
              <h1>Create transaction</h1>

              <button onClick={closeModal}>
                <img src={SVGClose} width="14px" alt="Close" />
              </button>
            </Header>

            <Form>
              <input type="text" name="title" placeholder="Name" onChange={handleChange} />

              <input type="number" name="price" placeholder="Price" onChange={handleChange} />

              <section>
                <label>
                  <input type="radio" name="type" value="income" onChange={handleChange} />
                  <img src={SVGIncome} width="20px" alt="Income" /> Income
                </label>

                <label>
                  <input type="radio" name="type" value="outcome" onChange={handleChange} />
                  <img src={SVGOutcome} width="20px" alt="Outcome" /> Outcome
                </label>
              </section>

              <input type="text" name="category" placeholder="Category" onChange={handleChange} />
            </Form>

            <CreateTransactionButton onClick={handleAddition}>Create</CreateTransactionButton>
          </Modal>
        </Wrapper>
      )}
    </>
  );
}
