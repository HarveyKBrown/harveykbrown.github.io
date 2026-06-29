---
title: "Gun Recoil Game"
description: "Unreleased VR arcade game using gun recoil as the locomotion system"
category: "unreleased"
platforms: ["VR"]
genre: ["Arcade", "Combat"]
role: "Lead Designer"
coverImage:
  src: "/images/projects/gunhands.png"
  alt: "Image showing the player flying through a dark tunnel, shooting to avoid and destroy upcoming obstacles"
video: "/videos/Harvey_GunHands_Recording_1.mp4"
order: 2
draft: false
highlight: true
---

I was handed this project at a point where the studio was experimenting with novel VR mechanics and looking for their next game to work on. I was assinged 2 designers and a programmer, and part time support of 3D artists, VFX and SFX designers.

The initial pitch for this game was; "use the recoil of guns to move around". An initial technical test featured a grabbable gun which when shot applied primative impulse forces to the default unreal character controller. I was given 2 weeks to turn this into a playable demo ready for an external focus group.

# Major Contributions

## Controls

The technical test had several issues: Movement felt uncontrollable, it was uncomfortable to shoot in a range of directions making forward momentum tricky, and looking down to avoid obstacles while falling was uncomfortable in a VR headset.

I flipped the game on its side. Rather than the player falling downwards, gravity would act in a forward direction. To contextualise this, I put the player in a wind-tunnel style map, with turbine obstacles providing both a fun dynamic obstacle to avoid as well as providing context to the setting. The player would be accellerated down this tube, removing the need to shoot backwards, and would only need to shoot latterally to move to avoid obstacles.

I built a bespoke character controller with custom physics calculations build to give the player substantially more control when shooting. Terminal velocity was reduced, latteral velocity was capped and various tricks where used to further hone in the feeling of the game. Guns recoil force was scaled on the dot product of the gun's forward vector, reducing unwanted sideways motion when shooting forward, and an additional "kick" impulse was added to the recoil impulse when shooting to move against momentum, resulting in snappier turning.

The complex grip system was removed, and the players hands where replaced with guns, both simplifying the game and strengthening its core theme.

## Gun Mechanics

I built a simple hittrace gun system, plugging in sounds and effects from artists and designers on the team. I added destructable obstacles which could be plugged into map objects either to create walls for the player to shoot through, or triggers to open doors to stop fast spinning fans.

## Level Design

I worked closely with the level design team to create a sense of cadence to each map section, using rhythm games and endless runners as reference. The map progresses through different regions, the difficulty stepping up with each one. Each region is built from sections that feature a core theme, pulling from a limited subset of obstacles and creating a learnable pattern for the player to navigate each zone.

Coordinating with the art team, I settled on a "PSX" style aesthetic. The rustic indstrial aesthetic felt appropriate for a game where you where being thrown uncontrollably down a brutally dangerous windtunel. In matching this style, I wrote a dither-fade post process shader which obscured the players vision of upcoming obstacles, increasing the tension and supporting the art direction.

![Dither fade post process shader obscuring upcoming obstacles](/images/projects/BlackHoleDither_2.gif)