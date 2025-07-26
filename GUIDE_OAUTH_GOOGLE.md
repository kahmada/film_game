# 🚀 Configuration OAuth Google - Guide Pas-à-Pas

## Étape 1 : Créer un projet Google Cloud

1. **Allez sur** : https://console.cloud.google.com/
2. **Connectez-vous** avec votre compte Google
3. **Cliquez sur** "Sélectionner un projet" en haut
4. **Cliquez sur** "NOUVEAU PROJET"
5. **Nom du projet** : "Prime Gaming Website"
6. **Cliquez sur** "CRÉER"

## Étape 2 : Activer l'API Google+

1. **Dans le menu** → "APIs et services" → "Bibliothèque"
2. **Recherchez** : "Google+ API"
3. **Cliquez sur** "Google+ API"
4. **Cliquez sur** "ACTIVER"

## Étape 3 : Créer les identifiants OAuth

1. **Allez dans** : "APIs et services" → "Identifiants"
2. **Cliquez sur** "+ CRÉER DES IDENTIFIANTS"
3. **Sélectionnez** : "ID client OAuth 2.0"
4. **Type d'application** : "Application Web"
5. **Nom** : "Prime Gaming Website"

### URLs autorisées :
- **Origines JavaScript** : `http://localhost:3000`
- **URI de redirection** : `http://localhost:3000/api/auth/callback/google`

6. **Cliquez sur** "CRÉER"

## Étape 4 : Récupérer vos clés

Après création, vous verrez :
- **ID client** : `xxxxx-xxxxxx.apps.googleusercontent.com`
- **Code secret du client** : `xxxxxxxxxxxxxxx`

**COPIEZ ces deux valeurs !**

## Étape 5 : Mettre à jour .env.local

Remplacez dans votre fichier `.env.local` :

```bash
# Google OAuth (remplacez par vos vraies valeurs)
GOOGLE_CLIENT_ID=votre-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=votre-client-secret
```

## Étape 6 : Réactiver OAuth dans le code

Remplacez les fonctions dans `app/login/page.tsx` et `app/signup/page.tsx` :

```tsx
const handleGoogleSignIn = () => {
  signIn('google', { callbackUrl: '/Home' })
}
```

## Étape 7 : Redémarrer le serveur

```bash
npm run dev
```

## ✅ Test final

1. Allez sur `http://localhost:3000/login`
2. Cliquez sur "Google"
3. Autorisez l'application
4. Vous devriez être redirigé vers `/Home`

---

## 🚨 Important

- **Ne commitez jamais** vos vraies clés dans Git
- **En production** : changez les URLs vers votre domaine
- **Utilisez HTTPS** en production
