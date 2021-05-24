var _nombre=document.getElementById('nombre'),
    _boleta=document.getElementById('boleta'),
    _grupo=document.getElementById('grupo'),
    _materia=document.getElementById('materia'),
    _fecha=document.getElementById('fecha'),
    _salidaNombre=document.getElementById('salidaNombre'),
    _salidaBoleta=document.getElementById('salidaBoleta'),
    _salidaGrupo=document.getElementById('salidaGrupo'),
    _salidaMateria=document.getElementById('salidaMateria'),
    _salidaFecha=document.getElementById('salidaFecha');

function enviarDatos(){
    console.log(_fecha);
    _salidaNombre.innerHTML=_nombre.value;
    _salidaBoleta.innerHTML=_boleta.value;
    _salidaGrupo.innerHTML=_grupo.value;
    _salidaMateria.innerHTML=_materia.value;
    _salidaFecha.innerHTML=_fecha.value;

}    
