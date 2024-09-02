<template>
  <header class="bg-gradient-to-b from-yellow-200 to-white">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
      <!-- Text Section -->
      <div class="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
        <!-- Mobile Title -->
        <h1 class="text-21 font-bold text-custom-light-green leading-tight mt-12 md:hidden lg:hi\">
          EYEBROW NADPIS
        </h1>
        <!-- Desktop Title -->
        <h1 class="text-21 lg:mt-40 md:mt-30 mt-12 font-bold text-custom-light-green leading-tight hidden md:block">
          EYEBROW IPSUM
        </h1>
        <!-- Lorem Ipsum for large screens -->
        <h1 class="text-55 font-bold text-custom-green mt-5 md:mt-15 lg:mt-15 hidden md:block">
          Lorem ipsum
        </h1>
        <!-- Lorem Ipsum with each word on a new line for mobile -->
        <h1 class="text-55 font-bold text-custom-green mt-5 block lg:hidden">
          <span class="block">Lorem</span>
          <span class="block">ipsum</span>
        </h1>
        <!-- Mobile Section -->
        <div class="md:w-1/2 flex justify-center mt-12 md:hidden lg:hidden">
          <img src="../assets/store.png" alt="Header Image" class="w-full max-w-xs h-auto md:w-422 md:h-320 lg:mt-30 md:mt-15 md:mr-15 md:mb-15 mobile:mt-12 mobile:mb-12" />
        </div>
        <p class="text-base  text-green-800 mt-10 px-4  md:hidden lg:hidden mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
      </div>


      <!-- Desktop Section -->
      <p class="text-base  text-green-800 mt-10 px-4 md:px-0 mobile:hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
      </p>
    </div>

    <div class="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 mobile:hidden">
      <img src="../assets/store.png" alt="Header Image" class="w-full max-w-xs h-auto md:w-422 md:h-320 lg:mt-30 md:mt-15 md:mr-15 md:mb-15 mobile:mt-12 mobile:mb-12" />
    </div>

  </header>
</template>

