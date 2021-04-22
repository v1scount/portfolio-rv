import React, { useState }  from "react"
import axios from "axios";
import * as contactStyles from './contact.module.scss';
import Head from '../../components/head';
import { Slide } from "react-awesome-reveal";


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
      <div className={contactStyles.contact}>
        <Head />
          <div className={contactStyles.contactHead} >
            <Slide 
              triggerOnce
              duration='1500'
            >
              <h1>CONTACTO</h1>
            </Slide>
              <p>¡Si lo que viste te intereso, no dudes en contactarme!</p>
          </div>
          <div>
              <form onSubmit={handleOnSubmit} className={contactStyles.formDiv} >
                  <div className={contactStyles.emailDiv}>
                    <label for='name'>Nombre</label>
                    <input type='name' name='name' placeholder='Nombre' required  className={contactStyles.inn} />
                    <label for='name'>Email</label>
                    <input type='email' name='email' placeholder='Email' required className={contactStyles.inn} />
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
      </div>
    )
}

export default ContactPage;