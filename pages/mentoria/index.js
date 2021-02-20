const Mentoria = () => {
  const variavel = `ola`
  return (
    <>
      <h1>Olá Mentoria!</h1>
      <p>Turu bom?</p>
      {variavel}
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </>
  )
}

export default Mentoria;