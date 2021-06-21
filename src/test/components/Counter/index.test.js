import Counter from 'components/Counter'
import { shallow } from 'enzyme'

describe('<Counter /> component should be', () => {
  test('rendered', () => {
    const wrapper = shallow(<Counter />)

    expect(wrapper).toMatchSnapshot()
  })

  test('a initial value of counter', () => {
    const initialValue = 0

    const wrapper = shallow(<Counter />)
    const renderedValue = wrapper.find('h3').text()

    expect(renderedValue).toBe(String(initialValue))
    expect(renderedValue).not.toBe(String(initialValue + 1))
  })

  test('a custom value of counter', () => {
    const initialValue = 100
    const wrapper = shallow( <Counter value={initialValue} />)

    const returnedValue = wrapper.find('h3').text()

    expect(returnedValue).toBe(String(initialValue))
    expect(returnedValue).not.toBe(String(initialValue + 1))
  })

  test('increment counter', () => {
    const wrapper = shallow( <Counter /> )
    const initialCounter = wrapper.find('h3').text()

    wrapper.find('button').at(1).simulate('click')

    const returnedCounter = wrapper.find('h3').text()
    expect(returnedCounter).toBe(String(+initialCounter + 1))
  })

  test('decrement counter', () => {
    const wrapper = shallow( <Counter /> )
    const initialCounter = wrapper.find('h3').text()

    wrapper.find('button').at(0).simulate('click')

    const returnedCounter = wrapper.find('h3').text()
    expect(returnedCounter).toBe(String(+initialCounter - 1))
  })

  test('reset counter', () => {
    const wrapper = shallow( <Counter /> )
    wrapper.find('button').at(0).simulate('click')
    
    const decrementedCounter = wrapper.find('h3').text()
    
    wrapper.find('button').at(2).simulate('click')
    const resetedCounter = wrapper.find('h3').text()

    expect(resetedCounter).toBe(String(+decrementedCounter + 1))
  })
})