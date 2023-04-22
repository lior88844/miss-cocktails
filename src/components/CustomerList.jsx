import { CustomerPreview } from './CustomerPreview'

export function CustomerList({ customers, onRemoveCustomer }) {
  return (
    <section className="customer-list simple-cards-grid">
      {customers.map((customer) => (
        <CustomerPreview
          key={customer._id}
          customer={customer}
          onRemoveCustomer={onRemoveCustomer}
        />
      ))}
    </section>
  )
}
