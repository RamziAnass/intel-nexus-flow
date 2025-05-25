
# Correction nécessaire pour package.json

## Problème détecté
Ligne 12 : `"preview": "vite preview"` - **MANQUE UNE VIRGULE**

## Correction à appliquer
```json
{
  "name": "intel-nexus-flow",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint .",
    "preview": "vite preview",  ← AJOUTER CETTE VIRGULE
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    // ... reste du fichier
  }
}
```

## Étapes pour corriger
1. Activer le mode Dev (toggle en haut à gauche)
2. Ouvrir package.json
3. Ajouter la virgule manquante à la ligne 12
4. Sauvegarder le fichier
5. Le projet redémarrera automatiquement

Une fois cette correction appliquée, toutes les dépendances pourront s'installer correctement et les erreurs TypeScript disparaîtront.
