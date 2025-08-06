<template>
  <div class="container mt-5">
    <h2>Recuperar contraseña</h2>
    <form @submit.prevent="solicitarReset">
      <input
        v-model="usuario"
        type="text"
        class="form-control mb-3"
        placeholder="Ingresa tu usuario o correo"
        required
      />
      <button type="submit" class="btn btn-primary">Enviar enlace</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    async solicitarReset() {
      try {
        await axios.post('http://localhost:3001/solicitar-reset', {
          destinatario: this.usuario  // ✅ Campo correcto
        })
        alert('Revisa tu correo para restablecer tu contraseña')
        this.usuario = ''
      } catch (error) {
        alert('Error al enviar el correo. Verifica el correo ingresado')
        console.error(error)
      }
    }
  }
}
</script>
