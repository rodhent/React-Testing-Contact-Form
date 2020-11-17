import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import ContactForm from './components/ContactForm'

test('renders App without crashing', () => {
	render(<App />)

	// breakMyAppTest();
})

// test error
const breakMyAppTest = () => {
	throw new Error('I am an error')
}

test('Contact form accepts all input values and can be submitted', () => {
	render(<ContactForm />)

	const firstName = screen.getByLabelText(/first name*/i)
	expect(firstName).toBeTruthy()
	const lastName = screen.getByLabelText(/last name*/i)
	expect(lastName).toBeTruthy()
	const email = screen.getByLabelText(/email*/i)
	expect(email).toBeTruthy()
	const message = screen.getByLabelText(/message*/i)
	expect(message).toBeTruthy()

	fireEvent.change(firstName, { target: { value: 'Arnold' } })
	fireEvent.change(lastName, { target: { value: 'Schwarzenegger' } })
	// breakMyTest();
	fireEvent.change(email, { target: { value: 'iamanemail@email.com' } })
	fireEvent.change(message, { target: { value: 'Hasta la vista, baby!' } })

	const submitButton = screen.getByTestId(/form/i)
	expect(submitButton).toBeTruthy()
	fireEvent.click(submitButton)
})
