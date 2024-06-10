<template>
  <div>
    <!-- Hero Section -->
    <div class="hero min-h-screen" style="background-image: url(https://plus.unsplash.com/premium_photo-1681505604092-80fa7e4d02f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHN0dWR5aW5nfGVufDB8fDB8fHww);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="md:max-w-2xl max-w-md">
          <h1 class="mb-5 text-5xl font-bold">WELCOME</h1>
          <p class="mb-5 w-full">Empower your learning journey with our diverse selection of courses. From professional growth to personal interests, our expert-curated content and flexible schedules are tailored to suit your needs. Join our vibrant community and explore now!</p>
          <button class="btn btn-primary">Explore now</button>
        </div>
      </div>
    </div>
    
    <!-- Courses Section -->
    <div class="bg-gray-200">
      <div class="text-blue-600">

          <h1 class="text-center text-4xl font-bold font-serif py-5">Courses Platform</h1>

        <p class="text-center mt-6 text-3xl font-serif text-black">Browse Our Diverse Course Catalog</p>
        <div>
          <div class="grid place-content-center min-h-[60vh]">
  <div class="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-4 p-4">
    <div class="card group hover:bg-blue-600 hover:text-white text-center max-w-[350px] text-xl bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-4">
      <img src="../assets/java.png" width="60" height="60" viewBox="0 0 128 128">
        <path fill="currentColor" fill-rule="evenodd" d="M64.094 126.224c34.275-.052 62.021-27.933 62.021-62.605c0-33.833-27.618-61.697-60.613-62.286C30.85.995 1.894 29.113 1.885 63.21c-.01 35.079 27.612 63.064 62.209 63.014M63.993 4.63c60.907-.011 59.126 26.725 59.116 60.28c-.011 31.679-26.925 58.18-59.092 58.187c-60.771.007-59.125-26.563-59.124-59.608c.002-60.193 26.766-58.848 59.1-58.859M39.157 35.896c.538 1.793-.968 2.417-2.569 2.542c-1.685.13-3.369.257-5.605.406c6.456 19.234 12.815 38.183 19.605 57.573c.464-.759.655-.973.739-1.223c3.574-10.682 7.168-21.357 10.651-60.069c.318-.977.16-2.271-.188-3.275c-1.843-5.60-4.051-10.524-5.667-15.908c-1.105-3.686-2.571-6.071-6.928-5.644c-.742.073-1.648-1.524-2.479-2.349c1.005-.6 2.003-1.704 3.017-1.719a850 850 0 0 1 26.618.008c1.018.017 2.016 1.15 3.021 1.765c-.88.804-1.639 2.01-2.668 2.601c-1.651.498-3.482.404-5.458.58l19.349 57.56c2.931-9.736 5.658-18.676 8.31-27.639c2.366-8.001.956-15.473-3.602-22.52c-1.286-2.119-2.866-4.175-3.595-6.486c-.828-2.629-1.516-5.622-1.077-8.259c.745-4.469 4.174-6.688 8.814-7.113C74.333.881 34.431 9.317 19.728 34.922c5.66-.261 11.064-.604 16.472-.678c1.022-.013 2.717.851 2.957 1.652m10.117 77.971c-.118.345-.125.729-.218 1.302c10.943 3.034 21.675 2.815 60.659-.886l-16.78-45.96c-5.37 15.611-10.52 30.575-15.661 45.544m-8.456-2.078l-25.281-69.35c-11.405 22.278-2.729 56.268 25.281 69.35m76.428-44.562c.802-10.534-2.860-25.119-5.97-27.125c-.35 3.875-.106 8.186-1.218 12.114c-2.617 9.255-5.817 18.349-8.899 27.468c-3.35 9.912-6.860 19.779-10.257 29.666c16.092-9.539 24.935-23.618 26.344-42.123" clip-rule="evenodd" />

      <h2 class="font-semibold text-3xl">JAVA</h2>
      <p class="text-base opacity-50 group-hover:opacity-75">
        Java is a very popular programming language you can use to create a variety of software applications. It's an object-oriented language that was made to be simple to read, write, and learn.
      </p>
    </div>

    <div class="card group hover:bg-blue-600 hover:text-white text-center max-w-[350px] text-xl bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-4">
      <!-- <svg viewBox="0 0 122.88 102.01">
            <g>
              <path
                d="M91.42,0v8.53h10.59v9.26H91.42v14.76l-9.26,3.73v-18.5H19.85v66.09h62.31V72.62l9.26-3.03v14.31h10.59v9.26H91.42v8.86 h-9.26v-8.86H19.85v8.86h-9.26v-8.86H0v-9.26h10.59V17.79H0V8.53h10.59V0h9.26v8.53h62.31V0H91.42L91.42,0z M85.71,46.3 c3.38,3.98,5.76,8.27,7.04,12.9l27.13-19.8c2.31-1.46,3.72-2.8,2.64-5.94c-0.65-0.99-1.42-1.6-2.31-1.84 c-0.89-0.24-1.9-0.1-3.02,0.42L85.71,46.3L85.71,46.3z M44.95,76.48c8.2-3.73,18.63,4.06,24.92-4.01c1.67-2.14,2.57-5.34,1.99-8.13 c-0.23-1.13-0.7-2.18-1.43-3.06c-0.33-0.39-0.7-0.75-1.13-1.08c-5.33-4.1-12.3-1.2-16.55,3.11C48.85,67.28,46.42,72.72,44.95,76.48 L44.95,76.48z M72.45,57.41c1.55,1.27,3.48,4.03,3.55,6.65l14.44-3.7c-1.41-5.09-3.6-9.64-7.11-13.25 C77.97,51.97,78.34,52.95,72.45,57.41L72.45,57.41z M56.85,46.06L45.16,58.8V39.44H34.15v-9.71h33.71v9.71H56.85V46.06L56.85,46.06 z"
              ></path>
            </g>
          </svg> -->
      <img src="../assets/python.png" width="60" height="60" viewBox="0 0 128 128">
        <path fill="currentColor" d="M6.2 52.7c6.7 3.2 43.7 18.1 49.5 20.9s10 2.8 17.4-1c7.4-3.9 42.2-18.1 48.9-21.6c3.4-1.8 4.9-3.2 4.9-4.4V34.1c0-1.3-1.7-2.4-5-3.6c-6.5-2.4-41.1-16.1-47.7-18.6c-6.6-2.4-9.3-2.3-17.1.5S12.6 29.6 6 60.2c-3.2 1.3-5 2.4-5 3.7H.8v12.7c.2 1.2 2.1 2.5 5.4 4.1m60.4 1.8l-20.3-8.4l29.1-4.5zm44.1-20l-17.2 6.8l-1.9.7l-17.2-6.8l19.1-7.5zM60.1 22l-2.8-5.2l8.8 3.4l8.3-2.7l-2.2 5.4l8.4 3.2l-10.9 1.1l-2.4 5.9l-3.9-6.5l-12.6-1.1zm-21.7 7.3c8.6 0 15.6 2.7 15.6 6s-7 6-15.6 6s-15.6-2.7-15.6-6s7-6 15.6-6M122 59.8c-6.7 3.5-41.4 17.8-48.8 21.6c-7.4 3.9-11.5 3.8-17.3 1s-43-17.7-49.6-20.9C2.9 59.9 1 58.6 1 57.3V70c0 1.3 1.9 2.6 5.2 4.2c6.7 3.2 43.7 18.1 49.5 20.9s10 2.8 17.4-1c7.4-3.9 42.2-18.1 48.9-21.6c3.4-1.8 4.9-3.2 4.9-4.4V55.6c0 1.1-1.6 2.5-4.9 4.2m0 20.7c-6.7 3.5-41.4 17.8-48.8 21.6c-7.4 3.9-11.5 3.8-17.3 1s-43-17.7-49.6-20.9C2.9 80.7 1 79.3 1 78v12.7c0 1.3 1.9 2.6 5.2 4.2c6.7 3.2 43.7 18.1 49.5 20.9s10 2.8 17.4-1c7.4-3.9 42.2-18.1 48.9-21.6c3.4-1.8 4.9-3.2 4.9-4.4V76.3c0 1.2-1.6 2.5-4.9 4.2" />
      

      <h2 class="font-semibold text-3xl">PYTHON</h2>
      <p class="text-base opacity-50 group-hover:opacity-75">
        Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures,
      </p>
    </div>

    <div class="card group hover:bg-blue-600 hover:text-white text-center max-w-[350px] text-xl bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-4">
      <img src="../assets/javascript.png" width="60" height="60" viewBox="0 0 128 128">
        <path fill="currentColor" d="M64.053 1.559A63.73 63.73 0 0 0 .501 65.583a63.98 63.98 0 0 0 43.455 60.737c3.156.636 4.314-1.378 4.314-3.074c0-1.484-.105-6.571-.105-11.871c-17.677 3.816-21.359-7.633-21.359-7.633c-2.84-7.42-7.049-9.608-7.049-9.608c-5.787-3.922.42-3.922.42-3.922c6.419.424 9.785 6.572 9.785 6.572c5.682 9.753 14.837 6.997 18.52 5.301a13.64 13.64 0 0 1 3.998-8.586c-14.099-1.484-28.936-6.995-28.936-31.588a25.07 25.07 0 0 1 6.524-17.172c-.660-1.59-2.84-8.163.633-16.96c0 0 5.364-1.697 17.465 6.572a61 61 0 0 1 15.889-2.12a61 61 0 0 1 15.889 2.12c12.1-8.269 17.467-6.573 17.467-6.573c3.472 8.798 1.262 15.371.63 16.961a24.1 24.1 0 0 1 5.360 9.213a9.47 9.47 0 0 1 5.668-1.875a9.6 9.6 0 0 1 4.168.957l9.008 4.356a3.05 3.05 0 0 0 3.164-.317a3.05 3.05 0 0 0 1.166-2.959A63.57 63.57 0 0 0 64.055 1.558zm45.012 56.09a4.25 4.25 0 0 0-2.893 1.119c-.604.559-27.27 25.01-27.27 25.01l-11.81-9.012a2.85 2.85 0 0 0-3.657.162l-3.789 3.465a2.9 2.9 0 0 0-.937 2.13a2.9 2.9 0 0 0 .933 2.13l10.242 9.392l-10.242 9.39a2.89 2.89 0 0 0-.69 3.294c.162.367.4.696.694.967l3.79 3.465a2.85 2.85 0 0 0 3.655.162l11.811-9.01s26.665 24.45 27.27 25.01a4.24 4.24 0 0 0 4.729.691l14.164-6.85a4.33 4.33 0 0 0 2.436-3.896V68.821a4.33 4.33 0 0 0-2.436-3.894l-14.164-6.85a4.24 4.24 0 0 0-1.836-.428m1.248 18.7v31.392L89.741 92.046l20.572-15.695z" />
    

      <h2 class="font-semibold text-3xl">JAVASCRIPT</h2>
      <p class="text-base opacity-50 group-hover:opacity-75">
        JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
      </p>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div>
      <div class="hero min-h-screen bg-base-200 ">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://media.istockphoto.com/id/1487231759/photo/diverse-colleagues-working-together-on-digital-tablet.webp?b=1&s=170667a&w=0&k=20&c=z0qvr-xh4QGYrpPBPYa-qLfvHhlSYxJbyGqJUpBpaFw=" class="max-w-lg rounded-xl h-96 shadow-4xl" />
    <div>
      <h1 class="text-5xl font-serif md:ml-16 text-blue-600">Flexible Learning Options</h1>
      <p class="py-6 text-lg md:ml-16">Find courses that fit your schedule, whether you prefer self-paced learning or real-time interaction with instructors and peers.</p>
      
    </div>
  </div>
