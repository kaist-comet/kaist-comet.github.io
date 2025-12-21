---
layout: page
title: People
permalink: /people/
subtitle: Introduces members of the COMET Lab.
tags: menu
weight: 2
---

<!-- This page reads /_data/members.yml and automatically displays them. -->

The Computational Optimization Methods (COMET) Lab is a research group led by Dr. Changhyun Kwon in the Department of Industrial and Systems Engineering at KAIST.


**<ins>Core Cultural Values of COMET</ins>**

- **Diversity Fuels Innovation**: We embrace diverse perspectives, fostering an inclusive environment where creativity thrives.
- **Curiosity Knows No Bounds**: We celebrate curiosity as the driving force behind discovery and progress.
- **Nerdiness is Our Superpower**: A passion for learning and a love for intellectual exploration define who we are.
- **We Rise by Lifting Others**: Sharing knowledge, mentoring, and fostering a strong community are central to our mission and joy.
<!-- - **Mathematics is Our Language, Coding is Our Hammer**: We use mathematical rigor and computational tools as our foundation for problem-solving. -->

<!-- The COMET Lab is seeking new students to join the group; see [here](/join) for details. -->




* TOC
{:toc}




## Current Members

Introducing the current members of the COMET Lab.

{% for member in site.data.members.current %}
{% include member-card.html member=member %}
{% endfor %}

## Undergraduate Researchers
{% for ug in site.data.members.undergraduate %}
- [{{ ug.name }} ({{ ug.name_ko }})]({{ ug.linkedin }}), {{ ug.affiliation }}, {{ ug.period }}, Topic: {{ ug.topic }}
{% endfor %}


## Past Members

### KAIST
{% for alum in site.data.members.alumni.kaist %}
- [{{ alum.name }} ({{ alum.name_ko }})]({{ alum.linkedin }}), {{ alum.degree }} {{ alum.year }}, {{ alum.thesis }}{% if alum.website %} [(web)]({{ alum.website }}){% endif %}{% if alum.primary_advisor %} (primary advisor [{{ alum.primary_advisor }}]({{ alum.primary_advisor_url }})){% endif %}
{% endfor %}

### University of South Florida
{% for alum in site.data.members.alumni.usf %}
- [{{ alum.name }}]({{ alum.linkedin }}), {{ alum.degree }}, {{ alum.year }}, {{ alum.thesis }}{% if alum.website %} [(web)]({{ alum.website }}){% endif %}{% if alum.co_advisor %} (co-advisor [{{ alum.co_advisor }}]({{ alum.co_advisor_url }})){% endif %}
{% endfor %}

### University at Buffalo
{% for alum in site.data.members.alumni.buffalo %}
- [{{ alum.name }}]({{ alum.linkedin }}), {{ alum.degree }}, {{ alum.year }}, {{ alum.thesis }}{% if alum.website %} [(web)]({{ alum.website }}){% endif %}{% if alum.co_advisor %} (co-advisor [{{ alum.co_advisor }}]({{ alum.co_advisor_url }})){% endif %}
{% endfor %}

&nbsp;

<link rel="stylesheet" href="/css/people.css">
<script src="/lib/member-publications.js"></script>
