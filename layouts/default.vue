<template>
  <div class="bg-rv-bgdark pt-6 min-h-screen font-hack flex flex-col">
    <nav class="text-white py-4 flex flex-row">
      <div class="ml-10">Elizer Dolorosa</div>
      <ul class="mr-10 flex justify-end space-x-4 flex-auto">
        <li>
          <a href="/" class="relative hover:border-b hover:border-rv-yellow hover:pb-1 hover:transition-all">Home</a>
        </li>
        <li>
          <a href="/about" class="relative hover:border-b hover:border-rv-yellow hover:pb-1 hover:transition-all">About</a>
        </li>
        <li>
          <a href="/projects" class="relative hover:border-b hover:border-rv-yellow hover:pb-1 hover:transition-all">Projects</a>
        </li>
        <li>
          <a href="/contact" class="relative hover:border-b hover:border-rv-yellow hover:pb-1 hover:transition-all">Contact</a>
        </li>
      </ul>
    </nav>
    <main class="min-h-full text-white flex-grow my-10">
      <slot />
    </main>
    <footer class="bg-gray-800 rounded-t-[30px] text-center text-white py-4">
          <p>&copy; 2025 My Portfolio. All rights reserved.</p>
    </footer>
  </div>
</template>
