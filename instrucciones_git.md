# Instrucciones para verificar y subir archivos y carpetas con Git

## Verificar los archivos y carpetas rastreados por Git

1. Abre PowerShell en la raíz de tu proyecto.
2. Ejecuta:
   ```powershell
   git ls-files
   ```
   Esto mostrará todos los archivos y carpetas que están siendo rastreados por Git y que se subirán al repositorio remoto.

## Subir todos los archivos y carpetas al repositorio

1. Agrega todos los archivos y carpetas al área de staging:
   ```powershell
   git add .
   ```
2. Haz un commit con los cambios:
   ```powershell
   git commit -m "Agregar todos los archivos y carpetas del proyecto"
   ```
3. Sube los cambios al repositorio remoto:
   ```powershell
   git push
   ```

## Notas importantes
- Revisa el archivo `.gitignore` en la raíz del proyecto. Los archivos o carpetas listados ahí no se subirán al repositorio.
- Puedes verificar en GitHub que la estructura y los archivos coincidan con tu proyecto local.
