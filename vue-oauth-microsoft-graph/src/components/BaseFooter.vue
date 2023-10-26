<template>
    <div>
        <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
    </div>
</template>

<script>
export default{
    name: 'BaseFooter'
}
</script>

<style scoped>
.nav-link:hover {
    background-color: lightcoral !important; 
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