import React from 'react';
import { render, screen } from '@testing-library/react'
import App, { calcularNovoSaldo } from './App'

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

	describe('Quando eu realizo uma transação', () => {
		describe('que é um saque, o valor vai', () => {
			it('diminuir', () => {
				const valores = {
					transacao: 'saque',
					valor: 50
				}
				const novoSaldo = calcularNovoSaldo(valores , 150)

				expect(novoSaldo).toBe(100)
			})
			it('ficar negativo', () => {
				const valores = {
					transacao: 'saque',
					valor: 100
				}
				const novoSaldo = calcularNovoSaldo(valores , 50)

				expect(novoSaldo).toBe(-50)
			})
		})

		it('que é um deposito, o valor vai aumentar', () => {
			const valores = {
				transacao: 'deposito',
				valor: 50
			}
			const novoSaldo = calcularNovoSaldo(valores , 100)

			expect(novoSaldo).toBe(150)
		})
	
	})
})