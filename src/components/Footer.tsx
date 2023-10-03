import Image from 'next/image'
import Link from 'next/link'
import IconFacebook from './icons/IconFacebook'
import IconInstagram from './icons/IconInstagram'
import IconYoutubeFooter from './icons/IconYouTubeFooter'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 items-center py-8 px-3 bg-[#1123B1]">
      <Image
        src="/assets/logo-footer.png"
        width={177}
        height={80}
        alt="Logo Login"
      />
      <div className="flex gap-3 items-center text-zinc-200">
        <Link href="https://www.instagram.com/canallogin/" target="_blank">
          <IconInstagram width={28} height={28} />
        </Link>
        <Link
          href="https://www.youtube.com/@canallogin/playlists"
          target="_blank"
        >
          <IconYoutubeFooter width={28} height={28} />
        </Link>
        <Link
          href="https://www.facebook.com/canallog/?locale=pt_BR"
          target="_blank"
        >
          <IconFacebook width={22} height={22} />
        </Link>
      </div>
      <p className="text-sm text-center flex flex-col md:flex-row items-center gap-1 text-zinc-200">
        © Login Informática - 2023 - Todos os direitos reservados. Produzido
        por:
        <Link href="https://devalex.com.br" target="_blank">
          <Image
            src="/assets/logo-devalex.png"
            width={28}
            height={29}
            alt="Logo DevAlex"
          />
        </Link>
      </p>
    </footer>
  )
}
