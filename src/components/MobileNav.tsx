import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import IconShoppingCart from './icons/IconShoppingCart'
import IconMenu from './icons/IconMenu'

export default function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        <IconMenu width={22} height={22} /> Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-4">
        <DropdownMenuItem>
          <Link href="#ofertas">OFERTAS</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="#categorias">CATEGORIAS</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="#videos">VÍDEOS</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="https://login.com.br"
            target="_blank"
            className="flex items-center gap-2"
          >
            <IconShoppingCart width={20} height={20} />
            LOJA
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
