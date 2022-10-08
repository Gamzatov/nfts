import React from 'react';

const Form = () => {
    return (
        <div className='container form_wrapper'>
            <p className="title">
                Напишіть нам
            </p>
            <form action="" className="form">
                <div className="form_holder">
                    <div className="inputs">
                        <div className="input_wrapper">
                            <label htmlFor="name">Ім’я</label>
                            <input type="text" id='name' placeholder='Іван Іванович'/>
                        </div>
                        <div className="input_wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' placeholder='yourname@mail.com'/>
                        </div>
                    </div>
                    <div className="text_area">
                        <label htmlFor="message">Повідомлення</label>
                        <textarea name="message" id="message" placeholder='Я хотів би...'></textarea>
                    </div>
                </div>
                <div className=" form_btn">
                    <button className="add_btn">ВІДПРАВИТИ</button>
                </div>

            </form>

        </div>
    );
};

export default Form;
