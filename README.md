# Portafolio — Carlos Ortiz

Sitio estático (HTML + CSS + un poco de JS), pensado para publicarse en GitHub Pages.

## Estructura

```
index.html                  página principal
assets/css/styles.css       estilos (claro y oscuro automáticos)
assets/js/content.js        VALORES Y ENLACES EDITABLES
assets/img/                 diagramas de la tesis
assets/docs/                póster (y el CV cuando lo agregues)
github-profile/README.md    README para el perfil de GitHub (repo <usuario>/<usuario>)
```

## Cómo actualizar métricas y enlaces

Todo lo que cambia se edita en `assets/js/content.js`:

- **`METRICS`**: cada valor tiene `status`. Con `"pending"` aparece con la etiqueta
  *prelim.*; cuando el valor sea definitivo, cámbialo a `"final"`.
- **`LINKS`**: si un enlace está vacío (`""`), su botón se oculta solo. Faltan:
  `cv` y `thesis_repo`. Los enlaces de las cards (`project_timing`, `project_irrigation`)
  tienen `"#"` como marcador: reemplázalo por la URL real de cada proyecto.

En `github-profile/README.md` hay que revisar a mano el R² y las cifras del proyecto de tiempos,
porque ese archivo no lee `content.js`.

## Ver el sitio en local

Abre `index.html` en el navegador, o:

```bash
python3 -m http.server 8000
```

## Publicar en GitHub Pages

El repositorio es `git@github.com:Carlos09Or/Portafolio.git` y Pages publica la rama `main`
(carpeta raíz). El sitio queda en https://carlos09or.github.io/Portafolio/

Para publicar cambios:

```bash
git add -A && git commit -m "Describe el cambio" && git push
```

GitHub Pages tarda uno o dos minutos en actualizarse.
