import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const AppForm = () => {
  const [url, setUrl] = useState<string>()
  const [maxRange, setMaxRange] = useState<number>(5)

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    if (!url) return

    for (const x of [...Array(maxRange).keys()]) {
      console.log(`Enviando chamada ${x}`)
      axios.get(url)
    }
  }

  return (
    <section>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Label>URL do asset</Form.Label>
          <Form.Control
            type='url'
            required
            onChange={(e: any) => {
              setUrl(e.target.value)
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Máximo de tentativas</Form.Label>
          <Form.Control
            defaultValue={maxRange}
            type='number'
            required
            onChange={(e: any) => {
              setMaxRange(+e.target.value)
            }}
          />
        </Form.Group>

        <Button
          variant='primary'
          type='submit'
        >
          Simular
        </Button>
      </Form>
    </section>
  )
}

export default AppForm
