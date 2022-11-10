import React from 'react';
import { render, screen } from '@testing-library/react'
import App from './App'

describe('Componente principal', () => {
	describe('Quando eu abro o App do banco', () => {
		it('Mostra o nome do banco', () => {
			render(<App />)
			expect(screen.getByText('ByteBank')).toBeInTheDocument()
		})
	
		it('Mostra o saldo', () => {
			render(<App />)
			expect(screen.getByText('Saldo:')).toBeInTheDocument()
		})
	
		it('Mostra o botão de realizar transação', () => {
			render(<App />)
			expect(screen.getByText('Realizar operação')).toBeInTheDocument()
		})
	})
})