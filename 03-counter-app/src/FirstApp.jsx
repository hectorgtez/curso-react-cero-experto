const getMessage = () => {
  return 'Hola, Mundo!';
}

export const FirstApp = () => {
  return (
    <>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <h1>{ getMessage() }</h1>
      <p>Soy un subtítulo</p>
    </>
  )
}