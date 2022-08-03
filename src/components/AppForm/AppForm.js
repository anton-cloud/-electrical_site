import { useState } from "react";
import { Form, Button, FloatingLabel, Alert } from "react-bootstrap";
import axios from 'axios';
import MaskedFormControl from 'react-bootstrap-maskedinput'


const TOKEN = '5469133169:AAHprrhhuoYGjxl0WXhIPBJlJR2tBtezJ5c';
const CHAT_ID = '-1001598819858';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const AppForm = ({ handleShow }) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");
    const [success, setSuccess] = useState("");

    const handleSuccess = (result) => {
        setSuccess(result);
    }


    const onHandleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "comment":
                setComment(value);
                break;
            default:
                return;
        }
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();

        let message = `<b>Заявка!</b>\n`
        message += `<b>Ім'я: ${name}</b>\n`;
        message += `<b>Телефон: ${phone}!</b>\n`;
        message += `<b>Коментар: ${comment}!</b>`;

        axios.post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        }).then((res) => { setName(" "); setPhone(" "); setComment(" "); handleSuccess(true); console.log(success) }).catch((err) => { handleSuccess(false) }).finally(setTimeout(() => {

            handleSuccess("")
        }, "10000"))

    };


    return (
        <Form onSubmit={onHandleSubmit}>

            {success === true && <Alert variant="success" onClose={handleShow} dismissible>
                <Alert.Heading>Заявку надіслано!</Alert.Heading>
                <p>
                    Ми зв'яжемося з Вами найближчим часом!
                </p>
            </Alert>}

            {success === false && <Alert variant="danger" onClose={handleShow} dismissible>
                <Alert.Heading>Помилка !</Alert.Heading>
                <p>
                    Повторіть, будь ласка, спробу пізніше!
                </p>
            </Alert>}
            {success === "" &&
                <>
                    <h2 >Форма зворотнього зв'язку</h2>

                    <Form.Group className="mb-3" >
                        <Form.Label>Вашe ім'я</Form.Label>

                        <Form.Control
                            type='text'
                            name='name'
                            value={name}
                            onChange={onHandleChange}
                            // placeholder="ім'я ..."
                            autoComplete="on"
                            required
                        />
                        <Form.Text className="text-muted">
                            як можна до Вас звертатися ?
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Ваш номер телефону</Form.Label>

                        <MaskedFormControl type='tel'
                            name='phone'
                            value={phone}
                            onChange={onHandleChange}
                            // placeholder="+38 xxx xx xx"
                            autoComplete="on" mask='+380-11-111-11-11'
                            required />


                        {/* <Form.Control
                            type='tel'
                            name='phone'
                            value={phone}
                            onChange={onHandleChange}
                            placeholder="+38 xxx xx xx"
                            autoComplete="on"
                        /> */}
                        <Form.Text className="text-muted">
                            Номер за яким ми можемо зв'язатися з Вами.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Коментар</Form.Label>

                        <FloatingLabel controlId="floatingTextarea2" >
                            <Form.Control
                                name='comment'
                                value={comment}
                                onChange={onHandleChange}
                                autoComplete="on"
                                as="textarea"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>

                        <Form.Text className="text-muted">
                            Тут Ви можете задати запитання.
                        </Form.Text>


                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" >
                            Надіслати
                        </Button>
                    </div>
                </>}


        </Form >

    );
}

export default AppForm;