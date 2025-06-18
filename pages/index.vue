<template>
  <div class="flex flex-row flex-wrap justify-around items-center w-2/3 lg:w-full mx-auto">
    <div class="flex flex-col items-center lg:w-1/3">
      <img src="https://placeholderjs.com/200x200" alt="Placeholder image" class="rounded-full md:h-[300px] h-[200px] md:w-[300px] w-[200px]"/>
    </div>
    <div class="lg:w-2/3 text-center lg:text-left">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-6">Heya 👋 I am Elizer Dolorosa</h1>
      <p class="pr-4 mt-4 text-base md:text-xl">
        A <span class="text-rv-pink">Tinkerer</span> at heart, and a <span class="text-rv-cyan">Software Engineer</span> by trade 🔨
      </p>
    </div>
  </div>

  <div class="text-center">
    <button class="mt-6 px-6 py-2 bg-rv-cyan text-rv-bg font-semibold rounded hover:shadow-md hover:shadow-rv-yellow hover:transition-all">View My Work</button>
  </div>

  <div class="mt-10 px-4 max-w-2/3 mx-auto">

    <div class="mt-10">
      <Header title="About Me" />
      <p class="mt-4 text-base leading-relaxed">
      I am passionate about technology, especially free and open-source software. My curiosity and drive to learn have led me to explore various tools and platforms. As a recent graduate, I am eager to apply my knowledge to design and develop impactful solutions.
      </p>
    </div>

    <!-- Skills Section -->
    <div class="mt-10">
      <Header title="Skills" />
      <p>Here are some of the things I've used/encountered.</p>
      <div class="mt-4 gap-y-4 flex flex-col">
        <SkillSection/>
      </div>
    </div>

    <!-- Projects Section -->
    <div class="mt-10">
      <Header title="Featured Projects" />
      <!-- <p class="mt-4 text-base leading-relaxed"> -->
      <!--   Most of the projects I worked in can be seen in my <a class="text-rv-green hover:border-b hover:border-rv-cyan hover:pb-1 hover:transition-all" href="https://github.com/SuchWowEl" target="_blank" rel="noopener noreferrer">GitHub</a>. -->
      <!-- </p> -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div class="bg-gray-800 p-4 rounded shadow">
          <h3 class="text-xl font-semibold">Project Name 1</h3>
          <p class="mt-2 text-base">A brief description of the project and its impact.</p>
        </div>
        <div class="bg-gray-800 p-4 rounded shadow">
          <h3 class="text-xl font-semibold">Project Name 2</h3>
          <p class="mt-2 text-base">A brief description of the project and its impact.</p>
        </div>
      </div>
    </div>

    <div class="mt-10 px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-10">
      <div class="text-center lg:text-left">
        <Header title="Hobbies & Interests" />
        <ul class="list-disc list-inside text-base md:text-lg">
          <li>Keeping up with FOSS news</li>
          <!-- TODO: add link to Neovim repo -->
          <li>Configuring my Neovim setup</li>
          <li>Playing musical instruments (guitar, piano)</li>
        </ul>
      </div>
      <!-- Contact Section -->
      <div class="text-center lg:text-right grow">
        <h2 class="text-2xl font-semibold text-rv-pink">Contact Me</h2>
        <p class="mt-4">Feel free to reach out for collaborations or just a friendly chat!</p>
        <button class="mt-6 px-6 py-2 bg-rv-green text-rv-bg font-semibold rounded shadow hover:shadow-md hover:shadow-rv-yellow hover:transition-all">Hire Me</button>
      </div>

    </div>

  </div>
</template>
