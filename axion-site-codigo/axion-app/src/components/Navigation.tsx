import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Axion Automação
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-300">Início</Link>
          <Link href="/sobre" className="hover:text-blue-300">Sobre</Link>
          <Link href="/action-tools" className="hover:text-blue-300">Action Tools</Link>
          <Link href="/recursos" className="hover:text-blue-300">Recursos</Link>
          <Link href="/comunidade" className="hover:text-blue-300">Comunidade</Link>
          <Link href="/contato" className="hover:text-blue-300">Contato</Link>
        </div>
        {/* Botão Hamburger para Mobile (funcionalidade a ser adicionada) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

