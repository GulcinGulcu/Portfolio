import './styles.css'

export default function PhoneFrame({ children, className}) {
  return (
    <div className={`phone-frame ${className}`} >
      <div className="notch"></div>
      <div className="screen">
        {children}
      </div>
    </div>
  )
}