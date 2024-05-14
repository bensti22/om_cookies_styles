# Comment fonctionne ce module

Seulement installer via composer et l'activer.

Ensuite il faut désactiver l'option "Use original Cookies JSR Layout" dans /admin/config/system/cookies/config du module drupal/cookies

## À propos

Modules pour override la CSS de drupal/cookies


SCSS master : https://github.com/jfeltkamp/cookiesjsr/tree/master/styles

Je prends la SCSS au complet du module drupal/cookies, je la compile avec un override _om-cookies-styles.scss

Pour l'instant j'ai créé une CSS la plus sobre possible en noir et blanc pour matcher avec la plupart des sites.


À développer :
La page documentations cookies/documentation du module drupal/cookies n'est pas themé et c'est assez long de refaire cette page pour chaque site Web. Pour l'instant elle est disable.

Comme cette page sera presque toujours la même chose (avec option d'affichage)

Le plus simple serait de créer un une page dans ce module qui listerait la documentation des cookies.

On pourrait générer un tableau  dépendamment des options cochées des cookies.

Exemple du tableau :

- cookiesjsr : toujours là
- GTM + GA4 : activé ou non
- Recaptcha : activé ou non

À valider s'il existe d'autres modules qui utilisent des cookies.



## Pourquoi ce module ?

Avec un composer update, on va pouvoir updater la mise en page de drupal/cookies
et par la suite, on pourra gérer de façon générale la page description des cookies.


