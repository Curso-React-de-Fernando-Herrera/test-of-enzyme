import PropTypes from 'prop-types'
const { useState } = require("react")

const Counter = ({ value= 0 }) => {
  const [counter, setCounter] = useState(value)

  const handleLessCounter = () => setCounter(counter - 1)
  const handlePlusCounter = () => setCounter(counter + 1)
  const handleResetCounter = () => setCounter(value)

  return <section>
    <h1>Conter</h1>
    <h3>{counter}</h3>
    <article>
      <div>
        <button onClick={handleLessCounter}>-</button>
        <button onClick={handlePlusCounter}>+</button>
      </div>
      <button onClick={handleResetCounter}>Reset</button>
    </article>
  </section>
}

Counter.propTypes = {
  value: PropTypes.number
}

export default Counter
