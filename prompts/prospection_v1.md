# Prospection Auto - Prompt v1

## Version
- v1 - 2026-03-28 - Version initiale

- ## Scenario
- - Make : [PROD] Prospection Auto (ID: 4894491)
  - - Module : HTTP - Make a request (Claude API)
   
    - ## Description
    - Prompt systeme pour la prospection automatique.
    - Le scenario cherche les restaurants dans Airtable,
    - genere un email de prospection personnalise via Claude,
    - l'envoie par Gmail, et met a jour le statut dans Airtable.
   
    - ## Fonctionnalites
    - - Recherche restaurants avec statut "a_prospecter"
      - - Generation email personnalise avec nom du restaurant
        - - Envoi via Gmail (iabot1019@gmail.com)
          - - Mise a jour du statut apres envoi
