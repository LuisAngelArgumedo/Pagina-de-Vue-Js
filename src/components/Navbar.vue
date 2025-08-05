<template>
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <router-link to="/" class="nav-link px-2 text-white">Home</router-link>
          <router-link to="/Crear" class="nav-link px-2 text-white">Crear</router-link>
          <router-link to="/Contacto" class="nav-link px-2 text-white">Contacto</router-link>
        </ul>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            class="form-control form-control-dark text-bg-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <div class="text-end">
          <router-link to="/login" class="btn btn-outline-light me-2"> Login </router-link>
          <button @click="cerrarSesion" class="btn btn-outline-light me-2">Cerrar sesión</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  methods: {
    cerrarSesion() {
      try {
        // Elimina la sesión
        localStorage.removeItem('isAuthenticated')
        
        // Alerta de éxito
        Swal.fire({
          icon: 'success',
          title: 'Sesión cerrada',
          text: 'Has cerrado sesión correctamente',
          timer: 2000,
          showConfirmButton: false,
        })
        
        // Redirigir permitiendo navegación normal
        setTimeout(() => {
          this.$router.push('/login') // 👈 permite navegar entre login/register
        }, 2000)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo cerrar la sesión',
        })
      }
    },
  },
}
</script>
