import React from 'react'

function Header() {
  return (
    <header class="fixed top-0 z-20 w-full">
            <nav class="2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0">
                <div class="flex items-center justify-between">
                    <a href="index.html" class="text-2xl font-light tracking-widest text-white">HARDIK</a>
                    <a href="#contact" class="relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                        <span class="relative">Get in touch</span>
                    </a>
                </div>
            </nav>
        </header>
  )
}

export default Header