/* Tengo que importar ESTE componente en Formulario.jsx */

const Error = ({ children }) => {
  return (
    <div className='bg-red-800 p-3 text-white text-center uppercase font-bold mb-3 rounded-lg'>
        {children}
    </div>
  )
}

export default Error