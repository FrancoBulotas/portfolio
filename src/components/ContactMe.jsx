
import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactMe = () => {
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
                <h2 className="contact_title">Contacto</h2>
                <p className="contact_description">
                    ¿Tenes alguna pregunta o queres que trabajemos juntos? Enviame un correo electronico y me pongo en contacto lo antes posible.
                </p>
                <form ref={form} className="contact_form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        onChange={handleChange}
                        value={formData.name}
                        className="contact_input"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        onChange={handleChange}
                        value={formData.email}
                        className="contact_input"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Mensaje"
                        onChange={handleChange}
                        value={formData.message}
                        className="contact_textarea"
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit" className="contact_button">
                        ENVIAR
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
