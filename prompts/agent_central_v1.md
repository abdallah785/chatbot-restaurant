# Agent Central - Prompt v1

## Version
- v1 - 2026-03-28 - Version initiale

- ## Scenario
- - Make : [PROD] Agent Central (ID: 4971621)
  - - Module : HTTP - Make a request (Claude API)
   
    - ## Description
    - Prompt systeme de l'Agent Central IAbot.
    - L'agent gere les commandes admin via Telegram :
    - - Gestion des restaurants (ajout, modification, statut)
      - - Lecture et modification du code GitHub (branche dev)
        - - Envoi d'emails via Gmail
          - - Gestion Airtable (CRUD restaurants)
            - - Commande "deploie" pour merger dev vers main
             
              - ## Architecture PROD/DEV
              - - Travaille sur la branche dev par defaut
                - - GET GitHub : ?ref=dev
                  - - PUT GitHub : "branch": "dev" dans le body
                    - - Commande "deploie" : merge dev -> main via GitHub API
