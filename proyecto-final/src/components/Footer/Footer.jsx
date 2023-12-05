
'use client'
import "./Footer.css"
export default function Footer(){

return(
<footer id="footer">
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-xs-6">
                    <div class="footer">
                        <h3 class="footer-title">Contactanos</h3>
                        <p>Kra 16c #164-70 Centro Comercial Toberin Local 1-A</p>
                        <ul class="footer-links">
                            <li><a href="#">1734 Stonecoal Road</a></li>
                            <li><a href="#">+057-95-51-84</a></li>
                            <li><a href="#">email@email.com</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-xs-6">
                    <div class="footer">
                        <h3 class="footer-title">Categorias</h3>
                        <ul class="footer-links">
                            <li><a href="#">Productos Electronicos</a></li>
                            <li><a href="#">Joyeria & Bisuteria</a></li>
                            <li><a href="#">Ropa Para Hombres</a></li>
                            <li><a href="#">Ropa Para Mujer</a></li>
                        </ul>
                    </div>
                </div>

                <div class="clearfix visible-xs"></div>

                <div class="col-md-3 col-xs-6">
                    <div class="footer">
                        <h3 class="footer-title">Informacion</h3>
                        <ul class="footer-links">
                            <li><a href="#">Acerca de Nosotros</a></li>
                            <li><a href="#">Contactanos</a></li>
                            <li><a href="#">Politicas de Privacidad</a></li>
                            <li><a href="#">Ordenes and Devoluciones</a></li>
                            <li><a href="#">Terminos & Condiciones</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-xs-6">
                    <div class="footer">
                        <h3 class="footer-title">Servicios</h3>
                        <ul class="footer-links">
                            <li><a href="#">Mi Cuenta</a></li>
                            <li><a href="#">Ver el Carrito</a></li>
                            <li><a href="#">Favoritos</a></li>
                            <li><a href="#">Seguir Mi Order</a></li>
                            <li><a href="#">Ayuda</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</footer>
)
}