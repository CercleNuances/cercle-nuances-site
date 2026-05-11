# Cercle Nuances — Site Web

Site officiel de Cercle Nuances, traiteur événementiel et chef à domicile à Montréal.

---

## Structure du projet

```
cercle-nuances-github/
├── index.html          ← Page principale (structure HTML)
├── css/
│   └── styles.css      ← Tous les styles visuels
├── js/
│   ├── content.js      ← ✏️  Textes, images, liens à modifier ici
│   └── app.js          ← Logique (navigation, galerie, formulaire)
├── img/                ← Toutes les images du site
├── menus/              ← PDFs des menus
│   ├── Menu_Ete_2026.pdf
│   ├── Menu_Evenements_2026.pdf
│   └── Forfait_Mariage.pdf
└── README.md
```

---

## Comment modifier le contenu

### Changer un texte
Ouvrez `index.html` et modifiez directement le texte dans la section concernée.

### Changer les images, liens ou menus PDF
Ouvrez `js/content.js` — tout est regroupé et clairement commenté :

- **Lien Calendly** → `SITE.liens.calendly`
- **Visite 3D Matterport** → `SITE.liens.matterport`
- **Instagram** → `SITE.liens.instagram` et `instagramHandle`
- **Reels Instagram** → `SITE.reels` (liste des URLs embed)
- **Menus PDF** → `SITE.menus` (nom, type, chemin du fichier)
- **Galerie accueil** → `SITE.galerie` (liste des chemins d'images)
- **Galerie mariage** → `SITE.galerieMariage`
- **Galerie Maison Martin** → `SITE.galerieMaison`
- **Témoignage** → `SITE.temoignage`
- **Chiffres clés** → `SITE.stats`

### Ajouter une photo à la galerie
1. Copiez votre photo dans le dossier `img/`
2. Dans `js/content.js`, ajoutez `'img/votre-photo.jpg'` dans `SITE.galerie`
3. La galerie se met à jour automatiquement

### Changer une couleur
Dans `css/styles.css`, modifiez les variables en haut du fichier :
```css
:root {
  --vert:  #1B4332;   /* vert forêt principal */
  --or:    #C9A462;   /* doré */
  --creme: #F7F3EC;   /* fond crème */
}
```

---

## Déploiement sur GitHub Pages

### 1. Créer le dépôt GitHub
```bash
git init
git add .
git commit -m "Initial commit — Cercle Nuances"
git branch -M main
git remote add origin https://github.com/VOTRE_NOM/cercle-nuances.git
git push -u origin main
```

### 2. Activer GitHub Pages
1. Aller dans votre dépôt GitHub → **Settings**
2. Dans le menu gauche → **Pages**
3. Source : **Deploy from a branch**
4. Branch : `main` / `/ (root)`
5. Cliquer **Save**

Votre site sera disponible à :
`https://VOTRE_NOM.github.io/cercle-nuances/`

---

## Tester en local

Ouvrez simplement `index.html` dans votre navigateur (double-clic).

Ou avec un serveur local (recommandé pour les iframes Instagram) :
```bash
# Avec Python
python3 -m http.server 8000
# → http://localhost:8000
```

---

## Pages du site

| Page | Description |
|------|-------------|
| Accueil | Hero, galerie, Instagram, contact |
| Événements | Offre corporative (galas, cocktails) |
| Privé | Chef à domicile, anniversaires |
| Mariage | Accompagnement mariage complet |
| Maison Martin | L'espace événementiel + visite 3D |
| Menus | Téléchargement des menus PDF |

---

## Contact & liens importants

- **Calendly** : https://calendly.com/cerclenuances-info/30min
- **Visite 3D** : https://my.matterport.com/show/?m=TTwEMpDBSSo
- **Instagram** : https://www.instagram.com/cercle_nuances/
