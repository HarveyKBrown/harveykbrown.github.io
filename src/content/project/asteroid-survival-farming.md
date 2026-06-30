---
title: "Asteroid Farming Game"
description: "Unreleased VR farming, survival, and base-building live service game"
category: "unreleased"
platforms: ["VR"]
genre: ["Farming", "Survival", "Base Building", "Live Service", "Combat"]
role: "Systems Designer"
coverImage:
  src: "/images/projects/space_trader.png"
  alt: "Asteroid Farming Game cover image"
order: 4
draft: false
---

This was a highly ambitious and first of its kind game aiming to mix cozy farming and base building with a subloop of survival and resource management all as a server-driven live service title in VR.

I joined this project at the tail end of post production, and was given the mandate to design the economy from scratch, as the sole systems designer on the project.

During development there where several key pivots. The economy was redesigned multiple times to support free-to-play, freemium and premium monetization models. The project was ultimately scrapped after 3 years of development.

# Contributions

## Economy

As sole systems designer on the project, I worked quickly to expand ideation into a wide range of potential genre directions, and worked with the design director to settle on a theme where players acted like wholesale food producers. The player would buy seeds, cultivate plants and process ingredients in an effort to complete missions which would reward them money and progression. The player lived inside a biodome on a remote asteroid, and would be able to bring friends with them to explore the hazardous outside world, gathering resources to expand their dome and scale up their farming operations.

## Economy Simulation

I build custom equations within Excel to automatically author and check the techtree based on an externally tracked plan in confluence. This excel document contained 30+ tables containing every peice of data in the game such that it could all be uploaded to the live server, where every action taken was tracked as a linked chain of transactions on the server as a way of cheat prevention.

I build an economy simulation tool in Godot that injested, checked and simulated the gameplay data, catching any bugs and enabling rapid evaluation of swaths of data even while core gameplay systems where still awaiting implementation. Using this tool, the director was able to provide critical early feedback on many gameplay mechanics and make changes to the plan before implementation had even started, saving time on an especially tight schedule.

## Documentation & Coordination

I maintained a design bible meticulously outlining the economy plans, uncluding UML breakdowns of core economy algorithms and system archetecture for the server team, high level design documents to communicate the gameplay intentions to the team, and production lists to help the production team track requirements for internal and outsourced work.

I participated in and ran "event storming" sessions breaking down game features into server events and API calls, ensuring absolute clarity of design with the backend team. This was essential, as the backend team was very small, building a live service backend from scratch and needed to get the implementation right on the first pass or risk running out of time.