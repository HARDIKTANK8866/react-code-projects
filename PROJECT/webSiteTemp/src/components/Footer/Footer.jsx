import React from 'react'

function Footer() {
  return (
    <footer class="relative bg-black pt-32 backdrop-opacity-0">
    <div class="mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0">
        <div>
            <div class="flex flex-wrap items-center gap-6">
                <h2 class="text-3xl text-white xl:text-6xl">Instagram</h2>
                <a href="#" target="_blank" class="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">@tailus</a>
            </div>
            <div class="mt-12 grid grid-cols-3 md:mt-16 lg:mt-24">
                <a href="#" target="_blank" class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                    <span class="sr-only">Instagram feed</span>
                    <img class="transition duration-500" src="images/gild/gild-cover.webp" alt="insta feed cover" width="2000" height="1333" />
                </a>
                <a href="#" target="_blank" class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                    <span class="sr-only">Instagram feed</span>
                    <img class="transition duration-500" src="images/gild/gild-cover2.webp" alt="insta feed cover" width="2000" height="1334" />
                </a>
                <a href="#" target="_blank" class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                    <span class="sr-only">Instagram feed</span>
                    <img class="transition duration-500" src="images/gild/gild-cover3.webp" alt="insta feed cover" width="1800" height="1200" />
                </a>
            </div>
        </div>
        <div class="mt-12 md:mt-16 lg:mt-24">
            <div class="space-y-8 md:space-y-12">
                <a href="index.html" class="text-2xl font-light tracking-widest text-white">
                    <img class="h-8 w-auto brightness-200" src="favicon.svg" alt="logo mark" width="100" height="100" />
                </a>
                <nav>
                    <ul class="flex flex-wrap gap-6 text-sm uppercase tracking-wider text-white">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#work">Work</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a class="block w-max" href="#about">About us</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div class="flex flex-wrap justify-between gap-3">
                    <span class="text-sm text-white/50">&copy; Radiant 2021 - Present</span>
                    <span class="text-sm text-white/50">Designed by <a href="https://tailus.io/" class="text-white">Tailus</a> in Lubumbashi </span>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer