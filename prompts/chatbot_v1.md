# Chatbot IA Restaurant - Prompt v1

## Version
- v1 - 2026-03-28 - Version initiale

## Scenario
- Make : [PROD] Chatbot IA Restaurant (ID: 4892590)
- Module : HTTP - Make a request (Claude API)

## Description
Prompt systeme du chatbot IA utilise pour les restaurants halal.
Le chatbot gere les commandes, repond aux questions sur le menu,
  et envoie les confirmations via Telegram.

  ## Prompt
  Le prompt est stocke dans le module HTTP du scenario Make
  qui appelle l'API Claude (api.anthropic.com/v1/messages).
  Il contient les instructions pour :
- Accueillir le client
- Presenter le menu du restaurant
- Prendre les commandes
- Gerer les modifications de commande
- Confirmer les commandes avec numero et temps de preparation
