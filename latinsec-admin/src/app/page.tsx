"use client"

import { Form } from "@/components/Form";

export default function LoginPage() {
  return (
    <>
      <Form
        title='Inicia Sesión'
        onSubmit={()=>{}}
      >
        <div className='my-[10px] flex flex-col gap-4'>
          <Form.Input
            label='Correo'
            name='email'
            placeholder='Ingresa tu correo...'
          />
          <Form.Input
            placeholder='Ingresa tu contraseña...'
            label='Contraseña'
            name='password'
            type='password'
          />
        </div>
        <Form.SubmitButton buttonText='Iniciar Sesión' /*isLoading={isLoading}*/ />
        <Form.Footer
          description='Te olvidate tu contraseña?'
          link='/forget-password'
          textLink='Recuperar contraseña'
        /> 
      </Form>
    </>
  )
}
