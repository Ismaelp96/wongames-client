import { screen } from '@testing-library/react'

import Logo from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Logo />', () => {
  it('should render the a white label by default', () => {
    // renderizar o compoenente `render`
    // selecionar o elemento a ser testado `screen` (queries) - getByLabel ...
    // expect - assertion - asserção - comparação - analise
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render the a black labelwhen color is passed', () => {
    // renderizar o compoenente `render`
    // selecionar o elemento a ser testado `screen` (queries) - getByLabel ...
    // expect - assertion - asserção - comparação - analise
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
