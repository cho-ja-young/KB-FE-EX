<!-- Navbar 컴포넌트 -->
<template>
  <!-- <h1>Navbar</h1> -->
  <nav class="navbar navbar-expand bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- <a href="#" class="nav-link">Home</a> -->
            <!-- 클릭 시 주소 -> /
              <RouterView>자리에 Home 컴포넌트 렌더링 -->
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <!-- <a href="#" class="nav-link">All</a> -->
            <RouterLink to="/all" class="nav-link">All</RouterLink>
          </li>
          <!-- <li class="nav-item">Get</li>
          <li class="nav-item">Post</li> -->
        </ul>
      </div>
    </div>
  </nav>
  <NavBar> </NavBar>
</template>

<script setup></script>
