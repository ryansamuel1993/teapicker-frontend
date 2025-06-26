import { Footer, FooterBrand, FooterLink, FooterCopyright } from 'flowbite-react'
import Link from 'next/link'

export const AppFooter = () => (
  <Footer container className="bg-gray-900 text-white py-6">
    <div className="w-full flex md:flex-col sm:flex-row items-center justify-between">
      {/* Brand / Logo */}
      <FooterBrand
        href="/"
        name="YourLoanSite"
        src="/logo.svg"
        className="!text-white text-xl font-semibold"
      />

      {/* Link group */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
        <Link href="/legal/terms" passHref>
          <FooterLink href="/legal/terms" className="hover:underline">Terms</FooterLink>
        </Link>
        <Link href="/legal/privacy" passHref>
          <FooterLink href="/legal/privacy" className="hover:underline">Privacy</FooterLink>
        </Link>
        <Link href="/legal/licensing" passHref>
          <FooterLink href="/legal/licensing" className="hover:underline">Licensing</FooterLink>
        </Link>
      </div>
    </div>

    {/* Copyright */}
    <FooterCopyright
      by="YourLoanSite™"
      href="/"
      year={new Date().getFullYear()}
      className="text-gray-400"
    />
  </Footer>
)