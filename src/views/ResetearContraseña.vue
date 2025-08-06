<template>
  <div class="container mt-5">
    <h2>Escribe tu nueva contraseña</h2>
    <form @submit.prevent="enviarNueva">
      <input
        v-model="nuevaContrasena"
        type="password"
        class="form-control mb-3"
        placeholder="Nueva contraseña"
        required
      />
      <button type="submit" class="btn btn-success">Actualizar contraseña</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return { nuevaContrasena: '' }
  },
  methods: {
    async enviarNueva() {
      const token = this.$route.params.token
      await axios.post('http://localhost:3001/resetear', {
        token,
        nuevaContrasena: this.nuevaContrasena
      })

      console.log('Nueva contraseña:', this.nuevaContrasena); // Debugging line to
      alert('Contraseña actualizada correctamente')
      this.$router.push('/login')
    }
  }
}
</script>
