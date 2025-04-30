
import { useState, useRef, useEffect } from "react";
import { useSelector } from 'react-redux';
import translations from '../lang';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactMe = () => {
    const language = useSelector(state => state.language);
    const t = translations[language];
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const form = useRef(); // referencia al formulario

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_73i1mbi',
            'template_s0n1ral',
            form.current,
            'wF_8kxMUyOXqALEWw'
        )
        .then(result => {
            toast.success("¡Correo enviado con éxito!");     
            setFormData({ name: "", email: "", message: "" });
        })
        .catch(error => {
            toast.error("Error al enviar el correo.");       
            console.error(error);
        });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact_container">
                <h2 className="contact_title">{t.contact.title}</h2>
                <p className="contact_description">
                    {t.contact.description}
                </p>
                <form ref={form} className="contact_form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder={t.contact.placeholder_name}
                        onChange={handleChange}
                        value={formData.name}
                        className="contact_input"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={t.contact.placeholder_email}
                        onChange={handleChange}
                        value={formData.email}
                        className="contact_input"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder={t.contact.placeholder_message}
                        onChange={handleChange}
                        value={formData.message}
                        className="contact_textarea"
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit" className="contact_button">
                        {t.contact.button_send}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
