# API Docs e Instalación


# Inicio

- Esta es la API para la conexión y funcionamiento de la página web/la tienda y el PCU del gamemode. Esta aún se encuentra en fase de desarrollo y se seguirán añadiendo mejoras y nuevas funcionalidades. Toda la información y estructuración del proyecto la encontrarás detalladamente aquí. Espero que disfrutes de esto y mejores tu servidor, así como yo disfruté codificando esto.
- Si eres desarrollador, siempre eres libre de hacer un fork y seguir mejorando el proyecto, o mejorar el proyecto en sí.



# Construcción

[![Node.js Version](https://img.shields.io/badge/node.js-14.17.0-green)](https://nodejs.org/)
[![mysql2 Version](https://img.shields.io/badge/mysql2-2.3.3-blue)](https://github.com/sidorares/node-mysql2)
[![Sequelize Version](https://img.shields.io/badge/sequelize-6.3.5-blue)](https://sequelize.org/)
[![Nodemailer Version](https://img.shields.io/badge/nodemailer-6.4.11-orange)](https://nodemailer.com/)


# API Documentation

## Table of Contents
1. [Authentication](#authentication)
2. [Server](#server)
3. [Player](#player)
4. [Note](#note)

## Authentication

### Login
POST /api/v1/auth/login

**Body:**
- `username`
- `password`

**Response:**
- Status: 200
- Body:
```json
{
  "success": true,
  "utoken": "",
  "uid": ""
}
```

### Recover Pass
POST /api/v1/auth/recover-pass

**Body:**
- `email`


**Response:**
- Status: 200
- Body:
```json
{
  "success": true,
  "verify_token": "",
}
```
