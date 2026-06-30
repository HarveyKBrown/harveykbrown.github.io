---
title: "Wreckin' Raccoon"
description: "VR physics sandbox with emergent interactive gameplay for Meta Quest. Designed and implemented interaction subsystems, state-based AI, and analytics infrastructure."
category: "commercial"
platforms: ["VR"]
genre: ["Physics Sandbox", "Emergent Gameplay"]
role: "Senior Game Designer (Technical)"
coverImage:
  src: "/images/projects/raccoon.png"
  alt: "First person view of the player as a raccoon, holding objects in their hand and causing chaos"
externalUrl: https://www.meta.com/en-gb/experiences/wreckin-raccoon/24256161264016457/
order: -1
draft: false
highlight: true
---

<div class="aspect-video overflow-hidden rounded">
  <iframe class="h-full w-full" src="https://www.youtube.com/embed/8_vIneFULaE" title="Wreckin' Raccoon launch trailer" allowfullscreen></iframe>
</div>

Wreckin' Raccoon is a VR physics sandbox for Meta Quest. Players take the role of a mischievous raccoon let loose in a roadside diner, free to cause as much chaos as possible through a world of complex, interconnected interactive objects, with dynamic NPCs including a pest control antagonist that responds emergently to player behaviour, attempting to chase them down when you cause too much mischeif.

I worked on this project from its inception as Senior Game Designer with a technical focus, contributing across interaction design, AI, analytics, and post-launch support.

# Contributions

## Interaction Design

I designed the emergent interaction subsystems that underpin the game's sandbox feel, and implemented dozens of individual interactive objects across the diner environment. The goal was to create an interactive "sandpit" filled with toys with interactions that combine in logically coherent and exciting ways. I started with an initial list of objects approved by the project directors and producer, and build out simple reusable components and interaction frameworks for each item. With each new interaction added, the objective was to make that interaction as effortlessly scalable across all future objects as possible. Having built out an initial list, I then worked with another designer to continue layering on more interactions and more objects using the implementation patterns that I had established.

<div class="not-prose mt-4 grid grid-cols-2 gap-3">
  <img src="/images/raccoon_gifs/Arcade_InsertCoin_1.gif" alt="Inserting a coin into the arcade machine" />
  <img src="/images/raccoon_gifs/Arcade_PanelSmash_1.gif" alt="Smashing the arcade machine control panel" />
  <img src="/images/raccoon_gifs/Shakeable_Confiment_1.gif" alt="Shaking a condiment bottle" />
  <img src="/images/raccoon_gifs/Squeezable_Condiment_1.gif" alt="Squeezing a condiment bottle" />
  <img src="/images/raccoon_gifs/CashRegister_Open_Close_1.gif" alt="Opening and closing the cash register" />
  <img src="/images/raccoon_gifs/Plate_Smash_1.gif" alt="Smashing a plate" />
  <img src="/images/raccoon_gifs/Drinks_Machine_1.gif" alt="Interacting with the drinks machine" />
  <img src="/images/raccoon_gifs/Jukebox_1.gif" alt="Playing the jukebox" />
  <img src="/images/raccoon_gifs/FireExtinguisher_1.gif" alt="Using the fire extinguisher" />
  <img src="/images/raccoon_gifs/HandDryer_1.gif" alt="Using the hand dryer" />
  <img src="/images/raccoon_gifs/SodaCan_Grenade_1.gif" alt="Throwing a soda can as a grenade" />
  <img src="/images/raccoon_gifs/WaterPour_VertexShader_1.gif" alt="Water pouring with vertex shader fluid simulation" />
  <img src="/images/raccoon_gifs/Water_Pour_2.gif" alt="Water pouring interaction" />
  <img src="/images/raccoon_gifs/Water_Pour_4.gif" alt="Water pouring interaction" />
</div>

## AI

I implemented a semi-emergent state-based AI architecture for the game's pest control antagonist, built using Unreal's Behaviour Tree system. Rather than scripting fixed responses, the system reads the state of the world and the player's behaviour to navigate a large list of complex reactions ranging from a basic patrol through the diner searching for the player, to chasing, losing their baton (if the player steals it), and maintaining a state model that keeps track of the players last known location to intelligently guard hidingspots and track them down.

## Analytics

Supporting the nDreams shared technology group, I created gameplay analytics dashboards and built out the underlying telemetry infrastructure the STG team would then use as a template for all future nDreams products.

## Post-Launch

I provided support across early access and the 1.0 launch, addressing player feedback and working through a tightly packed roadmap intended to maintain engagement during the first few months of the games launch. Updates rolled out weekly requiring a rigerous schedule of implementing, testing and shipping.
