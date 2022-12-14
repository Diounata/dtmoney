import { Wrapper, Modal, Header, Form } from './styles'
import { logic } from './logic'

import SVGClose from '../../assets/close.svg'
import SVGIncome from '../../assets/income.svg'
import SVGOutcome from '../../assets/outcome.svg'

import { useModal } from '../../contexts/ModalContext'
import { useTransaction } from '../../contexts/TransactionContext'

export function CreateTransactionModal() {
  const { handleChange, handlePrice, handleSubmit } = logic()
  const { isOpen, closeModal } = useModal()
  const { editingTransactionId, setEditingTransactionId } = useTransaction()

  const close = () => {
    closeModal()
    setEditingTransactionId('')
  }

  return (
    <>
      {isOpen && (
        <Wrapper className="wrapper">
          <Modal className="modal">
            <Header>
              <h1>{editingTransactionId ? 'Edit' : 'Create'} transaction</h1>

              <button onClick={close}>
                <img src={SVGClose} width="14px" alt="Close" />
              </button>
            </Header>

            <Form onSubmit={handleSubmit}>
              <input type="text" name="title" placeholder="Name" onChange={handleChange} required />

              <input
                type="number"
                name="price"
                min={0.01}
                step={0.01}
                placeholder="Price"
                onKeyDown={handlePrice}
                onChange={handleChange}
                required
              />

              <section>
                <label>
                  <input type="radio" name="type" value="income" onChange={handleChange} required />
                  <img src={SVGIncome} width="20px" alt="Income" /> Income
                </label>

                <label>
                  <input
                    type="radio"
                    name="type"
                    value="outcome"
                    onChange={handleChange}
                    required
                  />
                  <img src={SVGOutcome} width="20px" alt="Outcome" /> Outcome
                </label>
              </section>

              <input
                type="text"
                name="category"
                placeholder="Category"
                onChange={handleChange}
                required
              />

              <input type="submit" value={editingTransactionId ? 'Edit' : 'Create'} />
            </Form>
          </Modal>
        </Wrapper>
      )}
    </>
  )
}
