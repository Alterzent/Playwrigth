# Instrucciones para Cambiar Nombre del Repositorio

## Pasos a seguir:

### 1. Cambiar nombre en GitHub (Manual)

1. Ve a: https://github.com/Alterzent/WebIoStructure
2. Clic en **Settings**
3. Busca **Repository name**
4. Cambia de `WebIoStructure` a `Playwrigth`
5. Clic en **Rename**

### 2. Actualizar URL remota (Ejecutar después del paso 1)

```bash
git remote set-url origin https://github.com/Alterzent/Playwrigth.git
```

### 3. Verificar cambio

```bash
git remote -v
```

### 4. Hacer push de prueba

```bash
git push origin main
```

## Notas:

- GitHub redirigirá automáticamente las URLs antiguas
- Los GitHub Actions seguirán funcionando
- Las GitHub Pages se actualizarán automáticamente
- Todos los issues y PRs se mantendrán
