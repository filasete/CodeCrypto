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

## Comprobar si WSL (Windows Subsystem for Linux) está instalado

1. Abrir PowerShell e introducir:
   ```powershell
   where.exe wsl
   ```
   - Si devuelve una ruta (`...\wsl.exe`), el comando `wsl` está disponible.

2. Obtener la versión y estado de WSL:
   ```powershell
   wsl --version
   wsl --status
   ```
   - `wsl --version` muestra la versión del kernel WSL, WSLg y otros componentes.
   - `wsl --status` indica la distribución predeterminada y la versión por defecto (WSL 1 o WSL 2).

3. Listar distribuciones instaladas y su versión:
   ```powershell
   wsl -l -v
   # o
   wsl --list --verbose
   ```
   - Ejemplo de salida con WSL 2 y una distribución Ubuntu:
     ```text
       NAME              STATE           VERSION
     * Ubuntu            Stopped         2
       docker-desktop    Stopped         2
     ```
   - Si aparece `Stopped` o `Running` indica el estado de cada distro.

4. Abrir la distro Ubuntu o ejecutar un comando dentro de ella:
   ```powershell
   # Iniciar shell de la distribución por defecto
   wsl

   # O ejecutar un comando puntual
   wsl -d Ubuntu -- uname -a
   ```

5. Si WSL no está instalado (o `wsl` no existe):
   - En Windows 10/11 moderno, instalar WSL rápidamente:
     ```powershell
     # Ejecuta desde PowerShell como Administrador
     wsl --install
     ```
   - Si `wsl --install` no está disponible, habilitar manualmente (Admin):
     ```powershell
     dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
     dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
     # Reinicia el sistema, luego instalar la distro o ejecutar:
     wsl --set-default-version 2
     ```

6. Comprobaciones y solución de problemas:
   - Ver tu versión de Windows (necesaria para WSL 2): `winver` o
     ```powershell
     systeminfo | findstr /B /C:"OS Name" /C:"OS Version"
     ```
   - Si `wsl` no está en PATH: `where.exe wsl` te mostrará si existe el binario en `WindowsApps`.
   - Si Docker Desktop aparece como `docker-desktop`, esa distribución gestiona los contenedores de Docker; no necesitas abrirla normalmente.
   - Si necesitas permisos, ejecuta PowerShell como Administrador para habilitar features del sistema.

7. Confirmación rápida para tu caso (lo que encontramos):
   - `where.exe wsl` devolvió `C:\Users\Fidel\AppData\Local\Microsoft\WindowsApps\wsl.exe` → `wsl` está presente.
   - `wsl --version` devolvió información de kernel y WSLg, por lo que WSL está instalado correctamente.
   - `wsl --status` indicó `Distribución predeterminada: Ubuntu` y `Versión predeterminada: 2` → tienes WSL 2 y Ubuntu como distro predeterminada.
   - `wsl -l -v` mostró `Ubuntu` y `docker-desktop` (ambas en versión 2) → WSL 2 está funcionando y Docker Desktop se integra mediante `docker-desktop`.

Si quieres, puedo añadir más ejemplos o pasos para trabajar con distribuciones desde VSCode o cómo integrar WSL con Docker Desktop.
