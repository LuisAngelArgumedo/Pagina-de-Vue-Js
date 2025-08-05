<template>
  <div class="auth-container">
    <!-- Fondo animado -->
    <div class="animated-bg">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <!-- Contenedor principal -->
    <div class="auth-wrapper">
      <div class="auth-card">
        <div class="auth-header">
          <div class="logo-container">
            <div class="logo">
              <i class="fas fa-user-circle"></i>
            </div>
          </div>
          <h2 class="auth-title">Bienvenido de vuelta</h2>
          <p class="auth-subtitle">Inicia sesión en tu cuenta</p>
        </div>

        <form @submit.prevent="handleLogin" class="auth-form">
          <div class="form-group">
            <div class="input-container">
              <i class="fas fa-envelope input-icon"></i>
              <input 
                type="text" 
                v-model="usuario"
                placeholder="Usuario o correo"
                class="form-input"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-container">
              <i class="fas fa-lock input-icon"></i>
              <input 
                :type="showPassword ? 'text' : 'password'"
                v-model="contrasena"
                placeholder="Contraseña"
                class="form-input"
                required
              />
              <button 
                type="button" 
                class="password-toggle"
                @click="showPassword = !showPassword"
              >
                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </button>
            </div>
          </div>

          <div class="form-options">
            <label class="checkbox-container">
              <input type="checkbox" v-model="rememberMe">
              <span class="checkmark"></span>
              Recordarme
            </label>
            <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" class="btn-primary" :disabled="cargando">
            <span v-if="cargando" class="loading-spinner"></span>
            <span v-else>
              <i class="fas fa-sign-in-alt"></i>
              Iniciar Sesión
            </span>
          </button>
        </form>

        <div class="auth-footer">
          <p>¿No tienes una cuenta? 
            <router-link to="/registro" class="link-button">Regístrate aquí</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      usuario: '',
      contrasena: '',
      cargando: false,
      showPassword: false,
      rememberMe: false
    }
  },
  methods: {
    async handleLogin() {
      this.cargando = true
      try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            usuario: this.usuario,
            contrasena: this.contrasena,
          }),
        })
        const data = await response.json()
        if (response.ok) {
          // Guardar sesión en localStorage
          localStorage.setItem('isAuthenticated', 'true')
          // Mostrar éxito
          Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            showConfirmButton: false,
            timer: 1500,
          })
          // Redirigir evitando volver con la flecha
          setTimeout(() => {
            this.$router.replace('/')
          }, 1500)
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.error || 'Credenciales incorrectas',
          })
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error del servidor',
          text: 'No se pudo conectar con el servidor',
        })
      } finally {
        this.cargando = false
      }
    },
  },
}
</script>

<style scoped>
/* Importar Font Awesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 15px;
}

/* Fondo animado */
.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 70%;
  right: 10%;
  animation-delay: 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  top: 40%;
  right: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

/* Contenedor principal */
.auth-wrapper {
  position: relative;
  z-index: 1;
}

.auth-card {
  width: 450px;
  max-width: 90vw;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(148, 163, 184, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.auth-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #1e40af, #1e3a8a);
}

.auth-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

/* Header */
.auth-header {
  text-align: center;
  margin-bottom: 30px;
}

.logo-container {
  margin-bottom: 20px;
}

.logo {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: white;
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.auth-title {
  font-size: 28px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}

.auth-subtitle {
  color: #64748b;
  font-size: 16px;
  font-weight: 400;
}

/* Formulario */
.auth-form {
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 15px;
  color: #6b7280;
  font-size: 16px;
  z-index: 2;
}

.form-input {
  width: 100%;
  padding: 15px 15px 15px 45px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  background: #f9fafb;
  transition: all 0.3s ease;
  outline: none;
  color: #374151;
}

.form-input::placeholder {
  color: #9ca3af;
  font-weight: 400;
}

.form-input:focus {
  border-color: #3b82f6;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  transform: translateY(-2px);
}

.form-input.error {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.05);
}

.password-toggle {
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  transition: color 0.3s ease;
}

.password-toggle:hover {
  color: #3b82f6;
}

.error-message {
  color: #ef4444;
  font-size: 12px;
  margin-top: 5px;
  display: block;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Opciones del formulario */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  font-size: 14px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  color: #374151;
}

.checkbox-container input {
  display: none;
}

.checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid #e5e7eb;
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
  transition: all 0.3s ease;
}

.checkbox-container input:checked + .checkmark {
  background: #3b82f6;
  border-color: #3b82f6;
}

.checkbox-container input:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  top: -2px;
  left: 2px;
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.forgot-password {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #1e40af;
  text-decoration: underline;
}

/* Botones */
.btn-primary {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #1e40af, #1e3a8a);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  display: inline-block;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Footer */
.auth-footer {
  text-align: center;
  margin-bottom: 25px;
}

.auth-footer p {
  color: #64748b;
  font-size: 14px;
}

.link-button {
  color: #3b82f6;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.link-button:hover {
  color: #1e40af;
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 480px) {
  .auth-card {
    width: 90vw;
    padding: 30px 25px;
  }
  
  .form-options {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
  
  .logo {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
  
  .auth-title {
    font-size: 22px;
  }
}

/* Efectos de hover en el formulario */
.auth-card:hover .logo {
  transform: scale(1.1);
  box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
}

/* Mejoras para pantallas táctiles */
@media (hover: none) and (pointer: coarse) {
  .btn-primary:hover {
    transform: none;
  }
  
  .auth-card:hover {
    transform: none;
  }
  
  .auth-card:hover .logo {
    transform: none;
  }
}
</style>
