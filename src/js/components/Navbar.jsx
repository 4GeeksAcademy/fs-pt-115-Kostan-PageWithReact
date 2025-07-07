export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container-fluid">

    <a class="navbar-brand" href="https://www.warframe.com/game/about">WARFRAME</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tienda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Novedades</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
        <li class="nav-item">
          <button class="btn btn-primary btn-sm mt-1" type="button">Registrarse o Iniciar sesión</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )


}