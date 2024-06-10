


<template>
    <div class="navbar bg-base-100 fixed z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>HOME</a></li>
        <li>
          <a>COURSES</a>
          <ul class="p-2">
            <li><a>JAVA</a></li>
            <li><a>PYTHON</a></li>
            <li><a>JavaScript</a></li>
          </ul>
        </li>
        <li><RouterLink to="/about">ABOUT US</RouterLink></li>
        
      </ul>
    </div>
    <a class=" md:text-3xl text-lg font-bold font-serif text-blue-600">LEARNING</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-3 text-lg font-serif space-x-4 text-blue-600 hover:bg-white">
      <li><a>HOME</a></li>
      <li>
        <details>
          <summary>COURSES</summary>
          <ul class="p-2">
            <li><a>Java</a></li>
            <li><a>Python</a></li>
            <li><a>Javascript</a></li>
          </ul>
        </details>
      </li>
      <li><a>ABOUT US</a></li>
     
    </ul>
  </div>
  <div class="navbar-end ">
    <a class="btn md:text-lg  text-sm bg-blue-600 text-white">Contact</a>
  </div>
  <div>
  </div>
</div>


    </template>


  



    