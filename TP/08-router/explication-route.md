# Exemple de routes

https://monsite.com/user/:username?test=true&active=123#top
https://monsite.com/user/:id?test=true#top

https://monsite.com/user/johndoe?test=true&active=123#top
https://monsite.com/user/1?test=true#top

## décomposition d'un hyperlien

fullpath: https://monsite.com/quelquechose/
relativepath: quelquechose/
params: :johndoe || 1
query: ?test=true&active
hash: #top

## dans vue router avec l'objet `$route`

$route.params.username = 'johndoe'
$route.params.id = 1
$route.query.test = true
$route.query.active = 123
$route.hash = '#top'

