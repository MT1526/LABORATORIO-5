// Cuando la página cargue, configuramos los botones
document.addEventListener('DOMContentLoaded', function() {
    
    // BOTÓN PARA JSON LOCAL
    const btnLocal = document.getElementById('btnLocal');
    btnLocal.addEventListener('click', cargarJsonLocal);
    
    // BOTÓN PARA API
    const btnApi = document.getElementById('btnApi');
    btnApi.addEventListener('click', cargarApiPublica);
    
});

// FUNCIÓN 1: Cargar archivo JSON local
function cargarJsonLocal() {
    // Usamos fetch para leer el archivo local
    fetch('datos-locales.json')
        .then(function(respuesta) {
            return respuesta.json();  // Convertir a JSON
        })
        .then(function(datos) {
            mostrarDatosLocal(datos.usuarios);
        })
        .catch(function(error) {
            document.getElementById('contenido-local').innerHTML = 
                '<p style="color:red">❌ Error al cargar el archivo local</p>';
            console.log('Error:', error);
        });
}

// FUNCIÓN 2: Cargar datos desde API pública
function cargarApiPublica() {
    // Usamos fetch para pedir datos a internet
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(respuesta) {
            return respuesta.json();  // Convertir a JSON
        })
        .then(function(datos) {
            mostrarDatosApi(datos);
        })
        .catch(function(error) {
            document.getElementById('contenido-api').innerHTML = 
                '<p style="color:red">❌ Error al conectar con la API</p>';
            console.log('Error:', error);
        });
}

// Mostrar datos del JSON local
function mostrarDatosLocal(usuarios) {
    let html = '<div class="tarjetas">';
    
    for(let i = 0; i < usuarios.length; i++) {
        html += `
            <div class="tarjeta">
                <strong>👤 ${usuarios[i].nombre}</strong><br>
                📍 ${usuarios[i].ciudad}<br>
                🎂 ${usuarios[i].edad} años<br>
                💼 ${usuarios[i].profesion}
            </div>
        `;
    }
    html += '</div>';
    
    document.getElementById('contenido-local').innerHTML = html;
}

// Mostrar datos de la API
function mostrarDatosApi(usuarios) {
    let html = '<div class="tarjetas">';
    
    // Solo mostramos los primeros 3 para no saturar
    for(let i = 0; i < 3; i++) {
        html += `
            <div class="tarjeta">
                <strong>👤 ${usuarios[i].name}</strong><br>
                📧 ${usuarios[i].email}<br>
                🏢 ${usuarios[i].company.name}<br>
                🌆 ${usuarios[i].address.city}
            </div>
        `;
    }
    html += '</div>';
    
    document.getElementById('contenido-api').innerHTML = html;
}