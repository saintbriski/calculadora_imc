import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';

export default ({ imc }) => {
    const classification = [
        {
            min: 0,
            max: 18.5,
            imc: 'menor que 18,5',
            description: 'magreza'
        },

        {
            min: 18.5,
            max: 24.99,
            imc: 'entre 18,5 e 24,9',
            description: 'normal'
        },

        {
            min: 25,
            max: 29.99,
            imc: 'entre 25,0 e 29,9',
            description: 'sobrepeso'
        },

        {
            min: 30,
            max: 39.99,
            imc: 'entre 30,0 e 39,9',
            description: 'obesidade'
        },

        {
            min: 40,
            max: 100,
            imc: 'maior que 40,0',
            description: 'obesidade grave'
        }
    ]

    useEffect(() => {
        for (let idx = 0; idx < classification.length; idx++) {
            const item = classification[idx];

            if (imc > item.min && imc < item.max) {
                const element = document.querySelectorAll(`.line_${idx}`)
                element.forEach((line) => {
                    line.style.backgroundColor = '#575';
                    line.style.color = 'white';
                })
            } else {
                const element = document.querySelectorAll(`.line_${idx}`)
                element.forEach((line) => {
                    line.style.backgroundColor = '';
                    line.style.color = '';
                })
            }
        }
    }, [imc]);

    return (
        <Row className='justify-content-center mt-5'>
            <Col xs={5}>
                <Table bordered>
                    <thead>
                        <tr>
                            <th colSpan={2} className='text-center' style={{ backgroundColor: '#55C', color: 'white' }}>
                                Veja sua classificação<br />
                                Seu IMC é de <i><b>{imc}</b></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{backgroundColor: '#555', color: 'white'}}>IMC</td>
                            <td style={{backgroundColor: '#555', color: 'white'}}>Classificação</td>
                        </tr>
                        {classification.map((item, idx) => (
                            <tr key={idx} className='text-uppercase'>
                                <td className={`line_${idx}`}>{item.imc}</td>
                                <td className={`line_${idx}`}>{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}