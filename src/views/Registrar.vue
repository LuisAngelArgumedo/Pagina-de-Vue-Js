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
      <form
        class="p-4 rounded shadow-lg bg-white w-100"
        style="max-width: 480px"
        @submit.prevent="registrarUsuario"
      >
        <div class="text-center mb-4">
          <div class="logo-container mb-3">
            <div class="logo">
              <i class="fas fa-user-plus"></i>
            </div>
          </div>
          <h2 class="form-title">Registro de Usuario</h2>
        </div>
        <!-- Campo Usuario -->
        <div class="mb-3">
          <label for="usuario" class="form-label"> <i class="fas fa-user me-2"></i>Usuario </label>
          <input
            type="text"
            class="form-control custom-input"
            id="usuario"
            v-model="usuario"
            placeholder="Ingresa tu usuario"
            required
          />
        </div>
        <!-- Campo Contraseña -->
        <div class="mb-4">
          <label for="contrasena" class="form-label">
            <i class="fas fa-lock me-2"></i>Contraseña
          </label>
          <div class="input-group position-relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="form-control custom-input"
              id="contrasena"
              v-model="contrasena"
              placeholder="Ingresa tu contraseña"
              required
            />
            <button type="button" class="password-toggle" @click="showPassword = !showPassword">
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>
        </div>
        <!-- Botón de registro -->
        <button type="submit" class="btn-custom w-100 mb-3">
          <i class="fas fa-user-plus me-2"></i>
          Registrar
        </button>
        <div class="text-center">
          <p class="login-link">
            ¿Ya tienes cuenta?
            <router-link to="/login" class="link-custom">Inicia sesión aquí</router-link>
          </p>
        </div>
        <!-- Registro social -->
        <div class="social-login">
          <div class="divider">
            <span>O regístrate con</span>
          </div>
          <div class="social-buttons">
            <button type="button" class="social-btn google">
              <i class="fab fa-google"></i>
              <span class="d-none d-sm-inline">Google</span>
            </button>
            <button type="button" class="social-btn facebook">
              <i class="fab fa-facebook-f"></i>
              <span class="d-none d-sm-inline">Facebook</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      usuario: '',
      contrasena: '',
      showPassword: false,
    }
  },
  methods: {
    async registrarUsuario() {
      try {
        await axios.post('http://localhost:3001/registrar', {
          usuario: this.usuario,
          contrasena: this.contrasena,
        })
        alert('Usuario registrado con éxito')
        this.usuario = ''
        this.contrasena = ''
      } catch (error) {
        console.error('Error al registrar usuario:', error)
        alert('Error al registrar usuario')
      }
    },
  },
}
</script>pipelineScritp/police/policiesAZ/policies.ps1

<style scoped>
/* Importar Font Awesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Transiciones */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

/* Contenedor principal */
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

.auth-wrapper {
  position: relative;
  z-index: 1;
}

/* Formulario */
form {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 16px !important;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 480px;
}

form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #1e40af, #1e3a8a);
}

form:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15) !important;
}

/* Logo */
.logo-container {
  display: flex;
  justify-content: center;
}

.logo {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Títulos */
.form-title {
  color: #1e293b;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 8px;
}

/* Labels */
.form-label {
  color: #374151;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.form-label i {
  color: #6b7280;
}

/* Input Groups */
.input-group {
  position: relative;
}

/* Inputs */
.custom-input {
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  background: #f9fafb;
  transition: all 0.3s ease;
  color: #374151;
  width: 100%;
}

.custom-input:focus {
  border-color: #3b82f6;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
  transform: translateY(-2px);
}

.custom-input::placeholder {
  color: #9ca3af;
  font-weight: 400;
}

/* Password Toggle */
.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  transition: color 0.3s ease;
  z-index: 10;
}

.password-toggle:hover {
  color: #3b82f6;
}

/* Botón principal */
.btn-custom {
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  border: none;
  border-radius: 10px;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: white;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-custom::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-custom:hover {
  background: linear-gradient(135deg, #1e40af, #1e3a8a);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
}

.btn-custom:hover::before {
  left: 100%;
}

.btn-custom:active {
  transform: translateY(0);
}

/* Enlaces */
.login-link {
  color: #64748b;
  font-size: 14px;
  margin: 0;
}

.link-custom {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.link-custom:hover {
  color: #1e40af;
  text-decoration: underline;
}

/* Social Login */
.social-login {
  text-align: center;
  margin-top: 20px;
}

.divider {
  position: relative;
  margin: 20px 0;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e5e7eb;
}

.divider span {
  background: white;
  padding: 0 15px;
  color: #9ca3af;
  font-size: 14px;
  position: relative;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  max-width: 120px;
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.google {
  background: linear-gradient(135deg, #dd4b39, #c23321);
}

.facebook {
  background: linear-gradient(135deg, #3b5998, #2d4373);
}

/* Responsive Design */
@media (max-width: 576px) {
  .auth-container {
    padding: 10px;
  }
  form {
    padding: 30px 25px !important;
    margin: 10px;
  }
  .logo {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
  .form-title {
    font-size: 22px;
  }
  .custom-input {
    padding: 10px 14px;
    font-size: 14px;
  }
  .btn-custom {
    padding: 12px 20px;
    font-size: 15px;
  }
  .social-buttons {
    flex-direction: column;
    gap: 10px;
  }
  .social-btn {
    max-width: none;
    justify-content: center;
  }
  .password-toggle {
    right: 10px;
  }
}

@media (max-width: 400px) {
  form {
    padding: 25px 20px !important;
  }
  .form-title {
    font-size: 20px;
  }
  .custom-input {
    padding: 10px 12px;
  }
}

/* Efectos de hover en el formulario */
form:hover .logo {
  transform: scale(1.1);
  box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
}

/* Gradiente sutil en el fondo */
.bg-light {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%) !important;
}

/* Mejoras para pantallas táctiles */
@media (hover: none) and (pointer: coarse) {
  .btn-custom:hover {
    transform: none;
  }
  form:hover {
    transform: none;
  }
  form:hover .logo {
    transform: none;
  }
}
</style>