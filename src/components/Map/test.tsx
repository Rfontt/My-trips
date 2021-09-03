import Map from '.'
import { render, screen } from '@testing-library/react'

describe('<Map />', () => {
  it('Should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /openstreetmap/i
      })
    )
  })

  it('Should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Carnaubal',
      slug: 'Carnaubal',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '1',
      name: 'Guaraciaba do Norte',
      slug: 'Guaraciaba do Norte',
      location: {
        latitude: 40,
        longitude: -10
      }
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/carnaubal/i)).toBeInTheDocument()
    expect(screen.getByTitle(/guaraciaba do norte/i)).toBeInTheDocument()
  })
})
