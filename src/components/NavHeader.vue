<script>
export default {
  name: 'NavHeader'

}
</script>
<template>
  <nav class="navbar navbar-expand-lg p-0">
    <div class="container-fluid">
      <img class="img-logo" src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        alt="Logo Netflix">


      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Film</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Serie TV</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Originali</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Aggiunti ai preferiti</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
img {
  height: 70px;
}

a {
  color: white;
}

.nav-link:hover {
  color: gray;
}
</style>