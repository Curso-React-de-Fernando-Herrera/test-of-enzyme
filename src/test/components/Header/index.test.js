import Header from 'components/Header'
import { shallow } from 'enzyme'


describe('<Header /> should be', () => {
  test('a component rendered by title and subtitle', () => {
    const initialTitle = 'Bienvenido!'
    const initialSubtitle = 'Al testing con Enzyme'

    const wrapper = shallow(<Header title={initialTitle} subtitle={initialSubtitle} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('a title arrive on html', () => {
    const initialTitle = 'Bienvenido!'
    const initialSubtitle = 'Al testing con Enzyme'
    const wrapper = shallow(<Header title={initialTitle} subtitle={initialSubtitle} />)

    const textOfTitle = wrapper.find('h1').text()
    const incorrectTitle = wrapper.find('h2').text()

    expect(textOfTitle).toBe(initialTitle)
    expect(incorrectTitle).not.toBe(initialTitle)
  })
})