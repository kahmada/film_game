# Configuration OAuth pour Google et GitHub

## 📋 Prérequis pour Google OAuth

### 1. Accédez à Google Cloud Console
- Allez sur [Google Cloud Console](https://console.cloud.google.com/)
- Créez un nouveau projet ou sélectionnez un projet existant

### 2. Activez l'API Google+
- Dans la navigation, allez dans "APIs & Services" > "Library"
- Recherchez "Google+ API" et activez-la

### 3. Créez des identifiants OAuth 2.0
- Allez dans "APIs & Services" > "Credentials"
- Cliquez sur "Create Credentials" > "OAuth 2.0 Client IDs"
- Sélectionnez "Web application"
- Nom : "Prime Gaming Website"
- JavaScript origins : `http://localhost:3000`
- Redirect URIs : `http://localhost:3000/api/auth/callback/google`

### 4. Récupérez vos clés
- Client ID : `xxxxx.apps.googleusercontent.com`
- Client Secret : `xxxxxxxxxxxxxxxx`

## 📋 Prérequis pour GitHub OAuth

### 1. Accédez aux paramètres GitHub
- Allez sur [GitHub Developer Settings](https://github.com/settings/developers)
- Cliquez sur "New OAuth App"

### 2. Configurez l'application
- Application name : "Prime Gaming Website"
- Homepage URL : `http://localhost:3000`
- Authorization callback URL : `http://localhost:3000/api/auth/callback/github`

### 3. Récupérez vos clés
- Client ID : `xxxxxxxxxxxxxxxx`
- Client Secret : `xxxxxxxxxxxxxxxx`

## 🔧 Configuration dans .env.local

Remplacez les valeurs dans le fichier `.env.local` :

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret-key

# Google OAuth (remplacez par vos vraies valeurs)
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth (remplacez par vos vraies valeurs)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

## 🔑 Générer NEXTAUTH_SECRET

Exécutez cette commande pour générer une clé secrète :

```bash
openssl rand -base64 32
```

## ✅ Test de l'authentification

1. Redémarrez le serveur de développement
2. Allez sur `http://localhost:3003/login`
3. Cliquez sur "Google" ou "GitHub"
4. Autorisez l'application
5. Vous devriez être redirigé vers `/Home`

## 🚨 Notes importantes

- **Développement** : Les URLs utilisent `localhost:3003`
- **Production** : Changez les URLs vers votre domaine de production
- **Sécurité** : Ne commitez jamais vos clés secrètes dans Git
- **HTTPS** : En production, utilisez toujours HTTPS
