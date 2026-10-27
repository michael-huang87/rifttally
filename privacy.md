---
layout: default
title: Privacy Policy
permalink: /privacy.html
---
# Privacy Policy

<p class="updated">Last updated: {{ site.policy_date }}</p>

{{ site.app_name }} is an unofficial, fan-made iPhone app for tracking a Riftbound card collection. This policy explains what the app does with your data. The short version: your data stays on your device, and we do not collect it.

## What we collect

Nothing. {{ site.app_name }} has no accounts, no sign-in, no analytics, no advertising, and no tracking. We do not run a server that receives your collection, decks, scans, or usage. We do not sell or share personal data, because we never receive any.

## Data stored on your device

Your collection, decks, lists, match logs, graded cards, scan history, and chat history are saved in the app's storage on your iPhone. iOS may include this storage in your device backups, under your own backup settings.

API keys and tokens you enter (for PSA, Google Gemini, or Anthropic) are saved in the iOS Keychain and set to stay on this device: they do not move to a new iPhone. Each one is only sent to the service it belongs to.

Deleting the app deletes this data. Deleting a profile in the app deletes that profile's data.

## Optional iCloud sync

A future version may offer iCloud sync so your collection follows you between your devices. It will be off unless you turn it on. When it is on, your data is stored in your own private iCloud account through Apple, under Apple's privacy policy. We cannot read it.

## Camera

The app uses the camera to scan cards. Card recognition runs on your iPhone. Camera images are not saved or sent anywhere.

## Card and price data the app downloads

To show cards, images, and prices, the app downloads public data:

- the card list from Riftcodex,
- market prices from TCGplayer data (through TCGCSV) and Cardmarket,
- card images from Riot Games' and TCGplayer's image servers,
- tournament decklists from OpenRift,
- currency exchange rates from Frankfurter.

These are plain downloads. The app sends no personal data, collection data, or device identifiers with them. As with any internet request, the server you download from sees your IP address.

Once we have access to Riot Games' official API, the app will also download card data and assets from Riot. Those downloads will follow the same rule and carry no personal data.

## Purchases

If we add paid features or subscriptions, Apple handles the purchase through the App Store. We never receive your payment details. The app only learns from Apple whether a purchase is active on your Apple account.

## Event search

If you search for Riftbound events near you, the app looks up the zip code you type with Apple Maps to get its approximate coordinates, then sends those coordinates and a search radius to Riot Games' event site (events.playriftbound.com). The app does not use your device's location.

## Features that use your own API keys

Two optional features send data to a third party. They only work after you add your own key, and only send data when you use them.

### PSA cert lookup

When you look up a graded card, or the app refreshes population numbers for your PSA slabs, it sends the certificate number and your PSA token to PSA (api.psacard.com).

### Deck chat

Deck chat is optional. It is off until you add your own Google Gemini or Anthropic API key in the Profile tab, and it only sends data when you ask a question.

When you ask a question, the app sends this to Google Gemini or Anthropic, whichever key you added:

- your question and the earlier messages in that chat,
- the deck: its name, its cards and counts, and current deck rule problems,
- card text from the card list, such as names, types, and rules text,
- how many copies of each card you own, for cards the chat looks up, including the cards in your collection when it asks for them,
- tournament decklists from OpenRift, when the chat looks at top lists,
- your API key, which goes only to that provider.

The chat does not send prices, deck value, or cost to finish. Those stay in the app.

This data goes directly from your iPhone to the provider. RiftTally servers do not receive it, and we never see it. The provider handles it under its own terms and privacy policy, including whether it may use it to improve its models. Read them before you add a key. Your chats are saved on your iPhone. You can remove a key at any time in the Profile tab.

## Sharing you start

When you export a collection, share a deck, or create a deck registration PDF, the app hands the file or text to the iOS share sheet. Where it goes next is your choice.

## Children

{{ site.app_name }} is not directed at children under 13, and we do not knowingly collect data from anyone, including children.

## Changes

If this policy changes, we will update this page and the date at the top. If a change affects what data leaves your device, we will say so in the app's release notes.

## Contact

Questions about this policy: <a href="mailto:{{ site.privacy_email }}">{{ site.privacy_email }}</a>.
