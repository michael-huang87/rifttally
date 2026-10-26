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
- market prices from TCGplayer data (through TCGCSV) and Cardmarket, and from a static file host we run,
- card images from Riot Games' and TCGplayer's image servers,
- tournament decklists from OpenRift,
- currency exchange rates from Frankfurter.

These are plain downloads. The app sends no personal data, collection data, or device identifiers with them. As with any internet request, the server you download from sees your IP address.

## Features that use your own API keys

Two optional features send data to a third party. They only work after you add your own key, and only send data when you use them.

- **PSA cert lookup.** When you look up a graded card, the app sends the certificate number and your PSA token to PSA (api.psacard.com).
- **Deck chat.** When you ask a question about a deck, the app sends your question, the deck, your collection, and prices to Google Gemini or Anthropic Claude, whichever key you added, together with that key.

That data goes directly from your iPhone to the provider. We never see it. The provider's own terms and privacy policy govern what it does with the data, including whether it may use it to improve its models. Read them before you add a key. You can remove a key at any time in the app's Profile tab.

## Sharing you start

When you export a collection, share a deck, or create a deck registration PDF, the app hands the file or text to the iOS share sheet. Where it goes next is your choice.

## Children

{{ site.app_name }} is not directed at children under 13, and we do not knowingly collect data from anyone, including children.

## Changes

If this policy changes, we will update this page and the date at the top. If a change affects what data leaves your device, we will say so in the app's release notes.

## Contact

Questions about this policy: <a href="mailto:{{ site.contact_email }}">{{ site.contact_email }}</a>.
