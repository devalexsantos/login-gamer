import Image from 'next/image'
import Link from 'next/link'
import IconShoppingCart from './icons/IconShoppingCart'
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <header className="w-full p-3 bg-[url('/assets/bg-header.png')] bg-center bg-cover">
      <div className="m-auto w-full max-w-6xl p-3 flex flex-col">
        <div className="flex justify-between">
          <div>
            <Image
              src="/assets/logo-login.png"
              width={115}
              height={52}
              alt="Logo Login Informática"
            />
          </div>
          <nav className="hidden sm:block">
            <ul className="flex gap-3 items-center">
              <Link href="#ofertas">
                <li>OFERTAS</li>
              </Link>
              <Link href="#categorias">
                <li>CATEGORIAS</li>
              </Link>
              <Link href="#videos">
                <li>VÍDEOS</li>
              </Link>
              <Link href="https://login.com.br" target="_blank">
                <li className="flex gap-1 items-center bg-[#1123B1] px-4 py-2 rounded">
                  <IconShoppingCart width={20} height={20} />
                  LOJA
                </li>
              </Link>
            </ul>
          </nav>
          <div className="sm:hidden">
            <MobileNav />
          </div>
        </div>
        <div className="flex flex-col gap-6  sm:flex-row justify-center items-center mt-20">
          <Image
            src="/assets/logo-login-gamer.png"
            width={570}
            height={517}
            alt="Logo Login Gamer"
          />
          <div className="max-w-[532px]">
            <h1 className="text-6xl font-bold sm:text-8xl">
              JOGUE QUALQUER COISA
            </h1>
            <p className="text-4xl text-[#2FD8FF] mt-4">
              BEM VINDO À LOGIN GAMER
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8 sm:mt-20">
          <Image
            src="/assets/icons/arrows.png"
            width={32}
            height={37}
            alt="Arrow Icon"
          />
        </div>
      </div>
    </header>
  )
}
