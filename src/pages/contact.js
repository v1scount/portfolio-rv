import React, { useState }  from "react"
import axios from "axios";
import { Link } from 'gatsby';
import Layout from '../components/layout';
import * as contactStyles from './contact.module.scss';

const ContactPage = () => {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/8a03fd12-fbc0-426a-851a-66e2c11ceb0a",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
        alert('El mensaje se ha enviado con exito');
      };

    return (
        <Layout>
            <div className={contactStyles.contactHead} >
                <h1>CONTACTO</h1>
                <p>Si lo que vio te intereso, no dudes en contactarme con este formulario</p>
            </div>
            <div>
                <form onSubmit={handleOnSubmit} className={contactStyles.formDiv} >
                    <div className={contactStyles.emailDiv}>
                        <div className={contactStyles.placeholderDiv} >
                            <label for='name'>Nombre</label>
                            <input type='name' name='name' placeholder='Nombre' required />
                        </div>
                        <div>
                            <label for='name'>Email</label>
                            <input type='email' name='email' placeholder='Email' required/>
                        </div>
                    </div>
                    <div className={contactStyles.messageDiv}>
                        <textarea placeholder='Tu mensaje:' required/>
                    </div> 
                    <button type='submit' className={contactStyles.sendBtn}>
                        ENVIAR!
                    </button>
                    <p>Puedes acceder a mis redes desde los iconos en la parte inferior izquierda.</p>
                </form>
            </div>
        </Layout>
    )
}

export default ContactPage;