</div>
    </div>
  </div>
    <div class="bg-gray-200">
      <h1 class="md:text-4xl md:py-9 text-xl font-serif text-center">Voices of Satisfaction</h1>
      <p class="md:text-center md:text-4xl  text-sm  py-3 font-serif">Discover How Businesses Thrive with Building Success Solutions</p>

      <div class="box-area">
        <div class="single-box">
            <div class="img-area"></div>
            <div class="img-text">
                <span class="header-text"><strong>Danial clark</strong></span>
                <div class="line"></div>
                <p>Experienced Java developer skilled in Spring, Hibernate, and REST APIs.</p>
                <h3 class="font-bold">Java developer</h3>
                
            </div>
        </div>
        <div class="single-box">
            <div class="img-area"></div>
            <div class="img-text">
                <span class="header-text"><strong>Emily davis</strong></span>
                <div class="line"></div>
                <p>Proficient Python developer skilled in Django, Flask, and data analysis.

</p>
                <h3 class="font-bold"> Python Devloper</h3>
                
            </div>
        </div>
        <div class="single-box">
            <div class="img-area"></div>
            <div class="img-text">
                <span class="header-text"><strong>Jack jones</strong></span>
                <div class="line"></div>
                <p>Skilled JavaScript developer with expertise in React, Node.js, and ES6+.</p>
                <h3 class="font-bold">javascript developer</h3>
                
            </div>
        </div>
