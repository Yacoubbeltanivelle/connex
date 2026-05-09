# Connex Direction Artistique

## Skill retenu

Le skill principal pour cette phase est `ui-ux-pro-max`, parce que la demande touche directement au design system, a la typographie, a l'e-commerce, aux animations, a l'accessibilite et a la performance percue.

Skills complementaires possibles pour les prochaines passes :
- `imagegen-frontend-web` pour generer des references visuelles section par section avant implementation.
- `playwright` ou `browser-use:browser` pour verifier rendu, responsive, console et lenteur en navigateur.
- `coderabbit:code-review` pour une revue qualite avant merge.

## Lecture Des Inspirations

Les inspirations fortes :
- Apple Store : densite produit, cartes calmes, navigation utilitaire, rythme horizontal, beaucoup de blanc.
- Back Market : modules e-commerce empiles, offres visibles, sections courtes, rassurance et social proof.
- Portavia/off.vstore : typographie editorial-sans, grands titres, grille stricte, peu d'effets superflus.
- Pura Pharma : atmosphere premium, sections larges, contenus produits propres, visuels hero enveloppants.
- Mockups soft UI : surfaces blanches, gris doux, flottement leger, micro-interactions rondes et controlees.

Direction Connex retenue :
Soft Technical Commerce. Un site e-commerce premium pour objets tech portables, plus proche d'Apple/Portavia que d'un SaaS marketing. L'interface doit montrer vite le produit, le prix, les benefices, la preuve et l'achat.

## Typographie

Police display/logo : `Sora`
- Raison : geometrique, technique, plus identifiable pour Connex.
- Usage : logo, grands titres, prix importants, chiffres de performance.

Police UI/body : `Manrope`
- Raison : excellente lisibilite en grilles e-commerce, compacte sans etre froide.
- Usage : navigation, descriptions, filtres, boutons, cartes produit, checkout.

Regles :
- Pas de tracking negatif dans les tokens globaux.
- Prix en chiffres tabulaires quand possible.
- H1 courts et directs : produit, categorie, offre.
- Body text 16px minimum.

## Couleurs

Base :
- Ink : `#0C0A09`
- Stone : `#FAFAF9`, `#F5F4F0`, `#E7E5E3`
- Muted : `#57534E`, `#A8A29E`
- Signal amber : `#D97706`, hover `#92400E`, soft `#FFF7ED`

Regles :
- Blanc/stone pour la lecture et les grilles.
- Noir/ink pour CTA primaire et logo.
- Amber seulement pour signaler prix, badge, selection, highlight.
- Eviter une DA beige uniforme : ajouter contraste ink, produits reels et surfaces blanches.

## Logo

Le logo doit rester visible dans la navbar meme sur fond clair :
- Lockup dans un pill ink.
- Mot `Connex` en Sora bold.
- Marque geometrique 2x2 blanc/amber.
- Contraste fort et zone cliquable confortable.

## Composants E-Commerce

Cartes produit :
- Rayon 8px.
- Image avec aspect-ratio reserve pour eviter le CLS.
- Bouton quick add visible au hover desktop, accessible au tap mobile dans une prochaine passe.
- Prix, nom, tagline et couleurs doivent rester lisibles sans hover.

Navigation :
- Header sticky compact.
- Recherche et panier toujours visibles desktop.
- CTA principal unique : `Shop now`.

Animations :
- Duree 150-300ms pour micro-interactions, jusqu'a 600ms pour transitions hero.
- Animer `transform` et `opacity`, pas layout.
- Respecter `prefers-reduced-motion`.
- Eviter de multiplier GSAP sur des sections simples si CSS ou Framer suffit.

## Performance

Regles appliquees ou a appliquer :
- Images distantes baissees de `q=85/90` vers `q=72/76`.
- AVIF/WebP deja actives dans `next.config.ts`.
- Hero image prioritaire uniquement pour le premier viewport.
- Parallax souris limite aux pointeurs fins et throttlee via `requestAnimationFrame`.
- Prochaine passe conseillee : remplacer les images Unsplash critiques par assets locaux optimises, puis auditer le bundle Framer Motion + GSAP.
