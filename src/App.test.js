import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
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
		describe('que é um saque', () => {
			it('o valor vai diminuir', () => {
				const valores = {
					transacao: 'saque',
					valor: 50
				}
				const novoSaldo = calcularNovoSaldo(valores , 150)

				expect(novoSaldo).toBe(100)
			})
			it('o valor vai ficar negativo', () => {
				const valores = {
					transacao: 'saque',
					valor: 100
				}
				const novoSaldo = calcularNovoSaldo(valores , 50)

				expect(novoSaldo).toBe(-50)
			})
			it('a operação vai acontecer', async () => {
				await render(<App />)
				
				const saldo = screen.getByText('R$ 1000')
				const transacao = screen.getByLabelText('Saque')
				const valor = screen.getByTestId('valor')
				const botaoTransacao = screen.getByText('Realizar operação')

				expect(saldo.textContent).toBe('R$ 1000')

				await fireEvent.click(transacao, {target: {value: 'saque'}})
				await fireEvent.change(valor, {target: {value: '10'}})
				await fireEvent.click(botaoTransacao)

				expect(saldo.textContent).toBe('R$ 990')
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