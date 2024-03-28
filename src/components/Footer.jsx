import './Footer.css'

export default function Footer() {

    const year = new Date().getFullYear()

    return(
        <div className='footer_container'>
            <footer className='footer_content'>
                Copyright TheoDev {year} - Tous droits réservés
            </footer>
        </div>
    )
}