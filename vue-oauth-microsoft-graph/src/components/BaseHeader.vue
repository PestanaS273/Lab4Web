<template>
    <nav class="navbar sticky-top navbar-expand-lg ">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">HOME</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                <ul class="navbar-nav d-flex w-50">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Collections</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Equipment</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Latest news</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">About us</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav d-flex align-items-center flex-row-reverse w-50">
                    <li class="nav-item"><SigninButton>Click Me</SigninButton></li>
                    <li class="nav-item"><router-link to="/user" class="nav-link">Login</router-link></li>
                    <form class="nav-item d-flex w-50" role="search">
                        <input class="form-control me-2" type="search" placeholder="Write here.." aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import SigninButton from '../components/SigninButton.vue'
export default {
  name: 'BaseHeader',
  components: {
    SigninButton
  },
}
</script>

<style scoped>
nav{
    height: 100px;
    background-color: #d9d9d9;
    padding: 0% 2%;
    border-bottom: solid 1px #353535;
    margin-top: 0px;
}

.navbar .nav-item .dropdown-menu { display: none; }
.navbar-nav .nav-item:hover  .dropdown-menu { display: flex; flex-direction: column; }
.navbar-nav .nav-item {padding: 6% 2%;}
.navbar .nav-item .dropdown-menu {
    background-color: #d9d9d9;
    border-bottom: solid 1px #353535;
}
.search{height: fit-content;}


.nav-link:hover {
    background-color: lightgreen !important; 
}

.nav-link.active:hover {
    background-color: lightgreen !important; 
}

.nav-link.disabled {
    cursor: not-allowed;
}

.nav-link.disabled:hover {
    cursor: not-allowed;
}
</style>
