import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default ({inputs, onInputChange}) => {
    const handle = (event) => {
        const {name, value } = event.target;
        {
            (name ==='height')
            ? onInputChange(name, Number(value.slice(0, 3)).toFixed(0))
            :onInputChange(name, value)
        };
    }

    const formatWeight = (value) => Number(value).toFixed(2);

    return (
        <Form className='mx-4'>
            <Row className='justify-content-center'>
                <Col xs={4} lg={3} className='text-center'>
                    <Form.Label className='fs-4' htmlFor='formHeight'>Altura</Form.Label>
                    <InputGroup>
                        <Form.Control
                        className='text-center fs-5 font-monospace'
                        type='number'
                        value={inputs.height}
                        onChange={handle}
                        min={100} max={230}
                        name='height' id='formHeight'
                        />
                        <InputGroup.Text>cm</InputGroup.Text>
                    </InputGroup>
                </Col>

                <Col xs={4} lg={3} className='text-center'>
                    <Form.Label className='fs-4' htmlFor='formWeigth'>Peso</Form.Label>
                    <InputGroup>
                    <Form.Control
                        className='text-center fs-5 font-monospace'
                        type='number'
                        value={formatWeight(inputs.weight)}
                        onChange={handle}
                        step={0.5}
                        name='weight' id='formatWeight'
                        />
                        <InputGroup.Text>Kg</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
        </Form>
    );
}


