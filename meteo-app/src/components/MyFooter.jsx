const MyFooter = () => (
  <footer className="d-flex align-items-center fixed-bottom py-2 bg-body-tertiary">
    <span className="text-black m-auto p-2">
      &copy; {new Date().getFullYear()}
      <strong> Fake Meteo</strong>
    </span>
  </footer>
)

export default MyFooter
