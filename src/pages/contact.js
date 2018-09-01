import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

const ContactPage = () => (
  <Layout>  
    <div className='contact main-content'>
      <h1>Contact</h1>
      <p>Wanna say hi? or have a question</p>
      <p>Hit me up on twitter <a href='https://twitter.com/khaled_garbaya'>@khaled_garbaya</a> or send me a message through the form bellow.</p>
      <form name='contact' className='contact__form' method='post' data-netlify>
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor='name'>
          Name
          <input id='name' name='name' type='text' />
        </label>
        <label htmlFor='email'>
          Email
          <input id='email' name='email' type='email' />
        </label>
        <label htmlFor='name'>
          Message
          <textarea id='name' name='message'/>
        </label>
        <button>Send</button>
      </form>
    </div>
  </Layout>)

export default ContactPage
