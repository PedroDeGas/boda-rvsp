# Cómo poner en marcha el formulario RSVP

## Resumen de lo que vas a hacer
1. Crear una Google Spreadsheet
2. Copiar el script en Google Apps Script y desplegarlo
3. Pegar la URL del script en el `index.html`
4. Subir el sitio a GitHub Pages (o cualquier hosting)
5. Reemplazar la foto de fondo

---

## Paso 1 — Crear la Google Spreadsheet

1. Andá a [sheets.google.com](https://sheets.google.com) y creá una hoja nueva.
2. Podés llamarla "RSVP Boda Camila y Pedro".
3. Dejá la hoja abierta; la vamos a necesitar en el siguiente paso.

---

## Paso 2 — Configurar Google Apps Script

1. Dentro de la Spreadsheet, abrí el menú **Extensiones → Apps Script**.
2. Borrá el código que aparece por defecto en el editor.
3. Abrí el archivo `apps-script.gs` de esta carpeta y pegá todo su contenido.
4. Guardá con **Ctrl+S** (o el ícono de disquete). Poné cualquier nombre al proyecto, p. ej. "RSVP Boda".

---

## Paso 3 — Desplegar como Web App

1. En Apps Script, hacé clic en **Implementar → Nueva implementación**.
2. En "Seleccionar tipo", elegí **Aplicación web**.
3. Completá así:
   - **Descripción**: RSVP Boda (opcional)
   - **Ejecutar como**: Yo (tu cuenta de Google)
   - **Quién tiene acceso**: Cualquier persona
4. Hacé clic en **Implementar**.
5. Si te pide autorizar permisos, aceptá (vas a ver advertencias de Google, es normal para scripts propios).
6. **Copiá la URL** que aparece — se parece a:  
   `https://script.google.com/macros/s/AKfycby.../exec`

---

## Paso 4 — Pegar la URL en el HTML

1. Abrí `index.html` con cualquier editor de texto.
2. Buscá la línea:
   ```js
   const APPS_SCRIPT_URL = 'TU_URL_AQUI';
   ```
3. Reemplazá `TU_URL_AQUI` por la URL que copiaste en el paso anterior. Ejemplo:
   ```js
   const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. Guardá el archivo.

---

## Paso 5 — Reemplazar la foto de fondo

1. Conseguí una foto horizontal de buena resolución (mínimo 1920×1080 px) — puede ser la misma que usaron en la invitación.
2. Guardala con el nombre `foto-fondo.jpg` en la misma carpeta que `index.html`.
3. Si tu foto tiene otro formato (PNG, WEBP), cambiá también la línea en el CSS:
   ```css
   background-image: url('foto-fondo.jpg');
   ```

> **Alternativa temporal**: Si todavía no tenés la foto, podés usar un gradiente. Reemplazá la línea del CSS por:
> ```css
> background: linear-gradient(135deg, #3b2412 0%, #7a4219 50%, #2c1f14 100%);
> ```

---

## Paso 6 — Publicar el sitio (GitHub Pages)

### Opción A: GitHub Pages (recomendado, gratuito)

1. Creá una cuenta en [github.com](https://github.com) si no tenés una.
2. Creá un repositorio nuevo, p. ej. `boda-rsvp`.
3. Subí los archivos `index.html` y `foto-fondo.jpg` al repositorio.
4. Andá a **Settings → Pages**, en "Source" elegí `Deploy from a branch`, seleccioná `main` y `/ (root)`.
5. Guardá. GitHub te dará una URL como `https://tu-usuario.github.io/boda-rsvp/`.

### Opción B: Netlify (drag & drop, todavía más simple)

1. Andá a [netlify.com](https://netlify.com) y creá una cuenta gratuita.
2. En el dashboard, arrastrá la carpeta `boda-rsvp` al área de drop.
3. Netlify genera una URL automáticamente. Podés cambiarla por algo como `camila-y-pedro.netlify.app`.

---

## Paso 7 — Verificar que funciona

1. Abrí la URL del sitio en un navegador.
2. Completá el formulario con datos de prueba y envialo.
3. Volvé a tu Google Spreadsheet — deberías ver una nueva fila en la hoja "Confirmaciones".
4. Si no aparece, revisá:
   - Que la URL en `index.html` es correcta
   - Que el script está desplegado con acceso "Cualquier persona"
   - Si redeployaste el script, usá la URL nueva

---

## Actualizar el script (si lo modificás)

Cada vez que cambies el código en Apps Script, debés hacer una **nueva implementación** (no editar la existente). Los pasos son los mismos del Paso 3, pero elegí "Versión nueva". La URL suele mantenerse igual.

---

## Preguntas frecuentes

**¿Es gratis?**  
Sí. Google Sheets, Apps Script y GitHub Pages son completamente gratuitos para este uso.

**¿Tiene límite de respuestas?**  
Apps Script tiene un límite de 20.000 solicitudes/día. Para una boda, nunca lo vas a alcanzar.

**¿Puedo compartir el mismo link con todos los invitados?**  
Sí. Cada persona completa el formulario una vez. No hay login ni nada complicado.

**¿Cómo veo quiénes confirmaron?**  
Abrí la Google Spreadsheet. Vas a ver una hoja llamada "Confirmaciones" con todas las respuestas ordenadas por fecha.
