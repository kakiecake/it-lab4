import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Order } from './types';

// Validation schema using Yup
const OrderSchema = Yup.object().shape({
    cardNumber: Yup.string()
        .required('Укажите номер карты')
        .matches(/^\d{16}$/, 'Неверный номер'),
    order: Yup.string().required('Укажите название заказа'),
    total: Yup.number()
        .required('Укажите сумму')
        .positive('Сумма должна быть положительным числом'),
    client: Yup.string().required('Укажите имя клиента'),
    time: Yup.string().required('Укажите время заказа'),
    comment: Yup.string().optional(),
});

type Props = {
    order: Partial<Order> & Required<Pick<Order, 'id'>>;
    onSubmit: (values: Order) => void;
    onCancel: () => void;
}

const OrderEditForm: React.FC<Props> = ({ order, onSubmit, onCancel }) => {
    const defaultOrder: Order = {
        id: order.id,
        cardNumber: '',
        order: '',
        total: 0,
        client: '',
        time: '',
        comment: '',
    };
    const initialValues = { ...defaultOrder, ...order };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={OrderSchema}
            onSubmit={(values) => {
                onSubmit(values);
            }}
        >
            {() => (
                <Form>
                    <div className="input-box">
                        <label htmlFor="id">ID</label>
                        <Field id="id" name="id" type="text" disabled />
                        <ErrorMessage name="id" component="div" className="error" />
                    </div>

                    <div className="input-box">
                        <label htmlFor="cardNumber">Номер карты</label>
                        <Field id="cardNumber" name="cardNumber" type="text" />
                        <ErrorMessage name="cardNumber" component="div" className="error" />
                    </div>

                    <div className="input-box">
                        <label htmlFor="order">Заказ</label>
                        <Field id="order" name="order" as="textarea" />
                        <ErrorMessage name="order" component="div" className="error" />
                    </div>

                    <div className="input-box">
                        <label htmlFor="total">Сумма</label>
                        <Field id="total" name="total" type="number" />
                        <ErrorMessage name="total" component="div" className="error" />
                    </div>

                    <div className="input-box">
                        <label htmlFor="client">Клиент</label>
                        <Field id="client" name="client" type="text" />
                        <ErrorMessage name="client" component="div" className="error" />
                    </div>

                    <div className="input-box">
                        <label htmlFor="time">Время</label>
                        <Field id="time" name="time" type="text" />
                        <ErrorMessage name="time" component="div" className="error" />
                    </div>

                    <div className="input-box">
                        <label htmlFor="comment">Комментарий</label>
                        <Field id="comment" name="comment" as="textarea" />
                        <ErrorMessage name="comment" component="div" className="error" />
                    </div>

                    <button type="submit">Сохранить</button>
                    <button onClick={onCancel}>Отменить</button>
                </Form>
            )}
        </Formik>
    );
};

export default OrderEditForm;