</div>
    </div>
    
    <div>  
    </div>
    <footer class="footer items-center p-4 bg-neutral text-neutral-content">
  <aside class="items-center grid-flow-col">
    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current "><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current "><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current "><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </nav>
</footer>
    
</template>


<style scoped>
:root {
  --cubic-bezier: cubic-bezier(0.52, 0.01, 0.16, 1);
}

.card {
  svg {
    width: 90px;
    height: 30px;
   

  }

  path {
    stroke-dasharray: 0, 100;
  }
}

.card:hover path {
  fill: none;
  stroke: white;
  transition: stroke-dasharray 1s var(--cubic-bezier);
  stroke-dasharray: 100, 0;
}



.sec-icon {
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0 auto;
}

.sec-icon::before {
  content: "";
  position: absolute;
  height: 1px;
  left: -70px;
  margin-top: -5.5px;
  top: 60%;
  background: #f5f5f5;
  width: 50px;
}

.sec-icon::after {
  content: "";
  position: absolute;
  height: 1px;
  right: -70px;
  margin-top: -5.5px;
  top: 60%;
  background: #333;
  width: 50px;
}
.box-area{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    
}
.single-box{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 350px;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    margin: 10px;
    padding: 20px;
    transition: .3s;
    box-shadow: 1px 0 5px 0 rgba(0,0,0,0.6) ;
}
.img-area{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height:140px;
    border: 2px solid #ddd;
    border-radius: 50%;
    margin-bottom: 10px;
    padding: 10px;
    background-size: cover;
    background-position: center center;
}
.single-box:nth-child(1) .img-area{
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbQi9IYBF5Wg5cOUPA8gTK46WbhDuYGHOEw&usqp=CAU);
}
.single-box:nth-child(2) .img-area{
    background-image: url(https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600);
}
.single-box:nth-child(3) .img-area{
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacZURroJpD8kJjtFrnOeaBhR78D1t4vWdrA&usqp=CAU);
}
.header-text{
    font-size: 24px;
    font-weight: 500px;
    line-height: 48px;
}
.img-text h3{
    margin: 10px 0;
}
.img-text p{
    font-size: 15px;
    font-weight: 400px;
    line-height: 30px;
}
.single-box:hover{
    background-color: #4D4DFF;
    color: #fff;
}
.single-box:hover .line{
    background-color: #fff;
}


</style>
