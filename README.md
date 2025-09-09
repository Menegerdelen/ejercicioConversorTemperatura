# 🌡️ Conversor de Temperatura

Un programa interactivo desarrollado en **JavaScript**, **HTML** y **Bootstrap** que permite convertir temperaturas de **Celsius** a **Fahrenheit** y **Kelvin** con validación de datos y una interfaz amigable.

## 📋 Descripción del Proyecto

Este programa solicita al usuario una temperatura en grados Celsius y realiza las conversiones correspondientes, mostrando los resultados en el DOM con un diseño responsive y moderno.

## ✨ Funcionalidades

- ✅ **Entrada de datos**: Solicita temperatura en Celsius mediante input o prompt
- ✅ **Conversiones automáticas**: Calcula Fahrenheit y Kelvin
- ✅ **Validación robusta**: Verifica que la entrada sea un número válido
- ✅ **Manejo de errores**: Muestra mensajes claros y solicita datos nuevamente
- ✅ **Interfaz responsive**: Diseño adaptable con Bootstrap
- ✅ **Resultados en DOM**: Muestra los resultados de forma visual

## 🧮 Fórmulas Utilizadas

```javascript
// Celsius a Fahrenheit
°F = (°C × 1.8) + 32

// Celsius a Kelvin  
K = °C + 273.15
```

## 📊 Casos de Prueba

### ✅ Caso 1
**Entrada:** `45`
```
Grados Kelvin: 318.15
Grados Fahrenheit: 113.0
```

### ✅ Caso 2
**Entrada:** `14`
```
Grados Kelvin: 287.15
Grados Fahrenheit: 57.2
```

### ❌ Caso de Error
**Entrada:** `"abc"` o campos vacíos
```
Error al ingresar datos, vuelva a ingresar un numero ej: 32.
```

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Estructura de la página |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Lógica de conversión y validación |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white) | Framework CSS para diseño |

## 📁 Estructura del Proyecto

```
📦 conversor-temperatura/
├── 📄 index.html          # Página principal
├── 📄 main.js            # Lógica del programa
└── 📄 README.md          # Documentación
```
