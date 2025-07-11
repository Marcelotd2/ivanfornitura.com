import React from "react";
import { Instagram, ShoppingCart, Mail } from "lucide-react";
import "./App.css";

function Button({ children, className = "", ...props }) {
  return (
    <button className={`rounded px-4 py-2 font-semibold ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded shadow ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white font-sans">
      <header className="flex flex-col md:flex-row items-center justify-between px-8 py-4 shadow-lg bg-black/50 backdrop-blur-md">
        <img
          src="/logo-teste-2.png"
          alt="Ivan Fornitura Logo"
          className="h-14 md:h-16 object-contain drop-shadow-[0_4px_6px_rgba(255,165,0,0.5)]"
        />
        <nav className="space-x-4 md:space-x-6 text-white text-sm md:text-base mt-4 md:mt-0">
          <a href="#home" className="hover:text-orange-400">Início</a>
          <a href="#produtos" className="hover:text-orange-400">Produtos</a>
          <a href="#sobre" className="hover:text-orange-400">Quem Somos</a>
          <a href="#contato" className="hover:text-orange-400">Contato</a>
          <a href="#instagram" className="hover:text-orange-400">Instagram</a>
        </nav>
      </header>

      <section id="home" className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Peças de Precisão para Mestres da Relojoaria</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-6">Explore nossa coleção de peças exclusivas, ideais para manutenção e customização de relógios de alta qualidade.</p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg">Ver Catálogo</Button>
      </section>

      <section id="produtos" className="px-8 py-16 bg-black/20">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-400">Produtos Populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-white text-black rounded-2xl shadow-xl">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Peça {item}</h3>
                <p className="text-gray-700 mb-4">Compatível com diversos modelos. Alta durabilidade.</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <ShoppingCart className="mr-2 h-4 w-4 inline" /> Adicionar ao carrinho
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="sobre" className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-400">Quem Somos</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          A Ivan Fornitura é referência em peças para relojoaria. Atendemos profissionais exigentes com uma linha completa de produtos de alta precisão.
        </p>
      </section>

      <section id="instagram" className="px-8 py-20 bg-black/10 text-center">
        <h2 className="text-3xl font-bold text-orange-400 mb-6">Siga-nos no Instagram</h2>
        <p className="text-gray-300 mb-4">Acompanhe nossas novidades, lançamentos e bastidores.</p>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white text-lg">
          <Instagram className="mr-2 h-5 w-5 inline" /> Ver Instagram
        </Button>
      </section>

      <section id="contato" className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-400">Fale Conosco</h2>
        <p className="text-gray-300 mb-6">Entre em contato para pedidos, dúvidas ou suporte técnico.</p>
        <Button className="bg-green-500 hover:bg-green-600 text-white text-lg">
          <Mail className="mr-2 h-5 w-5 inline" /> Falar no WhatsApp
        </Button>
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm bg-black/50 mt-10">
        © 2025 Ivan Fornitura • CNPJ 00.000.000/0001-00 • Política de Privacidade
      </footer>
    </div>
  );
}
