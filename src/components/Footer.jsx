import React from 'react'

const Footer = () => {
  return (
<footer class="bg-background rounded-base shadow-xs border border-default py-4">
    <div class="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-body sm:text-center text-primary">© <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-primary text-sm font-semibold text-body sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Home</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Projects</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

)
}

export default Footer
