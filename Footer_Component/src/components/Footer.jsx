import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <ul>
          <li>Fitness Dashboard</li>
          <li>Services</li>
        </ul>
        <ul>
          <li>Watch Videos</li>
          <li>Discord</li>
        </ul>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      <p>© 2024 Fitness Dashboard. All Rights Reserved.</p>

      <div className="social">
        <a href="#">👾</a>
        <a href="#">💀</a>
        <a href="#">🤖</a>
      </div>
    </footer>
  )
}

export default Footer
