import Link from 'next/link'
import './style.scss'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="contact">
        <div className="contactContainer">
          <h1>Želite surađivati s nama?</h1>
          <Link href="/kontakt">Let&apos;s talk</Link>
          <Image
            priority
            src="/assets/contactLines.svg"
            width={300}
            height={300}
            alt="Lines"
          />

          <Image
            priority
            src="/assets/contactLines.svg"
            width={300}
            height={300}
            alt="Lines"
          />
        </div>
      </div>
  )
}

export default Contact