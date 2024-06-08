@echo off
setlocal enabledelayedexpansion

if "%~1"=="" (
    echo Usage: scale_images.bat "<relative_path_to_images>"
    exit /b 1
)

set SRC_DIR=%~1
set DEST_DIR=%SRC_DIR%\small

if not exist "%DEST_DIR%" mkdir "%DEST_DIR%"

echo Processing files in %SRC_DIR%
for %%F in ("%SRC_DIR%\*.*") do (
    set "filename=%%~nF"
    set "extension=%%~xF"
    echo Found file: %%F with extension !extension!
    if /I "!extension!"==".jpg" (
        echo Scaling JPG: %%F
        ffmpeg -i "%%F" -vf "scale=20:-1" "%DEST_DIR%\!filename!!extension!"
    ) else if /I "!extension!"==".jpeg" (
        echo Scaling JPEG: %%F
        ffmpeg -i "%%F" -vf "scale=20:-1" "%DEST_DIR%\!filename!!extension!"
    ) else if /I "!extension!"==".png" (
        echo Scaling PNG: %%F
        ffmpeg -i "%%F" -vf "scale=20:-1" "%DEST_DIR%\!filename!!extension!"
    )
)

echo Scaling complete.
