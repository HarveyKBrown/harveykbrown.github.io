---
title: "After Inc: Revival"
description: "Post-apocalyptic settlement simulation & zombie survival"
category: "commercial"
platforms: ["PC", "Mobile"]
genre: ["Settlement", "Simulation", "Strategy"]
role: "Game Designer"
coverImage:
  src: "/images/projects/after_inc.jpg"
  alt: "After Inc: Revival cover image"
externalUrl: "https://store.steampowered.com/app/3337140/After_Inc_Revival/"
order: 1
draft: false
---

After Inc is a strategy simulation game where you take control of a group of settlers after a zombie apocalypse and begin to re-settle ravaged land. As you expand outwards, you discover that the zombies did not die, but are merely dormant, and must expand your settlement while fighting back a waking zombie force.

I was part of the initial design team that layed out the early vision for After Inc, and spent a year prototyping gameplay mechanics and using my experience with the Rebel Inc engine, worked to rebuild the core tech to support the new gameplay experience.

# Contributions

## Enemy AI

The enemy in After Inc is a complex horde-based decision making mass, driven by a core set of principles defined by the pop-culture idea of a zombie. I worked on a noise system that eminated outwards based on zone activity and would ripple outwards based on the players settlement building activities, creating a satisfying and self-balancing mechanic: To grow stronger the player must expand, but the more the player expands, the faster enemies awake.

In earlier prototypes I built systems to control horde sizes, balancing them against the players ability to grow their own units. Combat was design to take a long time, with units needing to recover health after lengthy combat, forcing players to carefully manage a limited pool of units in the face of simultanious attacks.

## Settlement Simulation

The beating heart of the game was the settlement system and the simulation of it. I built several prototypes, pushing for a version where population grew overtime and was assigned or consumed when performing specific tasks, such as scouting a zone (temporary) or constructing a builting (permanant). Increasing food production increased population, based on a trailing off curve as the players maximum population increased.

When the direction of the game changed towards using a simulated population of workers, my primary objective was to reduce the population micromanagement seen in most other games of this genre. In an effort to avoid manual priority assignment, I created a baseline income system that protected the player from the common "doom spirals" of simulated missmanagement as the resource demands of their colony grew, while creating a load balancing auto-prority manager that paired responsiveness to players controls with a need to balance the agent work output even when the population underwent sudden shifts.

## Tech Tree

Working from previous projects, I built tooling inside Google Sheets (Excel) to automate the authoring and management of key gameplay data, working with the tech team to automate the importing of this data into the game with a single button press, and enabling the design team to use the huge array of formulas and tools of spreadsheet software without the need to build bespoke tooling.

## Dynamic Objectives

One of my main objectives heading into this project was to solve many issues its precessor had with onboarding new users. I built a dynamic objective system using a series of nested priority queues which sampled the gamestate and updated based on conditional fields.

This system provided players with a short list of subgoals to work towards should they ever be unsure what to do next, and naturally updated as the player progressed through various stages of the game, even if they chose to partially or fully ignore the system and dealing seamlessly with the open-ended nature of the game's simulation.
