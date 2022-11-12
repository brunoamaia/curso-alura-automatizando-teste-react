import React from 'react'
import { render } from '@testing-library/react'
import Transacao from './Transacao'

describe('Componente de transação do extrato', () => {
	describe('O snapshot do componente deve permanecer sempre o mesmo', () => {
		it('Mostra o nome do banco', () => {
			const { container } = render(
				<Transacao data={'11/11/2022'} tipo={'saque'} valor={'20.00'} />
			)
			expect(container.firstChild).toMatchSnapshot()
		})
	})
})